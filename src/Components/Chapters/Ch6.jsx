import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q6 from "../Questions/Q6";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch6 = () => {
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
int main(){
    int age=10;
    //while printing value of a variable, \n    //do not use double quotation marks.
    cout<<age;
    return 0;
}`;
  const code2 = `#include <iostream>
using namespace std;
int main(){
    int age;
    age = 10;
    cout<<age;
    return 0;
}`;
  const code3 = `#include <iostream>
using namespace std;
int main(){
    int age = 10;
    cout<<age;
    age = 20;
    cout<<age;
    return 0;
}`;
  const code4 = `#include <iostream>
using namespace std;
int main(){
    int age=20;
    cout<<"I am "<< age <<"years old.\\n";
    return 0;
}`;
  const code5 = `#include <iostream>
using namespace std;
int main(){
    int num1=10;
    int num2=5;
    int sum = num1+num2;
    int sub = num1-num2;
    int div = num1/num2;
    int mul = num1*num2;
    cout << "Sum " << sum << endl;
    cout << "Difference " << sub << endl;
    cout << "Quotient " << div << endl;
    cout << "Product " << mul << endl;
    return 0;
}`;
  const code6 = `#include <iostream>
using namespace std;
int main(){
    int a=10, b=5, c=3;
    cout << a + b + c << endl;
    return 0;
}`;
  const code7 = `#include <iostream>
using namespace std;
int main(){
    const int a=10; 
    // value of var a can not be changed
    a=20; // error
    return 0;
}`;
  const code8 = `#include <iostream>
using namespace std;
int mian(){
    int a = 10;
    float b = 10.5;
    double c = 20.3;
    string name = "John";
    char ch = 'c';
    bool isTrue = true;
    cout<<"a = "<< a <<endl;
    cout<<"b = " <<endl ;
    cout<<"c = " <<endl ;
    cout<<"name = " <<endl ;
    cout<<"ch = " <<endl ;
    cout<<"isTrue = " <<endl ;
    return 0;
}`;
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
            <Link to="/tutorials/Chapter5">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter7">
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
              </Link><br />
              <div class="start content">Variables</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Overview of Variables:
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Variables like in mathematics are used to store some data value.
                <br />
              </p>
              <br />
              <b>Example:</b>
              <br />
              Math Variable: <br />
              age = 10 <br />
              This will store 10 in variable named age.
              <br />
              The only difference is that in C++, you have to assign a data type
              to the variable. <br />
              <br />
              <b>C++ Variable:</b>
              <br />
              Scope:
              <ul class="ui unordered list">
                <li>Local Variables - declared inside the function.</li>
                <li>Global Variables - declared outside the function.</li>
              </ul>
              <b>Syntax:</b>
              <br />
              dataType varName = dataValue; <br />
              int age = 10; <br />
              It will store 10 integer type value without decimal in age. <br />
              <br />
              <b>Rules for assigning names to variables:</b>
              <br />
              Names of variables are called identifiers. Use descriptive names
              for your variables to make your code readable. <br />
              <ol className="ui ordered list">
                <li>Length of name should be from 1 to 255 characters.</li>
                <li>Always start with letter or underscore</li>
                <li>No space is allowed in the name of the variable</li>
                <li>Contains only letters, underscores and numbers</li>
                <li>Should not be a reserved keyword.</li>
              </ol>
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Note: </b>While naming variables, keep in mind that C++ is a
                case sensitive language.
              </p>
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>variables.cpp</b>

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
              <br />
              You can also declare variable without assigning value and assign
              value later, like
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>variables.cpp</b>

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
              You can also change the value of variable later in your code.
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>variables.cpp</b>

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
              <b>Another Example</b>
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>variables.cpp</b>

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
              <br />
              <b>Operations on variables:</b>
              <br />
              You can apply any mathematical operation on variables, but
              condition is that the data types of these variables must be
              compatible. You can not add int type variable to string. You can only add those variables whose
              data types are compatible.
              <br />
              <b>Example:</b>
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>variables.cpp</b>

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
              </div>
              <br />
              <br />
              <b>Other types of variables:</b>
              <br />
              Like integer there are other different datatypes of variables.{" "}
              <br />
              <ul class="ui unordered list">
                <li>Int stores numbers without decimal like 10, 20, 3000.</li>
                <li>
                  Float and double stores numbers with decimal like 2.1, 30.12
                  etc. <br />
                  The difference is that precision of double in 2x than float.
                </li>
                <li>Char stores single character</li>
                <li>
                  String stores text (collection of characters) inside double
                  quotes like, "My age is 20".
                </li>
                <li>
                  Boolean stores true or false. <br />
                  bool answer = true;
                </li>
                <li>
                  Void is used when you do not want to assign any type to
                  variable.{" "}
                </li>
              </ul>
              <br />
              You can declare variables of the same type in one line, like:
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>variables.cpp</b>

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
              <b>Constant Variables:</b>
              <br />
              As name indicates, variable means “changeable”, but using const
              keyword you can make your variable unchangeable.
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>variables.cpp</b>

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
              <b>Using other data types:</b>
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>variables.cpp</b>

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
              <b>Styles for naming variables:</b>
              <br />
              <br />
              <b>Camel Case:</b>
              <br />
              In camel case convention, we start with small letter and if there
              are more than one words, we convert first letter of other words to
              capital. For example, myAge, myName, johnMarks. <br />
              <b>Pascal Case:</b>
              <br />
              In pascal case, we capitalize the first letter of every word. For
              example, MyAge, MyName. <br />
              <b>Snake Case:</b>
              <br />
              In snake case, we separate words by underscores (_). For example,
              my_age, my_name. <br />
              <br />
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                We have learnt about primitive datatypes like int, double,
                float, string, char and bool etc. There are other datatypes
                derived datatypes like array, pointer and user defined datatypes
                like class, structure, enum etc which are not in scope of this
                chapter.
              </p>
              <br />
              <hr />
              <br />
              <br />
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>
              <br />
              <br />
              <br />
              <Q6 />
            </div>
            <Link to="/tutorials/Chapter5">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter7">
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
        <ToastContainer />
      </div>
    </>
  );
};
export default Ch6;
