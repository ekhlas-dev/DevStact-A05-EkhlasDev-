import type { Category } from "../../types/technology";

interface TechnologyFilterProps {
  search: string;
  category: Category | "All";
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: Category | "All") => void;
}

const categories: (Category | "All")[] = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Language",
  "Styling",
  "DevOps",
  "Tools",
];

const TechnologyFilter = ({
  search,
  category,
  onSearchChange,
  onCategoryChange,
}: TechnologyFilterProps) => {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search technology..."
        className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs outline-none transition focus:border-slate-400 sm:max-w-xs"
      />

      <select
        value={category}
        onChange={(e) =>
          onCategoryChange(e.target.value as Category | "All")
        }
        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs outline-none"
      >
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TechnologyFilter;