import dynamic from "next/dynamic";
import Spline from "@splinetool/react-spline";
import InputWithButton from "../HomePageComponents/InputWithButton";

export default function SplineHero() {
  return (
    <div>
      <main className="">
        <Spline scene="https://prod.spline.design/aP0HSqdOEXgi-bVI/scene.splinecode"
        className="hidden md:block"
        />
      </main>
    </div>
  );
}
