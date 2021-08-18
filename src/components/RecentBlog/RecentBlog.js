import React from "react";
import { Blogs } from "../BlogsPost/Blogs";
import "./RecentBlog.scss";

export const RecentBlog = (props) => {
  return (
    <>
      <div className="recent-blog__section">
        <div className="recent-blog__section-content">
          <div className="content-header">
            <h2 className="section-title">Recent Articles</h2>
          </div>
          <div className="content-articles">
            {props.data.map((blog) => {
              if (blog.tags.includes("recent")) {
                return <Blogs blog={blog} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};
