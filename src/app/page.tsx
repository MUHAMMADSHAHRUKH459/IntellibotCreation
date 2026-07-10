import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import TechStack from "@/components/home/TechStack";
import Process from "@/components/home/Process";
// import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProjects from "@/components/home/FeaturedProjects";
// import Testimonials from "@/components/home/Testimonials";
import Stats from "@/components/home/Stats";
// import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <TechStack />
      <Process />
      {/* <WhyChooseUs /> */}
      <FeaturedProjects />
      {/* <Testimonials /> */}
      <Stats />
      {/* <FAQ /> */}
      <FinalCTA />
    </>
  );
}