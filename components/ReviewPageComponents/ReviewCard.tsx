// components/ReviewCard.tsx
import Image from "next/image";

type ReviewCardProps = {
  rating: number;
  review: string;
  reviewerName: string;
  reviewerRole: string;
  reviewerImage: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  rating,
  review,
  reviewerName,
  reviewerRole,
  reviewerImage,
}) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg min-h-[400px]">
      {" "}
      {/* Minimum height */}
      <div className="flex flex-col md:flex-row items-center mb-4 h-full">
        <span className="text-xl md:text-2xl font-bold">
          {rating.toFixed(1)}
        </span>
        <div className="ml-2 flex items-center text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-lg md:text-xl">
              ★
            </span>
          ))}
        </div>
      </div>
      <p className="text-sm md:text-base mb-4 overflow-hidden">{review}</p>
      <div className="flex flex-col md:flex-row items-center">
        <Image
          src={reviewerImage}
          alt={reviewerName}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="ml-2 md:ml-4 text-center md:text-left">
          <p className="font-semibold text-sm md:text-base">{reviewerName}</p>
          <p className="text-xs md:text-sm text-gray-300">{reviewerRole}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
