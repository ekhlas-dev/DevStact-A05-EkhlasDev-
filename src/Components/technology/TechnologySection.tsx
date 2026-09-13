import { useMemo, useState } from "react";

import type {Category,Technology,} from "../../types/technology";

import TechnologyFilter from "./TechnologyFilter";
import TechnologyGrid from "./TechnologyGrid";
import StackSidebar from "../stack/StackSidebar";

interface TechnologySectionProps {
  technologies: Technology[];
}

const TechnologySection = ({technologies,}: TechnologySectionProps) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState<Category | "All">(
    "All"
  );

  // Add technology
  const handleAdd = (technology: Technology) => {
    setSelectedTechnologies((previous) => {
      const alreadyExists = previous.some(
        (item) => item.id === technology.id
      );

      if (alreadyExists) {
        return previous;
      }

      return [...previous, technology];
    });
  };

  // Remove one technology
  const handleRemove = (id: string) => {
    setSelectedTechnologies((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  // Remove all
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  // Search + Category filter
  const filteredTechnologies = useMemo(() => {
    return technologies.filter((technology) => {
      const matchSearch = technology.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" ||
        technology.category === category;

      return matchSearch && matchCategory;
    });
  }, [technologies, search, category]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
          Explore the{" "}
          <span className="text-pink-500">
            Technologies
          </span>
        </h1>

        <p className="mt-1 text-xs text-slate-400">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Filter */}
      <TechnologyFilter
        search={search}
        category={category}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
      />

      {/* Main Layout */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_230px]">
        
        {/* Technology */}
        <TechnologyGrid
          technologies={filteredTechnologies}
          selectedTechnologies={selectedTechnologies}
          onAdd={handleAdd}
        />

        {/* Stack */}
        <StackSidebar
          selectedTechnologies={selectedTechnologies}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  );
};

export default TechnologySection;