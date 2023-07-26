import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q2 from "../Questions/Q2";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch2 = () => {
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
  const cppCode = `#include <iostream>
using namespace std;

int main() {
  cout << "Hello, World! ";
  return 0;
}`;
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
            <Link to="/tutorials/Chapter1">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter3">
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
              <div class="start content">Getting Started</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Environment to write code:
              </h2>
              <div class="ui clearing divider"></div>
              <p style={{ backgroundColor: "", padding: "" }}>
                You need a text editor to write your code. To compile your code,
                you need a compiler which will convert your code to machine
                understandable language, which will then machine understand.
                <br />
                <b>Compiler:</b>
                <br /> A program that translates instructions written in a
                high-level language into the equivalent machine language For
                this purpose, we use Integrated Development Environment (IDE)
                which is used to edit and compile the code. There are different
                IDEs available like:
                <div className="margin">
                  <ul class="ui list">
                    <li>Code Blocls</li>
                    <li>Eclipse</li>
                    <li>VS Code</li>
                    <li>Dev C++</li>
                  </ul>
                </div>
                <br />
                These are all free and you can use any of these to run your
                code. <br />
                <br />
              </p>
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Note:</b> Web based IDEs can also work but their
                functionality is limited.
              </p>
              <br />
              <p>
                You can download VS Code from their{" "}
                <a class="vs-link" href="https://code.visualstudio.com/">
                  official website.
                </a>{" "}
              </p>
              <br />
              <p>
                After setting up the environment, open the new file. Write the
                following code and save it with the extension ".cpp"
              </p>
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>helloworld.cpp</b>

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
                    {cppCode}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />

              <br />
              <p>
                Your code should be error free so that it will execute without
                any error. <br />
                We will understand this code in the next chapter.
              </p>
              <br />
              <hr />
              <br />
              <br />
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>
              <br />
              <br />
              <br />
              <Q2 />
            </div>
            <Link to="/tutorials/Chapter1">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter3">
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
export default Ch2;
