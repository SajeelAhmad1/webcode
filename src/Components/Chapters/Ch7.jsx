import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q7 from "../Questions/Q7";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch7 = () => {
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
  const code1 = `>>`;
  const code2 = `#include <iostream>
using namespace std;
int main(){
    int a; 
    cout<<"Enter value to store in a\\n"<<endl; 
    //after writing value press enter
    //you have to write int value, as datatype of a is integer
    cin >> a;
    cout << "Value of a is " << a << endl;
    return 0;
}`;
  const code3 = `#include <iostream>
using namespace std;
int main(){
    int num1, num2;
    cout<<"Enter value of first number \\n";
    cin>>num1;
    cout<<"Enter value of second number \\n";
    cin>>num2;
    int sum, diff, quotient, product;
    sum = num1+num2;
    diff = num1-num2;
    quotient = num1/num2;
    product = num1*num2;
    cout<<"Sum is "<<sum<<endl;
    cout<<"Difference is "<<diff<<endl;
    cout<<"Quotient is "<<quotient <<endl;
    cout<<"Product is "<<product<<endl;
    return 0;
}`;
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
            <Link to="/tutorials/Chapter6">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter8">
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
              <div class="start content">Taking User Input</div>
            </h2>

            <div class="main-body-color ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Taking User Input:
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                We have already studied the use of cout object along with
                insertion operator. It is used to print string/text (sequence of
                characters like "My age is 20.") as well as variables on screen.
                <br />
                <br />
                For taking input from user, we use cin object along with
                extraction operator. <br />
                <div style={containerStyle}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code1}
                  </SyntaxHighlighter>
                </div>
                <br />
                cin is pronounced as "see-in"
                <br />
                <br />
              </p>
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Point: </b>When we take input from the user, we have to store
                it in a variable.
              </p>
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>input.cpp</b>

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
                <ul class="ui unordered list">
                  <li>We use insertion operator after cout.</li>
                  <li>cout is used for printing.</li>
                  <li>We use extraction operator after cin.</li>
                  <li>cin is used to take user input.</li>
                </ul>
              </p>
              <br />
              <br />
              <b>Building a simple calculator:</b>
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>calculator.cpp</b>

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
              <b>Congratulations you have build your first mini project.</b>
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
              <Q7 />
            </div>
            <Link to="/tutorials/Chapter6">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter8">
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
export default Ch7;
