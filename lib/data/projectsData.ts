import { ProjectType } from "../types";

import equifyCoverImage from "../../public/assets/photos/projects/equify/equify-project-photo.png";
import equifyHoverImage from "../../public/assets/photos/projects/equify/equify-project-photo-sqare.png";
import crescoCoverImage from "../../public/assets/photos/projects/cresco/cresco-project-photo.png";
import crescoHoverImage from "../../public/assets/photos/projects/cresco/cresco-project-photo-square.png";
import trackleCoverImage from "../../public/assets/photos/projects/trackle/trackle-project-photo.png";
import trackleHoverImage from "../../public/assets/photos/projects/trackle/trackle-project-photo-square.png";
import deltaCoverImage from "../../public/assets/photos/projects/delta/delta-project-photo.png";
import deltaHoverImage from "../../public/assets/photos/projects/delta/delta-project-photo-square.png";
import playforgeCoverImage from "../../public/assets/photos/projects/playforge/playforge-project-photo.png";
import playforgeHoverImage from "../../public/assets/photos/projects/playforge/playforge-project-photo-sqare.png";
import pijanarhijaCoverImage from "../../public/assets/photos/projects/pijanarhija/pijanarhija-project-photo.png";
import pijanarhijaHoverImage from "../../public/assets/photos/projects/pijanarhija/pijanarhija-project-photo-sqare.png";

export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "Equify",
    role: "Development & Design",
    link: "",
    links: [
      {
        id: 1,
        label: "View Live",
        link: "",
      },
      {
        id: 2,
        label: "View on Github",
        link: "",
      },
    ],
    coverImage: equifyCoverImage,
    hoverImage: equifyHoverImage,
  },
  {
    id: 2,
    title: "Cresco",
    role: "Development & Design",
    link: "",
    links: [
      {
        id: 1,
        label: "View Live",
        link: "",
      },
      {
        id: 2,
        label: "View on Github",
        link: "",
      },
    ],
    coverImage: crescoCoverImage,
    hoverImage: crescoHoverImage,
  },
  {
    id: 3,
    title: "Trackle",
    role: "Development & Design",
    link: "",
    links: [
      {
        id: 1,
        label: "View Live",
        link: "",
      },
      {
        id: 2,
        label: "View on Github",
        link: "",
      },
    ],
    coverImage: trackleCoverImage,
    hoverImage: trackleHoverImage,
  },
  {
    id: 4,
    title: "Delta Carrier",
    role: "Development",
    link: "",
    links: [
      {
        id: 1,
        label: "View Live",
        link: "",
      },
      {
        id: 2,
        label: "View on Github",
        link: "",
      },
    ],
    coverImage: deltaCoverImage,
    hoverImage: deltaHoverImage,
  },
  {
    id: 5,
    title: "Playforge",
    role: "Development & Design",
    link: "",
    links: [
      {
        id: 1,
        label: "View Live",
        link: "",
      },
      {
        id: 2,
        label: "View on Github",
        link: "",
      },
    ],
    coverImage: playforgeCoverImage,
    hoverImage: playforgeHoverImage,
  },
  {
    id: 6,
    title: "Pijanarhija",
    role: "Development",
    link: "",
    links: [
      {
        id: 1,
        label: "View Live",
        link: "",
      },
      {
        id: 2,
        label: "View on Github",
        link: "",
      },
    ],
    coverImage: pijanarhijaCoverImage,
    hoverImage: pijanarhijaHoverImage,
  },
];
