import type { Technology } from "../../types/technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologyGridProps {
  technologies: Technology[];
  selectedTechnologies: Technology[];
  onAdd: (technology: Technology) => void;
}

const TechnologyGrid = ({
  technologies,
  selectedTechnologies,
  onAdd,
}: TechnologyGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((technology) => {
        const isSelected = selectedTechnologies.some(
          (item) => item.id === technology.id
        );

        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            isSelected={isSelected}
            onAdd={onAdd}
          />
        );
      })}
    </div>
  );
};

export default TechnologyGrid;