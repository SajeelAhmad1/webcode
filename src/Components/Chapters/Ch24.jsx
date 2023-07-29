import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q24 from "../Questions/Q24";
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
  const code1 = `#include <iostream>
using namespace std;

class Employee{
  private:
    int salary;

  public:
    // Setter function setting salary of private data member. Its 
    // name could also be setSalary or any other name you want
    void setter(int salary) {
    	//this is a pointer which refers to the members of class. 
      	this->salary = salary;
    }
    // Getter function getting salary of private data member. Its 
    // name could also be getSalary or any other name you want
    int getter() {
    	return salary;
    }
};

int main() {
  Employee emp1;
  emp1.setter(50000);
  cout << emp1.getter();
  
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
              <div class="start content">Encapsulation</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Encapsulation
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Encapsulation is the wrapping up of class members under a single unit. In OOP, we say
                that encapsulation is the binding of data and functions that manipulates them. It is used to
                hide sensitive data from users. If you want to access private
                data, you will use getter and setter functions. <br /><br />
                <b>Getter and Setter Functions:</b>
                <br />
                These are public functions which are used to get and set the
                value of private data. They are not something special and
                implemented like simple functions. Getter or setter are not the keywords. 
                These are just simple terms used for the functions. The function which sets 
                the value of data members is called setter, and the function with the help of which 
                we can access values in the main function is called getter function.
                <br />
                <br />
                <b>Encapsulation and real life example:</b><br />
                There is a library in a school. A librarian keeps the records of books.
                A student takes a book and does not return after the issued due date. The librarian 
                needs the data(can be private) of student to contact him. He will contact the students 
                information section of school which will provide him data (getter function) to get data of the student. He does not has direct access to the data.
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
                  This is encapsulation. We have declared the data member private and get it with the help of
                  some function. We are also setting its value with some function(Setting data with the help 
                  of some function is not the condition of encapsulation. We can also set
                  the value in the class by simple expression, int salary = 10;)
                </p>
                <br /><br />
                <b>Fully Encapsulated Class:</b><br />
                If a class has all its data members private, it is called fully encapsulated class.
                    <br /><br />
                    <b>Why Encapsulation:</b><br />
                    <ul class='ui unordered list'>
                        <li>You can hide your data.</li>
                        <li>Guarantees security.</li>
                        <li>If you want your class members unchanged, encapsulation will help you.</li>
                    </ul>
                    <div className="quiz">
                <Link to="/quizes/quiz26">
                  <button class="ui secondary button">Start Quiz</button>
                </Link>
              </div>
              </p><br />
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>

              <br />
              <br />
              <Q24 />
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
