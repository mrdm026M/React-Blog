import React from "react";
import { Categories } from "../../components/Categories/Categories";
import { FeaturedBlog } from "../../components/FeaturedBlog/FeaturedBlog";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../../components/Hero/Hero";
import { Navbar } from "../../components/Navbar/Navbar";
import "./Home.scss";

export const Home = () => {
  return (
    <>
      <div className="home__section">
        <Navbar />
        <main>
          <Hero />
          <Categories />
          <FeaturedBlog />
        </main>
      </div>
      <Footer />
    </>
  );
};
