import FlickeringGrid from "@/components/AnimationComponents/FlickeringGrid";

export default function FlickeringGridRoundedDemo() {
  return (
    <div className="relative size-[600px] rounded-lg w-full bg-background overflow-hidden border">
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={900}
      />
    </div>
  );
}
