import type { Technology } from "../types/technology";

export const fetchTechnologies = async (): Promise<Technology[]> => {
  const response = await fetch("/public/data.json");

  if (!response.ok) {
    throw new Error("Failed to fetch technologies");
  }

  const data: Technology[] = await response.json();

  return data;
};