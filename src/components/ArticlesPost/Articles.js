import React from "react";
import { NavLink } from "react-router-dom";
import "./Articles.scss";

export const Articles = ({
  image = "",
  imageAlt = "post-image",
  title = "Post Title",
  author = "Post Author",
  date = "Post Date",
  description = "Post Description",
}) => {
  return (
    <div className="articles">
      <article className="snippet">
        <img src={image} alt={imageAlt} className="snippet__image" />
        <div className="snippet__content">
          <h3 className="snippet__title">
            <NavLink to="/">{title}</NavLink>
          </h3>
          <p className="snippet__meta">
            by <span>{author}</span> on <span>{date}</span>
          </p>
          <p className="snippet__body">{description}</p>
          <div className="hero__section__btn">
            <button className="btn__primary">
              <NavLink to="/">Continue Reading</NavLink>
            </button>
          </div>
        </div>
      </article>
      <hr />
    </div>
  );
};
