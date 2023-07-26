import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch5 = () => {
  const divRef = useRef(null);

  const copyContent = () => {
    const divContent = divRef.current.innerText;
    navigator.clipboard
      .writeText(divContent)
      .then(() => {
        toast.success("Content copied!", { position: "top-center" });
      })
      .catch((error) => {
        toast.error("Error copying content:", error, {
          position: "top-center",
        });
      });
  };
  const containerStyle = {
    width: "100%",
    backgroundColor: "#A9A9A9",
    padding: "20px",
    borderRadius: "3px",
    marginLeft: "0%",
  };
  const code1 = `#include <iostream>
using namespace std;  
int main() {
    //I am printing hello world
    cout << "Hello World!";
    return 0;
}
  `;
  const code2 = `#include <iostream>
using namespace std;
int main() {
    /*I am printing hello world
    This is a multi-lined comment*/
    cout << "Hello World!";
    return 0;
}
  `;

  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
            <Link to="/tutorials/Chapter4">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter6">
                <button
                  class="ui primary button"
                  style={{
                    flex: 1,
                    minWidth: "100px",
                    height: "40px",
                    float: "right",
                  }}
                >
                  <span> Next</span>
                </button>
              </Link><br />
              <div class="start content">Comments</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Comments:
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Comments are used to explain your code and they have nothing to
                do with the compiler. Compiler ignores your comment and do not
                consider them the part of your code. They just make your code
                more readable. <br />
              </p>
              <br />
              <b>Types:</b>
              <ul class="ui unordered list">
                <li>Single-lines Coments</li>
                <li>Multi-lined Comments</li>
              </ul>
              <br />
              <b>Syntax:</b>
              <br />
              <br />
              <b class="text-xl">Single-lined Comment:</b>
              <br />
              Put two forward slashes before a line.
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>single-linedcmt.cpp</b>

                  <i
                    class="copy icon"
                    onClick={copyContent}
                    style={{
                      cursor: "pointer",
                      float: "right",
                      fontSize: "20px",
                    }}
                  ></i>
                </div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code1}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <b class="text-xl">Multi-lined Comment:</b>
              <br />
              Put /* at the start and */ at the end.
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>multi-linedcmt.cpp</b>

                  <i
                    class="copy icon"
                    onClick={copyContent}
                    style={{
                      cursor: "pointer",
                      float: "right",
                      fontSize: "20px",
                    }}
                  ></i>
                </div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code2}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Note: </b>
                <br />
                <ul class="ui unordered list">
                  <li>
                    If you do not want some lines of your code to execute, put
                    them in comments.
                  </li>
                  <li>
                    To comment a line, click on that line to place cursor on
                    that line and then press "Ctrl + /".
                  </li>
                  <li>
                    Comments are just used to increase the readability of your
                    code.
                  </li>
                </ul>
              </p>
              <div className="quiz">
                <Link to="/quizes/quiz5">
                  <button class="ui secondary button">Start Quiz</button>
                </Link>
              </div>
            </div>
            <Link to="/tutorials/Chapter4">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter6">
                <button
                  class="ui primary button"
                  style={{
                    flex: 1,
                    minWidth: "100px",
                    height: "40px",
                    float: "right",
                  }}
                >
                  <span> Next</span>
                </button>
              </Link>
          </div>
        </div>
      </Sidebar>
      <div class="sideBarBody">
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};
export default Ch5;
