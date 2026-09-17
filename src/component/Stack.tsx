import type { Tech } from "../types";

interface YourStackProps {
  stack: Tech[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const Stack = ({
  stack,
  onRemove,
  onRemoveAll
}: YourStackProps) => {

  return (
    <aside className="bg-white rounded-xl border border-gray-200 p-5">

      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl font-bold">
            Your Stack
          </h2>

          <p className="text-sm text-gray-500">
            {stack.length} Technology Selected
          </p>
        </div>

        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-red-500 text-sm font-semibold"
          >
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <p>No technologies added yet.</p>
          <p className="text-sm mt-1">
            Add technologies to build your stack.
          </p>
        </div>
      ) : (

        <div className="space-y-3">

          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 border rounded-lg p-3"
            >

              <img
                src={technology.icon}
                alt={technology.name}
                className="w-9 h-9 object-contain"
              />

              <div className="flex-1">
                <h3 className="font-semibold">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-red-500 font-bold"
              >
                ✕
              </button>

            </div>
          ))}

        </div>
      )}

    </aside>
  );
};

export default Stack;