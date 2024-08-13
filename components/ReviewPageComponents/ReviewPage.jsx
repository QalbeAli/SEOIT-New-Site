"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import Swiper modules
import ReviewCard from "./ReviewCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Marquee from "@/components/magicui/marquee";
const reviews = [
  {
    rating: 5.0,
    review:
      "Thanks to Halo Lab's efforts, the client increased their conversion rates on various funnels. Despite the complex business requirements, the team managed the project well and yielded positive outcomes. Overall, their communication and attention to detail impressed the client.",
    reviewerName: "Jeff Voss",
    reviewerRole: "CTO, Qualle",
    reviewerImage: "/path/to/jeff-voss.jpg",
  },
  {
    rating: 5.0,
    review:
      "Halo Lab successfully delivered a product design that has proved popular with users. The team's professionalism and creative abilities come at a very reasonable price. Their motivation is admirable, and their organization makes for a smooth workflow.",
    reviewerName: "Bogdan Suchyk",
    reviewerRole: "Founder, Mobalytics",
    reviewerImage: "/path/to/bogdan-suchyk.jpg",
  },
  {
    rating: 4.8,
    review:
      "The team's expertise and dedication are evident in their work. They provided valuable insights and delivered a high-quality product on time. Communication was smooth, and the project went as planned.",
    reviewerName: "Samantha Green",
    reviewerRole: "Product Manager, TechCorp",
    reviewerImage: "/path/to/samantha-green.jpg",
  },
  {
    rating: 4.7,
    review:
      "We were impressed with the level of professionalism and creativity that Halo Lab brought to the project. They handled all the challenges effectively and provided a solution that met our needs.",
    reviewerName: "David Lee",
    reviewerRole: "CEO, Innovate Ltd.",
    reviewerImage: "/path/to/david-lee.jpg",
  },
  {
    rating: 4.9,
    review:
      "Halo Lab's attention to detail and commitment to quality were impressive. They understood our requirements and delivered a product that exceeded our expectations. Highly recommended.",
    reviewerName: "Olivia Brown",
    reviewerRole: "Marketing Director, MarketGenius",
    reviewerImage: "/path/to/olivia-brown.jpg",
  },
];

const ReviewPage = () => {
  return (
    <div className="flex flex-col w-full md:flex-row items-center  justify-center p-6 md:p-10 text-white">
     
      <div className="w-full md:w-2/3 ">
        <Swiper
          modules={[Navigation, Pagination]} // Enable modules
          spaceBetween={20} // Space between slides
          slidesPerView={1} // Number of slides to show per view
          navigation // Enable navigation arrows
          pagination={{ clickable: true }} // Enable pagination dots
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard
                rating={review.rating}
                review={review.review}
                reviewerName={review.reviewerName}
                reviewerRole={review.reviewerRole}
                reviewerImage={review.reviewerImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewPage;
