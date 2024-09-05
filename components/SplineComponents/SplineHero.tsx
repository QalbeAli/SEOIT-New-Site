import dynamic from "next/dynamic";
import Spline from "@splinetool/react-spline";
import InputWithButton from "../HomePageComponents/InputWithButton";
import { FlipWordsDemo } from "../AnimationComponents/FlipWordsDemo";
import { FlipWords } from "../ui/flip-words";

export default function SplineHero() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div>
      <main className="">
        <div className="flex justify-center items-center text-4xl mt-36 font-bold">A FUN For YOU!</div>
        <Spline className="my-10 px-2 "  scene="https://prod.spline.design/Rd1xjsHQOHK6f21j/scene.splinecode" />
      </main>
    </div>
  );
}
