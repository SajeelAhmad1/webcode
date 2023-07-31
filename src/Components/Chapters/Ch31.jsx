import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q31 from "../Questions/Q31";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch31 = () => {
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

template <typename T>
void max(T &a, T &b) {
    if(a > b){
    	cout<<a<<endl;
	}
	
	else{
		cout<<b<<endl;
	}
	
}
int main() {
	int a = 10, b = 12;
	max(a, b);
	
	float c = 12.12, d = 34.21;
	max(c, d);
	
	char e = 'A', f = 'Z';
	max(e, f);
    return 0;
}`;
const code2 = `#include <iostream>
using namespace std;

template <typename T1, typename T2>
class Pair {
	private:
    	T1 first;
    	T2 second;
	public:
    	Pair(T1 first, T2 second){
			this->first = first;
			this->second = second;
		}

    	T1 getFirst() const { 
			return first; 
		}
    	T2 getSecond() const {
		 return second; 
		}


};
int main() {
    Pair<int, double> myPair(42, 3.14);
    cout << "First value: " << myPair.getFirst() << ", Second value: " << myPair.getSecond() << endl;
    
    Pair<string, char> anotherPair("Hello", 'X');
    cout << "First value: " << anotherPair.getFirst() << ", Second value: " << anotherPair.getSecond() << endl;
    
    return 0;
}`

 
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
              <Link to="/tutorials/Chapter30">
                <button
                  class="ui primary button"
                  style={{ flex: 1, minWidth: "100px", height: "40px" }}
                >
                  Previous
                </button>
              </Link>
              <Link to="/tutorials/Chapter32">
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
              <div class="start content">Templates</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Templates
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Template is a powerful feature in any language which enables us
                to write generic code. Generic code means that it enables us to
                define functions and classes that can work with different data
                types with same block of code / same logic. You do not need to
                write code for different data types explicitly. In this way,
                your code become reusable. Therefore, we can say that template
                is a feature in any language that give that particular language
                more flexibility.
                <br />
                <br />
                <b>Example:</b>
                <br />
                You are using a function that add two numbers and it is a
                template function. This function will operate for addition of
                any datatype. Like, sum(2, 3) will give 5 and sum(2.5, 2.1) will
                give 4.6. A single function is doin that. We do not need to
                define two separate sum functions for int and float.
                <br />
                <br />
                <b>Types of Templates:</b>
                <br />
                Templates are of two kinds in C++:
                <ul class="ui unordered list">
                  <li>Function Templates</li>
                  <li>Class Templates</li>
                </ul>
                <br />
                <b>Function Templates:</b>
                <br />
                As we have discussed that function template is a function that
                is used with different data types. <br /><br />
                <b>Example:</b>
                <div style={containerStyle}>
                  <div style={{ fontSize: "25px" }}>
                    <b>funcTemplate.cpp</b>

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
                <b>Explanation of code:</b>
                <br />
                We have made a template using template keyword and then write
                our type name. After type name, we write "T" - which is our
                generic data type. Then we have written our function simply but
                changed our data type everywhere to "T". Now whenever we call
                our template function, the data type "T" will be treated as the
                data type of the arguments. In this way, we can call our
                function with any data type we want.
                <br />

                <br />
                <b>Class Templates:</b>
                <br />
                Using class templates, we can define generic classes to work with different data types. 
                Class templates are also defined using template keyword. <br /><br />
                <b>Example:</b> <br />
                <div style={containerStyle}>
                  <div style={{ fontSize: "25px" }}>
                    <b>funcTemplate.cpp</b>

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
                <b>Explanation of code:</b>
                <br />
                We have made a class template using template keyword and then write
                our type name. Now we are using two
                 parameters, we write "T1" as first type name and "T2" as second type name - which are our
                generic data types. Then we have written our class simply but
                changed our data types. In main function, after our class name, we specified the data types of 
                arguments we are passing.
                <br />
                
              </p>
              <br />
              <div className="quiz">
                <Link to="/quizes/quiz33">
                  <button class="ui secondary button">Start Quiz</button>
                </Link>
              </div>
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>

              <br />
              <br />
              <Q31 />
            </div>
            <Link to="/tutorials/Chapter30">
              <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button>
            </Link>
            <Link to="/tutorials/Chapter32">
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
export default Ch31;
