import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q22 from "../Questions/Q22";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch22 = () => {
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

class Student {
	private: 
	//all the members declared here are private
	public:
	//all the members declared here are public
	protected:
	//all the members declared here are protected
	
};

int main() {
    Student std;
}`

const code2 = `#include <iostream>
using namespace std;

class Student {
	private:
		//we can not access private members
    	int marks, rollNo;
	public:
		Student(int marks, int rollNo){
			this->marks = marks;
			this->rollNo = rollNo;
		}
		//only way to get private members
		void getData(){
			cout<<"Marks = "<<marks<<endl;
			cout<<"Roll no = "<<rollNo<<endl;
		}
	
};

int main() {
    Student std(100, 1234);
    //in main function, we can not assign values to data members because we can not access them here.
    //we can not print marks by "cout<<std.marks"
    std.getData();
    return 0;
}`
const code3 = `#include <iostream>
using namespace std;

class Student {
	int marks;  //as by default, members of class are private, marks will be private 
	public:
		void getData(){
			cout<<marks<<endl;
		}
};

int main() {
    Student std;
}
`
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
              <Link to="/tutorials/Chapter21">
                <button
                  class="ui primary button"
                  style={{ flex: 1, minWidth: "100px", height: "40px" }}
                >
                  Previous
                </button>
              </Link>
              <Link to="/tutorials/Chapter23">
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
              <div class="start content">Access Specifiers</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Access Specifiers
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Access Specifiers control the accessibility of class members outside the class. They are used usually with data members. <br /> <br />
                There are three types of access specifiers:
                <ul class = "ui unordered list">
                    <li>public</li>
                    <li>private</li>
                    <li>protected</li>
                </ul>
                <br /><br />
                <b>public:</b>
                <br />
                
                <span>When we declare our members public, we can access them outside of the class.
                    <br />We have already discussed examples of public access modifier. 
                </span>
                <br />
                <b>private:</b>
                <br />
                <span>When we declare our members private, we can access them only inside of the class.
                </span><br />


                <br />
                <br />
                
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
                    <b>Note: </b><br />
                    <b>public members</b> can be modified from outside the class. <br />
                    <b>private members</b> can not be directly changed from outside the class. We have to get their address in main function 
                    with the help of some public function and then at that address, we can change the value.
                  </p><br />
                <br />
                <b>Example:</b>
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
                  </div><br />
                  <p style={{ backgroundColor: "#FBEEAC", padding: "15px" }}>
                    <b>Note: </b>By default members of class are private. If class has data members
                    they will be private if do not specify access specifier.
                  </p><br />
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
                  </div><br />
                  <b>protected access specifier:</b><br />We will discuss this in inheritance.
            </p>
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>
              
              <br />
              <br />
              <Q22 />
            </div>
            <Link to="/tutorials/Chapter21">
              <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button>
            </Link>
            <Link to="/tutorials/Chapter23">
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
export default Ch22;
