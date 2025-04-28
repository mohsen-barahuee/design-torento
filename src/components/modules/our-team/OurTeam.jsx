import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function OurTeam() {
  return (
    <div  data-aos="flip-left" className=" container my-20 px-5">
      <div className="uppercase flex gap-x-4 my-10 justify-start text-5xl font-Oswald tracking-widest">
        <h3>our</h3>
        <h3 className="text-secondary">team</h3>
      </div>
      <div className="hidden lg:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          className="my-10"
          modules={[Pagination]}
        >
          <SwiperSlide>
            <img src="/images/team/1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/team/2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/team/3.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/team/4.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden sm:block lg:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          className="my-10"
          modules={[Pagination]}
        >
          <SwiperSlide>
            <img src="/images/team/1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/team/2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/team/3.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/team/4.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="sm:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          className="my-10"
          modules={[Pagination]}
        >
          <SwiperSlide>
            <img src="/images/team/1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/team/2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/team/3.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/team/4.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
