import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { SingleBlogPost } from "../../components/SingleBlogPost/SingleBlogPost";
import "./BlogPage.scss";

export const BlogPage = (props) => {
  const title = props.location.title;
  const img = props.location.img;
  const imgAlt = props.location.imgAlt;
  const author = props.location.author;
  const date = props.location.date;
  const description = props.location.description;

  return (
    <>
      <div className="blog-page__section">
        <Navbar />
        <SingleBlogPost
          title={title}
          img={img}
          imgAlt={imgAlt}
          author={author}
          date={date}
          description={description}
        />
      </div>
      <Footer />
    </>
  );
};
