import React from "react";
import blogs from "../../assets/data/blogData";
import { Articles } from "../ArticlesPost/Articles";
import "./RecentBlog.scss";

export const RecentBlog = () => {
  return (
    <div className="recent-blog__section">
      <div class="recent-blog__section-content">
        <div className="content-header">
          <h2 class="section-title">Recent Articles</h2>
        </div>
        <div className="content-articles">
          {blogs.map((blog, index) => {
            if (blog.tags.includes("recent")) {
              return (
                <Articles
                  key={index}
                  img={blog.image}
                  imgAlt={blog.imageAlt}
                  title={blog.title}
                  author={blog.author}
                  date={blog.date}
                  description={blog.description}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};
