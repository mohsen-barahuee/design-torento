import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../../modules/banner/banner";

export default function PersonBlog() {
  const params = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function dataFetcher() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/blogs/${params.id}`
        );
        const data = await response.json();
        setBlog(data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    }

    dataFetcher();
  }, [params.id]);

  console.log(blog);

  if (loading) {
    return <p>Loading...</p>; // show this until blog is ready
  }
  

  return (
    <>
      <Banner />
      <div className="md:mt-72 px-40 container">
        <div className="flex  flex-col gap-y-10">
          <img src={blog.image} className=" w-full h-[500px]" alt="" />
          <div className=" flex gap-y-5 flex-col">
            <h3 className="text-3xl font-Oswald tracking-widest uppercase text-secondary">
              {blog.title}
            </h3>
            <div className="flex flex-col gap-y-3 child:text-text-color font-Didact-Gothic">
              <p>{blog.body}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-x-52 my-20 font-Didact-Gothic">
          <div className="flex gap-x-10">
            <div>
              <img
                src="/images/team/1.jpg"
                className="w-32 rounded-full"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="flex gap-x-4 items-center">
                <span className="text-secondary capitalize ">robert misse</span>
                <span className="text-sm text-text-color">29 october 2023</span>
              </div>
              <div>
                <p className="text-text-color text-sm">
                  Photography ultricies rtbh non dolor maximus scaleue inte
                  molliser foubs neque nec tincidunte cliquam erat volutpat.
                  Proeser tempor molade yap.
                </p>
              </div>
              <button className="flex items-center gap-x-1 capitalize text-xs text-secondary ">
                replay
                <svg className="w-4 h-4">
                  <use href="#arrow-uturn"></use>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="text-nowrap text-secondary font-Didact-Gothic">
              Leave a Reply
            </span>
            <input
              className="outline-none w-52  py-3 bg-transparent border-t border-text-color capitalize font-Didact-Gothic text-sm"
              placeholder="your comment*"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-end mb-40">
          <button className="bg-secondary uppercase transition-all hover:bg-transparent border border-secondary font-Oswald tracking-widest px-8 py-2">
            send
          </button>
        </div>
      </div>
    </>
  );
}
