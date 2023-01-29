import CellGrid from "@/components/CellGrid";

export default function Grid({ cellCount, rule, isActive }) {
  return (
    <div className="w-full flex flex-col justify-center items-center py-16">
      <h2 className="mb-8">The Generated Grid</h2>
      <CellGrid cellCount={cellCount} rule={rule} isActive={isActive} />
    </div>
  );
}
