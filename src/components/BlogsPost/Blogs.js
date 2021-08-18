import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.scss";

function timeStampToString(ts) {
  const date = new Date(ts * 1000);
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}

export const Blogs = (props) => {
  const data = {
    pathname: "blog/" + props.blog.id + "/" + props.blog.title,
    state: {
      article: props.blog,
    },
  };

  return (
    <div className="blogs">
      <div class="container">
        <div class="snippet__image">
          <img src={props.blog.featuredImg} alt={props.blog.featuredImgText} />
        </div>
        <div class="snippet__title">
          <h3>
            <Link to={data}>{props.blog.title}</Link>
          </h3>
        </div>
        <div class="snippet__meta">
          <p>
            <span>{props.blog.author}</span> |{" "}
            <span>{timeStampToString(props.blog.createDate.seconds)}</span>
          </p>
        </div>
        <div class="snippet__desc">
          <p>{props.blog.description}</p>
        </div>
        <div class="snippet__btn">
          <button>
            <Link to={data}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
