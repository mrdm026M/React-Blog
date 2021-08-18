import React from "react";
import { Blogs } from "../BlogsPost/Blogs";
import "./FeaturedBlog.scss";

export const FeaturedBlog = (props) => {
  return (
    <div className="featured__section">
      <div className="featured__section-content">
        <div className="content-header">
          <h2 className="section-title">Featured Blogs</h2>
        </div>
        <div className="content-articles">
          {props.data.map((blog, index) => {
            if (blog.tags.includes("featured") && index < 4) {
              return <Blogs blog={blog} key={index} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};
