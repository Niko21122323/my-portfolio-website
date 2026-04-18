import { socials } from "@/lib/data/linksData";
import Link from "next/link";
import LocalTimeComponent from "../LocalTimeComponent";

const HeroSection = () => {
  return (
    <section className="">
      <div className="container">
        <div className="flex flex-col justify-between sm:min-h-[100dvh]">
          <div>
            <h1 className="text-foreground text-pretty text-2xl md:text-[32px] lg:text-[40px] xl:text-6xl font-medium sm:font-semibold leading-tight pb-16 md:pb-24  pt-32">
              Hi, I'm Nikola. Full stack developer with 3 years building apps
              for agencies and SaaS products. JavaScript, TypeScript, frontend
              architecture, and API integration.
            </h1>
            <div>
              <div className="flex max-[510px]:flex-col max-[510px]:items-start items-center justify-between gap-y-16 gap-x-10 pb-6 border-b border-dashed border-border">
                <div className="flex max-[510px]:flex-col items-center gap-2 max-[510px]:w-full">
                  <Link
                    href="/"
                    className="flex items-center justify-center bg-background px-5 md:px-7 py-2 md:py-4 rounded-full border border-dashed border-border text-foreground/60 max-[510px]:w-full"
                  >
                    Read More
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center justify-center bg-background px-5 md:px-7 py-2 md:py-4 rounded-full border border-dashed border-border text-foreground/60 max-[510px]:w-full"
                  >
                    My Work
                  </Link>
                </div>
                <div className="flex items-center gap-4 md:gap-7">
                  {socials.slice(0, 3).map((social) => (
                    <Link
                      key={social.id}
                      href={social.label}
                      className="text-foreground text-base md:text-lg font-light"
                    >
                      {social.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-end pt-8 max-[510px]:pt-6 max-[510px]:justify-start">
                <p className="text-foreground text-base md:text-lg font-light">
                  <span className="text-muted-foreground pr-4">
                    Local Time:
                  </span>
                  <LocalTimeComponent />
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-10 pt-16 sm:pt-24">
            <h4 className="text-foreground text-3xl font-semibold">
              Selected Work
            </h4>
            <p className="text-foreground text-base font-light">
              Last updated April 18, 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
