import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { Navbar } from "../../components/Navbar/Navbar";
import "./Home.scss";

export const Home = () => {
  return (
    <div className="home__section">
      <Navbar />
      <main>
        <Hero />
        <section id="featured-articles" class="featured-articles">
          <div class="container flow">
            <h2 class="section-title text-center ">Featured articles</h2>
            <p class="text-center">
              Here is a sample of articles which I feel give you a good idea of
              what this site is all about.
            </p>
            <ul class="articles__list flow">
              <li>
                <article class="snippet">
                  <img
                    src="/assets/blog/article-1.jpg"
                    alt="This is a test"
                    class="snippet__image"
                  />
                  <h3 class="snippet__title">
                    <a href="/blog/my-first-article/">My First Article</a>
                  </h3>
                  <p class="snippet__meta">
                    by <span>Kevin Powell</span> on <span>Apr 30, 2021</span>
                  </p>
                  <p class="snippet__body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis accusantium sit illo neque rem omnis quaerat,
                    nam similique vitae delectus ad magni vel quo maxime, magnam
                    placeat. Reprehenderit, distinctio aliquam?
                  </p>
                  <a href="/blog/my-first-article/" class="btn btn--primary">
                    Continue Reading
                  </a>
                </article>
              </li>
              <li>
                <article class="snippet">
                  <img
                    src="/assets/blog/article-2.jpg"
                    alt="This is a test"
                    class="snippet__image"
                  />
                  <h3 class="snippet__title">
                    <a href="/blog/my-second-article/">My Second Article</a>
                  </h3>
                  <p class="snippet__meta">
                    by <span>Kevin Powell</span> on <span>May 14, 2021</span>
                  </p>
                  <p class="snippet__body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis accusantium sit illo neque rem omnis quaerat,
                    nam similique vitae delectus ad magni vel quo maxime, magnam
                    placeat. Reprehenderit, distinctio aliquam?
                  </p>
                  <a href="/blog/my-second-article/" class="btn btn--primary">
                    Continue Reading
                  </a>
                </article>
              </li>
              <li>
                <article class="snippet">
                  <img
                    src="/assets/blog/article-3.jpg"
                    alt="This is a test"
                    class="snippet__image"
                  />
                  <h3 class="snippet__title">
                    <a href="/blog/my-third-article/">My Third Article</a>
                  </h3>
                  <p class="snippet__meta">
                    by <span>Kevin Powell</span> on <span>May 27, 2021</span>
                  </p>
                  <p class="snippet__body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis accusantium sit illo neque rem omnis quaerat,
                    nam similique vitae delectus ad magni vel quo maxime, magnam
                    placeat. Reprehenderit, distinctio aliquam?
                  </p>
                  <a href="/blog/my-third-article/" class="btn btn--primary">
                    Continue Reading
                  </a>
                </article>
              </li>
              <li>
                <article class="snippet">
                  <img
                    src="/assets/blog/article-5.jpg"
                    alt="This is a test"
                    class="snippet__image"
                  />
                  <h3 class="snippet__title">
                    <a href="/blog/my-fifth-article/">My Fifth Article</a>
                  </h3>
                  <p class="snippet__meta">
                    by <span>Kevin Powell</span> on <span>Jun 14, 2021</span>
                  </p>
                  <p class="snippet__body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis accusantium sit illo neque rem omnis quaerat,
                    nam similique vitae delectus ad magni vel quo maxime, magnam
                    placeat. Reprehenderit, distinctio aliquam?
                  </p>
                  <a href="/blog/my-fifth-article/" class="btn btn--primary">
                    Continue Reading
                  </a>
                </article>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer class="site-footer">
        <p>© 2020 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};
