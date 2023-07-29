import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q26 from "../Questions/Q26";
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
  
class MathOperations {
  public:
      int add(int a, int b) {
          return a + b;
      }
  
      int add(int a, int b, int c) {
          return a + b + c;
      }
};
  
int main() {
    MathOperations mathOp;
    cout << mathOp.add(2, 3) << endl;         // Output: 5
    cout << mathOp.add(2, 3, 4) << endl;     // Output: 9
  
    return 0;
}`;
  const code2 = `#include <iostream>
using namespace std;
  
class Animal {
  public:
    virtual void make_sound() {
      cout << "Animal sound" <<  endl;
    }
};
  
class Dog : public Animal {
  public:
    void make_sound() override {
      cout << "Woof! Woof!" <<  endl;
    }
};
  
class Cat : public Animal {
  public:
    void make_sound() override {
      cout << "Meow!" <<  endl;
    }
};
  
  void animal_sound(Animal& animal) {
    animal.make_sound();
  }
  
int main() {
  Dog dog;
  Cat cat;
  animal_sound(dog);   // Output: "Woof! Woof!"
  animal_sound(cat);   // Output: "Meow!"
  
  return 0;
}`;

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
                Polymorphism - poly means many and morphs means forms.
                Polymorphism is the ability of an object to have more than one
                forms. For example, we have two or more objects from the same
                base class with methods with same name but their implementation
                is different. <br />
                <br />
                <b>For example: </b>When we use "+" operator with integers it
                performs addition but when we use it with string, it does
                concatenation. <br />
                <br />
                There are two types of Polymorphism:
                <br />
                <ul class="ui unordered list">
                  <li>Static/early binding or compile time Polymorphism.</li>
                  <li>Dynamic/late binding or run time Polymorphism.</li>
                </ul>
                <br />
                We have to use inheritance in order to achieve polymorphism.
                Inherited methods with same name performs different tasks. For
                example, we have a parent class animal and it has makeSound
                method but we have animals which make different sounds. Lion
                roars and dog barks. Therefore, we redefine makeSound method in
                lion class and dog class. <br />
                <br />
                <b>Comiple time polymorphism:</b>
                <br />
                Compile time polymorphism is achieved with the help of method
                overloading and operator overloading. In this tutorial, we will
                discuss only about function overloading.
                <br />
                <b>Example:</b>
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
                      {code1}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <br />
                <b>Run time polymorphism:</b>
                <br />
                Run time polymorphism is achieved with the help of virtual
                functions and dynamic binding.
                <br />
                <b>Virtual Functions:</b>
                <br />A virtual function is a member function which is declared
                within a base class and is re-defined (overridden) by a derived
                class. When you refer to a derived class object using a pointer
                or a reference to the base class, you can call a virtual
                function for that object and execute the derived class’s version
                of the function. They are declared with the "virtual" keyword.
                <br />
                <b>Example:</b>
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
                <br />
                Overloading and overriding are two different terms.
                <table class="ui definition table">
                  <tbody>
                    <tr>
                      <td class="seven wide column">Overloading</td>
                      <td>Overriding</td>
                    </tr>
                    <tr>
                      <td>
                        In overloading, functions have same name and their
                        return types may or may not be different.
                      </td>
                      <td>
                        In over-riding, we redefine the function in derived
                        class. The overriding functions have same name.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        They have different number of parameters or if number of
                        parameters is same their data type or sequence must be
                        different.
                      </td>
                      <td>
                        Method overriding occurs only when the names and the
                        type signatures of the two methods are identical.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="quiz">
                <Link to="/quizes/quiz28">
                  <button class="ui secondary button">Start Quiz</button>
                </Link>
              </div>
              </p>
              <br />
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>

              <br />
              <br />
              <Q26 />
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
