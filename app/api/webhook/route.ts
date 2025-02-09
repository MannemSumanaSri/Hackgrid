// app/api/webhook/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET!;
  const signature = req.headers.get("x-razorpay-signature")!;
  const body = await req.text();

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  if (expectedSignature !== signature) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 400 });
  }

  const event = JSON.parse(body);
  console.log("Webhook Event:", event);

  return NextResponse.json({ message: "Webhook received" }, { status: 200 });
}
