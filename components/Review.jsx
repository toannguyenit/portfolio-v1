"use client";

import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Huynh Hau",
    job: "Security Engineer",
    review:
      "Good working attitude, proactive learning. Effective work management and teamwork skills.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Tin Dao",
    job: "Web Developer",
    review:
      "Strong self-study and quick absorption of new technology. Good boy",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Nguyen Doan",
    job: "Sale Medical",
    review: "Hardworking, intelligent, creative at work.",
  },
];

const Review = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* slides  */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader>
                    <div className="flex items-center gap-x-4">
                      {/* image  */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name  */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
