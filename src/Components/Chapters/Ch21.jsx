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
// declare a class
class square {
	private:
	 double length;
	 double height;
	public:
	 // initialize variables with parameterized constructor
	 square(double len, double hgt) {
	 length = len;
	 height = hgt;
	 }
	 // copy constructor with a square object as parameter
	 // copies data of the obj parameter
	square(square &obj) {
	 length = obj.length;
	 height = obj.height;
	 }
	 double calculateArea() {
	 return length * height;
	 }
};
int main() {
	// create an object of square class
	square square1(10.5, 8.6);
	// copy contents of square1 to square2
	square square2 = square1;
	// print areas of square1 and square2
	cout << "Area of square 1: " << square1.calculateArea() << endl;
	cout << "Area of square 2: " << square2.calculateArea();
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
                A constructor is a special method which is automatically called whenever an instance of class is created. 
                It is used to initialize objects of a class. A constructor os also used to run a default code when an object is created.<br />
                <br />
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
                <b>Understanding Constructors using real life example:</b><br />
                Suppose you went to a shop to buy a pen. You say to the shop keeper, give me a marker. 
                You are not specifying the brand or ink color. He will give you the most hot marker selling
                in the market. This is the default constructor. If you say give me a marker of xyz brand and ink 
                should be blue, this is parameterized constructor. And if you take a marker with you and show it 
                to the shopkeeper and say that give me a marker like this. This is your copy constructor. Let us explore 
                some more details. <br /> <br />
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
                  <p style={{ backgroundColor: "#FBEEAC", padding: "15px" }}>
                  If we do not specify a constructor, C++ compiler generates a default constructor for object 
(expects no parameters and has an empty body)</p> <br />

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
                    Simply, copy constructor copies values from one object to another object.
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
                  <br />It is automatically called at the end of program. 
                  <br />
                  <b>Properties of destructor:</b><br />
                  <ul class="ui unordered list">
                    <li>Destructor is the last function which is invoked when the object is destroyed.</li>
                    <li>Its name is the name of the class.</li>
                    <li>It is always public.</li>
                    <li>It can not be static or constant.</li>
                    <li>It is always unparameterized.</li>
                    <li>It has no return type even void.</li>
                    <li>We can not access the address of destructor.</li>
                  </ul>
                  <br /><br />
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
