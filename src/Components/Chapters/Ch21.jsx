import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q21 from "../Questions/Q21";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch21 = () => {
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

class Students{
	//public access specifier
	public:
		//constructor
		Students(){
			cout<<"Constructor called"<<endl;
		}
};
int main(){
	cout<<"Line before creating object."<<endl;
	Students std1;
	cout<<"As object is created, constructor is called."<<endl;
}`
const code2 = `#include <iostream>
using namespace std;

class Students{
	//public access specifier
	public:
		//data members
		int marks;
		int rollNo;
		//default constructor
        //default constructor is called when object is created.
        //it initialize data members with garbage(random) values when we do not write it.
        //Here, we are setting values of data members to zero.
		Students(){
			marks = 0;
			rollNo = 0;
		}
};
int main(){
	Students std1;
    std1.marks = 100;
    std1.rollNo = 1234;
	cout<<"Marks = "<<std1.marks<<endl;
	cout<<"Roll no = "<<std1.rollNo<<endl;
}`
const code3 = `#include <iostream>
using namespace std;

class Students{
	//public access specifier
	public:
		//data members
		int marks;
		int rollNo;
		//parameterized constructor
		Students(int marks, int rollNo){
			this->marks = marks;
			this->rollNo = rollNo;
		}
};
int main(){
	Students std1(100, 1234);
	cout<<"Marks = "<<std1.marks<<endl;
	cout<<"Roll no = "<<std1.rollNo<<endl;
}`
const code4 = `this->marks (this is the member of class) = marks (this is the var which we are getting as argument)`
const code5 = `#include <iostream>
using namespace std;

class Students{
	//public access specifier
	public:
		//data members
		int marks;
		int rollNo;
		//parameterized constructor
		Students(int marksOfstd, int rollNoOfStd){
			marks = marksOfstd;
			rollNo = rollNoOfStd;
		}
};
int main(){
	Students std1(100, 1234);
	cout<<"Marks = "<<std1.marks<<endl;
	cout<<"Roll no = "<<std1.rollNo<<endl;
}`
const code6 = `#include <iostream>
using namespace std;

class SimpleClass {
public:
    int data;

    // Constructor
    SimpleClass(int value) : data(value) {}

    // Copy constructor
    SimpleClass(const SimpleClass& other) : data(other.data) {}
};

int main() {
    SimpleClass obj1(42); // Create an object using the constructor

    // Create a new object as a copy of obj1 using the copy constructor
    SimpleClass obj2 = obj1;

    // Access data in obj2
    cout << "Data in obj2: " << obj2.data << endl;

    return 0;
}`
const code7 = `#include <iostream>
using namespace std;

class Student {
public:
    int marks, rollNo;
	
	//default constructor
	Student(){
		marks = 0;
	}
	Student(int marks){
		this->marks = marks;
	}
	Student(int marks, int rollNo){
		this->marks = marks;
		this->rollNo = rollNo;
	}
	
};

int main() {
    Student std1;
    Student std2(10);
	Student std3(20, 123);
	cout<<"Marks of student 1 = "<<std1.marks<<endl;
	cout<<"Marks of student 2 = "<<std2.marks<<endl;
	cout<<"Marks of student 3 = "<<std3.marks<<endl;
	cout<<"Roll no of student 3 = "<<std3.rollNo<<endl;
    return 0;
}`
const code8 = `#include <iostream>
using namespace std;

class Student {
public:
    int marks, rollNo;
	
	//constructor
	Student(){
		cout<<"Constructor called."<<endl;
	}
	//destructor
	~Student(){
		cout<<"destructor called."<<endl;
	}
	
};

int main() {
    Student std;
    cout<<"Hi there!"<<endl;
    return 0;
}
`
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
              <Link to="/tutorials/Chapter20">
                <button
                  class="ui primary button"
                  style={{ flex: 1, minWidth: "100px", height: "40px" }}
                >
                  Previous
                </button>
              </Link>
              <Link to="/tutorials/Chapter22">
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
              <div class="start content">Constructors and Destructors</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Constructor
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                A constructor is a special method which is automatically called whenever an instance of class is created. <br /> <br />
                <br /><br />
                <b>Properties of Constructor:</b>
                <br />
                <ul className="ui unordered list">
                  <li>
                    Its name is same as the name of class.
                  </li>
                  <li>
                    It has no return type.
                  </li>
                  <li>
                    It is called whenever the object is created. (default constructor).
                  </li>
                  <li>
                    It is used to initialize the data members of class
                  </li>
                  <li>
                    Constructor is always public.
                  </li>
                </ul>
                So, properties and behaviors are members of class and declared
                inside the class. <br />
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
                <b>Default Constructors:</b><br />They take no parameter.
                Now we will see, how a constructor can initialize the data members.
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
                <b>Parameterized Constructor:</b><br />
                A constructor that takes one or more parameter to set values of data members. <br />
                These values are passed when object is created. It is just like when we create and call functions. <br />
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
                  <b>"this" keyword:</b><br />
                  this refers to the member of current class in which we are present. <br />
                  <SyntaxHighlighter language="cpp" style={darcula}>
                      {code4}
                    </SyntaxHighlighter>
                    <br />
                    <p style={{ backgroundColor: "#FBEEAC", padding: "15px" }}>
                        <b>Note: </b> <br />
                        It is not necessary to set the same names of parameters of constructor and data members. <br />
                        Use of this is also optional.</p> <br />
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
                      {code5}
                    </SyntaxHighlighter>
                  </div>
                </div><br/><br />
                    <b>Copy Constructor:</b><br />
                    The copy constructor creates a new object by copying the values from existing object of class 
                    to other object of the same class.Copy constructor takes a reference to an object of the same class as an argument.
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
                  <b>Constructor Overloading:</b><br />
                  Constructor overloading is similar to function overloading. <br />
                  In constructor overloading, we make two constructors. Both have
                  <ul class="ui unordered list">
                    <li>different numbers of parameters, Or</li>
                    <li>data types of parameters is different, Or</li>
                    <li>sequence of parameters is different, Or</li>
                    <li>All three</li>
                  </ul>
                  <b>Example of constructor Overloading:</b><br />
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
                  </div><br />
                  <b>Destructors:</b><br />
                  Destructors are called whenever object is destroyed. It is used to deallocate memory.
                  <br />It is automatically called at the end of program. <br /><br />
                  <b>Syntax:</b><br />
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
                </div><br />
            </p>
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>
              
              <br />
              <br />
              <Q21 />
            </div>
            <Link to="/tutorials/Chapter20">
              <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button>
            </Link>
            <Link to="/tutorials/Chapter22">
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
export default Ch21;
