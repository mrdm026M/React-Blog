import React from "react";
import "./SingleBlogPost.scss";

export const SingleBlogPost = ({
  title = "",
  img = "/",
  imgAlt = "imgAlt",
  author = "",
  date = "",
  content = "",
}) => {
  return (
    <div className="single__blog__post">
      <div className="single-blog-post__section">
        <div className="heading">
          <h1>{title}</h1>
        </div>
        <div className="author_date">
          <p className="snippet__meta">
            <span>{author}</span> | <span>{date}</span>
          </p>
        </div>
        <div className="img_imgAlt">
          <img src={img} alt={imgAlt} className="snippet__image" />
        </div>
        <div className="description">{content}</div>
      </div>
    </div>
  );
};
