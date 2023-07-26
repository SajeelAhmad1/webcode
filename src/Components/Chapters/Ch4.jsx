import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q4 from "../Questions/Q4";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch4 = () => {
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
  const code1 = `Insertion Operator = "<<"`;
  const code2 = `#include <iostream>
using namespace std;
int main() {
  cout<<"Hi there!";
return 0;
}`;
  const code3 = `#include <iostream>
using namespace std;
int main() {
    cout<<"Hi there!\\n";
    cout<<"My name is John Smith.";
return 0;
}`;

  const code4 = `#include <iostream>
using namespace std;
int main() {
    cout<<"Hi there."<<endl;
    cout<<"My name is John Smith.";
return 0;
}`;
  const code5 = `cout<<"\\n";`;
  const code6 = `cout<<"\\t";`;
  const code7 = `cout<<"\\a";`;
  const code8 = `cout<<"\\b";`;
  const code9 = `cout<<"\\f";`;
  const code10 = `cout<<"\\r";`;
  const code11 = `cout<<"\\\\";`;
  const code12 = `cout<<"\\'";`;
  const code13 = `cout<<"\\?";`;
  const code14 = `cout<<"\\0";`;
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
            <Link to="/tutorials/Chapter3">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter5">
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
              <div class="start content">Printing Output</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Printing Output:
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                The cout object alongwith insertion operator is used to print
                text on the screen
              </p>
              <div style={containerStyle}>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code1}
                </SyntaxHighlighter>
              </div>
              <br />
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Note:</b> cout is pronounced as “see-out”.
              </p>
              <br />
              <p>
                If you want to print anything on screen you have to write cout,
                then insertion operator, then your text in double quotation
                marks in the main function. <br />
                <br />
                <b>Example</b>
                <div style={containerStyle}>
                  <div style={{ fontSize: "25px" }}>
                    <b>output.cpp</b>

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
              <b>Do not forget to put ; at the end</b>
              <br />
              <br />
              <b>Adding line breaks:</b>
              <br />
              <br />
              <b>\n : </b> it forces the cursor to change its position to the
              beginning of the next line on the screen. This results in a new
              line. <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>output.cpp</b>

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
                    {code3}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />
              <b>endl manipulator:</b> Functionality of endl or end line
              operator is same as \n, it is up to you which one you want to use.
              Commonly \n is used. <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>output.cpp</b>

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
                    {code4}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />
              <b>Different Escape Sequences:</b>
              <table class="ui celled table">
                <thead>
                  <tr>
                    <th>Escape Sequence</th>
                    <th>Description</th>
                    <th>Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>\n</td>
                    <td>New line</td>
                    <td>
                      <SyntaxHighlighter
                        language="cpp"
                        style={{ backgroundColor: "white" }}
                      >
                        {code5}
                      </SyntaxHighlighter>
                    </td>
                  </tr>
                  <tr>
                    <td>\t</td>
                    <td>Tab - prints four spaces</td>
                    <td>
                      <SyntaxHighlighter
                        language="cpp"
                        style={{ backgroundColor: "white" }}
                      >
                        {code6}
                      </SyntaxHighlighter>
                    </td>
                  </tr>
                  <tr>
                    <td>\a</td>
                    <td>Beep sound</td>
                    <td>
                      <SyntaxHighlighter
                        language="cpp"
                        style={{ backgroundColor: "white" }}
                      >
                        {code7}
                      </SyntaxHighlighter>
                    </td>
                  </tr>
                  <tr>
                    <td>\b</td>
                    <td>Backspace</td>
                    <td>
                      <SyntaxHighlighter
                        language="cpp"
                        style={{ backgroundColor: "white" }}
                      >
                        {code8}
                      </SyntaxHighlighter>
                    </td>
                  </tr>
                  <tr>
                    <td>\f</td>
                    <td>Form feed</td>
                    <td>
                      <SyntaxHighlighter
                        language="cpp"
                        style={{ backgroundColor: "white" }}
                      >
                        {code9}
                      </SyntaxHighlighter>
                    </td>
                  </tr>
                  <tr>
                    <td>\r</td>
                    <td>Carriage return</td>
                    <td>
                      <SyntaxHighlighter
                        language="cpp"
                        style={{ backgroundColor: "white" }}
                      >
                        {code10}
                      </SyntaxHighlighter>
                    </td>
                  </tr>
                  <tr>
                    <td>\\</td>
                    <td>It adds backslash</td>
                    <td>
                      <SyntaxHighlighter
                        language="cpp"
                        style={{ backgroundColor: "white" }}
                      >
                        {code11}
                      </SyntaxHighlighter>
                    </td>
                  </tr>
                  <tr>
                    <td>\'</td>
                    <td>Single quote</td>
                    <td>
                      <SyntaxHighlighter
                        language="cpp"
                        style={{ backgroundColor: "white" }}
                      >
                        {code12}
                      </SyntaxHighlighter>
                    </td>
                  </tr>
                  <tr>
                    <td>\?</td>
                    <td>Question mark</td>
                    <td>
                      <SyntaxHighlighter
                        language="cpp"
                        style={{ backgroundColor: "white" }}
                      >
                        {code13}
                      </SyntaxHighlighter>
                    </td>
                  </tr>
                  <tr>
                    <td>\0</td>
                    <td>Null character</td>
                    <td>
                      <SyntaxHighlighter
                        language="cpp"
                        style={{ backgroundColor: "white" }}
                      >
                        {code14}
                      </SyntaxHighlighter>
                    </td>
                  </tr>
                </tbody>
              </table>
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
              <Q4 />
            </div>
            <Link to="/tutorials/Chapter3">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter5">
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
export default Ch4;
