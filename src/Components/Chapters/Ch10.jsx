import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q10 from "../Questions/Q10";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch10 = () => {
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
  const code1 = `string name = "Joseph";`;
  const code2 = `#include <string>`;
  const code3 = `#include<iostream>
#include<string>
using namespace std;
int main(){
    string name = "Joseph";
    cout<<name;
    return 0;
}`;
  const code4 = `#include<iostream>
#include<string>
using namespace std;
int main(){
    //Method 1:
    string street = "Street no 14";
    string house = "House no 1";
    string address = street + house;  //this will not add space between street and house
    string address = street + " " + house; //reassigning value to address variable
    cout << address <<endl;
    //Method 2:
    string address = "Street no 14 " + "House no 1";
    cout<<address <<endl;
    //Method 3:
    //Using append function
    string address = street.append(house);
    cout<<address<<endl;
    return 0;
}`;
  const code5 = `#include<iostream>
#include<string>
using namespace std;
int main(){
    string nums = "10" + "20";
    cout<<nums<<endl;
    return 0;
}`;
  const code6 = `#include<iostream>
#include<string>
using namespace std;
    int main(){
    string name = "Joseph";
    cout<<"The length of name is " << name.length();
    //You can also use name.size() instead of name.length()
    return 0;
}`;
  const code7 = `#include<iostream>
#include<string>
using namespace std;
int main(){
    string name = "Joseph";
    cout<<name[0]<<endl;
    cout<<name[1]<<endl;
    cout<<name[2]<<endl;
    cout<<name[3]<<endl;
    cout<<name[4]<<endl;
    cout<<name[5]<<endl;
    //reassigning value
    name[0] = "H";
    cout<<name<<endl;
    //output will be Hoseph
}`;
  const code8 = `#include<iostream>
#include<string>
using namespace std;
int main(){
    cout<<"My name is \\"Joseph\\".";
    return 0;
}`;
const code9 = `#include<iostream>
#include<string>
using namespace std;
int main(){
    const myName;
    //method 1: 
    cout<<"Enter full name: \n";
    cin>>myName;   //can not give space between first and last name
    cout<<"Your full name is: "<<myName<<endl;
    //method 2:
    cout<<"Enter full name: \n";
    getline (cin, myName);   //ignores spaces
    cout<<"Your full name is "<<myName<<endl;
    return 0;
}`
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
            <Link to="/tutorials/Chapter9">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter11">
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

              <div class="start content">Strings</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Strings and Methods of Strings:
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                String is a primitive data type which is used to store text or
                sequence of characters. Strings are always enclosed in double
                quotation marks. String is an array of characters. We will discuss arrays later on.
                <br />
              </p>
              <br />
              <b>Example:</b>
              <br />
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Note: </b>While naming variables, keep in mind that C++ is a
                case sensitive language.
              </p>
              <br />
              <div style={containerStyle}>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code1}
                </SyntaxHighlighter>
              </div>
              <br />
              <b>Header file of string:</b>
              <br />
              <div style={containerStyle}>
                <SyntaxHighlighter language="cpp" style={darcula}>
                  {code2}
                </SyntaxHighlighter>
              </div>
              <br />
              <b>Example:</b>
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
                    {code3}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <b>Concatenation:</b>
              <br />
              Concatenation means joining of two strings and it is achieved by
              using addition "+" operator.
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
                    {code4}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Note: </b>If you have numbers in your string, they will not
                sum up, rather they will be concatenated.
              </p>
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
                    {code5}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <b>String Length:</b>
              <br />
              Length of string can be found by using ".length()" or ".size()"
              method.
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
              <b>Accessing Characters in string:</b>
              <br />
              As we have previously discussed that string is a sequence of
              characters. So we can access individual character and we can also
              reassign them some other values. <br />
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
                    {code7}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                <b>Note: </b>If you want to print double quotes inside string,
                use \"
              </p>
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
                    {code8}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />
              <b>Inputs in String:</b>
              <br />
              There are two methods of taking inputs in string.
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
                    {code9}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <div className="quiz">
                <Link to="/quizes/quiz10">
                  <button class="ui secondary button">Start Quiz</button>
                </Link>
              </div>
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>
              
              <br />
              <br />
              <Q10 />
            </div>
            <Link to="/tutorials/Chapter9">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
              <Link to="/tutorials/Chapter11">
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
export default Ch10;
