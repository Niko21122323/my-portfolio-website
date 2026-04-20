import Link from "next/link";
import Image from "next/image";
import { navigationLinks, socials } from "@/lib/data/linksData";
import LocalTimeComponent from "./LocalTimeComponent";

import myImage from "../public/assets/photos/my-photos/my-image.png";

const Footer = () => {
  return (
    <footer className="bg-foreground">
      <div className="container">
        <div className="py-10">
          <div className="flex flex-col sm:flex-row flex-wrap items-start justify-between gap-y-10 sm:gap-y-16 gap-x-16">
            <div>
              <h5 className="text-background/60 text-xl">Location & Time</h5>
              <div className="flex flex-col gap-2 pt-6">
                <p className="text-background text-xl">Skopje, Macedonia</p>
                <LocalTimeComponent theme="dark" />
              </div>
            </div>
            <div>
              <h5 className="text-background/60 text-xl">Navigation</h5>
              <div className="flex flex-col gap-2 pt-6">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.link}
                    className="text-background text-xl"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-background/60 text-xl">Socials</h5>
              <div className="flex flex-col gap-2 pt-6">
                {socials.slice(0, 2).map((link) => (
                  <Link
                    key={link.id}
                    href={link.link}
                    className="text-background text-xl"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-background/60 text-xl">Contact Details</h5>
              <div className="flex flex-col gap-2 pt-6">
                <Link
                  href="mailto:stojanovski21n@gmail.com"
                  className="text-background text-xl"
                >
                  stojanovski21n@gmail.com
                </Link>
                <Link
                  href="tel:38978333705"
                  className="text-background text-xl"
                >
                  +389 78 333 705
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between gap-6 pt-24 sm:pt-36 lg:pt-44 xl:pt-56 pb-10">
          <div className="max-w-[1000px]">
            <Link
              href="/contact"
              className="block max-[400px]:text-3xl text-5xl sm:text-7xl lg:text-[110px] xl:text-9xl text-background font-bold leading-none"
            >
              Let's Work Together
            </Link>
          </div>
          <div className="size-20 sm:size-28 lg:size-36 rounded-full overflow-hidden shrink-0">
            <Image
              src={myImage}
              alt="my image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
