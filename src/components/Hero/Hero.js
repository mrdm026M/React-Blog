import React from "react";
import blogs from "../../assets/data/blogData";
import { LatestPost } from "../LatestPost/LatestPost";
import {} from "./Hero.scss";

export const Hero = () => {
  return (
    <>
      {blogs.map((blog, index) => {
        if (blog.tags.includes("latest")) {
          return (
            <div
              key={index}
              className="hero__section"
              style={{
                backgroundImage: `url(${blog.image})`,
              }}
            >
              <LatestPost
                img={blog.image}
                imgAlt={blog.imageAlt}
                title={blog.title}
                author={blog.author}
                date={blog.date}
                description={blog.description}
              />
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};
