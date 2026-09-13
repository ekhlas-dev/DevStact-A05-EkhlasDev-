import type { Technology } from "../../types/technology";

import reactIcon from "../../assets/icons/react.svg";
import vueIcon from "../../assets/icons/vue.svg";
import svelteIcon from "../../assets/icons/svelte.svg";
import nextjsIcon from "../../assets/icons/nextjs.svg";
import nodejsIcon from "../../assets/icons/nodejs.svg";
import postgresIcon from "../../assets/icons/postgres.svg";
import redisIcon from "../../assets/icons/redis.svg";
import javascriptIcon from "../../assets/icons/javascript.svg";
import typescriptIcon from "../../assets/icons/typescript.svg";

interface TechnologyCardProps {
  technology: Technology;
  isSelected: boolean;
  onAdd: (technology: Technology) => void;
}

const iconMap: Record<string, string> = {
  react: reactIcon,
  vue: vueIcon,
  svelte: svelteIcon,
  nextjs: nextjsIcon,
  nodejs: nodejsIcon,
  postgres: postgresIcon,
  redis: redisIcon,
  javascript: javascriptIcon,
  typescript: typescriptIcon,
};

const TechnologyCard = ({
  technology,
  isSelected,
  onAdd,
}: TechnologyCardProps) => {
    
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      
      {/* Top */}
      <div className="mb-3 flex items-start justify-between">
        <img
          src={iconMap[technology.icon]}
          alt={technology.name}
          className="h-7 w-7 object-contain"
        />

        {technology.tag && (
          <span className="rounded-full bg-slate-50 px-2 py-1 text-[9px] font-medium text-slate-500">
            {technology.tag}
          </span>
        )}
      </div>

      {/* Name */}
      <h3 className="text-sm font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-1 min-h-[42px] text-[10px] leading-4 text-slate-400">
        {technology.description}
      </p>

      {/* Information */}
      <div className="mt-3 flex items-center justify-between text-[9px]">
        <span className="rounded bg-slate-50 px-2 py-1 text-slate-500">
          {technology.category}
        </span>

        <span className="text-slate-400">
          {technology.difficulty}
        </span>

        <span className="font-semibold text-slate-700">
          ⭐ {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isSelected}
        className={`mt-3 w-full rounded-md px-3 py-2 text-[10px] font-semibold transition ${
          isSelected
            ? "cursor-not-allowed bg-slate-200 text-slate-400"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;