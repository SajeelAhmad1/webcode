import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q25 from "../Questions/Q25";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch25 = () => {
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
  const code1 = `
class ParentClassName{
	
};
class ChildClassName : access_modifier ParentClassName{
	
	
};
int main(){
	Child C1;
	/*with C1 you can access data members of Parent class except
	private, does not matter if they are not members of Child class*/
}`;
  const code2 = `#include<iostream>
using namespace std;
//parent class
class Vehicles{
  public:
    void canAccelerate(){
    cout<<"Accelerate\\n";
      }
};
//child class
class Volvo : public Vehicles{
  //class members if any    
};
int main(){
  Volvo v;
  /*canAccelerate() is the function of parent class 
  but it is inherited by the child class Volvo*/
  v.canAccelerate();
}`;
  const code3 = `class Parent {
	private:
		//data members if any
	public:
    	int publicMember;
};

class Child : public Parent {
    /* publicMember from Parent class is accessible here or 
	in the main function as a public member of Child class*/
};`;
  const code4 = `class Parent {
	private:
    	int privateMember;
    public:
    	//member functions if any
};

class Child : private Parent {
    // privateMember from BaseClass is accessible here within the member functions of DerivedClass.
    // It is not accessible through objects of DerivedClass.
};`;
  const code5 = `class Parent {
  protected:
      int protectedMember;
  };
  
  class Child : protected Parent {
      // protectedMember from BaseClass is accessible here as a protected member of DerivedClass.
  };`;
  const code6 = `class BaseClass {
  // Base class members
};

class DerivedClass : public BaseClass {
  // Derived class members
};`;
  const code7 = `class BaseClass1 {
  // Base class 1 members
};

class BaseClass2 {
  // Base class 2 members
};

class DerivedClass : public BaseClass1, public BaseClass2 {
  // Derived class members
};`;
  const code8 = `class Parent1 {
  // Parent1 class members
};

class Parent2 : public Parent1 {
  // Parent2 class members
};

class Child : public Parent2 {
  // Child class members
};`;
  const code9 = `class Father {
  // Parent class members
};

class Child1 : public Father {
  // Child1 class members
};

class Child2 : public Father {
  // Child2 class members
};`;
  const code10 = `class Animal {
  // Parent class members
};

class Mammal : public Animal {
  // Mammal class members
};

class Bird : public Animal {
  // Bird class members
};

class Bat : public Mammal, public Bird {
  // Bat class members
};`;
  const code11 = `derived-class-constructor-name(datatype para1,...) : base-class-constructor-name(args){
  //body of derived class constructor
}`;
  const code12 = `class Shape { 
  protected:
    int length;
    int width;
  
  public:
  
    // Parametrized constructor
    Shape(int length, int width) {
      this->length = length;
      this->width = width;
    }
  
};
  
class Triangle : public Shape {
  public:
    // Parametrized constructor
    Triangle(int base, int height) : Shape(base, height) {
  }
};`;
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
              <Link to="/tutorials/Chapter24">
                <button
                  class="ui primary button"
                  style={{ flex: 1, minWidth: "100px", height: "40px" }}
                >
                  Previous
                </button>
              </Link>
              <Link to="/tutorials/Chapter26">
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
              <div class="start content">Inheritance</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Inheritance
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Inheritance is the passing of traits from parents to their
                offsprings. <br />
                In computer science, we have parent class and child class. Child
                class inherit the attributes of parent class. <br />
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
                  <b>Parent class </b>is also called Base class or Super class.{" "}
                  <br />
                  <b>Child class </b>is also called Derived class or Sub class.{" "}
                  <br />
                  <b>Note: </b>It is a custom to start the name of class with
                  capital letter. But if you are fitting well with small letter,
                  there is no problem.
                </p>
                <br />
                <br />
                <b>Example</b>
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
                <b>Protected Data Members:</b>
                <br />
                Before we go into details, we should study about protected data
                members. When we inherit class using public access modifier,
                child class can access only public members of parent class. But
                if we want to access private members? Actually we can not access
                private members even in child class. For this purpose, we make
                data members protected. The protected data members can not be
                accessed in main function, they can only be accessed in child
                class. <br />
                <br />
                We have studied access specifiers of class members. Access
                specifiers are also used in inheritance. There are three modes
                of inheritance based on access specifiers. <br />
                <ul class="ui unordered list">
                  <li>Public mode</li>
                  <li>Private mode</li>
                  <li>Protected mode</li>
                </ul>
                Lets explore some details.
                <br />
                <b style={{ fontSize: "20px" }}>
                  Access Specifiers in inheritance:
                </b>
                <br />
                <br />
                <p style={{ backgroundColor: "#FBEEAC", padding: "15px" }}>
                  <b>public access specifier in inheritance:</b>
                  <br />
                  When a class is inherited using a public access specifier, all
                  public members of the parent class become public members of
                  the child class.
                </p>
                <br />
                <div style={containerStyle}>
                  <div style={{ fontSize: "25px" }}></div>
                  <div ref={divRef}>
                    <SyntaxHighlighter language="cpp" style={darcula}>
                      {code3}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <br />
                <br />
                <p style={{ backgroundColor: "#FBEEAC", padding: "15px" }}>
                  <b>private access specifier in inheritance:</b>
                  <br />
                  When a class is inherited with a private access specifier, all
                  members of the parent class (whether they are public,
                  protected, or private) become private members of the child
                  class.
                </p>
                <br />
                <div style={containerStyle}>
                  <div style={{ fontSize: "25px" }}></div>
                  <div ref={divRef}>
                    <SyntaxHighlighter language="cpp" style={darcula}>
                      {code4}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <br />
                <p style={{ backgroundColor: "#FBEEAC", padding: "15px" }}>
                  <b>protected access specifier in inheritance:</b>
                  <br />
                  When a class is inherited with a protected access specifier,
                  all public members of the base class become protected members
                  of the derived class. Protected members of the base class can
                  be accessed directly through objects of the derived class or
                  within member functions of the derived class.
                </p>
                <br />
                <div style={containerStyle}>
                  <div style={{ fontSize: "25px" }}></div>
                  <div ref={divRef}>
                    <SyntaxHighlighter language="cpp" style={darcula}>
                      {code5}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <br />
                <br />
                <b>Levels of Inheritance:</b>
                <br />
                <ul class="ui unordered list">
                  <li>Single Inheritance</li>
                  <li>Multiple Inheritance</li>
                  <li>Multi-level Inheritance</li>
                  <li>Hierarchical Inheritance</li>
                  <li>Hybrid Inheritance</li>
                </ul>
                <br />
                <b>Single Inheritance:</b>
                <br />
                One parent class has one child class.
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
                      {code6}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <br />
                <br />
                <b>Multiple Inheritance:</b>
                <br />
                Multiple inheritance allows a class to inherit from more than
                one base class. One child and many parents.
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
                      {code7}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <br />
                <br />
                <b>Multi-level Inheritance:</b>
                <br />
                In multilevel inheritance, a child class is created from another
                child class. If we have class1, class2 and class3, class1 is the
                parent of class2 and class2 is the parent of class3 and so on.
                It is like grand-parent(child1), parent(class2),
                child/grandson(class3).
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
                      {code8}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <br />
                <br />
                <b>Hierarchical Inheritance:</b>
                <br />
                In hierarchical inheritance, multiple base classes inherit from
                the same parent class. Many child, one parent.
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
                      {code9}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <br />
                <br />
                <b>Hybrid Inheritance:</b>
                <br />
                Hybrid inheritance is a combination of multiple inheritance and
                single inheritance. It involves the use of multiple base classes
                and is generally seen in complex class hierarchies.
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
                      {code10}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <br />
                <br />
                <b>Inheritance and Constructor:</b>
                <br />
                When we have a base class and a derived class, we need to pass
                arguments from derived class to base class.
                <br />
                <div style={containerStyle}>
                  <div ref={divRef}>
                    <SyntaxHighlighter language="cpp" style={darcula}>
                      {code11}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <br />
                <b>Example:</b>
                <div style={containerStyle}>
                  <div ref={divRef}>
                    <SyntaxHighlighter language="cpp" style={darcula}>
                      {code12}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </p>
              <br />
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>

              <br />
              <br />
              <Q25 />
            </div>
            <Link to="/tutorials/Chapter24">
              <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button>
            </Link>
            <Link to="/tutorials/Chapter26">
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
export default Ch25;
