import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeContainer = () => {
  const containerStyle = {
    width: "100%",
    backgroundColor: "#A9A9A9",
    padding: "30px",
    borderRadius: "3px",
    marginLeft: "0%",
  };
  const heading = <b>C++ example</b>;
  const cppCode = `#include <iostream>
using namespace std;

int main() {
  cout << "<Hello, World!>";
  return 0;
}`;

  return (
    <div style={containerStyle}>
      <div style={{ fontSize: "25px" }}>{heading}</div>
      <SyntaxHighlighter language="cpp" style={darcula}>
        {cppCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeContainer;
