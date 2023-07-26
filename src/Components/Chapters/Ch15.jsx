import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q15 from "../Questions/Q15";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch15 = () => {
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
  const code1 = `datatype name[size] = {datavalues separated by comas}`;
  const code2 = `#include <iostream>
using namespace std;
int main(){
    int marks [5] = { 76, 55, 92, 65 };
    cout<<marks[0]; //print marks at zero index
    cout<<marks[1]; //print marks at index one
    cout<<marks[2]; //print marks at index two
    cout<<marks[3]; //print marks at index three
    cout<<marks[4]; //print marks at index four
    return 0;
}`;
  const code3 = `#include <iostream>
using namespace std;
int main(){
    int marks [5] = { 76, 55, 92, 65 };
    for(int i=0; i<5; i++){
        cout<<marks[i]<<endl;
    }
    return 0;
}`;
  const code4 = `#include <iostream>
using namespace std;
int main(){
    string names [3] = { “Andrew”, “Ema”, “Sarah” }; 
    for(int i=0; i<3; i++){
        cout<<marks[i];
    }
    cout<<endl; //print new line 
    names[0] = “Leah”;
    for(int i=0; i<3; i++){
        cout<<marks[i];
    }
    cout<<endl;
    return 0;
}`;

  const code5 = `#include <iostream>
using namespace std;
int main(){
    int ages[] = { 20, 22, 24 } //compiler will automatically determine the size on the basis of data in array
    return 0;
}`;
  const code6 = `int numOfElements = sizeof(array) / sizeof(datatype)`;

  const code7 = `#include <iostream>
using namespace std;
int main(){
    int marks [] = { 10, 20, 30 };
    for(int i = 0; i < ( sizeof(marks)/ sizeof(int) );  i++){ 
        cout<<marks[i];
    }
}`;
const code8 = `#include <iostream>
using namespace std;
int main(){
    int marks [10] ;
    for(int i = 0; i < 10;  i++){ 
        cin>>marks[i];
    }
}
`

  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
            <Link to="/tutorials/Chapter14b">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter16">
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
              <div class="start content">Arrays</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Arrays:
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Arrays are data type in C++ which are used to store multiple
                values of same data type.
              </p>
              <br />
              <b>Why?</b>
              <br />
              In C++, if you want to store marks of ten students, you will have
              to declare ten variables. But if you use arrays, you do not have
              to declare ten variables. As data type of all these variables is
              same, you can use only one array to store them. <br />
              <b>Syntax:</b>
              <div style={containerStyle}>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code1}
                </SyntaxHighlighter>
              </div>
              <br />
              Here size stores, how many elements are there in array and if you
              want to access data on some individual at any index, you can
              access,
              <br />
              <br />
              <b>Example:</b>
              <br />
              name[0] // it will access first element of array. <br />
              Similarly name[2] // it will access data at index 2 and it will be
              on third number because index starts from zero. <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>array.cpp</b>

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
              <b>Problem:</b>
              <br />
              It is easy to print when size of array is 10, 20, 30 or 100. But
              imagine if the size of array is 1 million, is it good to print
              individual indexes like this? What we are doing here? We are doing
              the same work over and over again. And we have seen that when we
              need to repeat our same block of code, we use loops.
              <br />
              <br />
              <br />
              <b>Solution:</b>
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>array.cpp</b>

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
              <b>Taking input in arrays:</b>
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>array.cpp</b>

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
              <b>Changing elements of array:</b>
              <br />
              You can change the elements of array at any index you want. <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>array.cpp</b>

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
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Note: </b>If you do not specify the size of array, it is ok.
              </p>
              <br />
              <b>Example:</b>
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>array.cpp</b>

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
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Note: </b>Point: If we do not know the size, to which number
                we will run loop?
              </p>
              <br />
              <b>Find size of array: </b>
              <br />
              sizeof() operator as discussed earlier will give you the size of
              array. Size of array does not gives you the number of elements in
              array. As size of int is 4bytes and we have three integers, so
              size of array will be 12 bytes. For this purpose, we have to
              divide size of array with size of datatype. <br />
              <div style={containerStyle}>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code6}
                </SyntaxHighlighter>
              </div>
              <br />
              <b>Example:</b>
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>array.cpp</b>

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
              <div className="quiz">
                <Link to="/quizes/quiz16">
                  <button class="ui secondary button">Start Quiz</button>
                </Link>
              </div>
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>
              
              <br />
              <br />
              <Q15 />
            </div>
            <Link to="/tutorials/Chapter14b">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter16">
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
export default Ch15;
