import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q30 from "../Questions/Q30";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch30 = () => {
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
const code0 = `return-type class-name :: operator op (argList)
{
   function body 	// task defined.
}
`
const code1 = `#include <iostream>
using namespace std;

class UnaryOp{
	int a;
	public:
		UnaryOp(int a){
			this->a = a;
		}
		void show(){
			cout<<"Value of a is "<<a<<endl;
		}
		void operator --(){
			a = a+1;
		}
};
int main(){
	UnaryOp op1(10);
	--op1;
	op1.show();
}`
const code2 = `#include <iostream>
using namespace std;

class complex
{
double real;
double imag;

public:
	//default constructor
	complex() {}
		//parameterized constructor
	complex(double r, double i){
		real = r;
		imag = i;
	}
	//declaration of function which will overload +operator
	complex operator+(complex);
	void print(){
		cout << real << " + " << imag <<"i" << endl;
	}
};


//Here is the implementation of functipon to overload + operator which adds two complex numbers.
complex complex :: operator+(complex param)
{
complex temp;
temp.real = this->real + param.real;
temp.imag = this->imag + param.imag;
return temp;
}


int main()
{
complex c1(3.1, 1.5);
complex c2(1.2, 2.2);
complex c3;
c3 = c1 + c2;  //use overloaded + operator

c3.print();
}
`
const code3 = `#include <iostream>
using namespace std;

class Person {
public:
    Person(const std::string& name, int age) : name(name), age(age) {}

    // Overloading the insertion operator for the Person class
    friend std::ostream& operator<<(std::ostream& os, const Person& person) {
        os << "Name: " << person.name << ", Age: " << person.age;
        return os;
    }

private:
    std::string name;
    int age;
};

int main() {
    Person john("John Doe", 30);
    Person jane("Jane Smith", 25);

    // Outputting objects using the overloaded << operator
    cout << "Person 1: " << john << endl;
    cout << "Person 2: " << jane << endl;

    return 0;
}
`
const code4 = `#include <iostream>
#include <string>

class Person {
public:
    Person() : name(""), age(0) {}
    
    // Overloading the extraction operator for the Person class
    friend std::istream& operator>>(std::istream& is, Person& person) {
        std::cout << "Enter name: ";
        is >> person.name;
        std::cout << "Enter age: ";
        is >> person.age;
        return is;
    }

private:
    std::string name;
    int age;
};

int main() {
    Person john;
    
    // Inputting data into the object using the overloaded >> operator
    std::cin >> john;

    // Outputting the entered data
    std::cout << "Name: " << john.getName() << ", Age: " << john.getAge() << std::endl;

    return 0;
}
`

  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
              <Link to="/tutorials/Chapter29">
                <button
                  class="ui primary button"
                  style={{ flex: 1, minWidth: "100px", height: "40px" }}
                >
                  Previous
                </button>
              </Link>
              <Link to="/tutorials/Chapter31">
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
              <div class="start content">Operator Overloading </div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
              Operator Overloading
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Mechanism of giving special meaning to an operator is called operator overloading. <br />
                We are familiar with the use of different types of operators with primitive data types. But with abstract 
                data types like stacks, lists, queues etc. we have to define each operator. This is called operator 
                overloading.
                 <br />
                 Operator overloading is a technique which inhances the extensibility of C++. For example, if we 
                 overload an operator, we can achieve different functionalities with that operator. Like "+" operator. 
                 We can achieve addition - in case of numbers and concatenation - incase of strings. This is the best example 
                 of operator overloading. It means that "+" operator is overloaded for integers and strings. C++ has the ability to provide the operators with a special meaning for a data type.
<br />
                <b>Which operators can we overload?</b> <br />
                There is a range of operators which can be overloaded. It includes unary operators, arithmetic operators, 
                logical operators and many more. We can overload all operators in C++ except:
                <ul class="ui unordered list">
                    <li>Scope resolution operator (::)</li>
                    <li>Ternary operator (?:)</li>
                    <li>Size of operator (sizeof)</li>
                    <li>Dot operator(. , .*)</li>
                </ul>
                <br />
                <b>Syntax</b>
                
                <div style={containerStyle}>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code0}
                  </SyntaxHighlighter>
                </div>
              </div>
                <br />
                <b>Overloading Unary Operator:</b><br />
                  We are going to oveload "--" operator and converting its functionality to "++" operator.
                  <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>operator.cpp</b>

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
In this example, we have overloaded the pre-decrement operator and now it is working like pre-increment operator.
                

                <br />

                <b>Overloading Binary Operator:</b><br />
                  We are going to add "+" operator for adding complex numbers.
                  <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>operator.cpp</b>

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


<b>Overloading Insertion Operator:</b><br />
Primarily operator used for insertion is the right shift operator used for shifting bits to right. 
In this example, we will overload thid operator.
<div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>operator.cpp</b>

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
                <b>Overloading Extraction Operator:</b><br />
Primarily operator used for extraction is the left shift operator used for shifting bits to left. 
In this example, we will overload thid operator.
                <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>operator.cpp</b>

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
                    {code4}
                  </SyntaxHighlighter>
                </div>
              </div>

              </p><br /><div className="quiz">
                <Link to="/quizes/quiz32">
                  <button class="ui secondary button">Start Quiz</button>
                </Link>
              </div>
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>

              <br />
              <br />
              <Q30 />
            </div>
            <Link to="/tutorials/Chapter29">
              <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button>
            </Link>
            <Link to="/tutorials/Chapter31">
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
export default Ch30;
