import { cn } from "@/lib/utils";
import { FC } from "react";

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  index:number
}

const ServiceCard: FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    
    <div className= {cn ("flex items-start space-x-4 p-4 ", index === 0 && "border-r md:border-white", index === 2 && "border-r md:border-white" )}>
      <div className="flex-shrink-0 ">{icon}</div>
      <div>
        <h3 className="text-lg text-white font-semibold">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
