import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q8 from "../Questions/Q8";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch8 = () => {
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
    float dia1 = 32e2;
    double dia2 = 32e4;
    cout<<"Value of dia1 = "<<dia1<<endl;
    cout<<"Value of dia2 = "<<dia2<<endl;
    return 0;
}`;
  const code2 = `#include <iostream>
using namespace std;
int main(){
    bool isTrue = true;
    cout<<"isTrue = "<<isTrue<<endl;
    bool isFalse = false;
    cout<<"isFalse = "<<isFalse<<endl;
    return 0;
}`;
  const code3 = `char grade = 'A'`;
  const code4 = `#include <iostream>
using namespace std;
int main(){
    char grade = 'A';
    cout<<"My grade is "<<grade<<endl;
    return 0;
}`;
  const code5 = `#include <iostream>
using namespace std;
int main(){
    char grade = 65;
    cout<<"My grade is "<<grade<<endl;
    return 0;
}`;
  const code6 = `#include <iostream>
using namespace std;
int main(){
    string myName = "John Smith";
    cout<<"My name is "<<myName<<endl;
    return 0;
}`;
  const code7 = `#include <iostream>
using namespace std;
int main(){
    cout<<"Size of char is "<<sizeof(char)<<" bytes"<<endl;
    cout<<"Size of bool is "<<sizeof(bool)<<" bytes"<<endl;
    cout<<"Size of int is "<<sizeof(int)<<" bytes"<<endl;
    cout<<"Size of float is "<<sizeof(float)<<" bytes"<<endl;
    cout<<"Size of double is "<<sizeof(double)<<" bytes"<<endl;
    return 0;
}`;
  const code8 = `#include <iostream>
using namespace std;
int main(){
    unsigned int a = 10;
    signed int b = -20;
    cout<<a<<endl;
    cout<<b<<endl;
    return 0;
}`;
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
            <Link to="/tutorials/Chapter7">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter9">
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
              <div class="start content">Data Types</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Data types of Variables:
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Datatypes specify the type of data strong in the variable. They
                restrict other types of data to be stored in the variable. For
                example, if we have int type var, it will not store float or
                char value. <br />
                Basically, there are three types of data types in C++:
                <ul className="ui unordered list">
                  <li>Primary/Built-in data types</li>
                  <li>Derived data types</li>
                  <li>User-defined data types</li>
                </ul>
                <br />
                <b>
                  Our concern in this chapter is to focus on primitive data
                  types. <br />
                  <br />
                  <br />
                  Primitive Data Types: <br />
                  For Numbers: <br />
                </b>
                <ul className="ui unordered list">
                  <li>int - stores integer value.</li>
                  <li>float - it stores decimal values.</li>
                  <li>
                    double - it also stores decimal values but its precision is
                    double than float.
                  </li>
                </ul>
              </p>
              <br />
              <b>Scientific Numbers:</b>
              <br />
              Scientific numbers are stored in double or float data type. <br />
              <b>Example:</b>
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>datatype.cpp</b>

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
              </div><br /><br />
              <b>Boolean Data Type:</b>
              <br /> It stores only two values true or false. It returns 1 when
              true and 0 when false. <br />Boolean stores: 
                            <ul class="ui unordered list">
                <li>true / false</li>
                <li>Yes / No</li>
                <li>1 / 0</li>
              </ul>
               
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>datatype.cpp</b>

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
              <b>Practical Use:</b>
              <br />
              You can use it to set value of a variable using conditional
              statement which we will learn in future. <br />
              For example, if Boolean type var istrue is true then set the value
              of int type var 10 otherwise 15.
              <b>Char Data Type:</b>
              <br /> It stores single character in single quotes. <br />
              <b>Example:</b>
              <div style={containerStyle}>{code3}</div>
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>char.cpp</b>

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
              You can also assign{" "}
              <a
                class="ascii-link"
                href="https://www.geeksforgeeks.org/ascii-table/"
              >
                ASCII values
              </a>{" "}
              of characters to a char typr variable. <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>char.cpp</b>

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
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Point:</b> As beginners, some people will think that it
                should print 65. See carefully it is a character type variable,
                not integer type. If we assign a number to char type variable,
                then it will print character at that ASCII value.
              </p>
              <br />
              <b>String Data Type:</b>
              <br />
              String data type is use to store sequence of
              characters/text/anything inside double quotation marks. <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>string.cpp</b>

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
              We will learn about string data type in detail in later tutorial.{" "}
              <br />
              <b>Size of variables:</b>
              <br />
              Size of variable depends upon the data type of variable. <br />
              <table class="ui table">
                <thead>
                  <tr>
                    <th class="ten wide">Data Type</th>
                    <th class="six wide">Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>char</td>
                    <td>1 byte</td>
                  </tr>
                  <tr>
                    <td>bool</td>
                    <td>1 byte</td>
                  </tr>
                  <tr>
                    <td>int </td>
                    <td>2 or 4 bytes</td>
                  </tr>
                  <tr>
                    <td>float</td>
                    <td>4 bytes</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>double</th>
                    <th>8 bytes</th>
                  </tr>
                </tfoot>
              </table>
              <br />
              <br />
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Note: </b>It is not important to remember the size of all
                data types. <br />
                <b>sizeof() operator: </b> If you want to find the size of a
                datatype, put it in sizeof() operator. <br />
              </p>
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>size.cpp</b>

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
              <b>Similarly, you can also find the size of a variable.</b>
              <br />
              <br />
              <b>Modifiers:</b>
              <br />
              Modifiers are used to define data types more precisely. They are
              used with primitive data types. <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>modifiers.cpp</b>

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
              <table class="ui table">
                <thead>
                  <tr>
                    <th class="ten wide">Modifiers</th>
                    <th class="six wide">Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>int</td>
                    <td>4 byte</td>
                  </tr>
                  <tr>
                    <td>signed int</td>
                    <td>4 byte</td>
                  </tr>
                  <tr>
                    <td>unsigned int </td>
                    <td>4 bytes</td>
                  </tr>
                  <tr>
                    <td>short</td>
                    <td>2 bytes</td>
                  </tr>
                  <tr>
                    <td>unsigned short</td>
                    <td>2 bytes</td>
                  </tr>
                  <tr>
                    <td>long</td>
                    <td>2 bytes</td>
                  </tr>
                  <tr>
                    <td>signed long</td>
                    <td>8 bytes</td>
                  </tr>
                  <tr>
                    <td>unsigned long</td>
                    <td>8 bytes</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>signed short</th>
                    <th>8 bytes</th>
                  </tr>
                </tfoot>
              </table>
              <br />
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                Do not need to worry about their details now. You will manage
                them automatically by doing practice in future.
              </p>
              
              <div className="quiz">
                <Link to="/quizes/quiz8">
                  <button class="ui secondary button">Start Quiz</button>
                </Link>
              </div>
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>
              <br />
              
              <br />
              <Q8 />
            </div>
            <Link to="/tutorials/Chapter7">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter9">
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
export default Ch8;
