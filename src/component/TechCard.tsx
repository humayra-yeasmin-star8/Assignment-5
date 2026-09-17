import type {Tech} from "../types";

interface TechProp {
  technology: Tech;
  onAdd: (technology: Tech) => void;
  isAdded: boolean;
}
const TechCard = ({
  technology,
  onAdd,
  isAdded
}: TechProp) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">

      <div className="flex items-start justify-between">
        <img src={technology.icon} alt={technology.name}
          className="w-12 h-12 object-contain"
        />

        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
          {technology.badge}
        </span>
      </div>

      <h2 className="text-xl font-bold mt-4">
        {technology.name}
      </h2>


      <p className="text-gray-600 text-sm mt-2 min-h-15">
        {technology.description}
      </p>

      
      <div className="flex gap-2 mt-4 flex-wrap">

        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          {technology.category}
        </span>

        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
          {technology.difficulty}
        </span>

      </div>

      
      <div className="flex items-center gap-1 mt-4">
        <span className="text-yellow-500 text-lg">★</span>

        <span className="font-semibold">
          {technology.rating}
        </span>
      </div>

      
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`w-full mt-5 py-2 rounded-lg font-semibold ${
          isAdded
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? " Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
};

export default TechCard;