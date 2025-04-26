import React from "react";
import { Link } from "react-router-dom";

export default function Blogs() {
  const lists = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className=" container   lg:mb-40">
      <div className="  absolute  top-0 -z-10">
        <div className="w-full  relative">
          <div className="w-full hidden md:block h-full bg-gradient-to-t from-primary from-60% z-10 absolute bottom-0"></div>
          <div className=" relative md:hidden w-full ">
            <div className=" absolute top-0 w-full h-[300px]  bg-gradient-to-t from-primary from-50% -z-10"></div>
            <img
              className="  absolute top-0  -z-20  w-full opacity-30"
              src="/images/our-project/2.jpg"
              alt=""
            />
          </div>
          <img
            className=" hidden md:block  -z-10  w-full opacity-30"
            src="/images/our-project/2.jpg"
            alt=""
          />
        </div>
      </div>

      <div className=" mt-72  z-10">
        <div className="uppercase   flex  gap-x-4 my-10 justify-start md:justify-start text-4xl lg:text-5xl font-Oswald tracking-widest">
          <h3>our</h3>
          <h3 className="text-secondary">blog</h3>
        </div>
        <div className="flex flex-col gap-y-20">
          {lists.map((items, index) => {
            
            return (
              <div key={index} className={`flex ${index % 2 === 0 ? "" : "flex-row-reverse"}  items-center gap-x-20`}>
                <img
                  src="/images/our-project/1.jpg"
                  className="w-[600px] h-[400px]"
                  alt=""
                />
                <div className="flex gap-x-5 items-center">
                  <div className="flex flex-col items-center gap-y-1 uppercase font-Oswald">
                    <span className="text-6xl text-secondary">03</span>
                    <span className="text-xs text-text-color">dec 2021</span>
                  </div>
                  <div className="flex flex-col gap-y-4 uppercase font-Oswald tracking-widest">
                    <span className="text-secondary text-sm">
                      bean / inteitor
                    </span>
                    <span className="text-2xl">
                      moder artitehcture structure
                    </span>
                    <Link
                      to={"/blogs/22"}
                      className="flex items-center text-sm  gap-x-4 text-secondary uppercase"
                    >
                      <div className="w-5 h-[1.5px] bg-secondary "></div>
                      read more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
