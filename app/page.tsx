import ProjectGallery from "@/components/ProjectGallery";
import ProjectGrid from "@/components/ProjectGrid";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectGallery />
      <div className="lg:hidden">
        <ProjectGrid />
      </div>

      <section className="h-[300dvh]"></section>
    </main>
  );
}
