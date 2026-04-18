import ProjectGallery from "@/components/ProjectGallery";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectGallery />
      <section className="h-[300dvh]"></section>
    </main>
  );
}
