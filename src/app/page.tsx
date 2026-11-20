import Hero from "@/components/home/Hero";
import BusinessProblems from "@/components/home/BusinessProblems";
import ServicesPreview from "@/components/home/ServicesPreview";
import Process from "@/components/home/Process";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessProblems />
      <ServicesPreview />
      <Process />
      <FeaturedProjects />
      <FinalCTA />
    </>
  );
}