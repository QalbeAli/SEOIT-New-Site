import React from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  company: string;
  joinDate: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "CEO of",
    company: "CoolCompany",
    joinDate: "Joined April, 2018",
    imageUrl: "/john.webp",
  },
  {
    name: "Jane Smith",
    role: "Developer at",
    company: "AwesomeCo",
    joinDate: "Joined March, 2019",
    imageUrl: "/john.webp",
  },
  {
    name: "Sarah Doe",
    role: "Social Media",
    company: "Manager",
    joinDate: "Joined May, 2020",
    imageUrl: "/john.webp",
  },
  {
    name: "Steve Grant",
    role: "Freelancer",
    company: "Developer",
    joinDate: "Joined June, 2020",
    imageUrl: "/john.webp",
  },
  {
    name: "Florrie Jacobs",
    role: "Senior Fashion",
    company: "Designer",
    joinDate: "Joined August, 2020",
    imageUrl: "/john.webp",
  },
];

const TeamGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-950 border rounded-lg shadow-lg p-4">
            <div className="relative w-full h-48 mb-4">
              <Image
                src={member.imageUrl}
                alt={member.name}
                layout="fill" // Ensures image covers the container
                objectFit="cover" // Maintain aspect ratio while covering the container
                className="rounded-xl bg-gray-200"
              />
            </div>
            <div className="text-center">
              <div className="font-bold text-dark text-lg mb-1">{member.name}</div>
              <div className="text-white">{member.role}</div>
              <div className="text-white">{member.company}</div>
              <div className="text-white mt-2">{member.joinDate}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TeamGrid;
