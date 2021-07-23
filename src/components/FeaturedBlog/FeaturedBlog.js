import React from "react";
import { Articles } from "../ArticlesPost/Articles";
import "./FeaturedBlog.scss";

export const FeaturedBlog = (props) => {
  return (
    <div className="featured__section">
      <div class="featured__section-content">
        <div className="content-header">
          <h2 class="section-title">Featured Articles</h2>
        </div>
        <div className="content-articles">
          {props.data.map((blog, index) => {
            if (blog.tags.includes("featured") && index < 4) {
              return <Articles blog={blog} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};
