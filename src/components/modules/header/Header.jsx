import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function Header({ path, scroll }) {
  const [sideBar, setSideBar] = useState(false);

  // true
  // false

  const swiperRef = useRef(null);

  const headerImages = [
    { id: 1, src: "/images/home/1.jpg" },
    { id: 2, src: "/images/home/2.jpg" },
    { id: 3, src: "/images/home/3.jpg" },
    { id: 4, src: "/images/home/4.jpg" },
  ];

  return (
    <>
      <header className=" w-full relative child:font-Oswald   ">
        <div
          className={`fixed bg-primary   px-5 lg:px-0  top-0 z-50 transition-all    w-full ${
            scroll > 200 ? "lg:bg-primary" : "md:bg-inherit "
          }  flex flex-row-reverse items-center justify-between`}
        >
          {/* Desktop nav */}
          <nav className=" hidden lg:flex items-center lg:my-24 ">
            <ul
              className=" flex  md:pr-10 lg:pr-28 gap-x-4 text-xl  child:uppercase child-hover:text-secondary
           child:transition-all child:ease-linear childduration-200 child:cursor-pointer "
            >
              <li
                className={
                  path.pathname === "/" ? "text-secondary" : "text-white"
                }
              >
                home
              </li>
              <li>about</li>
              <li>services</li>
              <li>projects</li>
              <li>
                <span className="flex items-center gap-x-1">
                  pages
                  <svg className="w-4 h-4">
                    <use href="#arrow-down"></use>
                  </svg>
                </span>
              </li>
              <li>blog</li>
              <li>contact</li>
            </ul>
          </nav>
          {/* Mobile Nav */}
          <div className="lg:hidden">
            {sideBar && (
              <div className="fixed top-0 right-0 opacity-75 w-full h-screen bg-black"></div>
            )}
            <nav
              className={`fixed  transition-all duration-100 ${
                sideBar ? "right-0" : "-right-[1000px]"
              } top-0 w-3/4 h-screen bg-primary`}
            >
              <div className="p-5">
                <svg onClick={() => setSideBar(false)} className="w-8 h-8">
                  <use href="#x-mark"></use>
                </svg>
              </div>
            </nav>

            {/* Mobile Nav Menu  */}
            <div
              onClick={() => setSideBar(true)}
              className="child:w-5  lg:hidden  child:h-[1px] h-auto child:bg-secondary child:mt-2 flex-col "
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          {/* Logo NavBar */}
          <div>
            <div
              className={`flex flex-col items-start transition-all lg:px-10 ${
                scroll > 200 ? "lg:py-1" : "lg:py-10"
              }   lg:bg-primary   `}
            >
              <img
                className="w-20 md:w-24 lg:w-30 mx-auto  "
                src="/images/logo.png"
                alt="logo"
              />
              <div
                className={`hidden ${
                  scroll > 200 ? "hidden" : "lg:inline-block"
                } uppercase`}
              >
                <h4 className="text-secondary text-5xl ">bauen</h4>
                <span className="text-xs text-center block">
                  innovate design
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Header Slider Section */}
        <div className="w-full relative   ">
          {/* Slider */}
          <Swiper
            loop={true}
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            className="mySwiper "
          >
            {headerImages.map((items, index) => {
              return (
                <SwiperSlide>
                  <div>
                    <img
                      className="w-full h-[550px]  lg:h-[690px] opacity-50 lg:opacity-75 lg:pl-40 "
                      src={items.src}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* header Texts */}
          <section className=" absolute top-1/3 right-5 lg:right-20 text-right  font-Oswald z-20  ">
            <div className=" container uppercase text-4xl md:text-5xl lg:text-6xl tracking-widest  leading-snug">
              <h2> innovate design in</h2>
              <h2>torento</h2>
            </div>
            <div className="container flex flex-col text-xs sm:text-base gap-y-3 child:text-wrap justify-start font-Didact-Gothic tracking-wider">
              <span className="text-wrap">
                Archiecuter viverra tellus nec massa dictum the enisome
              </span>
              <span>Curabiture viverra the posuere aukue velit</span>
            </div>
            <div className=" mt-3 container  ">
              <button className="text-right hover:bg-white hover:text-black transition-all ease-out duration-300 px-6 py-3 border uppercase">
                buy now
              </button>
            </div>
          </section>
          <div className=" hidden lg:flex absolute bottom-10 left-20 lg:gap-x-20  z-30  items-end container    ">
            <div className="hidden w-5   lg:flex flex-col  items-center lg:gap-y-2.5 ">
              <div className="w-[1px] h-11 bg-white"></div>
              <div>
                <svg className="w-5 h-6 text-white">
                  <use href="#pinterest"></use>
                </svg>
              </div>
              <div>
                <svg className="w-5 h-6 text-white  ">
                  <use href="#instageram"></use>
                </svg>
              </div>
              <div>
                <svg className="w-5 h-6 text-white">
                  <use href="#twitter"></use>
                </svg>
              </div>
              <div>
                <svg className="w-5 h-6 text-white">
                  <use href="#face-book"></use>
                </svg>
              </div>
            </div>

            <div className="  h-10  flex gap-x-4">
              <button
                className="border rounded-full p-2 hover:text-secondary hover:border-secondary"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <svg className="w-5 h-5 ">
                  <use href="#arrow-left"></use>
                </svg>
              </button>
              <button
                className="border rounded-full p-2 hover:text-secondary hover:border-secondary"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <svg className="w-5 h-5 ">
                  <use href="#arrow-right"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
