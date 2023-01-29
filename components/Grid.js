import CellGrid from "@/components/CellGrid";

export default function Grid({ cellCount, rule, isActive }) {
  return (
    <div className="w-full h-full pl-12 pt-12">
      <CellGrid cellCount={cellCount} rule={rule} isActive={isActive} />
    </div>
  );
}
