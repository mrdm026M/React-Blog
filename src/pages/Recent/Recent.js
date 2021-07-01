import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { RecentBlog } from "../../components/RecentBlog/RecentBlog";
import "./Recent.scss";

export const Recent = () => {
  return (
    <>
      <div className="recent__section">
        <Navbar />
        <main>
          <RecentBlog />
        </main>
      </div>
      <Footer />
    </>
  );
};
