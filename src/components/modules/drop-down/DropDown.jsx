import React from "react";
import { Link } from "react-router-dom";

export default function DropDown({ title, items }) {
  return (
    <div className=" relative Drop-Down   ">
      <p className="hover:text-secondary">{title}</p>
      <ul className="  absolute flex flex-col gap-y-5 top-10  bg-card-color font-Didact-Gothic text-sm py-4 pl-5 pr-28 capitalize transition-all  ">
        {items.map((items) => {
          return (
            <li className="hover:text-secondary">
              <Link to={items.href}>{items.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
