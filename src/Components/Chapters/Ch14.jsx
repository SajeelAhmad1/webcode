import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q14 from "../Questions/Q14";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch14 = () => {
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
  const code1 = `//initialize variable
while(check condition)
{
//code
//change value of variable
}`;
  const code2 = `#include <iostream>
using namespace std;
int main(){
    int a = 10;
    while(i>0){
        cout<<"My name is John"<<endl;
        a--;
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
    int a = 5;
    do{
      cout<<"My name is John\\n";
      a--;
    }while(a>0);
    return 0;
}`;

  const code5 = `#include <iostream>
using namespace std;
int main(){
    int i = 0;
    do{
        cout<<"I am 20 years old."<<endl;
        i++;  //if you do not increment value, infinite loop will run and never be terminated.
    }
    while(i<10);
    return 0;
}`;
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
            <Link to="/tutorials/Chapter13">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter14b">
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
              <div class="start content">While and do-while Loop</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                While Loop:
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Loop executes the same block of code again and again until the
                given condition is true.
              </p>
              <br />
              <b>Syntax of while loop:</b>
              <br />
              <div style={containerStyle}>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code1}
                </SyntaxHighlighter>
              </div>
              <br />
              <br />
              <br />
              <b>Example:</b>
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>while.cpp</b>

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
              This will print name 10 times
              <br />
              <br />
              <b>Program to print couting from 1 to 5:</b> <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>while.cpp</b>

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
              <p style={{ backgroundColor: "#FBEEAC", padding: "15px" }}>
              If we write true in condition, this while loop will become infinite. You can use ctrl + c on your 
              keyboard to stop an infinite loop. </p>
              <br />
              
              <b>Do-While Loop:</b>
              <br /> While and do while loops are almost the same. The only
              difference is that in do while loop, first iteration is done
              without checking condition. <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>do-while.cpp</b>

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
              <div className="quiz">
                <Link to="/quizes/quiz14">
                  <button class="ui secondary button">Start Quiz</button>
                </Link>
              </div>
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>
              
              <br />
              <br />
              <Q14 />
            </div>
            <Link to="/tutorials/Chapter13">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter14b">
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
export default Ch14;
