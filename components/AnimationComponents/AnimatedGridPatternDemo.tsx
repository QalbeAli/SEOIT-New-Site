import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

export function AnimatedGridPatternDemo() {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 md:shadow-xl">
      <section className=" py-12 md:py-24">
          <div className="container mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-medium text-white">
              Let&apos;s get in touch
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold text-white my-4">
              Ready to get started?
            </h1>
            <p className="text-white text-lg md:text-xl my-4">
              Get in touch to grow your business and increase sales.
            </p>
            <p className="text-white mb-8">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!
            </p>
            <button className="bg-[#d6fc5b] text-black font-medium px-6 py-3 rounded-full hover:bg-orange-200">
              Get Started
            </button>
          </div>
        </section>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
