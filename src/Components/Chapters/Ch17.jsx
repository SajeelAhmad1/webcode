import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q17 from "../Questions/Q17";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch17 = () => {
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
  const code1 = `datatype * pointerName = &variableWhoseAddressWeWantToStore`;
  const code2 = `int a = 10;
cout<< &a;
//Sample output: 0x61febc. It is a hexadecimal value.
  `;
  const code3 = `int a = 10;
cout<<*(&a)<<endl;
//output: 10
`;
  const code4 = `int a=10;
int *ptr = &a; //storing address of a int pointer variable ptr.
`;
  const code5 = `#include<iostream>
using namespace std;
int main(){
    int a = 10;
    int *ptr = &a;
    cout<<ptr<<endl; //address of a will be printed
    cout<<*(ptr) //value at address in ptr will be printed (10)
    //We can also change values at address
    *ptr = 20;
    cout<<*(ptr)<<endl; //20 will be output
}`;
  const code6 = `int arr[3] = { 1,2,3 };
int *ptr = &arr;
`;
  const code7 = `#include<iostream>
using namespace std;
int main(){
    int arr[3] = { 1,2,3 };
    int *ptr = &arr; //storing base/starting address of array in pointer
    cout<<*ptr; //it will print 1. It points to base element of array
    cout<<*(ptr + 1); //output will be 2
    cout<<*(ptr + 2);//output will be 3
    return 0;
}`;
  const code8 = `int a = 10;
int *ptr1 = &a;
int **ptr2 = &ptr1;
`;

  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
            <Link to="/tutorials/Chapter16">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter18">
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
              <div class="start content">Pointers</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Pointers:
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Pointers are variables that stores the address of other
                variables. Data type of pointer is same as that of the variable
                of which address it is storing.
              </p>
              <br />
              <b>Syntax:</b>
              <div style={containerStyle}>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code1}
                </SyntaxHighlighter>
              </div>
              <br />
              <br />
              Before exploring examples, we need to know about “&” and “*”.{" "}
              <br />
              <b>Address Of Operator:</b> <br />& is called the address of
              operator. It creates <b>reference</b> to a variable. When we put
              &-sign before a variable name, it gives us the address/reference
              of that variable in computer memory. The result we get is the
              hexadecimal value. As there is only one operand, it is called
              unary operator. <br />
              <b>Example:</b>
              <br />
              <div style={containerStyle}>
                <b>pointer.cpp</b>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code2}
                </SyntaxHighlighter>
              </div>
              <br />
              <b>Dereference Operator:</b>
              <br />
              “*” is called dereference operator. When we put * sign before a
              pointer variable, it dereferences it or we can say it gives us the
              data value at that address pointer is storing. struct is declared
              outside the main function.
              <div style={containerStyle}>
                <b>pointer.cpp</b>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code3}
                </SyntaxHighlighter>
              </div>
              <br />
              <br />
              <b>Declaring a pointer:</b>
              <div style={containerStyle}>
                <b>pointer.cpp</b>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code4}
                </SyntaxHighlighter>
              </div>
              <br />
              <b>Example:</b>
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>pointer.cpp</b>

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
              <b>Pointers with Arrays:</b>
              <br />
              Syntax for declaring array pointer is same as int or any other
              pointer. <br />
              <div style={containerStyle}>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code6}
                </SyntaxHighlighter>
              </div>
              <b>Accessing array members using pointers:</b>
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>pointer.cpp</b>

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
              <b>Conclusion:</b>
              <br />
              Pointers are variables which store the address of another variable
              with the same data type. You can declare variables of type void
              which store address of variable with any data type. Pointers can
              also store the address of another pointer (variable). These are
              called pointer to pointer.
              <b>Syntax for pointer to pointer:</b>
              <br />
              <br />
              <div style={containerStyle}>
                <b>pointer.cpp</b>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code8}
                </SyntaxHighlighter>
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
              <Q17 />
            </div>
            <Link to="/tutorials/Chapter16">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter18">
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
export default Ch17;
