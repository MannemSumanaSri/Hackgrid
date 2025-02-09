"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
}

export const CourseEnrollButton = ({
  price,
  courseId,
}: CourseEnrollButtonProps) => {


  const { user } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onClick = async () => {
    try {
      setIsLoading(true);

      const { data } = await axios.post(`/api/courses/${courseId}/checkout`, {
        amount: price, // Amount in paise
        currency: "INR",
        courseId,
      });

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!, // Replace with your Razorpay API key
        amount: data.amount,
        currency: data.currency,
        name: "Hackgrid",
        description: "Course Enrollment",
        image: "/logo.png", // Replace with your logo path
        order_id: data.id, // Razorpay order ID from the backend
        handler: async (response: any) => {
          // Verify the payment on the backend
          await axios.post(`/api/courses/${courseId}/payment/verify`, {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            course_id: courseId,
          });
          router.refresh();
          toast.success("Payment successful! You are now enrolled.");
        },
        prefill: {
          name: user?.fullName ?? user?.emailAddresses[0].emailAddress.split("@")[0], // Replace with user details
          email: user?.emailAddresses[0], // Replace with user email
        },
        theme: {
          color: "#f59e0b", // Customize as needed
        },
      };
      if (typeof window !== 'undefined') {
        const razorpay = new (window as any).Razorpay(options);
        razorpay.open();
        razorpay.on('payment.failed', function () {
          razorpay.close();
          return toast.error("Payment failed. Please try again.");
        });
      };
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      size="sm"
      className="w-full md:w-auto"
    >
      Enroll for {formatPrice(price)}
    </Button>
  );
};
