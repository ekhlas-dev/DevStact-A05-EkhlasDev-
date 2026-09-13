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

interface StackItemProps {
  technology: Technology;
  onRemove: (id: string) => void;
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

const StackItem = ({ technology, onRemove }: StackItemProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-2">
      <div className="flex items-center gap-2">
        <img
          src={iconMap[technology.icon]}
          alt={technology.name}
          className="h-6 w-6 object-contain"
        />

        <div>
          <p className="text-[10px] font-semibold text-slate-800">
            {technology.name}
          </p>

          <p className="text-[8px] text-slate-400">
            {technology.category}
          </p>
        </div>
      </div>

      <button
        onClick={() => onRemove(technology.id)}
        className="text-sm text-slate-300 transition hover:text-red-500"
      >
        ×
      </button>
    </div>
  );
};

export default StackItem;