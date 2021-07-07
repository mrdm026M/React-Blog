import React from "react";
import { Link } from "react-router-dom";
import "./Articles.scss";

export const Articles = ({
  img = "",
  imgAlt = "post-image",
  title = "Post Title",
  author = "Post Author",
  date = "Post Date",
  description = "Post Description",
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
    <div className="articles">
      <article className="snippet">
        <img src={img} alt={imgAlt} className="snippet__image" />
        <div className="snippet__content">
          <h3 className="snippet__title">
            <Link to={data}>{title}</Link>
          </h3>
          <p className="snippet__meta">
            by <span>{author}</span> on <span>{date}</span>
          </p>
          <p className="snippet__body">{description}</p>
          <div className="hero__section__btn">
            <button className="btn__primary">
              <Link to={data}>Continue Reading</Link>
            </button>
          </div>
        </div>
      </article>
      <hr />
    </div>
  );
};
