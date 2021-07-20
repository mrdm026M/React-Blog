import React from "react";
import { Articles } from "../ArticlesPost/Articles";
import "./FeaturedBlog.scss";

function timeStampToString(ts) {
  const date = new Date(ts * 1000);
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}

export const FeaturedBlog = (props) => {
  console.log(props.data);
  return (
    <div className="featured__section">
      <div class="featured__section-content">
        <div className="content-header">
          <h2 class="section-title">Featured Articles</h2>
        </div>
        <div className="content-articles">
          {props.data.map((blog, index) => {
            if (blog.tags.includes("featured") && index < 4) {
              return (
                <Articles
                  key={index}
                  // img={blog.image}
                  // imgAlt={blog.imageAlt}
                  title={blog.title}
                  author={blog.author}
                  date={timeStampToString(blog.createDate.seconds)}
                  description={blog.content}
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
