import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q20 from "../Questions/Q20";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch20 = () => {
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
  const code1 = `class className{
    //access specifier
    public:
    //data members
    int weight;
    string name;
    //member functions
    void sayHi(){
        cout<<"Hi"<<endl;
    }
};
int main(){
    className objName; //creating instance of class / initialization of object
}`;
  const code2 = `#include<iostream>
using namespace std;
class Vehicles{
	//just do not worry about this public keyword. write as it is.
	public:
	//properties
	string color;
	int weightInKgs;
	int num;
	
};
int main(){
	Vehicles supra;  //creating instance of class / declaring object supra
	
	supra.color = "White";
	supra.weightInKgs = 200;
	supra.num = 514;
	//accessing public properties
	cout<<"Color = "<<supra.color<<endl;
	cout<<"Weight in kilos = "<<supra.weightInKgs<<endl;
	cout<<"Number = "<<supra.num<<endl;

}`;
  const code3 = `#include<iostream>
using namespace std;
class Brothers{
	//just do not worry about this public keyword. write as it is.
	public:
	void sayHello(){
		cout<<"Hello"<<endl;
	}
};
int main(){
	Brothers Bro;
	Bro.sayHello();
}`;
  const code4 = `#include<iostream>
using namespace std;
class Calculator{
	//just do not worry about this public keyword. write as it is.
	public:
	//data members
	int a,b;
	//member functions
	int sum(){
		return a+b;
	}
	int diff(){
		return a-b;
	}
	int mul(){
		return a*b;
	}
	int div(){
		return a/b;
	}
};
int main(){
    //declaring object1
	Calculator Calc1;
	
	//initialize data members for Calc1
	Calc1.a = 10;
	Calc1.b = 20;
	
	//Behavior of Object Calc1
	cout<<"Behaviour no 1 of my object1 is sum. Sum = "<<Calc1.sum()<<endl;
	cout<<"Behaviour no 2 of my object2 is difference. Difference = "<<Calc1.diff()<<endl;
	cout<<"Behaviour no 3 of my object3 is multiplication. Multiplication = "<<Calc1.mul()<<endl;
	cout<<"Behaviour no 4 of my object4 is division. Division = "<<Calc1.div()<<endl;
	
	
	cout<<endl<<endl;
	
    //declaring object 2
	Calculator Calc2;
	
	//initialize data members for Calc2
	Calc2.a = 20;
	Calc2.b = 30;
	
	//Behavior of Object Calc2
	cout<<"Behaviour no 1 of my object2 is sum. Sum = "<<Calc2.sum()<<endl;
	cout<<"Behaviour no 2 of my object2 is difference. Difference = "<<Calc2.diff()<<endl;
	cout<<"Behaviour no 3 of my object2 is multiplication. Multiplication = "<<Calc2.mul()<<endl;
	cout<<"Behaviour no 4 of my object2 is division. Division = "<<Calc2.div()<<endl;
}`;
const code5 = `#include <iostream>
using namespace std;
class Sum{
	private:
		int a, b;
	public:
		Sum(int a, int b){
			this->a = a;
			this->b = b;
		}
		int sum();
};

//defining method of class outside the class

Sum :: sum(){
	return a+b;
}
int main(){
	Sum sum1(10, 20);
	cout<<sum1.sum();
}
`
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
              <Link to="/tutorials/Chapter19">
                <button
                  class="ui primary button"
                  style={{ flex: 1, minWidth: "100px", height: "40px" }}
                >
                  Previous
                </button>
              </Link>
              <Link to="/tutorials/Chapter21">
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
              <div class="start content">Classes and Objects</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Classes and Objects
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Class is a template / blueprint which stores the
                propeties/attributes and behaviors of objects. <br />
                Class is a user-defined data type. <br /> <br />
                <b>What are Objects?</b>
                <br />
                Object is an entity which has its properties and behavior. For
                example, car is an object. It has properties like its color,
                weight, number etc. and behavior like it can accelerate, it can
                stop etc.
                <ul className="ui unordered list">
                  <li>
                    <b>Properties of objects: </b>data members declared inside
                    the class.
                  </li>
                  <li>
                    <b>Behavior of objects: </b>members functions declared
                    inside the class.{" "}
                  </li>
                </ul>
                So, properties and behaviors are members of class and declared
                inside the class. <br />
                <br />
                <br />
                Now we will practically implement the concept of classes and
                objects. <br />
                <br />
                <b>Syntax to define a class:</b>
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
                  <b>Note: </b>
                  <br /> Do not forget to put semi-colon at the end. <br />
                  Have you noticed that the syntax of class is almost same as
                  that of struct.
                </p>
                <br />
                <b>Exploring a simple basic example:</b>
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
                <b>Member Functions:</b>
                <br />
                Members functions are defined inside the class and they show the
                behavior of objects. They are also called <b>methods.</b><br />
                If I say, "My brother can say hello". This is the behavior of my
                brother. <br />
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
                      {code3}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <br />
                Now I will make objects which can do addition, subtraction,
                multiplication and division. <br />
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
                      {code4}
                    </SyntaxHighlighter>
                  </div>
                </div><br />
                If we want to keep the code inside the class clean, we can declare functions inside class and define them 
                outside the class using scope resolution operator(::). <br />
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
                      {code5}
                    </SyntaxHighlighter>
                  </div>
                </div><br />
                <br />
                <p style={{ backgroundColor: "#FBEEAC", padding: "15px" }}>
                  Have you noticed? the behavior of objects changes as data
                  members changes. If data members of two objects are same,
                  their behavior is same.
                </p>
                <br />
                <b>Local Variables: </b><br />
                Local Variables are declared and initialized inside the methods, constructors or blocks. They will be destroyed 
                when method has completed. <br />
                <b>Instance Variables: </b><br />
                Instance variables are defined within a class but outside methods. They are initialized when the class is instantiated. <br />
                <b>Class Variables: </b><br />
                These are declared within a class outside methods with static keyword. <br />
              </p>
              <br />
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>
              <br />
              <br />
              <Q20 />
            </div>
            <Link to="/tutorials/Chapter19">
              <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button>
            </Link>
            <Link to="/tutorials/Chapter21">
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
export default Ch20;
