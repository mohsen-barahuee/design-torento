import React from "react";
import { Link } from "react-router-dom";

export default function DropDown({ title, items }) {
  return (
    <div className=" ">
      <p className=" relative Drop-Down hover:z-30">
        {title}
        <ul className="  absolute flex flex-col gap-y-5    bg-card-color font-Didact-Gothic text-sm py-4 pl-5 pr-28 capitalize transition-all  ">
          {items.map((items) => {
            return (
              <li className="hover:text-secondary">
                <Link to={items.href}>{items.title}</Link>
              </li>
            );
          })}
        </ul>
      </p>
    </div>
  );
}
