import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch16 = () => {
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
  const code1 = `struct nameOfStruct {
//data members or member functions
};`;
  const code2 = `struct std{
    string name = “John”;
    string regNo = “21-ComputerSceince”;
    int marks = “90”;
    float per = “90.00”;
};`;
  const code3 = `#include<iostream>
using namespace std;
struct std{
    string name = “John”;
    string regNo = “21-ComputerSceince”;
    int marks = “90”;
    float per = “90.00”;
};

int main(){
    cout<<"I have construct a struct with name std."<<endl;
    return 0;
}`;
  const code4 = `#include<iostream>
using namespace std;
struct std{
    string name = “John”;
    string regNo = “21-ComputerSceince”;
    int marks = “90”;
    float per = “90.00”;
};

int main(){
    //for accessing members of structure, we make instance of struct. As it is user defined data type.
    struct std std1; //we defined a variable std1 of type struct std
    //Accessing member of struct
    cout<<std1.name<<endl;
    cout<<std1.regNo<<endl;
    cout<<std1.marks<<endl;
    cout<<std1.per<<endl;
    return 0;
}`;
  const code5 = `#include<iostream>
using namespace std;
union opt{
    int a;
    int b;
    int c;
};

int main(){
    //for accessing members of structure, we make instance of struct. As it is user defined data type.
    union opt options; //we defined a variable options of type union opt
    //Accessing member of struct
    options.a = 10;
    cout<<options.a<<endl;
    //We can not use options.b and options.c after using options.a and vice cersa. We will get a garbage //value.
}`;
  const code6 = `union std{
int marks;//4bytes
float per;//4bytes
char grade;//1byte
};`;
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
            <Link to="/tutorials/Chapter15">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter17">
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
              <div class="start content">Structures and Unions</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Structures/struct:
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Struct is a user defined data-type, which hold data with same or
                different data types. <br />
                We studied in our pervious tutorial about arrays. They hold data
                with the same data type.
              </p>
              <br />
              <b>Why do we need struct?</b>
              <br />
              What if we need to store more than one variables with same or
              different data types? Store name, registration number and marks of
              students? In arrays, we store only marks of students. But if want
              to store name and registration number along with marks, we use
              structures or struct. And variables in structures are called
              members of particular struct.
              <br />
              <b>Syntax:</b>
              <div style={containerStyle}>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code1}
                </SyntaxHighlighter>
              </div>
              <br />
              <br />
              <b>Example:</b>
              <br />
              <div style={containerStyle}>
                <b>struct.cpp</b>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code2}
                </SyntaxHighlighter>
              </div>
              <br />
              struct is declared outside the main function.
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>struct.cpp</b>

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
              <b>Accessing memers of struct:</b>
              <br />
              We have to create an instance of struct inside main function and
              then using "." operator, we can assecc members of struct. <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>struct.cpp</b>

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
              <b>What would be the size of struct std?</b><br/><br/>
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Note: </b>Size of struct depends upon the type of variable
                and number of variables, it is storing.
                <br />
                If struct has 1 int (4 bytes), 1 char(1 byte) and 1 float(4
                bytes), its size would be 9 bytes. You can check it by using
                sizeof() operator.
              </p>
              <br />
              <b>Why structures:</b>
              <br />
              We can declare vars like std1Name, std1Marks, std2Name, std2Marks.
              Then why structs?
              <br />
              Actually structures make your code more readable and it makes code
              easy to manage.
              <br />
              <br />
              <b>Unions:</b>
              <div class="ui clearing divider"></div>
              <br />
              Syntax of union is same as struct. We use union when we need only
              one data member at a time. For example, if we have three books, we
              can read one book at a time. Similarly, we can use one data member
              of union at a time. <br/><br/>
              <p style={{ backgroundColor: "#FBEEAC", padding: "15px" }}>
                <b>Note: </b>You can not declare functions inside a union.
              </p> <br/>
              <b>Why there is a need to use union?</b>
              <br /> We can declare struct and use its one data member at a
              time. The answer is that union provides us memory optimization.{" "}
              <br />
              If we declare a union and a struct with same data members, memory
              taken by union will be less.
              <br />
              <b>Example:</b>
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>union.cpp</b>

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
              <b>Size of struct:</b>
              <br />
              Here we go! the size of struct is the sum of individual sizes of
              its data members, but the size of union is the size of its largest
              data member.
              <div style={containerStyle}>
                <b>union.cpp</b>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code6}
                </SyntaxHighlighter>
              </div>
              <br />
              <b>
                Size of the union will be 4 bytes as its largest data member
                int/float is 4 bytes.
              </b><br/><br/>
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Points: </b>
                <br />
                1. Do not forget to put ";" after declaring struct or union.{" "}
                <br />
                2. We can also use functions as member of structures or unions,
                which we will discuss later.
              </p>
            </div>
            <Link to="/tutorials/Chapter15">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter17">
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
export default Ch16;
