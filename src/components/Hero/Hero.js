import React from "react";
import { NavLink } from "react-router-dom";
import blogs from "../../assets/data/blogData";
import {} from "./Hero.scss";

export const Hero = () => {
  return (
    <>
      {blogs.map((blog, index) => {
        if (blog.tags.includes("latest")) {
          return (
            <div
              key={index}
              className="hero__section"
              style={{
                backgroundImage: `url(${blog.image})`,
              }}
            >
              <div className="bg-blend">
                <div class="hero__section__content">
                  <article className="post__snippet">
                    <h1 class="snippet__title">
                      <NavLink to="/">{blog.title}</NavLink>
                    </h1>
                    <p class="snippet__meta">
                      by <span>{blog.author}</span> on <span>{blog.date}</span>
                    </p>
                    <p class="snippet__body">{blog.description}</p>
                    <div className="hero__section__btn">
                      <button className="btn__primary">
                        <NavLink to="/">Continue Reading</NavLink>
                      </button>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};
