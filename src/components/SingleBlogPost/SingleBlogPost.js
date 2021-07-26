import React from "react";
import "./SingleBlogPost.scss";

export const SingleBlogPost = ({
  title = "title",
  img = "/",
  imgAlt = "imgAlt",
  author = "author",
  date = "date",
  content = "content",
}) => {
  return (
    <div className="single-blog-post__section">
      <div className="heading">
        <h1>{title}</h1>
      </div>
      <div className="author_date">
        <p className="snippet__meta">
          by <span>{author}</span> on <span>{date}</span>
        </p>
      </div>
      <div className="img_imgAlt">
        <img src={img} alt={imgAlt} className="snippet__image" />
        <figcaption>This is a test</figcaption>
      </div>
      <div className="description">{content}</div>
    </div>
  );
};
