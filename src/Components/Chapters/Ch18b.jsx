import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q18b from "../Questions/Q18b";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch18b = () => {
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

  const code1 = `var = getchar();  //use of var is optional`;
  const code2 = `int putchar(int c);`;
  const code3 = `gets(var_name);  //variable should be of string type.`;
  const code4 = `puts(var_name);  //variable should be of string type.`;
  const code5 = `int strlen(string);`;
  const code6 = `int strcmp(string1 , string2 );
//If string1 is equal to string2 then it returns 0.
// If string1 is less than string 2 it returns less than 0.
// If string 1 is greater than string 2 then it returns greater than 0.`;
  const code7 = `int strncmp (string1, string2, n);
// n is the number of characters that are to be compared;
`;
const code8 = `strcpy(string1, string2);`
const code9 = `strncpy(string1, srting2, n);
// n is the number of characters of string 2 that are to be copied to string 1`
const code10 = `strcat(string1,string2);`
const code11 = `strncat(string1, string2, n);
// n is the number of characters of string 2 that are appended to string 1`
const code12 = `pow(x , y);
//it will calculate x raised to power y`
const code13 = `sqrt(x);`
const code14 = `floor(x);`
const code15 = `ceil(x);`
const code16 = `fmod(x, y);`
const code17 = `cos(x);`
const code18 = `sin(x);`
const code19 = `tan(x);`
const code20 = `log(x);`
const code21 = `log10(x);`

  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
            <Link to="/tutorials/Chapter18">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
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
              <br />
              <div class="start content">Built-in functions</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Built-in Functions:
              </h2>
              <div class="ui clearing divider"></div>
              <b style={{ fontSize: "21px" }}>Built-in functions in stdio:</b>
              <p>
                The “stdio” stands for standard input/output. This header file
                contain a large number of standard input and output functions
                that are used to get input from the input devices and also to
                print result on the output device. The commonly used functions
                of this header file and their description are given below.
              </p>
              <br />
              <b>The “getchar” Function:-</b>
              <br />
              This function is used to get a single character from a standard
              input device i.e. from the keyboard during program execution. The
              main features of this function are: 1. When a character is entered
              it is displayed on the screen. 2. Enter key must be pressed to
              complete the input.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code1}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />
              <b>The “putchar” Function:-</b>
              <br />
              The putchar function is used to put single character on screen.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code2}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />
              <b>The gets Function:-</b>
              <br />
              The gets function is used to take input in string type variable.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code3}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />
              <b>The puts Function:-</b>
              <br />
              The puts function is used to print string type variable on screen.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code4}
                  </SyntaxHighlighter>
                </div>
              </div>
              <b style={{ fontSize: "21px" }}>Built-in functions of string:</b>
              <p>
                The “string.h” header file contains the functions that are used
                to process strings. The commonly used functions of this header
                file are given below.
              </p>
              <br />
              <b>The “strlen” Function:-</b>
              <br />
              This function is used to find the length of the string. Is counts
              the total number of characters including spaces. Null characters
              are excluded.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code5}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />
              <b>The “strcmp” Function:-</b>
              <br />
              This function is used to compare two strings. It compares first
              string with the second string character by character.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code6}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />
              <b>The “strncmp” Function:-</b>
              <br />
              This function is similar to the “strcmp” function but it compares
              specified number of characters of the two strings.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code7}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />


              <b>The “strcpy” Function:-</b>
              <br />
              It is used to copy the contents of one string variable including the null character (‘\0’).
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code8}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />


              <b>The “strncpy” Function:-</b>
              <br />
              It is similar to strcpy function but it is used to copy a specified number of characters from one
string to another string variable.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code9}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />


              <b>The “strcat” Function:-</b>
              <br />
              It is used to append or combine the contents of one string to another string variable including the
null character.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code10}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />


              <b>The “strncat” Function:-</b>
              <br />
              It is similar to strcat function but it is used to append a specified number of characters of one
string to another string variable.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code11}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />



              <b style={{ fontSize: "21px" }}>Built-in functions in math.h:</b>
              <p>
              The functions that are need to perform the mathematical calculations are defined in “math.h”
header file.

              </p>
              <br />
              <b>The pow Function:-</b>
              <br />
              It is used to calculate the exponential power of a given integer number.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code12}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />



              <b>The sqrt Function:-</b>
              <br />
              It is used to calculate the square root of a given positive number.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code13}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />


              <b>The floor Function:-</b>
              <br />
              It is used to round a given float value to the integer value. The given float value is converted into
largest integer value that is not greater than the given float value.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code14}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />


              <b>The ceil Function:-</b>
              <br />
              It is similar to the floor function but it returns the rounded integer value greater than the given
float or double number.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code15}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />


              <b>The fmod Function:-</b>
              <br />
              It is used to calculate the remainder by dividing one floating point number by another floating
point number.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code16}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />


              <b>The cos Function:-</b>
              <br />
              It is used to calculate the trigonometric cosine of a given angle. The angle is given in radius as a
floating number.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code17}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />


              <b>The sin Function:-</b>
              <br />
              It is used to calculate the trigonometric sine of a given floating number. The angle is given in
radians as a floating number.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code18}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />



              <b>The tan Function:-</b>
              <br />
              It is used to calculate the trigonometric tangent of a given floating number. The angle is given in
radians as a floating number.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code19}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />



              <b>The log Function:-</b>
              <br />
              It is used to calculate the natural logarithm (base e) of a given floating number.
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code20}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
              <br />



              <b>The log10 Function:-</b>
              <br />
              It is used to calculate the logarithm (base 10) of a given floating number. 
              <br />
              <br />
              <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}></div>
                <div ref={divRef}>
                  <SyntaxHighlighter language="cpp" style={darcula}>
                    {code21}
                  </SyntaxHighlighter>
                </div>
              </div>
              <br />
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
              <Q18b />
            </div>
            <Link to="/tutorials/Chapter18">
            <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button></Link>
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
export default Ch18b;
