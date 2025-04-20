import React, { useState } from "react";

export default function CurrentNews() {
  const newTime = new Date();
  const [firstSliceValue, setFirstSliceValue] = useState(0);
  const [secondSliceValue, setSecondSliceValue] = useState(2);

  const currenNewsValues = [
    {
      id: 1,
      src: "/images/our-project/1.jpg",
      title: "",
      time: newTime.getFullYear() + "-" + newTime.getMonth(),
    },
    {
      id: 2,
      src: "/images/our-project/2.jpg",
      title: "",
      time: newTime.getFullYear() + "-" + newTime.getMonth(),
    },
    {
      id: 3,
      src: "/images/our-project/3.jpg",
      title: "",
      time: newTime.getFullYear() + "-" + newTime.getMonth(),
    },
    {
      id: 4,
      src: "/images/our-project/4.jpg",
      title: "",
      time: newTime.getFullYear() + "-" + newTime.getMonth(),
    },
  ];

  console.log(currenNewsValues.slice(0, 1));

  return (
    <div className="container px-5  my-20  lg:px-36">
      <div className=" uppercase flex flex-col gap-y-3  md:flex-row gap-x-4 my-10 justify-center md:justify-start text-5xl font-Oswald tracking-widest">
        <h4>current</h4>
        <h4 className="text-secondary">news</h4>
      </div>

      <div className="hidden  md:flex justify-center gap-x-10">
        {currenNewsValues.slice(0, 2).map((items, index) => {
          return (
            <div key={index} className="relative">
              <div>
                <img src={items.src} alt="" />
              </div>
              <div className=" absolute -bottom-5  left-1/2 -translate-x-1/2 px-10 py-5 bg-card-color   capitalize ">
                <div className="font-Didact-Gothic text-text-color text-sm tracking-widest text-nowrap">
                  <span>architecton</span>
                  <span>2024 - 12</span>
                </div>
                <div>
                  <span className="text-secondary font-Oswald text-xl tracking-widest text-nowrap">
                    Moder architecton structure{" "}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="  md:hidden justify-center ">
        {currenNewsValues.slice(0, 1).map((items, index) => {
          return (
            <div key={index} className="relative">
              <div>
                <img className="" src={items.src} alt="" />
              </div>
              <div className=" absolute -bottom-5  left-1/2 -translate-x-1/2 px-10 py-5 bg-card-color   capitalize ">
                <div className="font-Didact-Gothic text-text-color text-sm tracking-widest text-nowrap">
                  <span>architecton</span>
                  <span>2024 - 12</span>
                </div>
                <div>
                  <span className="text-secondary font-Oswald text-xl tracking-widest text-nowrap">
                    Moder architecton structure{" "}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" hidden md:flex gap-x-5 justify-center mt-10">
        {Array(2)
          .fill(0)
          .map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  console.log(currenNewsValues.length);
                }}
                className="w-4 h-4 cursor-pointer  border-2 border-secondary rounded-full flex items-center justify-center  "
              >
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
