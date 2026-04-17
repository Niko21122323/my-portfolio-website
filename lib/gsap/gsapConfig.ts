import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  gsap.config({
    nullTargetWarn: false,
    autoSleep: 60,
    force3D: true,
  });

  gsap.ticker.lagSmoothing(0);
}

export { gsap, ScrollTrigger, useGSAP };
