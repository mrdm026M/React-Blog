import React from "react";
import blogs from "../../assets/data/blogData";
import { Articles } from "../ArticlesPost/Articles";
import "./FeaturedBlog.scss";

export const FeaturedBlog = () => {
  return (
    <div className="featured__section">
      <div class="featured__section-content">
        <div className="content-header">
          <h2 class="section-title">Featured Articles</h2>
        </div>
        <div className="content-articles">
          {blogs.map((blog, index) => {
            if (blog.tags.includes("featured")) {
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
