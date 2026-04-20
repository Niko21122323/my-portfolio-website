import { projectsData } from "@/lib/data/projectsData";
import Image from "next/image";

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
      </div>
    </section>
  );
};

export default ProjectGrid;
