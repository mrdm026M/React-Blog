// import parse from "html-react-parser";
import parse from "html-react-parser";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { SingleBlogPost } from "../../components/SingleBlogPost/SingleBlogPost";
import firebase from "../../Config/Fire";
import "./BlogPage.scss";

const db = firebase.firestore();

function timeStampToString(ts) {
  const date = new Date(ts * 1000);
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      isLoaded: false,
    };
  }

  componentDidMount() {
    if (typeof this.props.location.state !== "undefined") {
      if (this.props.location.state.hasOwnProperty("article")) {
        this.setState(
          {
            article: this.props.location.state.article,
          },
          () => {
            this.setState({
              isLoaded: true,
            });
          }
        );
      }
    } else {
      this.getArticleByID(this.props.match.params.id);
    }
  }

  getArticleByID = (aID) => {
    db.collection("Articles")
      .doc(aID)
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.setState(
            {
              article: doc.data(),
            },
            () => {
              this.setState({
                isLoaded: true,
              });
            }
          );
        } else {
          this.props.history.push({ pathname: "/" });
        }
      });
  };

  render() {
    if (this.state.isLoaded) {
      return (
        <>
          <div className="blog-page__section">
            <Navbar />
            <SingleBlogPost
              title={this.state.article.title}
              author={this.state.article.author}
              img={this.state.article.featuredImg}
              imgAlt={this.state.article.featuredImgText}
              date={timeStampToString(this.state.article.lastModified.seconds)}
              content={parse(this.state.article.content)}
            />
          </div>
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <div className="blog-page__section">
            <Navbar />
            <h1>Loading...</h1>
          </div>
          <Footer />
        </>
      );
    }
  }
}

export default withRouter(BlogPage);
