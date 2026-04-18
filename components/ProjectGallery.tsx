"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap, useGSAP } from "../lib/gsap/gsapConfig";
import { projectsData } from "@/lib/data/projectsData";

const ProjectGallery = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  const containerRef = useRef<HTMLElement>(null);
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={containerRef} className="relative cursor-default">
      <div className="container">
        <div className="flex flex-col">
          {projectsData.slice(0, 4).map((project, index) => (
            <Link
              key={project.id}
              href={project.link}
              onMouseEnter={() => setModal({ active: true, index })}
              onMouseLeave={() => setModal({ active: false, index })}
              className="border-t last:border-y border-dashed border-border py-10 group"
            >
              <div className="flex items-center justify-between gap-6 px-6 transition-transform duration-300">
                <h5 className="text-foreground text-6xl xl:text-7xl group-hover:-translate-x-3 group-hover:text-muted transition-all duration-300 ease-in-out">
                  {project.title}
                </h5>
                <p className="text-xl text-foreground group-hover:translate-x-3 group-hover:text-muted transition-all duration-300 ease-in-out">
                  {project.role}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="w-fit pt-10">
          <Link
            href="/"
            className="flex items-center justify-center bg-background px-5 md:px-7 py-2 md:py-4 rounded-full border border-dashed border-border text-foreground/60 max-[510px]:w-full"
          >
            More Work
          </Link>
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
