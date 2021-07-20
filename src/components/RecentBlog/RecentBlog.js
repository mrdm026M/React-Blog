import React from "react";
import { Articles } from "../ArticlesPost/Articles";
import "./RecentBlog.scss";

function timeStampToString(ts) {
  const date = new Date(ts * 1000);
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}

export const RecentBlog = (props) => {
  return (
    <>
      <div className="recent-blog__section">
        <div class="recent-blog__section-content">
          <div className="content-header">
            <h2 class="section-title">Recent Articles</h2>
          </div>
          <div className="content-articles">
            {props.data.map((blog, index) => {
              if (blog.tags.includes("recent")) {
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
    </>
  );
};
