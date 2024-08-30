import React, { ReactNode } from "react";
import FolderWrapper from "./FolderLayout/FolderCardContainer";
import { cn } from "@/lib/utils";
import { FaChevronDown } from "react-icons/fa";

interface ProjectCardProps {
  image: string;
  flagContent: ReactNode;
  description: ReactNode;
  index: number;
  hoveredIndex: number | null;
  onHover: () => void;
  onLeave: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  flagContent,
  description,
  index,
  hoveredIndex,
  onHover,
  onLeave,
}) => {
  const isHovered = index === hoveredIndex;

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={cn(
        "relative group rounded-lg overflow-hidden transition-transform duration-300 ease-out cursor-pointer",
        "transition-opacity duration-300",
        isHovered ? "opacity-100 scale-105" : "opacity-40"
      )}
    >
      <div>
        <FolderWrapper />
      </div>
      <div>{flagContent}</div>
      <div className="relative">
        {description}
        <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 -rotate-90 transition-all ease-in duration-200 -translate-x-10 group-hover:translate-x-0 h-0 w-0 group-hover:h-4 group-hover:w-4 ">
          <FaChevronDown />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
