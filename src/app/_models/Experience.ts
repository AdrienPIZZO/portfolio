import { Tag } from "./Tags";

export interface Experience {
  id: number;
  name: string;
  date: string;
  company: string;
  location: string;
  description: string;
  tags: Tag[];
}
