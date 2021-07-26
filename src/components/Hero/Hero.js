import React from "react";
import { LatestPost } from "../LatestPost/LatestPost";
import {} from "./Hero.scss";

export const Hero = (props) => {
  if (props.data.tags.includes("latest")) {
    return (
      <>
        <div
          className="hero__section"
          style={{
            backgroundImage: `url(${props.data.featuredImg})`,
          }}
        >
          <LatestPost blog={props.data} />
        </div>
      </>
    );
  } else {
    return null;
  }
};
