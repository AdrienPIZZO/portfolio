import { Tag } from "./Tags";

export interface Project {
  id: number;
  name: string;
  description: string;
  projectLink: string;
  pictures: string[];
  tags: Tag[];
}
