import type { Technology } from "../../types/technology";



interface StackItemProps {
  technology: Technology;
  onRemove: (id: string) => void;
}

// const iconMap: Record<string, string> = {};

const StackItem = ({ technology, onRemove }: StackItemProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-2">
      <div className="flex items-center gap-2">
        <img
          src={technology.icon}
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