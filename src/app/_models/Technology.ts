import { Tag } from "./Tags";
export interface Technology {
  id: number;
  name: string;
  proficiency: string;
  picture: string;
  tags: Tag[];
}
