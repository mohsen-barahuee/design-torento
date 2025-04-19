import React from "react";

export default function About() {
  return (
    <div className=" my-20 lg:px-20">
      <div >
        <div className="flex flex-wrap gap-y-6 px-10 md:px-0  justify-center md:gap-x-20">
          <div className="md:w-[450px]">
            <div className="flex gap-x-6 tracking-widest text-4xl font-Oswald">
              <h3>ABOUT</h3>
              <h3 className="text-secondary">BAUEN</h3>
            </div>
            <div className="flex text-xs md:text-sm font-Didact-Gothic font-extralight text-text-color  flex-col gap-y-4 mt-5  ">
              <span>
                Architecture viverra tristique justo duis vitae diam neque
                nivamus aestan atueune artines arignianu atelit finibus viverra
                nec lacus. Nedana theme erodino setlie suscipit no curabit
                tristique.
              </span>
              <span>
                Design inilla duiman at elit finibus viverra nec a lacus themo
                the drudea seneoice misuscipit non sagie the fermen.
              </span>
              <span>
                Planner inilla duiman at elit finibus viverra nec a lacus themo
                the drudea seneoice misuscipit non sagie the fermen. Viverra
                tristique jusio the ivite dianne onen nivami acsestion augue
                artine.
              </span>
            </div>
          </div>
          <div className="w-[400px] relative">
            <img className="w-[400px] " src="/images/about.jpg" alt="" />
            <div className="w-full h-full border absolute top-5 right-5 border-text-color/50 -z-20"></div>
            <button className=" absolute right-0 -bottom-5 text-xs1 uppercase bg-card-color px-10 py-5 tracking-[3px] font-Oswald text-wrap">canada Office</button>
          </div>
        </div>
      </div>
    </div>
  );
}
