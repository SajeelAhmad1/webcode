import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Q24 from "../Questions/Q24";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch29 = () => {
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
const code1 = `#include <fstream>

int main() {
    std::ofstream outputFile("output.txt"); //create ofstream object

    if (outputFile.is_open()) {
        outputFile << "Hello, this is a line written to the file." << std::endl;
        outputFile << 42 << " is an integer value." << std::endl;
        outputFile.close();
        std::cout << "Data written to the file successfully." << std::endl;
    } else {
        std::cout << "Error opening the file." << std::endl;
    }

    return 0;
}`
const code2 = `#include <fstream>
#include <string>

int main() {
    std::ifstream inputFile("input.txt");

    if (inputFile.is_open()) {
        std::string line;
        while (std::getline(inputFile, line)) {
            std::cout << line << std::endl;
        }
        inputFile.close();
    } else {
        std::cout << "Error opening the file." << std::endl;
    }

    return 0;
}`
const code3 = `#include <fstream>

int main() {
    std::ofstream outputFile("output.txt", std::ios::app);

    if (outputFile.is_open()) {
        outputFile << "This line will be appended to the file." << std::endl;
        outputFile.close();
        std::cout << "Data appended to the file successfully." << std::endl;
    } else {
        std::cout << "Error opening the file." << std::endl;
    }

    return 0;
}`
const code4 = `#include <iostream>
#include<fstream>  

using namespace std;
int main()
{
	int num;
	cout<<"Enter a number\n";
	cin>>num;
	fstream txt;
		txt.open("inp.txt", ios::out);
		txt << "Number: ";
		
		txt<<num;
		
		txt.close();
}`

  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
              <Link to="/tutorials/Chapter28">
                <button
                  class="ui primary button"
                  style={{ flex: 1, minWidth: "100px", height: "40px" }}
                >
                  Previous
                </button>
              </Link>
              <Link to="/tutorials/Chapter30">
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
              <div class="start content">File Handling </div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                File Handling 
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                File Handling allows you to work with files. Using file handling, you can read from files and 
                write into files. To work with files, you need to include <b>fstream header file</b> <br />
                
                <br />
                <p style={{ backgroundColor: "#FBEEAC", padding: "15px" }}>
                  When you use file handling in code, a file is created and any input user enters saves in the file.
                </p>
                <br /><br />
                <b>Writing to a file: </b>To write data to a file, you can use ofstream class from fstream header file. 
                Create an object and open a file using .open() function
                <div style={containerStyle}>
                  <div style={{ fontSize: "25px" }}>
                  </div>
                  <div ref={divRef}>
                    <SyntaxHighlighter language="cpp" style={darcula}>
                      {code1}
                    </SyntaxHighlighter>
                  </div>
                </div>
<br />

                <b>Reading from a file: </b>To read data from a file, you can use ifstream class from fstream header file. 
                Create an object and open a file using .open() function
                <div style={containerStyle}>
                  <div style={{ fontSize: "25px" }}>
                  </div>
                  <div ref={divRef}>
                    <SyntaxHighlighter language="cpp" style={darcula}>
                      {code2}
                    </SyntaxHighlighter>
                  </div>
                </div>
<br />


                <b>Appending to a file: </b>To append data to an existing file, you can use ofstream class with append function.
                Create an object and open a file using .open() function
                <div style={containerStyle}>
                  <div style={{ fontSize: "25px" }}>
                  </div>
                  <div ref={divRef}>
                    <SyntaxHighlighter language="cpp" style={darcula}>
                      {code3}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <br />
                <br />
                  In the following code, we are creating a file, and when we execute the program a file is created in the directory 
                  where your program is located. When you give input on console, the input will be saved in that file.
                <div style={containerStyle}>
                <div style={{ fontSize: "25px" }}>
                  <b>file.cpp</b>

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

              </p><br /><div className="quiz">
                <Link to="/quizes/quiz31">
                  <button class="ui secondary button">Start Quiz</button>
                </Link>
              </div>
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2>

              <br />
              <br />
              {/* <Q24 /> */}
            </div>
            <Link to="/tutorials/Chapter28">
              <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button>
            </Link>
            <Link to="/tutorials/Chapter30">
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
export default Ch29;
