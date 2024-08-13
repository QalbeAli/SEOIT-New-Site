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

export default async function Page() {
  return (
    <>
      <HeroSection />
      <ClientSection />
      <SphereMask />
      <Brand />
      <MarketingSection />
      <MarketingService />
      <Competition />
      <LeadGeneration />
      <PerformanceStats />
      <Marketing /> 
      <CallToAction />
      <ProjectCardsCarousel />
      <InTouch />
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
