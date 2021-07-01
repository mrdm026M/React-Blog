import React from "react";
import { NavLink } from "react-router-dom";
import tags from "../../assets/data/tagsData";
import "./Categories.scss";

export const Categories = () => {
  return (
    <div className="categories__section">
      <div className="categories">
        <div className="content-header">
          <h2 class="section-title">Search Articles By Tags</h2>
        </div>
        <div className="section-content">
          <ul>
            {tags.map((tag) => {
              return (
                <li>
                  <NavLink to="/">#{tag}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
