import type { Technology } from "../../types/technology";
import StackItem from "./StackItem";

interface StackSidebarProps {
  selectedTechnologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) => {
  return (
    <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4 lg:sticky lg:top-5">
      
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xs font-bold text-slate-900">
          Your Stack
        </h2>

        <p className="mt-1 text-[9px] text-slate-400">
          {selectedTechnologies.length} Technology
          {selectedTechnologies.length !== 1 && "ies"} Selected
        </p>
      </div>

      {/* Items */}
      <div className="space-y-2">
        {selectedTechnologies.length > 0 ? (
          selectedTechnologies.map((technology) => (
            <StackItem
              key={technology.id}
              technology={technology}
              onRemove={onRemove}
            />
          ))
        ) : (
          <div className="rounded-lg border border-dashed border-slate-200 p-5 text-center">
            <p className="text-[10px] text-slate-400">
              No technology selected
            </p>
          </div>
        )}
      </div>

      {/* Remove All */}
      {selectedTechnologies.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-4 w-full rounded-md border border-red-200 py-2 text-[10px] font-semibold text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
};

export default StackSidebar;