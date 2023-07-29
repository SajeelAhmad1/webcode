import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q28 from "../Questions/Q28";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch28 = () => {
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
const code1 = `try {
    // here goes the code and if there is an error throw exception
    throw exception; 
  }
  catch () {
    // Block of code to handle errors
  }`
const code2 = `#include <iostream>
#include <string>
using namespace std;

int main() {
	long long int ph;
    try{
		cout<<"Enter Phone number "<<endl;
		cin>>ph;
		if(ph){
			cout<<"0"<<ph<<endl;
		}
		else
		throw 505;
		}
		catch(...){
			cout<<"Phone numer should be digits."<<endl;
		}

    return 0;
}`
const code3 = `#include <iostream>
#include <string>
using namespace std;

int main() {
		int con;
	cout<<"Press 1 if you are human'.";
	cin>>con;
   try {
  	if (con == 1) {
    	cout << "Access granted - you are human.";
  	} else {
    	throw 505;
  	}
}
	catch (...) {
  		cout << "Access denied - You are robot.\n";
	}
   return 0;
}`

  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
              <Link to="/tutorials/Chapter27">
                <button
                  class="ui primary button"
                  style={{ flex: 1, minWidth: "100px", height: "40px" }}
                >
                  Previous
                </button>
              </Link>
              <Link to="/tutorials/Chapter29">
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
              <div class="start content">Exceptions</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Handling Exceptions
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                When we execute C++ code, you can face errors. You need to handle these errors. 
                These errors can be due to wrong input or may be due to some other reason.
                We have to tackle these errors. When a wrong input is given by a user, an error message 
                should be shown on the screen.
                <br /><br />
                <b>Syntax</b>
                <div style={containerStyle}>
                  <div style={{ fontSize: "25px" }}></div>
                  <div ref={divRef}>
                    <SyntaxHighlighter language="cpp" style={darcula}>
                      {code1}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <br />
                <p style={{ backgroundColor: "#FBEEAC", padding: "15px" }}>
                In try block, we write our normal code. <br />
                If there is a problem in code, the throw keyword throws exception. <br />
                The catch block has the code which is to be executed in case of error. </p>
                <br />
                Let us explore an example.
                <div style={containerStyle}>
                  <div style={{ fontSize: "25px" }}>
                    <b>class.cpp</b>

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
                <b>Explanation:</b><br />
                In this example, our variable ph which takes input phone number in integers but if user input 
                alphabet, it will throw an error.
                <br />
                <br />
                <b>Another Example:</b><br />
                <div style={containerStyle}>
                  <div style={{ fontSize: "25px" }}>
                    <b>class.cpp</b>

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
              </p><br /> 
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>

              <br />
              <br />
              <Q28 />
            </div>
            <Link to="/tutorials/Chapter27">
              <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button>
            </Link>
            <Link to="/tutorials/Chapter29">
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
export default Ch28;
