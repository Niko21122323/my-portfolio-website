import Link from "next/link";
import ProjectGallery from "../ProjectGallery";
import ProjectGrid from "../ProjectGrid";

const ProjectsSection = () => {
  return (
    <div>
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-10 pt-24 sm:pt-44">
          <h4 className="text-foreground text-3xl font-semibold">
            Selected Work
          </h4>
          <Link
            href="/"
            className="flex items-center justify-center bg-background px-5 md:px-7 py-2 md:py-4 rounded-full border border-border text-foreground/60 max-[510px]:w-full max-sm:hidden"
          >
            More of my projects
          </Link>
        </div>
      </div>
      <ProjectGallery />
      <div className="flex flex-col lg:hidden">
        <ProjectGrid />
      </div>
    </div>
  );
};

export default ProjectsSection;
