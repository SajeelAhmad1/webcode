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

const Ch26 = () => {
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

class Shape {
public:
    virtual void draw() {
        // Base class implementation (can be overridden).
        cout << "Drawing a shape." << endl;
    }
};

class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing a circle." << endl;
    }
};

class Square : public Shape {
public:
    void draw() override {
        cout << "Drawing a square." << endl;
    }
};

int main() {
    Circle circle;
    circle.draw();
    Square square;
    square.draw();
    return 0;
}`
const code2 = `#include <iostream>
using namespace std;
class Shape {
public:
    virtual void draw() const {
        cout << "Drawing a shape." << endl;
    }
    virtual double area() const {
        return 0.0;
    }
};

class Circle : public Shape {
public:
    Circle(double radius) : radius_(radius) {}

    void draw() const override {
        cout << "Drawing a circle." << endl;
    }

    double area() const override {
        return 3.14 * radius_ * radius_;
    }

private:
    double radius_;
};

class Square : public Shape {
public:
    Square(double side) : side_(side) {}

    void draw() const override {
        cout << "Drawing a square." << endl;
    }

    double area() const override {
        return side_ * side_;
    }

private:
    double side_;
};

int main() {
    Circle circle(5.0);
    Square square(4.0);

    // Using Pointers to Base Class to achieve Run-time Polymorphism (Dynamic binding)
    Shape* shape1 = &circle;
    Shape* shape2 = &square;

    shape1.draw(); 
     cout << "Area of Circle: " << shape1->area() <<  endl; 

    shape2.draw(); 
     cout << "Area of Square: " << shape2->area() <<  endl; 

    return 0;
}
`

  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
              <Link to="/tutorials/Chapter25">
                <button
                  class="ui primary button"
                  style={{ flex: 1, minWidth: "100px", height: "40px" }}
                >
                  Previous
                </button>
              </Link>
              <Link to="/tutorials/Chapter27">
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
              <div class="start content">Polymorphism</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Polymorphism
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Polymorphism - poly means many and morphs means forms. Polymorphism is the ability 
                of an object to have more than one forms. For example, we have two or more objects from the same base 
                class with methods with same name but their implementation is different. <br />
                <br />
                There are two types of Polymorphism:
                <br />
                
                    <ul class='ui unordered list'>
                        <li>Static or compile time Polymorphism.</li>
                        <li>Dynamic or run time Polymorphism.</li>
                    </ul><br />
                    We have to use inheritance in order to achieve polymorphism. Inherited methods with same name 
                    performs different tasks. For example, we have a parent class animal and it has makeSound method 
                    but we have animals which make different sounds. Lion roars and dog barks. Therefore, we redefine 
                    makeSound method in lion class and dog class. <br /><br />
                    
                      
                      <b>Comiple time polymorphism:</b><br />
                      Compile time polymorphism is achieved with the help of function overloading and operator overloading.
                      In this tutorial, we will discuss only about function overloading.
                      <br />
                      <b>Example:</b><br />

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
                      {code1}
                    </SyntaxHighlighter>
                  </div>
                </div>



                <br />
                      <b>Run time polymorphism:</b><br />
                      Run time polymorphism is achieved with the help of virtual functions and dynamic binding. 
                      <br /><b>Virtual Functions:</b><br />A function that is in the parent class but redefined in the child class is called a virtual function. 
                      Virtual function is declared using "virtual" keyword.
                      <br />
                      <b>Example:</b><br />

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
              </p><br />
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>

              <br />
              <br />
              {/* <Q26 /> */}
            </div>
            <Link to="/tutorials/Chapter25">
              <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button>
            </Link>
            <Link to="/tutorials/Chapter27">
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
export default Ch26;
