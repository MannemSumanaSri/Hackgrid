import crypto from "crypto";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export const POST = async (request: Request) => {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new Response("Error: Unauthorized", { status: 401 });
    }
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      course_id,
    } = await request.json();
    if (
      !verifyCustomSignature(
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        process.env.RAZORPAY_KEY_SECRET as string
      )
    ) {
      return new Response("Error: Payment verification failed.", { status: 400 });
    }
    const purchase = await db.purchase.create({
      data: {
        userId: userId,
        courseId: course_id,
      },
    });
    return new Response(JSON.stringify(purchase), { status: 200 });
  } catch (error: any) {
    console.error("Error: ", error);
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
};

function hmac_sha256(data: any, key: string) {
  const hmac = crypto.createHmac("sha256", key);
  hmac.update(data);
  return hmac.digest("hex");
}

function verifyCustomSignature(
  orderId: string,
  razorpayPaymentId: string,
  signature: string,
  secret: string
) {
  const generatedSignature = hmac_sha256(
    `${orderId}|${razorpayPaymentId}`,
    secret
  );
  return generatedSignature === signature;
}
