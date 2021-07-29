import React, { Component } from "react";
import {} from "./NewBlog.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import fire from "../../Config/Fire";

const db = fire.firestore();

export default class NewBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: "",
        content: "",
        author: "",
        tags: [],
        createDate: new Date(),
        featuredImg: "",
        isPublished: false,
        lastModified: new Date(),
        createUserID: "",
      },
    };
  }

  modules = {
    toolbar: {
      container: [
        [
          {
            header: "1",
          },
          {
            header: "2",
          },
          {
            font: [],
          },
        ],
        [
          {
            size: [],
          },
        ],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          {
            list: "ordered",
          },
          {
            list: "bullet",
          },
          {
            indent: "-1",
          },
          {
            indent: "+1",
          },
        ],
        ["link", "image"],
        ["clean"],
        ["code-block"],
      ],
    },
    clipboard: {
      matchVisual: false,
    },
  };

  formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "code-block",
  ];

  onChangeArticleTitle = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        title: value,
      },
    });
  };

  onChangeArticleContent = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        content: value,
      },
    });
  };

  onChangeArticlePublish = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        isPublished: value === "true",
      },
    });
  };

  submitArticle = () => {
    const article = this.state.article;
    article.createUserID = this.props.auth.uid;
    db.collection("Articles")
      .add(article)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="newBlog__section">
        <div className="newBlog__content">
          <div className="heading">
            <h2> New Blog </h2>
          </div>
          <div className="newBlog__main_content">
            <div className="newBlog__title">
              <label className="newBlogTitle"> Blog Title </label>
              <input
                type="text"
                name="newBlogTitle"
                id="newBlogTitle"
                placeholder=""
                onChange={(e) => this.onChangeArticleTitle(e.target.value)}
                value={this.state.article.title}
              />
            </div>
            <div className="newBlog__content">
              <ReactQuill
                ref={(e) => (this.quill = e)}
                value={this.state.article.content}
                onChange={(e) => this.onChangeArticleContent(e)}
                theme="snow"
                modules={this.modules}
                formats={this.formats}
              />
            </div>
          </div>
          <div className="newBlog__publish_section">
            <div className="newBlog__publish">
              <label className="newBlogPublish"> Publish </label>
              <select
                name="newBlogPublish"
                id="newBlogPublish"
                onChange={(e) => this.onChangeArticlePublish(e.target.value)}
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </select>
            </div>
          </div>
          <div className="submit">
            <button onClick={(e) => this.submitArticle()}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
