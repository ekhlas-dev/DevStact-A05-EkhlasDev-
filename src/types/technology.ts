export type Category =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Language"
  | "Styling"
  | "DevOps"
  | "Tools";

export type Difficulty =
  | "Beginner-Friendly"
  | "Intermediate"
  | "Advanced";

export interface Technology {
  id: string;
  name: string;
  category: Category;
  description: string;
  difficulty: Difficulty;
  rating: number;
  tag: string;
  icon: string;
}