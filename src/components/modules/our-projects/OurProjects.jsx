import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

export default function OurProjects() {
  const ourProjects = [
    { id: 1, src: "/images/our-project/1.jpg" },
    { id: 2, src: "/images/our-project/2.jpg" },
    { id: 3, src: "/images/our-project/3.jpg" },
    { id: 4, src: "/images/our-project/4.jpg" },
  ];

  

  return (
    <div className=" container my-20 px-6 lg:px-44">
      <div className=" uppercase flex gap-x-4 my-10 justify-center md:justify-start text-5xl font-Oswald tracking-widest">
        <h4>our</h4>
        <h4 className="text-secondary">project</h4>
      </div>
      <div className="hidden md:block">
        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          className="my-10"
          modules={[Pagination]}
        >
          {ourProjects.map((items, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={items.src} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          className="my-10"
          modules={[Pagination]}
        >
          {ourProjects.map((items, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={items.src} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
