import Image from 'next/image';

type BlogCardProps = {
  title: string;
  date: string;
  description: string;
  imageSrc: string;
  altText: string;
  link: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  description,
  imageSrc,
  altText,
  link,
}) => {
  return (
    <div className=" bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={imageSrc} alt={altText} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-500 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">{date}</span>
          <a
            href={link}
            className="px-3 py-1 text-white bg-black rounded-md text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
