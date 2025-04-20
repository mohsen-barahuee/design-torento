import React from "react";

export default function ClientMessages() {
  return (
    <div className="">
      <div className="w-full relative">
        <img
          src="/images/our-project/2.jpg"
          className="w-full object-cover max-h-[400px] opacity-50"
          alt=""
        />
        <div className=" absolute flex justify-between w-full lg:px-52 top-1/4 left-1/2 -translate-x-1/2 ">
          <div>
            <div className="flex flex-col gap-y-5 ">
              <div className="cursor-pointer">
                <svg className="w-20 h-20 rounded-full p-4 bg-secondary/70 ">
                  <use href="#play-icon"></use>
                </svg>
              </div>
              <span className="uppercase font-Oswald text-xl tracking-widest">
                View promo video
              </span>
            </div>
          </div>
          <div className="bg-primary w-72 py-10 px-5 ">
            <div className="flex flex-col gap-y-3">
              <span className="uppercase font-Oswald text-xl tracking-widest  text-left">
                What Client's say ? 
              </span>
              <div className="w-full h-[1px] bg-text-color"></div>
              <p className="text-xs text-text-color">
                Planner inilla duiman at elit finibus viverra nec a lacus themo
                the drudea seneoice misuscipit non sagie the fermen. Viverra
                tristique jusio the ivite dianne onen nivami acsestion augue
                artine
              </p>
              <div className="flex gap-x-3  ">
                <img src="/images/profile/1.jpg" className="w-12 rounded-full" alt="" />
                <div className="flex flex-col text-sm">
                  <span className=" capitalize text-secondary font-Didact-Gothic tracking-wide">Json brown</span>
                  <span className="capitalize text-white/70 font-Didact-Gothic tracking-wide">Crown Plaza owner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
