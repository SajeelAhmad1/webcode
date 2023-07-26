import {useRef} from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q9 from "../Questions/Q9";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Ch9 = () => {
  const divRef = useRef(null);

  const copyContent = () => {
    const divContent = divRef.current.innerText;
    navigator.clipboard
      .writeText(divContent)
      .then(() => {
        toast.success("Content copied!", {position:'top-center'});
      })
      .catch((error) => {
        toast.error("Error copying content:", error, {position:'top-center'});
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
    int a = 10;
    cout<< a + 10 << endl;
    //similarly
    int b = 10 + 10;
    cout<<b<<endl;
    return 0;
}`;
  const code2 = `#include <iostream>
using namespace std;
int main(){
    int a=10;
    int b=5;
    bool ans = a>b;
    cout<<ans; //output will be 1 as ans is true because a>b
    return 0;
}`;
  const code3 = `a < b`;
  const code4 = `a <= b`;
  const code5 = `a > b`;
  const code6 = `a >= b`;
  const code7 = `(a > b) && (b > c)`;
  const code8 = `(a > b) || (b > c)`;
  const code9 = `!(a > b)`;
  const code10 = `a >> 2`;
  const code11 = `>>`;
  const code12 = `<<`;
  const code13 = `a << 2`;
  return (
    <>
    <Sidebar>
      <div class="container">
      <div className="ch-content">
        <h2 class="ui header">
        <Link to="/tutorials/Chapter8">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter10">
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
              <br /><div class="start content">
            Operators
          </div>
        </h2>
        <div class="main-body ui segment">
          <h2 class="ui left floated header" style={{ color: "#001C30" }}>
            Operators in C++:
          </h2>
          <div class="ui clearing divider"></div>
          Operators are used to perform operations on variables or constant data
          values. <br />
          On the basis of number of operands, there are two types of operators:{" "}
          <br />
          <ul className="ui unordered list">
            <li>
              <b>Unary Operator</b> - works on one operand, e.g. a++.
            </li>
            <li>
              <b>Binary Operator</b> - works on two operands, e.g. a+b.
            </li>
          </ul>
          <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
            <b>Note: </b>You can add constant values to a variable.
          </p>
          <br />
          <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>operators.cpp</b>

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
          <b>Types of Operators:</b>
          <br />
          <ul className="ui unordered list">
            <li>Arithmetic Operators</li>
            <li>Assignment Operators</li>
            <li>Comparison Operators</li>
            <li>Logical Operators</li>
            <li>Bitwise Operators</li>
          </ul>
          <br />
          We are going to discuss about these operators in detail. <br />
          <b>Arithmetic Operators:</b>
          <br />
          They are used to do Arithmetic Operations on data.
          <table class="ui very padded table">
            <thead>
              <tr>
                <th>Operator</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>+</b>
                </td>
                <td>Addition</td>
                <td>Adds two data values.</td>
              </tr>
              <tr>
                <td>
                  <b>-</b>
                </td>
                <td>Subtraction</td>
                <td>Subtracts two data values.</td>
              </tr>
              <tr>
                <td>
                  <b>*</b>
                </td>
                <td>Multiplication</td>
                <td>Multiply two data values.</td>
              </tr>
              <tr>
                <td>
                  <b>/</b>
                </td>
                <td>Division</td>
                <td>Divides two data values.</td>
              </tr>
              <tr>
                <td>
                  <b>%</b>
                </td>
                <td>Modulus</td>
                <td>Return remainder when two data values are divided.</td>
              </tr>
              <tr>
                <td>
                  <b>++</b>
                </td>
                <td>Increment</td>
                <td>Increment value of a variable by 1.</td>
              </tr>
              <tr>
                <td>
                  <b>--</b>
                </td>
                <td>Decrement</td>
                <td>Decrement value of a variable by 1.</td>
              </tr>
            </tbody>
          </table>
          <br />{" "}
          <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
            <b>Increment: </b>
            <br />
            <ul className="ui unordered list">
              <li>Post-increment - it adds value at the end of instruction.</li>
              <li>
                Pre-increment - it adds value at the start of instruction.
              </li>
            </ul>
          </p>
          <br />
          <br />
          <b>Assignment Operators:</b>
          <br />
          They are used to assign values to variables. int a =10;
          <table class="ui very padded table">
            <thead>
              <tr>
                <th>Operator</th>
                <th>Example</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>=</b>
                </td>
                <td>int a = 10;</td>
                <td>Assigning 10 to int type variable a.</td>
              </tr>
              <tr>
                <td>
                  <b>+=</b>
                </td>
                <td>a+=10;</td>
                <td>It is short form of "a=a+10".</td>
              </tr>
              <tr>
                <td>
                  <b>-=</b>
                </td>
                <td>a-=10;</td>
                <td>It is short form of "a=a-10".</td>
              </tr>
              <tr>
                <td>
                  <b>*=</b>
                </td>
                <td>a*=10;</td>
                <td>It is short form of "a=a*10".</td>
              </tr>
              <tr>
                <td>
                  <b>/=</b>
                </td>
                <td>a/=10;</td>
                <td>It is short form of "a=a/10".</td>
              </tr>
              <tr>
                <td>
                  <b>%=</b>
                </td>
                <td>a%=10;</td>
                <td>It is short form of "a=a%10".</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <b>Comparison Operators: </b>
          <br />
          They are used to compare values and make decisions. They are most
          widely used in conditional statements. They return either true or
          false (Boolean), on the basis of which we proceed further. <br />
          e.g, For example, if 10 is greater than 5 then add a and b otherwise
          subtract a and b. <br />
          <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>operators.cpp</b>

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
          <table class="ui very padded table">
            <thead>
              <tr>
                <th>Operator</th>
                <th>Example</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>==</b>
                </td>
                <td> a == b;</td>
                <td>
                  <b>Double equal </b>checks if a is equal to b.
                </td>
              </tr>
              <tr>
                <td>
                  <b>!=</b>
                </td>
                <td> a != b;</td>
                <td>
                  <b>Not equal </b>checks if a is not equal to b.
                </td>
              </tr>
              <tr>
                <td>
                  <b>
                    <SyntaxHighlighter
                      language="cpp"
                      style={{ backgroundColor: "#ffff" }}
                    >
                      {code3}
                    </SyntaxHighlighter>
                  </b>
                </td>
                <td>
                  {" "}
                  <SyntaxHighlighter
                    language="cpp"
                    style={{ backgroundColor: "#ffff" }}
                  >
                    {code3}
                  </SyntaxHighlighter>{" "}
                </td>
                <td>
                  <b>Less than </b>checks if a is less than b.
                </td>
              </tr>
              <tr>
                <td>
                  <b>
                    <SyntaxHighlighter
                      language="cpp"
                      style={{ backgroundColor: "#ffff" }}
                    >
                      {code4}
                    </SyntaxHighlighter>
                  </b>
                </td>
                <td>
                  {" "}
                  <SyntaxHighlighter
                    language="cpp"
                    style={{ backgroundColor: "#ffff" }}
                  >
                    {code4}
                  </SyntaxHighlighter>{" "}
                </td>
                <td>
                  <b>Less than or equal </b>checks if a is less than or equal b.
                </td>
              </tr>
              <tr>
                <td>
                  <b>
                    <SyntaxHighlighter
                      language="cpp"
                      style={{ backgroundColor: "#ffff" }}
                    >
                      {code5}
                    </SyntaxHighlighter>
                  </b>
                </td>
                <td>
                  {" "}
                  <SyntaxHighlighter
                    language="cpp"
                    style={{ backgroundColor: "#ffff" }}
                  >
                    {code5}
                  </SyntaxHighlighter>{" "}
                </td>
                <td>
                  <b>Greater than </b>checks if a is greater than b.
                </td>
              </tr>
              <tr>
                <td>
                  <b>
                    <SyntaxHighlighter
                      language="cpp"
                      style={{ backgroundColor: "#ffff" }}
                    >
                      {code6}
                    </SyntaxHighlighter>
                  </b>
                </td>
                <td>
                  {" "}
                  <SyntaxHighlighter
                    language="cpp"
                    style={{ backgroundColor: "#ffff" }}
                  >
                    {code6}
                  </SyntaxHighlighter>{" "}
                </td>
                <td>
                  <b>Greater than or equal </b>checks if a is greater than or
                  equal b.
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <b>Logical Operators:</b>
          <br />
          Like comparison operators, they also return true (1) or false (0).{" "}
          <br />
          There are three types of logical operators: <br />
          <table class="ui very padded table">
            <thead>
              <tr>
                <th>Operator</th>
                <th>Example</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>&&</b>
                </td>
                <td>
                  {" "}
                  <SyntaxHighlighter
                    language="cpp"
                    style={{ backgroundColor: "#ffff" }}
                  >
                    {code7}
                  </SyntaxHighlighter>{" "}
                </td>
                <td>
                  <b>AND </b>- it says that both conditions should be true. a
                  should be greater than b and b should be greater than c.
                </td>
              </tr>
              <tr>
                <td>
                  <b>||</b>
                </td>
                <td>
                  {" "}
                  <SyntaxHighlighter
                    language="cpp"
                    style={{ backgroundColor: "#ffff" }}
                  >
                    {code8}
                  </SyntaxHighlighter>{" "}
                </td>
                <td>
                  <b>OR </b>- it says that only one conditions should be true. a
                  should be greater than b or b should be greater than c.
                </td>
              </tr>
              <tr>
                <td>
                  <b>!</b>
                </td>
                <td>
                  {" "}
                  <SyntaxHighlighter
                    language="cpp"
                    style={{ backgroundColor: "#ffff" }}
                  >
                    {code9}
                  </SyntaxHighlighter>{" "}
                </td>
                <td>
                  <b>NOT </b>- inverts the result. If a is greater than b, it
                  will return false.
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <b>Bitwise Operators:</b>
          <br />
          Bitwise operators perform operation on bit level. We deal with decimal
          values with base 10, but for using bitwise operators, computer convert
          base 10 to base 2 (binary format) and perform operations on bit and
          again convert then to base 10 and show us the output in decimal form.
          <table class="ui very padded table">
            <thead>
              <tr>
                <th>Operator</th>
                <th>Name</th>
                <th>Example</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>&</b>
                </td>
                <td> bitwise AND</td>
                <td>a & b</td>
                <td>
                  Binary of 2 is 10 and of 3 is 11 and their and will be 10 in
                  binary and computer gives the answer 2.
                </td>
              </tr>
              <tr>
                <td>
                  <b>|</b>
                </td>
                <td> bitwise OR</td>
                <td>a | b</td>
                <td>
                  By taking bitwise OR of 10 and 11 we will get 11 in binary and
                  output will be 3.
                </td>
              </tr>
              <tr>
                <td>
                  <b>~</b>
                </td>
                <td> bitwise NOT</td>
                <td>~a (uniary operator)</td>
                <td>
                  Binary of a (a=2) is 10 and bitwise not will be 01 and output
                  will be 1.
                </td>
              </tr>
              <tr>
                <td>
                  <b>
                    <SyntaxHighlighter
                      language="cpp"
                      style={{ backgroundColor: "#ffff" }}
                    >
                      {code11}
                    </SyntaxHighlighter>
                  </b>
                </td>
                <td> Shift Right</td>
                <td>
                  <SyntaxHighlighter
                    language="cpp"
                    style={{ backgroundColor: "#ffff" }}
                  >
                    {code10}
                  </SyntaxHighlighter>
                </td>
                <td>
                  a=8; binary is 1000.
                  <SyntaxHighlighter
                    language="cpp"
                    style={{ backgroundColor: "#ffff" }}
                  >
                    {code13}
                  </SyntaxHighlighter>{" "}
                  will be 10 and output will be 2.
                </td>
              </tr>
              <tr>
                <td>
                  <b>
                    <SyntaxHighlighter
                      language="cpp"
                      style={{ backgroundColor: "#ffff" }}
                    >
                      {code12}
                    </SyntaxHighlighter>
                  </b>
                </td>
                <td> Shift Left</td>
                <td>
                  <SyntaxHighlighter
                    language="cpp"
                    style={{ backgroundColor: "#ffff" }}
                  >
                    {code13}
                  </SyntaxHighlighter>
                </td>
                <td>
                  a=8; binary is 1000.
                  <SyntaxHighlighter
                    language="cpp"
                    style={{ backgroundColor: "#ffff" }}
                  >
                    {code10}
                  </SyntaxHighlighter>{" "}
                  will be 100000 and output will be 32.
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <b>Operator Precedence:</b>
          <br />
          If we have multiple operators in an expression, then compiler will
          have to decide which operator will be evaluated first and which will
          be evaluated in the last. <br />
          The order in which the arithmetic expression is evaluated is called
          the order of precedence. It is also known as hierarchy of operation.{" "}
          <br />
          When an arithmetic expression is evaluated, the computer performs only
          one operation at one time. In an expression in C++ the operations are
          performed in the following order
          <ul className="ui unordered list">
            <li>
              All multiplications and divisions are performed first from left to
              right.
            </li>
            <li>
              All additions and subtractions are then performed from left to
              right.
            </li>
            <li>
              If the parenthesis are used in an expression, the expression
              within parenthesis are first computed from left to right.
            </li>
            <li>
              When parenthesis are used within parenthesis, the expression
              within innermost parenthesis is evaluated first.
            </li>
          </ul>
          <br /><br />
          <b>Example:</b><br /><br />
          (4-(3*5))+2 <br />
          <b>1.</b> (3*5) is computed and returns value of 15. <br />
          <b>2.</b> 4-15 is computed and then return a value of -11. <br />
          <b>3.</b> -11+2 is computed and returns value of -9. <br /><br />
          You can check out precedence of operators at: <br />
          <div className="btn">
          <button class="huge ui primary button">
          <a href="https://en.cppreference.com/w/cpp/language/operator_precedence">Operator Precedence</a>
          </button>
          </div>
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
          <Q9 />
        </div>
        <Link to="/tutorials/Chapter8">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter10">
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
      
      <Footer/></div>
      <ToastContainer/></>
  );
};
export default Ch9;
