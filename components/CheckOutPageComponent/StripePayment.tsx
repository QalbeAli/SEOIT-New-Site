"use client";

import CheckoutPage from "@/components/CheckOutPageComponent/CheckOutPage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { motion } from "framer-motion";
import { useState } from "react";
import { Loader } from "lucide-react";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home({ plan, price }: { plan: string; price: number }) {
  const amount = convertToSubcurrency(price);
  const [loading, setLoading] = useState(false);

  const handlePaymentLoading = (isLoading: boolean) => {
    setLoading(isLoading);
  };

  return (
    <motion.main
      className="max-w-6xl my-60 mx-auto p-10 text-white text-center border rounded-md bg-gradient-to-tr from-blue-500 to-purple-500"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">SEOIT</h1>
        <h2 className="text-3xl">
          has requested
          <span className="font-bold"> ${price}</span>
        </h2>
      </motion.div>

      {loading && (
        <motion.div
          className="flex justify-center items-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Loader className="h-12 w-12 animate-spin text-white" />
        </motion.div>
      )}

      {amount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: amount,
              currency: "usd",
            }}
          >
            <CheckoutPage amount={price} onLoadingChange={handlePaymentLoading} />
          </Elements>
        </motion.div>
      )}
    </motion.main>
  );
}
