"use client";
import React, { useEffect, useState } from "react";
import StripePayment from "@/components/CheckOutPageComponent/StripePayment";
import { useSearchParams } from "next/navigation";
import SuspenseBoundary from "@/components/CheckOutPageComponent/SuspenseBoundary";

function CheckOut() {
  return (
    <SuspenseBoundary>
      <CheckOutContent />
    </SuspenseBoundary>
  );
}

function CheckOutContent() {
  const [plan, setPlan] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const queryParams = useSearchParams();

  useEffect(() => {
    const plan = queryParams.get("plan");
    const price = queryParams.get("price");

    if (plan) setPlan(plan);
    if (price) {
      const numericPrice = Number(price);
      if (numericPrice > 0) setPrice(numericPrice);
      else setPrice(0); // Or handle invalid price as needed
    }
  }, [queryParams]);

  return <div>{price > 0 && <StripePayment plan={plan} price={price} />}</div>;
}

export default CheckOut;
