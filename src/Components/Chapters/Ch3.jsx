import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch3 = () => {
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
  const code0 = `Line 4: cout<<"Hello World!" - it is used to print Hello World!`;
  const code1 = `#include <iostream>
using namespace std;
int main(){
    return 0;
}`;
  const code2 = `#include <iostream>
using namespace std;
int main(){
    cout<<"Hello World!";
    return 0;
}`;
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
            <Link to="/tutorials/Chapter2">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter4">
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
              <div class="start content">Basic Syntax</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Basic Syntax:
              </h2>
              <div class="ui clearing divider"></div>
              <p style={{ backgroundColor: "", padding: "" }}>
                <div style={containerStyle}>
                  <b>Base Code:</b>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code1}
                  </SyntaxHighlighter>
                </div>
              </p>
              <br />
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Note:</b> This is the base of C++ code. We have to write this
                code everytime we are writing C++ program.
              </p>
              <br />
              <p>
                Now we will understand the example from the previous chapter.{" "}
                <br />
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
                      {code2}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </p>
              <br />
              <b>Description of Code:</b>
              <br />
              <br />
              <span>
                <b>Line 1: </b>
              </span>
              iostream is a library in C++ that provides input and output
              functionality to interact with the console or other input/output
              devices. <br />
              <span>
                <b>Line 2: </b>
              </span>
              using namespace std; means that we can use names for objects and
              variables from the standard library. <br />
              <span>
                <b>Line 3: </b>
              </span>
              int main(){} this is the starting point for the execution of your
              program. Any code inside its curly brackets {} will be executed.{" "}
              <br />
              <span></span>
              <SyntaxHighlighter
                language="cpp"
                style={{ backgroundColor: "white" }}
              >
                {code0}
              </SyntaxHighlighter>
              <span>
                <b>Line 5: </b>
              </span>
              return 0; execution of main function stops here. This is the last
              line of the main function which is executed. Everything written
              after it is not executed.
              <br /> <br />
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Note: </b> <br />
                <div className="margin">
                  <ul class="ui list">
                    <li>
                      You need to put a semicolon (;) after every line of code
                      or more specifically after every instruction.
                    </li>
                    <li>
                      C++ compiler ignores white spaces. You can write all code
                      in one line but multiple lines make the code more
                      readable.{" "}
                    </li>
                    <li>
                      C++ is case sensitive language. E.g. "John" is not same as
                      "john".
                    </li>
                    <li>
                      If you have any confusion, you can read this tutorial
                      again and do not worry about line1 and line2. If you do
                      not understand these lines, just ignore and move ahead.
                      You will understand them later on.
                    </li>
                  </ul>
                </div>
              </p>
            </div>
            <Link to="/tutorials/Chapter2">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter4">
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
export default Ch3;
