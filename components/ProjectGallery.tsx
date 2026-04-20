"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap/gsapConfig";
import { projectsData } from "@/lib/data/projectsData";

const ProjectGallery = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const containerRef = useRef<HTMLElement>(null);
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.set([modalContainer.current, cursor.current], {
        xPercent: -50,
        yPercent: -50,
        scale: 0,
      });

      const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
        duration: 0.8,
        ease: "power3",
      });
      const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
        duration: 0.8,
        ease: "power3",
      });

      const xMoveCursor = gsap.quickTo(cursor.current, "left", {
        duration: 0.5,
        ease: "power3",
      });
      const yMoveCursor = gsap.quickTo(cursor.current, "top", {
        duration: 0.5,
        ease: "power3",
      });

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        xMoveContainer(clientX);
        yMoveContainer(clientY);
        xMoveCursor(clientX);
        yMoveCursor(clientY);
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      const elements = [modalContainer.current, cursor.current];

      if (modal.active) {
        gsap.to(elements, {
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
        });
      } else {
        gsap.to(elements, {
          scale: 0,
          duration: 0.4,
          ease: "power3.inOut",
        });
      }
    },
    { dependencies: [modal.active], scope: containerRef },
  );

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    setModal({ active: true, index });
    const bg = bgRefs.current[index];
    if (!bg) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const relY = e.clientY - rect.top;
    const entersTop = relY < rect.height / 2;

    gsap.set(bg, { transformOrigin: entersTop ? "top" : "bottom" });
    gsap.to(bg, {
      scaleY: 1,
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    setModal({ active: false, index });
    const bg = bgRefs.current[index];
    if (!bg) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const relY = e.clientY - rect.top;
    const leavesTop = relY < rect.height / 2;

    gsap.set(bg, { transformOrigin: leavesTop ? "top" : "bottom" });
    gsap.to(bg, {
      scaleY: 0,
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative cursor-default max-lg:hidden"
    >
      <div className="">
        <div className="flex flex-col">
          {projectsData.slice(0, 4).map((project, index) => (
            <Link
              key={project.id}
              href={project.link}
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              onMouseLeave={(e) => handleMouseLeave(e, index)}
              className="group relative"
            >
              <div className="container relative z-10">
                <div className="flex items-center justify-between gap-6 w-full py-10 border-t border-border group-hover:border-transparent transition-opacity duration-300 ease-in-out">
                  <div className="flex items-end gap-36 group-hover:-translate-x-3 transition-transform duration-300 ease-in-out">
                    <span className="text-muted text-base pb-2">
                      00{project.id}
                    </span>
                    <h5 className="text-foreground text-6xl xl:text-7xl group-hover:text-background transition-colors duration-300 ease-in-out leading-none">
                      {project.title}
                    </h5>
                  </div>
                  <p className="text-lg text-foreground group-hover:translate-x-3 group-hover:text-background transition-all duration-300 ease-in-out">
                    {project.role}
                  </p>
                </div>
              </div>
              <div
                ref={(el) => {
                  bgRefs.current[index] = el;
                }}
                className="absolute top-0 left-0 w-full h-full bg-accent scale-y-0"
              ></div>
            </Link>
          ))}
        </div>
      </div>

      <div
        ref={modalContainer}
        className="fixed size-[400px] overflow-hidden pointer-events-none flex items-center justify-center z-50 shadow-2xl"
      >
        <div
          className="absolute w-full h-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ top: `${modal.index * -100}%` }}
        >
          {projectsData.slice(0, 4).map((project) => (
            <div
              key={`modal_${project.id}`}
              className="h-full w-full flex items-center justify-center bg-border"
            >
              <Image
                src={project.hoverImage}
                width={300}
                height={300}
                alt={`${project.title} preview`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        ref={cursor}
        className="fixed w-20 h-20 rounded-full bg-primary pointer-events-none z-[51] flex items-center justify-center"
      />
    </section>
  );
};

export default ProjectGallery;
