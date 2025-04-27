import React, { useEffect, useState } from "react";
import InsertBlog from "../../modules/insert-blog/InsertBlog";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

  const [token, setToken] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/user/`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((respnse) =>
      respnse.json().then((data) => {
        setToken(data.user);
      })
    );
  }, []);

  if (token === undefined) {
    navigate("/");
  }

  

  return (
    <div className="my-72 container">
      <div className="flex justify-center gap-x-20">
        <InsertBlog writer={token._id} />
        <div className="  border border-text-color rounded-md px-10 p-2">
          <div className="flex items-center gap-x-5">
            <span>{token.email}</span>
            <img src={token.image} alt="" className="w-20 rounded-full" />
          </div>
          <div className="my-5">
            <ul className=" child:mt-5 child:border-b child:w-full">
              <li className="text-end p-2">log out</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
