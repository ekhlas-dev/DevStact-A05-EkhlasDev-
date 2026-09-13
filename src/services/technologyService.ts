import type { Technology } from "../types/technology";

export const fetchTechnologies = async (): Promise<Technology[]> => {
  const response = await fetch(
    `${import.meta.env.BASE_URL}data.json`
  );

  if (!response.ok) {
    throw new Error("Failed to load technologies");
  }

  return response.json();
};