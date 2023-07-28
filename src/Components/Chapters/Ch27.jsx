import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
// import Q27 from "../Questions/Q27";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch24 = () => {
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
  const code1 = `class Parent{
    public:
    //delete the definition of virtual function and put it equal to 0.
    virtual void makeSound() = 0;
};`;

  const code2 = `#include <iostream>
using namespace std;
//this is the abstract class
class Animals{
    public:
 		virtual void behavior() = 0;
};
 
class Lion : public Animals{
 	public:
 		void behavior(){
 			cout<<"Lion rules. \n";
		 }
};
 
class Donkey : public Animals{
 	public:
 		void behavior(){
 			cout<<"Donkey works hard. \n";
		 }
};
 
int main(){
 	Animals *animal1 = new Lion();
 	/*as animal1 is a pointer to animal class therefore we are 
	using -> operator instead of dot operator for accessing the members*/
 	animal1->behavior();
 	
 	Animals *animal2 = new Donkey();
 	animal2->behavior();
    return 0;
}`;

  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
              <Link to="/tutorials/Chapter23">
                <button
                  class="ui primary button"
                  style={{ flex: 1, minWidth: "100px", height: "40px" }}
                >
                  Previous
                </button>
              </Link>
              <Link to="/tutorials/Chapter25">
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
              <div class="start content">Abstraction</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Virtual and pure virtual functions
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                <b>Virtual Functions:</b>
                <br />
                A virtual function is a function which is defined in base class
                and redefined in derived class.
                <br />
                Virtual functions give us the ability of run time polymorphism.{" "}
                <br />
                We have discussed its implementation in our previous tutorial.
                <br />
                <b>Pure Virtual Functions:</b>
                <br />
                Pure virtual function is the function declared in the parent
                class but the parent class does not have its definition /
                implementation. But all the child classes have their own
                implementation of that function.
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
                <b>Abstract Class:</b>
                <br />
                A class which has atleast one pure virtual function is called an
                abstract class. In the above code, the class named "Parent" is an abstract class. <br />
                <br />
                <p style={{ backgroundColor: "#FBEEAC", padding: "15px" }}>
                  <b>Note: </b>We can not make object of abstract class.
                </p>
                <br />
                <br />
                <b>Abstraction:</b>
                <br />
                Abstraction is the hiding of implementation details of an object
                and exposing only the relevant and essential details to the
                users. <br />
                <b>For example,</b> when you feel headache you take medicine. You only
                take medicine. You get well and you do not know what is
                happening inside your body after taking medicine. That hidden
                details are abstractive for you. In short, in abstraction,
                complex details are hidden behind simple methods. <br />
                If you do not understand the example do not sweat it it, just move. <br />
                <br />
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
              </p>
              <br />
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>

              <br />
              <br />
              {/* <Q27 /> */}
            </div>
            <Link to="/tutorials/Chapter23">
              <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button>
            </Link>
            <Link to="/tutorials/Chapter25">
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
export default Ch24;
