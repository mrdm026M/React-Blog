import React, { Component } from "react";
// import { Categories } from "../../components/Categories/Categories";
import { FeaturedBlog } from "../../components/FeaturedBlog/FeaturedBlog";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../../components/Hero/Hero";
import { Navbar } from "../../components/Navbar/Navbar";
import firebase from "../../Config/Fire";
import "./Home.scss";

const db = firebase.firestore();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      blogs: [],
    };
  }

  componentDidMount() {
    this.getMyBlogs();
  }

  getMyBlogs = () => {
    db.collection("Articles")
      .get()
      .then((docs) => {
        if (!docs.empty) {
          let allBlogs = [];
          docs.forEach(function (doc) {
            const blog = {
              id: doc,
              ...doc.data(),
            };
            allBlogs.push(blog);
          });
          this.setState(
            {
              blogs: allBlogs,
            },
            () => {
              this.setState({
                isLoaded: true,
              });
            }
          );
        }
      });
  };

  render() {
    return (
      <>
        <div className="home__section">
          <Navbar />
          <main>
            {this.state.isLoaded
              ? this.state.blogs.map((blog, index) => {
                  console.log(this.state.blogs);
                  return (
                    <>
                      <Hero key={index} data={blog} />
                    </>
                  );
                })
              : null}
            <FeaturedBlog data={this.state.blogs} />
          </main>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
