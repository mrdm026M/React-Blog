// import parse from "html-react-parser";
import parse from "html-react-parser";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { SingleBlogPost } from "../../components/SingleBlogPost/SingleBlogPost";
import "./BlogPage.scss";

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
    console.log(this.props);
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
    }
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <>
          <div className="blog-page__section">
            <Navbar />
            <SingleBlogPost
              title={this.state.article.title}
              author={this.state.article.author}
              date={timeStampToString(this.state.article.lastModified.seconds)}
              description={parse(this.state.article.content)}
            />
          </div>
          <Footer />
        </>
      );
    } else {
      return (
        <>
          <Navbar />
          <div className="blog-page__section">
            <h1>Loading...</h1>
          </div>
          <Footer />
        </>
      );
    }
    // console.log(this.state.article);
    // if (this.state.isLoaded) {
    //   return (
    //     <SingleBlogPost
    //       title={this.state.article.title}
    //       //  img={img}
    //       //  imgAlt={imgAlt}
    //       author={this.state.article.author}
    //       date={this.state.article.date}
    //       // description={parse(this.state.article.content)}
    //     />
    //   );
    // } else {
    //   return <div>Loading....</div>;
    // }
    // return (
    //   <>
    //     <div className="blog-page__section">
    //       <Navbar />
    //       {/* <SingleBlogPost
    //         title={this.props.location.title}
    //         // img={img}
    //         // imgAlt={imgAlt}
    //         author={this.props.location.author}
    //         date={this.props.location.date}
    //         description={this.props.location.content}
    //       />*/}
    //       <h1>View Article</h1>
    //       {/* <p>{this.props.location.title}</p> */}
    //     </div>
    //     <Footer />
    //   </>
    // );
  }
}

export default withRouter(BlogPage);
