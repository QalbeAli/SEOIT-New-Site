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
        <div className=" transform translate-y-[500px]  h-[40rem] flex justify-center items-center z-50 px-4">
          <div className=" text-4xl mx-auto font-normal  dark:text-white">
            Build
            <FlipWords words={words} /> <br />
            websites with Aceternity UI
          </div>
        </div>
        <Spline scene="https://prod.spline.design/BImIErcJVO1nUO9F/scene.splinecode" />
      </main>
    </div>
  );
}
