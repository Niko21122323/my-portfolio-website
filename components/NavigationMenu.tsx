"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "../lib/gsap/gsapConfig";
import { navigationLinks, socials } from "@/lib/data/linksData";

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const container = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonContainer = useRef<HTMLDivElement>(null);
  const topLine = useRef<HTMLSpanElement>(null);
  const bottomLine = useRef<HTMLSpanElement>(null);

  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 400;
      setIsScrolled(scrolled);
      if (!scrolled) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useGSAP(
    () => {
      if (isScrolled) {
        gsap.fromTo(
          buttonContainer.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
        );
      } else {
        gsap.fromTo(
          buttonContainer.current,
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
        );
      }
    },
    { dependencies: [isScrolled] },
  );

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const isMobile = window.innerWidth < 640;
      const expandedWidth = isMobile ? window.innerWidth - 32 : 480;

      if (isOpen) {
        gsap.set(menuRef.current, { opacity: 1 });

        tl.to(
          topLine.current,
          { y: 3, rotate: 45, duration: 0.75, ease: "power4.inOut" },
          0,
        )
          .to(
            bottomLine.current,
            { y: -3, rotate: -45, duration: 0.75, ease: "power4.inOut" },
            0,
          )
          .to(
            menuRef.current,
            {
              width: expandedWidth,
              height: "auto",
              top: -16,
              right: -16,
              borderRadius: "24px",
              duration: 0.75,
              ease: "power4.inOut",
            },
            0,
          )
          .to(".menu-content", { opacity: 1, duration: 0.3 }, "-=0.4")
          .to(
            ".menu-link",
            {
              y: 0,
              opacity: 1,
              stagger: 0.05,
              duration: 0.4,
              ease: "power3.out",
            },
            "-=0.3",
          );
      } else {
        tl.to(".menu-content", { opacity: 0, duration: 0.2 })
          .to(
            topLine.current,
            { y: 0, rotate: 0, duration: 0.75, ease: "power4.inOut" },
            "shrink",
          )
          .to(
            bottomLine.current,
            { y: 0, rotate: 0, duration: 0.75, ease: "power4.inOut" },
            "shrink",
          )
          .to(
            menuRef.current,
            {
              width: 48,
              height: 48,
              top: 0,
              right: 0,
              borderRadius: "40px",
              duration: 0.75,
              ease: "power4.inOut",
            },
            "shrink",
          )
          .set(menuRef.current, { opacity: 0 })
          .set(".menu-link", { y: "100%", opacity: 0 });
      }
    },
    { scope: container, dependencies: [isOpen] },
  );

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
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
    <>
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-[40] bg-transparent cursor-default"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div ref={container} className="relative z-50 w-12 h-12">
        <div
          ref={buttonContainer}
          className={isScrolled ? "fixed top-6 right-6 z-50" : "relative"}
        >
          <div
            ref={menuRef}
            className="absolute top-0 right-0 bg-accent overflow-hidden shadow-2xl pointer-events-auto opacity-0"
            style={{ width: 48, height: 48, borderRadius: "40px" }}
          >
            <div className="menu-content opacity-0 w-full sm:w-[480px] flex flex-col">
              <div className="flex flex-col pt-24 border-b border-background/10">
                {navigationLinks?.map((link, index) => (
                  <div
                    key={link.id}
                    className="overflow-hidden relative border-b border-background/10 last:border-none"
                  >
                    <Link
                      href={link.link}
                      onClick={() => setIsOpen(false)}
                      onMouseEnter={(e) => handleMouseEnter(e, index)}
                      onMouseLeave={(e) => handleMouseLeave(e, index)}
                      className="menu-link relative block text-background text-2xl sm:text-3xl md:text-4xl font-medium uppercase py-6 px-6 sm:px-8 translate-y-full opacity-0"
                    >
                      <span className="relative z-10 block pointer-events-none">
                        {link.label}
                      </span>
                      <div
                        ref={(el) => {
                          bgRefs.current[index] = el;
                        }}
                        className="absolute top-0 left-0 w-full h-full bg-background/10 scale-y-0"
                      />
                    </Link>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 py-8 px-6 sm:px-8">
                {socials.map((social) => (
                  <Link
                    key={social.id}
                    href={social.link}
                    className="text-background/80 text-sm sm:text-base hover:text-background"
                  >
                    {social.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 flex flex-col gap-1 items-center justify-center bg-foreground text-background rounded-full size-12 pointer-events-auto cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span
              ref={topLine}
              className="block w-5 h-[2px] bg-background origin-center"
            />
            <span
              ref={bottomLine}
              className="block w-5 h-[2px] bg-background origin-center"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavigationMenu;
