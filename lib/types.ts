import { StaticImageData } from "next/image";

export type LinkType = {
  id: number;
  label: string;
  link: string;
};

export interface ExperienceType {
  id: number;
  year: string;
  company: string;
  role: string;
  description: string;
}

export interface ProjectLinkType {
  id: number;
  label: string;
  link: string;
}
export interface ProjectType {
  id: number;
  title: string;
  role: string;
  link: string;
  links: ProjectLinkType[];
  coverImage: StaticImageData;
  hoverImage: StaticImageData;
}
