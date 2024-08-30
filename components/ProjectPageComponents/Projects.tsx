import { FaArrowDown } from "react-icons/fa6";
import Card from "./ProgressCard";
import FolderCarousalWrapper from "./FolderLayout/FolderContainerWithCarausal";
const ProjectHero = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto mt-40">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="post-card__img-link w-full h-full is-big is-big-border ">
          <div className="heading-wrap mod--catalog-border ">
            <h1 className="heading-1 mod--catalog-border font-bold">
              Our
              <br />
              Best
              <br />
              works
            </h1>
          </div>
          <div className="catalog-card-border__bottom">
            <div className=" flex catalog-card-border__content">
              <div className="flex space-x-2 uppercase">
                <p className="text-3xl">350+</p>
                <div className="text-xs leading-4">
                  Projects <br />
                  <span>Done</span>
                </div>
              </div>
              <div className="flex items-center space-x-1 group cursor-pointer">
                <HeroIconDown className="group-hover:inline-flex inline-flex opacity-0 group-hover:opacity-100 group-hover:w-5 w-0 group-hover:h-5 h-0 transition-all duration-300" />
                <div className="text-black bg-orange-300 px-2 py-1 rounded-full uppercase font-bold text-[10px]">
                  ALl Cases
                </div>
                <HeroIconDown className="group-hover:w-0 w-5 group-hover:h-0 h-5 transition-all duration-300 opacity-100 group-hover:opacity-0" />
              </div>
            </div>
          </div>
        </div>
        <FolderCarousalWrapper />
      </div>
    </div>
  );
};

export default ProjectHero;

const HeroIconDown = ({ className }: { className: string }) => {
  return (
    <FaArrowDown
      size={20}
      className={`bg-white text-black p-1 rounded-full ${className}`}
    />
  );
};
