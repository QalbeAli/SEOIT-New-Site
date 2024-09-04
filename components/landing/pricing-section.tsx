"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Beam from "@/components/beam";
import StyledSwitch from "../StyledSwitch";

type Interval = "month" | "year";

export const toHumanPrice = (price: number, decimals: number = 2) => {
  return price.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const demoPrices = [
  {
    id: "price_1",
    name: "Platinum",
    description:
      "A plan for industry leaders seeking unparalleled growth strategies.",
    features: [
      "Personalized growth strategy sessions",
      "Unlimited custom AI-powered analytics and insights",
      "Advanced SEO and SEM campaign management",
      "Bespoke web and app development services",
      "Custom-tailored social media and branding campaigns",
      "Priority access to beta tools and features",
      "Comprehensive monthly reporting and data-driven recommendations",
      "Regular A/B testing and optimization across all platforms",
      "Full integration with your existing tech stack",
    ],
    monthlyPrice: 10000,
    yearlyPrice: 120000,
    isMostPopular: false,
  },
  {
    id: "price_2",
    name: "Diamond",
    description:
      "The ultimate plan for enterprises demanding the highest level of service and results.",
    features: [
      "Everything in the Platinum Plan",
      "In-person quarterly strategy workshops",
      "Full-service digital transformation consulting",
      "Custom AI development tailored to your business needs",
      "On-site support for major campaigns and product launches",
      "Access to our VIP client network for exclusive partnership opportunities",
      "White-glove onboarding and training for your entire team",
      "Dedicated project management team for all ongoing initiatives",
      "Guaranteed priority access to new technologies and features before public release",
      "Custom-built analytics dashboards and reporting tools",
    ],
    monthlyPrice: 20000,
    yearlyPrice: 240000,
    isMostPopular: true,
  },
  {
    id: "price_5",
    name: "Titanium Plan",
    description:
      "For enterprises and high-net-worth individuals looking for the most elite service available.",
    features: [
      "Everything in the Diamond Plan",
      "1-on-1 executive strategy sessions with our founders ",
      "Dedicated account manager with 24/7 support",
      "Unlimited access to all SEO iT Social proprietary tools and technologies",
      "Global market entry strategy consulting",
      "VIP event invitations and industry networking opportunities",
      "Exclusive market research reports and insights",
      "Full-stack development support for enterprise-level projects",
      "Advanced data security and compliance measures",
      "Customized automation solutions to streamline your operations",
      "Direct line to our top-tier experts for instant advice and support",
      "First access to all innovations, products, and services",
    ],
    monthlyPrice: 45000,
    yearlyPrice: 540000,
    isMostPopular: false,
  },
  {
    id: "price_6",
    name: "Custom Enterprise Solutions Plan",
    description:
      "Tailored for enterprises with a minimum of $5M+ in annual revenue, offering bespoke solutions for sustained growth.",
    features: [
      "Completely custom-tailored growth strategies designed around your unique business needs",
      "Dedicated senior-level consultants and a specialized team assigned exclusively to your account",
      "Unlimited access to our full suite of services, tools, and technologies",
      "Bespoke development and implementation of AI, automation, and analytics platforms",
      "Global market expansion and brand positioning strategies",
      "24/7 white-glove support with on-demand in-person consulting and project management",
      "Executive-level workshops, training, and strategy sessions tailored to your leadership team",
      "Customized reporting, analytics, and data visualization tools built specifically for your business",
      "Exclusive partnership opportunities and introductions within our VIP client network",
      "Continuous innovation with direct input into product development tailored for your needs",
    ],
    monthlyPrice: 83333,
    yearlyPrice: 1000000,
    isMostPopular: false,
  },
];

export default function PricingSection() {
  const [interval, setInterval] = useState<Interval>("month");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string | null>(null);

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    if (selectedPlan && selectedPrice > 0) {
      router.push(`/checkout?plan=${selectedPlan}&price=${selectedPrice}`);
    } else if (selectedPrice <= 0 && selectedPlan) {
      console.error("Invalid price. Please refresh the page and try again.");
    }
  }, [selectedPlan, selectedPrice, router]);

  const onSubscribeClick = async (priceId: string, price: number) => {
    setIsLoading(true);
    setId(priceId);

    // Simulate a delay for demonstration purposes
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Set the selected plan and price, which will trigger the useEffect to navigate
    setSelectedPlan(priceId);
    setSelectedPrice(price);

    setIsLoading(false);
  };

  const handleCheckedChange = (checked:any) => {
    setInterval(checked ? "year" : "month");
  };

  return (
    <section id="pricing" className="my-20">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-bold py-10 tracking-tight text-black dark:text-white sm:text-6xl">
            Exclusive Pricing for Elite Growth Services
          </h2>

          <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
            Choose a tailored plan designed to drive exponential growth and
            deliver exceptional value.
          </p>
        </div>

        <div className="flex w-full items-center justify-center space-x-2">
          <div className="checkbox-wrapper-5">
            <div className="check">
              <input  id="check-5" type="checkbox" onChange={(e) => handleCheckedChange(e.target.checked)}  />
              <label htmlFor="check-5"></label>
            </div>
          </div>
          {/* <Switch
            id="interval"
            onCheckedChange={(checked) => {
              setInterval(checked ? "year" : "month");
            }}
          /> */}
          <span>Annual</span>
          <span className="inline-block whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-white dark:text-black">
            2 MONTHS FREE ✨
          </span>
        </div>
        <div className=" mx-auto grid w-full justify-center sm:grid-cols-2 lg:grid-cols-4 flex-col gap-4">
          {demoPrices.map((price, idx) => (
            <>
              <div
                key={price.id}
                className={cn(
                  "relative flex max-w-[400px] flex-col gap-8 rounded-2xl border p-4 text-black dark:text-white overflow-hidden",
                  {
                    "border-2 border-[var(--color-four)] dark:border-[var(--color-four)]":
                      price.isMostPopular,
                  }
                )}
              >
                <Beam showBeam className="top-0 absolute" />
                <div className="flex items-center">
                  <div className="ml-4">
                    <h2 className="text-base font-semibold leading-7">
                      {price.name}
                    </h2>
                    <p className="h-12 text-sm leading-5 text-black/70 dark:text-white">
                      {price.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  key={`${price.id}-${interval}`}
                  initial="initial"
                  animate="animate"
                  variants={{
                    initial: {
                      opacity: 0,
                      y: 12,
                    },
                    animate: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + idx * 0.05,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="flex flex-row gap-1"
                >
                  <span className="text-3xl font-bold text-black dark:text-white">
                    {price.id === "price_6" ? (
                      "Custom Price"
                    ) : (
                      <>
                        $
                        {interval === "year"
                          ? toHumanPrice(price.yearlyPrice, 0)
                          : toHumanPrice(price.monthlyPrice, 0)}
                      </>
                    )}
                    <span className="text-xs"> / {interval}</span>
                  </span>
                </motion.div>

                <Button
                  className={cn(
                    "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                    "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                  )}
                  disabled={isLoading}
                  onClick={() =>
                    void onSubscribeClick(
                      price.id,
                      interval === "year"
                        ? price.yearlyPrice
                        : price.monthlyPrice
                    )
                  }
                >
                  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
                  {(!isLoading || (isLoading && id !== price.id)) && (
                    <p>Subscribe</p>
                  )}

                  {isLoading && id === price.id && <p>Subscribing</p>}
                  {isLoading && id === price.id && (
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                  )}
                </Button>

                <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
                {price.features && price.features.length > 0 && (
                  <ul className="flex flex-col gap-2 font-normal">
                    {price.features.map((feature: any, idx: any) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-xs font-medium text-black dark:text-white"
                      >
                        <CheckIcon className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white" />
                        <span className="flex">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
