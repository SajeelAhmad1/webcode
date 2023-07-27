import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q23 from "../Questions/Q23";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch23 = () => {

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
const code1 = `class ClassName {
    private:
        // private data members 
        // Declare the friend function inside the class. It can be public or private
        friend ReturnType functionName(dataType param1, dataType param2, ...);
    };
    
    // Define the friend function outside the class 
    ReturnType functionName(ParameterType1 paramName1, ParameterType2 paramName2, ...) {
        // Function definition with access to private and protected members of the class
    }
    `
const code2 = `#include <iostream>
using namespace std;

class Student {
private:
    int num1;
    int num2;

public:
    
    Student(int value1, int value2) {
    	num1 = value1;
    	num2 = value2;
	}

    // Friend function to calculate the sum
    friend int calculateSum(const Student& obj);
};

int calculateSum(const Student& obj) {
    return obj.num1 + obj.num2;
}

int main() {
    
    Student std(10, 10);
    int sum = calculateSum(std);
    cout << "Sum of data members in std: " << sum << endl;

    return 0;
}`
const code3 = `class MyClass
{
    friend class FriendClass;
};`
const code4 = `#include <iostream>
using namespace std;

// Forward declaration of the FriendClass
class FriendClass;

// Class that declares FriendClass as a friend
class MyClass {
private:
    int privateData;

public:
    MyClass(int privateData){
    	this->privateData = privateData;
	}
    // Declare FriendClass as a friend class
    friend class FriendClass;
    int getPrivateData() {
        return privateData;
    }
};

class FriendClass {
public:
    void displayPrivateData(const MyClass& obj) {
        cout << "Private data of MyClass: " << obj.privateData << endl;
    }
};

int main() {
    MyClass obj(10);

    FriendClass friendObj;
    // Call the friend function to access private data of MyClass
    friendObj.displayPrivateData(obj);

    return 0;
}
`

  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
              <Link to="/tutorials/Chapter22">
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
              <div class="start content">Friend Functions and Friend Classes</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Friend Functions
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Friend functions are the functions which can access the private members of the class. We have to 
                write the prototype of friend function inside the class of which it is the friend.
                <br /><br />
                <b>Properties of Friend Functions:</b><br />
                <ul class="ui unordered list">
                    <li>Friend functions are declared inside the class.</li>
                    <li>They can access the private and protected data members of class of which they are friends.</li>
                    <li>They can be declared inside the public or private part of the class.</li>
                    <li>They are not the members of the class and we do not need object to call them.</li>
                    <li>Unlike methods/member functions which can access data members directly, friend functions cannot
                        access data members directly. There is a need of dot operator, like obj.dataMemberName
                    </li>
                </ul>
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
                  <b>Friend Classes:</b><br />
                  Friend class is also the same concept. Friend class is a class which can access the private member of some other
                  class. But this relationship is not reversible. For example, if class1 is the friend of class2, then class1 can access 
                  private and protected members of class2 but class2 can not access private or protected members of class21. <br /><br />
                  <b>Syntax:</b><br />
                  <div style={containerStyle}>
                  
                  <div ref={divRef}>
                    <SyntaxHighlighter language="cpp" style={darcula}>
                      {code3}
                    </SyntaxHighlighter>
                  </div>
                  </div><br />
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
                      {code4}
                    </SyntaxHighlighter>
                  </div>
                  </div><br />
                </p>
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>
              
              <br />
              <br />
              <Q23 />
            </div>
            <Link to="/tutorials/Chapter22">
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
export default Ch23;
