// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import { razorpayInstance } from "@/lib/razorpay";

export async function POST(req: Request) {
  try {
    const { amount, currency, receipt } = await req.json();

    const order = await razorpayInstance.orders.create({
      amount: amount * 100, // Razorpay expects the amount in paise
      currency: currency || "INR",
      receipt,
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("Razorpay Order Error:", error);
    return NextResponse.json(
      { message: "Failed to create order" },
      { status: 500 }
    );
  }
}
