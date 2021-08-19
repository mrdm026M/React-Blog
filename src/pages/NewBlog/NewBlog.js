import React, { Component } from "react";
import {} from "./NewBlog.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import fire from "../../Config/Fire";
import Navbar from "../../components/Navbar/Navbar";
import { v4 as uuidv4 } from "uuid";
import Compressor from "compressorjs";

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
        description: "",
        tags: [],
        createDate: new Date(),
        featuredImg: "",
        featuredImgText: "",
        isPublished: false,
        lastModified: new Date(),
        createUserID: "",
      },
    };
  }

  modules = {
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

  // title function
  onChangeArticleTitle = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        title: value,
      },
    });
  };

  // author function
  onChangeArticleAuthor = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        author: value,
      },
    });
  };

  // description function
  onChangeArticleDescription = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        description: value,
      },
    });
  };

  // img alt text function
  onChangeArticleImageAltText = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        featuredImgText: value,
      },
    });
  };

  // tags function
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

  // content function
  onChangeArticleContent = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        content: value,
      },
    });
  };

  // publish function
  onChangeArticlePublish = (value) => {
    this.setState({
      article: {
        ...this.state.article,
        isPublished: value === "true",
      },
    });
  };

  // img compress
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

  // image function
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

  // upload img function
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

  // submit function
  submitArticle = () => {
    const article = this.state.article;
    article.createUserID = this.props.auth.uid;
    db.collection("Articles")
      .add(article)
      .then((res) => {
        // console.log(res);
        alert("Blog Published successfully");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="NewBlog__Editor">
        <Navbar />
        <div className="NewBlog__Editor__content">
          {/* heading */}
          <div className="heading">
            <h2>Write a new Blog!</h2>
          </div>

          {/* editor */}
          <div className="editor__content">
            <div className="main__content">
              {/* title */}
              <div className="title">
                <label className="NewBlog__Title">Title</label>
                <input
                  type="text"
                  name="NewBlog__Title"
                  id="NewBlog__Title"
                  // placeholder=""
                  onChange={(e) => this.onChangeArticleTitle(e.target.value)}
                  value={this.state.article.title}
                />
              </div>

              <div className="author__tags">
                {/* author */}
                <div className="author">
                  <label className="NewBlog__Author">Author</label>
                  <input
                    type="text"
                    name="NewBlog__Author"
                    id="NewBlog__Author"
                    // placeholder=""
                    onChange={(e) => this.onChangeArticleAuthor(e.target.value)}
                    value={this.state.article.author}
                  />
                </div>

                {/* tags */}
                <div className="tags">
                  <label className="NewBlog__Tags">Tags</label>
                  <input
                    type="text"
                    name="NewBlog__Tags"
                    id="NewBlog__Tags"
                    placeholder="press enter to add tags"
                    onKeyUp={this.addTags}
                  />
                  <ul>
                    {this.state.article.tags.map((tag) => {
                      return (
                        <li>
                          <span>{tag}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* description */}
              <div className="description">
                <label className="NewBlog__Description">Description</label>
                <input
                  type="text"
                  name="NewBlog__Description"
                  id="NewBlog__Description"
                  // placeholder=""
                  onChange={(e) =>
                    this.onChangeArticleDescription(e.target.value)
                  }
                  value={this.state.article.description}
                />
              </div>

              {/* content */}
              <div className="content">
                <ReactQuill
                  ref={(e) => (this.quill = e)}
                  value={this.state.article.content || ""}
                  onChange={(e) => this.onChangeArticleContent(e)}
                  theme="snow"
                  modules={this.modules}
                  formats={this.formats}
                />
              </div>

              {/* image atl text */}
              <div className="imageAltText">
                <label className="NewBlog__ImageAltText">
                  Image Description
                </label>
                <input
                  type="text"
                  name="NewBlog__ImageAltText"
                  id="NewBlog__ImageAltText"
                  // placeholder=""
                  onChange={(e) =>
                    this.onChangeArticleImageAltText(e.target.value)
                  }
                  value={this.state.article.featuredImgText}
                />
              </div>

              {/* image */}
              <div className="image">
                <label className="NewBlog__Image">Image</label>
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
            </div>
            <hr />
            {/* submit */}
            <div className="publish__blog">
              <div className="publish__section">
                {/* publish */}
                <div className="publish">
                  <label className="NewBlog__Publish">Publish</label>
                  <select
                    name="NewBlog__Publish"
                    id="NewBlog__Publish"
                    onChange={(e) =>
                      this.onChangeArticlePublish(e.target.value)
                    }
                  >
                    <option value="false">False</option>
                    <option value="true">True</option>
                  </select>
                </div>

                {/* image preview */}
                {this.state.hasFeatureImage ? (
                  <img
                    src={this.state.article.featuredImg}
                    alt={this.state.article.featuredImgText}
                  />
                ) : null}
              </div>

              {/* submit button */}
              <div className="submit">
                <button onClick={(e) => this.submitArticle()}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
