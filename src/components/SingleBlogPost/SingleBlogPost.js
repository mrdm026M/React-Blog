import React from "react";
import "./SingleBlogPost.scss";

export const SingleBlogPost = ({
  title = "single blog post title",
  img = "",
  author = "single blog post author",
  date = "single blog post date",
  description = "single blog post description",
}) => {
  return (
    <div className="single-blog-post__section">
      <div className="heading">
        <h1>{title}</h1>
      </div>
      <div className="author_date">
        <p class="snippet__meta">
          by <span>{author}</span> on <span>{date}</span>
        </p>
      </div>
      <div className="img_imgAlt">
        <img src={img} alt="imageAlt" className="snippet__image" />
        <figcaption>This is a test</figcaption>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};
