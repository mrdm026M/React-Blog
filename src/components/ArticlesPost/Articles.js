import React from "react";
import { Link } from "react-router-dom";
import "./Articles.scss";

function timeStampToString(ts) {
  const date = new Date(ts * 1000);
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}

export const Articles = (props) => {
  const data = {
    pathname: "blog/" + props.blog.id + "/" + props.blog.title,
    state: {
      article: props.blog,
    },
  };

  return (
    <div className="articles">
      <article className="snippet">
        <img
          src={props.blog.featuredImg}
          alt={props.blog.featuredImgText}
          className="snippet__image"
        />
        <div className="snippet__content">
          <h3 className="snippet__title">
            <Link to={data}>{props.blog.title}</Link>
          </h3>
          <p className="snippet__meta">
            by <span>{props.blog.author}</span> on{" "}
            <span>{timeStampToString(props.blog.createDate.seconds)}</span>
          </p>
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
