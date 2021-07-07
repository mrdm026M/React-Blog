import React from "react";
import { Link } from "react-router-dom";
import "./LatestPost.scss";

export const LatestPost = ({
  img = "",
  imgAlt = "",
  title = "latest title",
  author = "latest author",
  date = "latest date",
  description = "latest description",
}) => {
  const data = {
    pathname: `/blog/${title}`,
    title: `${title}`,
    img: `${img}`,
    imgAlt: `${imgAlt}`,
    author: `${author}`,
    date: `${date}`,
    description: `${description}`,
  };

  return (
    <div className="bg-blend">
      <div class="hero__section__content">
        <article className="post__snippet">
          <h1 class="snippet__title">
            <Link to={data}>{title}</Link>
          </h1>
          <p class="snippet__meta">
            by <span>{author}</span> on <span>{date}</span>
          </p>
          <p class="snippet__body">{description}</p>
          <div className="hero__section__btn">
            <button className="btn__primary">
              <Link to={data}>Continue Reading</Link>
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};
