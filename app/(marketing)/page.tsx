import { AnimatedGradientTextDemo } from "@/components/AnimationComponents/AnimatedGradientTextDemo";
import CallToAction from "@/components/HomePageComponents/CallToAction";
import Marketing from "@/components/HomePageComponents/Marketing";
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
import { Tools } from "@/components/AnimationComponents/Tools";
import { BeamsWithCollision } from "@/components/AnimationComponents/BeamsWithCollision";
import { FlipWordsDemo } from "@/components/AnimationComponents/FlipWordsDemo";

export default async function Page() {
  return (
    <>
      <AnimatedGradientTextDemo />
      {/* <SplineHero /> */}
      <HeroSection />
      <HomeFeatures />  
      <ClientSection />
      <SphereMask />
      <Tools />
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
