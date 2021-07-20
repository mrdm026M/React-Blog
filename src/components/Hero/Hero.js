import React from "react";
import { LatestPost } from "../LatestPost/LatestPost";
import {} from "./Hero.scss";

function timeStampToString(ts) {
  const date = new Date(ts * 1000);
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}

export const Hero = (props) => {
  return (
    <>
      {props.data.tags.includes("latest") ? (
        <div
          className="hero__section"
          // style={{
          //   backgroundImage: `url(${blog.image})`,
          // }}
        >
          <LatestPost
            title={props.data.title}
            author={props.data.author}
            date={timeStampToString(props.data.createDate.seconds)}
            description={props.data.content}
          />
        </div>
      ) : null}
    </>
  );
};
