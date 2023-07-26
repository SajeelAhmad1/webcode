import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q12 from "../Questions/Q12";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch12 = () => {
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
  const code1 = `switch(expression) {
case x:
    // code block
    break;
case y:
    // code block
    break;
default:
    // code block
}`;
  const code2 = `#include<iostream>
using namespace std;
int main(){
    int a;
    cout<<”Enter an integer from 1 to 5”;
    cin>>a;
    switch(a){
    case 1:
    	cout<<”a is equal to 1”<<endl;
    	break;
    case 2:
    	cout<<”a is equal to 2”<<endl;
    	break;
    case 3:
    	cout<<”a is equal to 3”<<endl;
    	break;
    case 4:
    	cout<<”a is equal to 4”<<endl;
    	break;
    case 5:
    	cout<<”a is equal to 5”<<endl;
    	break;
    default:
    	cout<<”a is not in range from 1 to 5”<<endl;
    	break;
    }
    return 0;
}`;
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
            <Link to="/tutorials/Chapter11">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter13">
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
              <div class="start content">Switch Statements</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Switch Statements:
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                A switch statement is a control flow statement found in many
                programming languages. It provides a way to select and execute
                different code blocks based on the value of a given expression.
              </p>
              <br />
              <div style={containerStyle}>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code1}
                </SyntaxHighlighter>
              </div>
              <br />
              <br />
              <br />
              <b>Description:</b>
              <br />
              1. The switch statement begins with the keyword switch, followed
              by an expression enclosed in parentheses. This expression is often
              referred to as the "selector" or "switch variable.". <br />
              2. After the opening curly brace. you define individual cases
              using the case keyword, followed by a constant value or expression
              that represents a specific case to be matched. <br />
              3. Each case block consists of one or more statements that will be
              executed when the corresponding case matches the value of the
              selector expression. The statements within each case block are
              typically indented for readability. <br />
              4. At the end of each case block, it's essential to include the
              break statement to exit the switch block. Without the break
              statement, execution will continue to the next case, which may not
              be the desired behavior. <br />
              5. Optionally, you can include a default case, which is executed
              when none of the previous cases match the value of the selector
              expression. It acts as a fallback option when no specific case
              matches. <br />
              6. The closing curly brace marks the end of the switch statement.{" "}
              <br />
              <br />
              <br />
              <b>Example:</b>
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>switch.cpp</b>

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
                Do not forget to put break after every case. <br />
                Default case is optional. It is executed when no case is
                executed.
              </p>
              <div className="quiz">
                <Link to="/quizes/quiz12">
                  <button class="ui secondary button">Start Quiz</button>
                </Link>
              </div>
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>
              
              <br />
              <br />
              <Q12 />
            </div>
            <Link to="/tutorials/Chapter11">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter13">
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
export default Ch12;
