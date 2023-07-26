import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q13 from "../Questions/Q13";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch13 = () => {
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
  const code1 = `for(statement-1 ; statement-2 ; statement-3){...}`;
  const code2 = `#include <iostream>
using namespace std;
int main(){
    int i;
    for(i=0; i<5; i++){
        cout<<”My name is Joseph”<<endl;
    }
    return 0;
}`;
  const code3 = `#include <iostream>
using namespace std;
int main(){
    int i;
    for(i=0; i<5; i++){
        cout<<i<<endl;
    }
    return 0;
}`;
  const code4 = `#include <iostream>
using namespace std;
int main(){
    for(int i=0 ; i<5 ; i++){
        for(int j=0 ; j<5 ; j++){
            cout<<Hi there!;
        }
    }
    return 0;
}`;
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
            <Link to="/tutorials/Chapter12">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter14">
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
              <br />
              <div class="start content">For Loop</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                For Loop:
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Loop executes the same block of code again and again until the
                given condition is true.
              </p>
              <br />
              <b>Syntax of for loop:</b>
              <br />
              <div style={containerStyle}>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code1}
                </SyntaxHighlighter>
              </div>
              <br />
              <br />
              <b>Statement-1</b> – assign value to a variable. <br />
              <b>Statement-2</b> – check condition. <br />
              <b>Statement-3</b> – change the value of variable. <br />
              <br />
              <b>Example:</b>
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>forLoop.cpp</b>

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
              This will print name 5 times.
              <br />
              <br />
              <b>Dry Run:</b>
              <br />
              <b> 1.</b> Statement-1 shows i=0. Statement-2 checks condition, i
              is less than 5(true), move inside loop and print name. <br />
              <b>2.</b> Statement-3 will increment i, now i=1. Statement-2
              checks condition, i is less than 5(true), move inside loop and
              print name. <br />
              <b>3.</b> Statement-3 will increment i, now i=2. Statement-2
              checks condition i is less than 5(true), move inside loop and
              print name. <br />
              <b>4.</b> Statement-3 will increment i, now i=3. Statement-2
              checks condition i is less than 5(true), move inside loop and
              print name. <br />
              <b>5.</b> Statement-3 will increment i, now i=4. Statement-2
              checks condition i is less than 5(true), move inside loop and
              print name. <br />
              <b>6.</b> Statement-3 will increment i, now i=5. Statement-2
              checks condition i is less than 5(false), loop will terminate and
              control moves to next line. <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>forLoop.cpp</b>

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
              <b>Nested Loops:</b>
              <br />
              Nested loops are loops within loops. <br />
              <b>Description:</b>
              <br />
              when we have two nested loops then, when outer loop runs one-time,
              inner loops complete its all iterations. After that control moves
              to the outer loop. Again, the outer loop runs a second time and
              inner loop completes its all iterations. This process will
              continue until the outer loop completes its all iterations. <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>forLoop.cpp</b>

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
              This will print your name 25 times.
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
              <Q13 />
            </div>
            <Link to="/tutorials/Chapter12">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter14">
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
export default Ch13;
