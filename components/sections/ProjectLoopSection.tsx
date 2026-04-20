import { projectsData } from "@/lib/data/projectsData";
import Image, { StaticImageData } from "next/image";

const ProjectLoopSection = () => {
  return (
    <section className="overflow-x-hidden pt-24 sm:pt-36 lg:pt-44">
      <div className="py-4">
        <div className="project-loop flex overflow-x-auto">
          <div className="project-loop-container flex items-center justify-center gap-4">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="aspect-video min-h-[200px] sm:min-h-[300px] xl:min-h-[409px] w-auto"
              >
                <Image
                  src={project.coverImage}
                  alt="project image"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div
            aria-hidden
            className="project-loop-container flex items-center justify-center gap-4"
          >
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="aspect-video min-h-[200px] sm:min-h-[300px] xl:min-h-[409px] w-auto"
              >
                <Image
                  src={project.coverImage}
                  alt="project image"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectLoopSection;
