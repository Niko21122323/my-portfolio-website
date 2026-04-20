import { projectsData } from "@/lib/data/projectsData";
import Image from "next/image";
import Link from "next/link";

const ProjectGrid = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          {projectsData.map((project) => (
            <div key={project.id} className="flex flex-col">
              <div className="aspect-video">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} image`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-4 pt-3">
                <h4 className="text-foreground text-lg font-medium">
                  {project.title}
                </h4>
                <p className="text-foreground/60 text-[12px] font-light">
                  {project.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full sm:w-fit pt-16 sm:hidden">
          <Link
            href="/"
            className="flex items-center justify-center bg-background px-5 md:px-7 py-2 md:py-4 rounded-full border border-border text-foreground/60 max-[510px]:w-full"
          >
            More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
