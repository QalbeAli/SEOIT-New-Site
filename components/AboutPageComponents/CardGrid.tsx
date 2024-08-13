// components/CardGrid.tsx

import { FaPenNib, FaCode, FaPalette, FaShoppingCart, FaBullhorn, FaLaptop, FaMobileAlt, FaPenAlt } from 'react-icons/fa';
import Card from './CardDesign';

const cardData = [
  {
    icon: FaPenNib,
    title: 'Branding',
    description: 'Understand First. Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt.',
  },
  {
    icon: FaPenAlt,
    title: 'Copy Writing',
    description: 'Understand First. Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt.',
  },
  {
    icon: FaCode,
    title: 'Development',
    description: 'Understand First. Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt.',
  },
  {
    icon: FaPalette,
    title: 'Design',
    description: 'Understand First. Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt.',
  },
  {
    icon: FaShoppingCart,
    title: 'E-Commerce',
    description: 'Understand First. Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt.',
  },
  {
    icon: FaBullhorn,
    title: 'Advertisement',
    description: 'Understand First. Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt.',
  },
  {
    icon: FaLaptop,
    title: 'Website Design',
    description: 'Understand First. Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt.',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile App',
    description: 'Understand First. Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt.',
  },
];

export default function CardGrid() {
  return (
    <div className="pt-12 mb-20 mx-4">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  </div>
  );
}
