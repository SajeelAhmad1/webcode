import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q18 from "../Questions/Q18";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch18 = () => {
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
  const code1 = `datatype func_name(){…}`;
  const code2 = `void print(){
    cout<<"Hi there!";
}
    `;
  const code3 = `-void print(){
    Cout<<"Hi there!";//definition
}
`;
  const code4 = `#include<iostream>
using namespace std;
void print(){
  cout<<"Hi there!";
}
int main(){
  print();//calling a function
  //you can also call function again
  print();
  return 0;
}
  
`;
  const code5 = `#include<iostream>
using namespace std;
void print(string greetings){//greetings is parameter and we have to assign it data type. We can also change the name but inside the body use the same name
  cout<<greetings;
}
int main(){
  string greetings = "Hi there!";
  print(greetings);//we pass argument (greetings there)
  return 0;
}`;
  const code6 = `#include<iostream>
using namespace std;
int sum(int a, int b){
    int sum = a+b;
    return sum;
}
int main(){
    int add = sum(2,3);//calling function with arguments 2 and 3 and assigning it to a variable add.
    cout<<add<<endl;
    //following line willprint the same result
    cout<<sum(2,3)<<endl;
    return 0;
}`;
  const code7 = `#include<iostream>
using namespace std;
int sum(int &a, int &b){
    int sum = a+b;
    return sum;
}
int main(){
    int add = sum(2,3);//calling function with arguments 2 and 3 and assigning it to a variable add.
    Cout<<add<<endl;
}`;
  const code8 = `#include<iostream>
using namespace std;
int sum(int *a, int *b){
    int sum = *a+*b;
    return sum;
}
int main(){
    int num1=2, num2=3;
    int add = sum( &num1, &num2 );//calling function with arguments 2 and 3 and assigning it to a variable add.
    cout<<add<<endl;
    return 0;
}`;
  const code9 = `#include<iostream>
using namespace std;
void printMarks(int marks[5]){
    for(int i=0; i<5; i++){
    cout<<marks[i];
    }
    cout<<endl;
}
int main(){
    int marks[5] = {10,20,30,40,50};
    printMarks(marks); //no need to pass size of array in argument
    return 0;
}`;

const code10 = `#include <iostream>
using namespace std;

// Recursive function to calculate factorial
int factorial(int n) {
  // Base case: if n is 0 or 1, factorial is 1
  if (n == 0 || n == 1) {
    return 1;
  } else {
      // Recursive case: n! = n * (n-1)!
      return n * factorial(n - 1);
    }
}

int main() {
  int num;
  cout << "Enter a positive integer: ";
  cin >> num;

  if (num < 0) {
      cout << "Factorial is not defined for negative numbers." << endl;
  } else {
      int result = factorial(num);
      cout << "Factorial of " << num << " is: " << result << endl;
  }

  return 0;
}`
const code11 = `#include <iostream>
using namespace std;
int sum(int a, int b){
  return a+b;
}
float sum(float a, float b, int c){
  return a+b;
}
int main(){
  sum(5, 10);  //funtion with data type int is invoked
  sum(5.0, 10.0, 20);  //funtion with data type float is invoked
  //sum has all three features of overloading
}`

  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
            <Link to="/tutorials/Chapter17">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter18b">
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
              <div class="start content">Functions</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Functions:
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                <ul className="ui unordered list">
                  <li>
                    A function is a block of code which we separate from the
                    main function.{" "}
                  </li>
                  <li>Functions are used to perform specific tasks.</li>
                  <li>
                    When we need to do that task, we call it in main function
                    because we know that in our C++ code, execution starts from
                    main function and ends when main function ends.
                  </li>
                  <li>
                    If we do not call function in main function, it will never
                    be executed.{" "}
                  </li>
                </ul>
                <b>Why functions?</b>
                <br />
                As we can achieve the same functionality with our code without
                using the functions but we still use functions because;
                <ul className="ui unordered list">
                  <li>They make out code more readable.</li>
                  <li>Reduce redundancy of your code. </li>
                </ul>
                For example, if you make a calculator in your main function and
                you need calculator 10 times. You will have to write code for it
                10 times. If you declare a function and write code for
                calculator there. And then if you need calculator 10 times, then
                you just need to call calculator function, which will be a
                single line of code.
              </p>
              <br />
              <b>Steps:</b>
              1. Declare the function. Declaration of function is also called
              prototype of the function. 2. Define the function.
              <br />
              <b>Syntax:</b>
              <div style={containerStyle}>
                <b>functions.cpp</b>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code1}
                </SyntaxHighlighter>
              </div>
              <br />
              <b>Example:</b>
              <br />
              Make a function to print "Hi there!":
              <div style={containerStyle}>
                <b>functions.cpp</b>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code2}
                </SyntaxHighlighter>
              </div>
              <br />
              <b>Description:</b>
              <br />
              - Void print();//this is called declaration of function <br />-
              Data type of function is same as the value it is returning. As our
              function is returning nothing therefore its type is void. <br />
              - //writing code inside the body is called definition. <br />
              - Definition and declaration can also be separated. <br />
              - Void print();//declaration <br />
              <SyntaxHighlighter
                language="cpp"
                style={{ backgroundColor: "white" }}
              >
                {code3}
              </SyntaxHighlighter>
              <br />
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Note:</b>
                <br />
                We have to declare function before the main function and we can
                define/write code in body of the function anywhere outside the
                main function. <br />
                Rules for naming functions are same as rules for naming
                variables and you can not name your user defined function "main"
                as we can have only one main function in our code.
              </p>
              <br />
              <b>Function to print "Hi there!"</b>
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>function.cpp</b>

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
              <b>Parameters/Arguments:</b>
              When there is a variable in the main function and we need it in
              the other function then we pass it to other function when we call
              it(inside parentheses). We can pass as many arguments as we want.{" "}
              <br />
              <b>Parameters:</b> variables in parenthesis when we declare
              function <br />
              <b>Arguments:</b> variables in parenthesis when we call function{" "}
              <br />
              <br />
              <b>Example:</b>
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>function.cpp</b>

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
              <b>Functions which return some value:</b>
              <br />
              When functions are returning some value then we can assign it to a
              variable. <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>function.cpp</b>

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
              <b>Passing values to functions:</b>
              <br />
              We have studied that how can we pass data value to a function.
              This is called pass by value method. <br />We are actually passing the address of our variable, where our data is stored. <br />
              <b>Pass by reference:</b>
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>function.cpp</b>

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
              <b>Pass by Pointer:</b>
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>function.cpp</b>

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
              <b>Functions and arrays:</b>
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>function.cpp</b>

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
              <b>Recursion:</b><br/>
              <p>Recursive functions are functions that call themselves directly or indirectly to solve a problem. </p>
              <br/><b>Example:</b><br/>
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>recursion.cpp</b>

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
              </div><br/>
              <b>Function Overloading:</b><br/>
              <p>Function overloading allows us to define different functions with the same name but, <br />1. Overloading functions must have parameters with different data types, OR <br />2. Number of parameters must be different, OR <br />3. If number of parameters is same, their sequence must be different. <br />Return type of overloading functions may or may not be different. <br />Funtions with atleast one feature given above or having all the three features are said to be overloaded. </p>
              When function is called, compiler determines which version of function to invoke.
              <br/><b>Example:</b><br/>
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>overloading.cpp</b>

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
                    {code11}
                  </SyntaxHighlighter>
                </div>
              </div>
              <div className="quiz">
                <Link to="/quizes/quiz19">
                  <button class="ui secondary button">Start Quiz</button>
                </Link>
              </div>
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>
              
              <br />
              <br />
              <Q18 />
            </div>
            <Link to="/tutorials/Chapter17">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter18b">
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
export default Ch18;
