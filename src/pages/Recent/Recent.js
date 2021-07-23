import React, { Component } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { RecentBlog } from "../../components/RecentBlog/RecentBlog";
import firebase from "../../Config/Fire";
import "./Recent.scss";

const db = firebase.firestore();

class Recent extends Component {
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
              id: doc.id,
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
        <div className="recent__section">
          <Navbar />
          <main>
            {this.state.isLoaded ? (
              <RecentBlog data={this.state.blogs} />
            ) : null}
          </main>
        </div>
        <Footer />
      </>
    );
  }
}

export default Recent;
