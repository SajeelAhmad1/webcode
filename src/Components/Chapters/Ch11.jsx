import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q11 from "../Questions/Q11";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch11 = () => {
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
  const code1 = `If ( condition ){
    //code
}
else{
    //code
}`;
  const code2 = `#include<iostream>
using namespace std;
int main(){
    int a=10;
    int b=20;
    if(a>b){
        cout<<"a is greater than b.\\n";
    }
    else{
        cout<<"b is greater than a.\\n";
    }
    return 0;
}`;
  const code3 = `#include<iostream>
using namespace std;
int main(){
    int a=10;
    int b=20;
    if(a>b){
        a++;
        cout<<a<<endl;
    }
    else if(b>a){
        b++;
        cout<<b<<endl;
    }
    else{
        //in this condition a will be equal to b
        cout<<"a is equal to b";
    }
    return 0;
}`;
  const code4 = `#include<iostream>
using namespace std;
int main(){
    int a=10, b=20, c=30;
    if( a<b && a<c ){
        // for this block to execute both conditions, a<b and a<c should be true
        cout<<"a is less than b and c";
    }
    else{
        cout<<"a is not the smallest";
    }
    if( a==10 || b==10 ){
        // this block of code will be executed if only one condition, a==10 or b==10 is true
        cout<<"a = 10 or b =  10";
    }
    return 0;
}`;
  const code5 = `#include<iostream>
using namespace std;
int main(){
    int a = 100, b = 20, c = 30;
    if( a>b ){
	    if(a>c ){
		    cout<<"a is the largest";
	    }
    }
    else{
        cout<<"a is not the largest";
    }
    return 0;
}`;
  const code6 = `If(condition){...}
If(condition){...}
Else{...}`;
  const code7 = `datatype var_name = Condition ? if true then this will be execute : else this will be executed`;
  const code8 = `#include<iostream>
using namespace std;
int main(){
    string res = a > b ? "a is greater than b" : "a is less than b";
    cout<<res<<endl;
    return 0;
}`;
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
            <Link to="/tutorials/Chapter10">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter12">
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
              <div class="start content">Conditional Statements</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Conditional Statements:
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Conditional Statements checks the condition or you can say
                compares two variables using comparison operators and performs
                action.
              </p>
              <br />
              If-else is used as conditional statement. In if else statements,
              if one condition is true, it will be executed and all others will
              be ignored. <br />
              <br />
              <b>Syntax:</b>
              <br />
              <div style={containerStyle}>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code1}
                </SyntaxHighlighter>
              </div>
              <br />
              <br />
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Note: </b>
                <br />
                <ul class="ui unordered list">
                  <li>If requires condition.</li>
                  <li>Else does not require condition.</li>
                </ul>
              </p>
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>if-else.cpp</b>

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
              <b>Else if:</b>
              <br />
              <br />
              if you want to check conditions more than one time then use else
              if. <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>if-else.cpp</b>

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
              <b>If else with logical operators</b>
              <br />
              If you want to check two condition in single if statement, you
              will use logical operators. <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>if-else.cpp</b>

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
              <b>Nested if else:</b>
              <br />
              In nested if else, we use if statement within if statement. <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>if-else.cpp</b>

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
                    {code5}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />
              <b>Dangling else Grammar:</b>
              <br />
              If you are using multiple if statements and single else statement,
              then there is dangling else problem. <br />
              <SyntaxHighlighter language="cpp" style={darcula}>
                {code6}
              </SyntaxHighlighter>
              Compiler does not know that with which if, else will go. <br />
              <br />
              <b>Ternary Operator:</b>
              <br />
              It is also used to check condition like if else. It is a single
              lined statement. <br />
              <b>Syntax:</b>
              <SyntaxHighlighter language="cpp" style={darcula}>
                {code7}
              </SyntaxHighlighter>
              <br />
              <br />
              <b>Example:</b>
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>if-else.cpp</b>

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
                    {code8}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Note: </b>You can use ternary operator when logic is simple.
                It makes your code more compact and easy to use. <br />
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
              <Q11 />
            </div>
            <Link to="/tutorials/Chapter10">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter12">
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
export default Ch11;
