import React, { Component } from "react";
import {} from "./NewBlog.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import fire from "../../Config/Fire";
import Navbar from "../../components/Navbar/Navbar";
import { v4 as uuidv4 } from "uuid";
import Compressor from "compressorjs";
// import { reject } from "async";

const db = fire.firestore();
const storageRef = fire.storage();

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
    // toolbar: toolbarOptions,
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],
        ["link", "image"],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction

        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ["clean"], // remove formatting button
      ],
      handlers: {
        image: () => this.quillImageCallBack(),
      },
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

  onChangeArticleAuthor = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        author: value,
      },
    });
  };

  addTags = (event) => {
    if (event.key === "Enter") {
      this.setState({
        article: {
          ...this.state.article,
          tags: [...this.state.article.tags, event.target.value],
        },
      });
      event.target.value = "";
    }
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

  fileCompress = (file) => {
    return new Promise((resolve, reject) => {
      new Compressor(file, {
        file: "File",
        quality: 0.5,
        maxHeight: 640,
        maxWidth: 640,
        success(file) {
          return resolve({
            success: true,
            file: file,
          });
        },
        error(err) {
          return resolve({
            success: false,
            message: err.message,
          });
        },
      });
    });
  };

  quillImageCallBack = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      const file = input.files[0];
      const compressState = await this.fileCompress(file);
      if (compressState.success) {
        const fileName = uuidv4();
        storageRef
          .ref()
          .child("Articles/" + fileName)
          .put(compressState.file)
          .then(async (snapshot) => {
            const downloadURL = await storageRef
              .ref()
              .child("Articles/" + fileName)
              .getDownloadURL();
            let quill = this.quill.getEditor();
            const range = quill.getSelection(true);
            quill.insertEmbed(range.index, "image", downloadURL);
          });
      }
    };
  };

  uploadImageCallBack = (e) => {
    return new Promise(async (resolve, reject) => {
      const file = e.target.files[0];
      const fileName = uuidv4();
      storageRef
        .ref()
        .child("Articles/" + fileName)
        .put(file)
        .then(async (snapshot) => {
          const downloadURL = await storageRef
            .ref()
            .child("Articles/" + fileName)
            .getDownloadURL();
          resolve({
            success: true,
            data: { link: downloadURL },
          });
        });
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
        <Navbar />
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

            <div className="newBlog__author">
              <label className="newBlogAuthor"> Blog Author </label>
              <input
                type="text"
                name="newBlogAuthor"
                id="newBlogAuthor"
                placeholder=""
                onChange={(e) => this.onChangeArticleAuthor(e.target.value)}
                value={this.state.article.author}
              />
            </div>

            <div className="newBlog__tags">
              <label className="newBlogTags"> Blog Tags </label>
              <ul>
                {this.state.article.tags.map((tag) => {
                  return (
                    <li>
                      <span>{tag}</span>
                    </li>
                  );
                })}
              </ul>
              <input
                type="text"
                name="newBlogTags"
                id="newBlogTags"
                placeholder="please enter to add tags"
                onKeyUp={this.addTags}
              />
            </div>

            <div className="newBlog__content">
              <ReactQuill
                ref={(e) => (this.quill = e)}
                value={this.state.article.content || ""}
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

            <div className="newBlog__image">
              <label className="newBlogImage"> Image </label>
              <input
                type="file"
                name="imageFile"
                id="imageFile"
                accept="image/*"
                onChange={async (e) => {
                  const uploadState = await this.uploadImageCallBack(e);
                  if (uploadState.success) {
                    this.setState({
                      hasFeatureImage: true,
                      article: {
                        ...this.state.article,
                        featuredImg: uploadState.data.link,
                      },
                    });
                  }
                }}
              />
            </div>
            {this.state.hasFeatureImage ? (
              <img src={this.state.article.featuredImg} alt="" />
            ) : null}
          </div>
          <div className="submit">
            <button onClick={(e) => this.submitArticle()}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
