import React from "react";
import { Link } from "react-router-dom";
import "./LatestPost.scss";

function timeStampToString(ts) {
  const date = new Date(ts * 1000);
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}

export const LatestPost = (props) => {
  const data = {
    pathname: "blog/" + props.blog.id + "/" + props.blog.title,
    state: {
      article: props.blog,
    },
  };

  return (
    <div className="bg-blend">
      <div className="hero__section__content">
        <article className="post__snippet">
          <h1 className="snippet__title">
            <Link to={data}>{props.blog.title}</Link>
          </h1>
          <p className="snippet__meta">
            by <span>{props.blog.author}</span> on{" "}
            <span>{timeStampToString(props.blog.createDate.seconds)}</span>
          </p>
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
