import React, { useState } from "react";
import DropDown from "../drop-down/DropDown";
import { Link } from "react-router-dom";

export default function Navbar({ path, scroll }) {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div
      className={`${
        path.pathname === "/"  ? "fixed  top-0" : ""
      } bg-primary px-5 lg:px-0   transition-all child:font-Oswald   w-full ${
        scroll > 50 ? "lg:bg-primary  " : "md:bg-inherit "
      }  flex flex-row-reverse items-center justify-between z-50`}
    >
      {/* Desktop nav */}
      <nav className=" hidden lg:flex items-center lg:my-24  ">
        <ul
          className=" flex items-center  md:pr-10 lg:pr-20 gap-x-4 text-xl  child:uppercase 
       child:transition-all child:ease-linear childduration-200 child:cursor-pointer "
        >
          <li
            className={
              path.pathname === "/"
                ? "text-secondary"
                : "text-white hover:text-secondary"
            }
          >
            <Link to={"/"}>home</Link>
          </li>
          <li
            className={
              path.pathname === "/about"
                ? "text-secondary"
                : "text-white hover:text-secondary"
            }
          >
            <Link to={"/about"}>about</Link>
          </li>
          <li className="hover:text-secondary">services</li>
          <li className="hover:text-secondary">projects</li>
          <li>
            <DropDown
              title={"pages"}
              items={[
                { href: "/price", title: "pricig" },
                { href: "/process", title: "process" },
                { href: "/*", title: "404" },
              ]}
            />
          </li>
          <li
            className={
              path.pathname === "/blogs"
                ? "text-secondary"
                : "text-white hover:text-secondary"
            }
          >
            <Link to={"/blogs"}>blog</Link>
          </li>
          <li className="hover:text-secondary">contact</li>
          <li className="bg-secondary hover:bg-card-color  rounded-lg px-5 py-2">
            login | sign up
          </li>
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
            <h4 className="text-secondary  text-5xl ">bauen</h4>
            <span className="text-xs text-center block">innovate design</span>
          </div>
        </div>
      </div>
    </div>
  );
}
