import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../modules/banner/banner";

export default function Blogs() {
  const lists = [0, 1, 2, 3, 4];

  return (
    <>
      <Banner />
      <div className=" container mt-28 md:mt-0  lg:mb-40">
        <div className="px-5 lg:px-0 mt-20 md:mt-40 lg:mt-72  z-10">
          <div className="uppercase   flex  gap-x-4 my-10 justify-start md:justify-start text-4xl lg:text-5xl font-Oswald tracking-widest">
            <h3>our</h3>
            <h3 className="text-secondary">blog</h3>
          </div>
          <div className="flex flex-col gap-y-20">
            {lists.map((items, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }  items-center gap-y-8 gap-x-20`}
                >
                  <img
                    src="/images/our-project/1.jpg"
                    className=" w-[400px] h-[250px] lg:w-[600px] lg:h-[400px]"
                    alt=""
                  />
                  <div className="flex gap-x-5 items-center">
                    <div className="flex flex-col items-center gap-y-1 uppercase font-Oswald">
                      <span className=" text-5xl lg:text-6xl text-secondary">
                        03
                      </span>
                      <span className="text-sm text-nowrap text-text-color">
                        dec 2021
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-4 uppercase font-Oswald tracking-widest">
                      <span className="text-secondary text-sm">
                        bean / inteitor
                      </span>
                      <span className=" text-2xl">
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
    </>
  );
}
