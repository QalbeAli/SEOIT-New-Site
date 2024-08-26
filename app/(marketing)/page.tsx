import { AnimatedGradientTextDemo } from "@/components/AnimationComponents/AnimatedGradientTextDemo";
import { BentoDemo } from "@/components/AnimationComponents/BentoDemo";
import Circle from "@/components/AnimationComponents/Circle";
import FolderIcon from "@/components/ProjectPageComponents/Awards";
import ImageWithLoader from "@/components/AnimationComponents/ImageWithLoader";
import { InfiniteMovingCardsDemo } from "@/components/AnimationComponents/InfiniteMovingCardsDemo";
import { TabsDemo } from "@/components/AnimationComponents/TabsDemo";
import Brand from "@/components/HomePageComponents/Brand";
import CallToAction from "@/components/HomePageComponents/CallToAction";
import Competition from "@/components/HomePageComponents/Competition";
import InTouch from "@/components/HomePageComponents/InTouch";
import LeadGeneration from "@/components/HomePageComponents/LeadGeneration";
import Marketing from "@/components/HomePageComponents/Marketing";
import MarketingSection from "@/components/HomePageComponents/MarketingSection";
import MarketingService from "@/components/HomePageComponents/MarketingService";
import PerformanceStats from "@/components/HomePageComponents/PerformanceStats";
import { ProjectCardsCarousel } from "@/components/HomePageComponents/ProjectCardsCarousel";
import Testimonials from "@/components/HomePageComponents/Testimonials";
import ClientSection from "@/components/landing/client-section";
import CallToActionSection from "@/components/landing/cta-section";
import HeroSection from "@/components/landing/hero-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";
import SplineHero from "@/components/SplineComponents/SplineHero";
import { HomeFeatures } from "@/components/HomePageComponents/HomeFeatures";

export default async function Page() {
  return (
    <>
      <AnimatedGradientTextDemo />
      <SplineHero />
      <HeroSection />
      <HomeFeatures />
      <ClientSection />
      <SphereMask />
      <BentoDemo />
      <TabsDemo />
      <PerformanceStats />
      <Marketing />
      <CallToAction />
      <ProjectCardsCarousel />
      <Testimonials />
      <CallToActionSection />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
