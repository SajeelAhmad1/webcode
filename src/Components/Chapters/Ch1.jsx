import React from "react";
import "./Chapters.css";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";

const Ch1 = () => {
  return (
    <>
      <Sidebar>
        <div class="containera">
          <div className="ch-content">
            <h2 class="ui header">
              <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button>
              <Link to="/tutorials/Chapter2">
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
              <div class="start content">
                An Overview of Computers and Programming Languages
              </div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Introduction to C++
              </h2>
              <div class="ui clearing divider"></div>
              <p style={{ backgroundColor: "#FBEEAC", padding: "15px" }}>
                <ol class="ui ordered list">
                  <li>
                    C++ is a popular programming language (extension of C
                    language) created by a Danish Computer Scientist, Bjarne
                    Stroustrup in early 80`s.
                  </li>

                  <li>C++ is object oriented programming language.</li>

                  <li>
                    C++ is a middle level language – combination of high and low
                    level language.
                  </li>

                  <li>
                    The language was updated 4 major times in 2011, 2014, 2017,
                    and 2020 to C++11, C++14, C++17, C++20.
                  </li>
                </ol>
              </p>
              <br />
              <h2
                className="ui left floated header"
                style={{ color: "#001C30" }}
              >
                Applications
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                C++ is most widely used in :<br />
                <div className="margin">
                  <ul class="ui list">
                    <li>Game Development.</li>
                    <li>System Software Development.</li>
                    <li>Application Software Development.</li>
                    <li>Embedded Systems.</li>
                    <li>High-Performance Computing.</li>
                    <li>Networking and communication.</li>
                    <li>Artificial Intelligence and machine learning.</li>
                  </ul>
                </div>
              </p>
              <br />

              <h2
                className="ui left floated header"
                style={{ color: "#001C30" }}
              >
                Why to learn C++?
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                <div className="margin">
                  <ul class="ui list">
                    <li>
                      <b>Efficiency and Performance:</b>
                      <span>
                        C++ allows for low-level memory manipulation and direct
                        hardware access, which results in efficient code
                        execution.
                      </span>
                    </li>
                    <li>
                      <b>Object-Oriented Programming (OOP): </b>
                      <span>
                        C++ supports OOP which enables modular and organized
                        code, promotes code reuse, and enhances maintainability
                        and scalability of projects.
                      </span>
                    </li>
                    <li>
                      <b>Standard Template Library (STL): </b>
                      <span>
                        C++ provides a powerful library called the Standard
                        Template Library (STL), which offers a collection of
                        generic data structures (like vectors, lists, and
                        queues) and algorithms (like sorting and searching).
                      </span>
                    </li>
                    <li>
                      <b>Portability: </b>
                      <span>
                        C++ code can be compiled and run on various platforms,
                        including Windows, macOS, Linux, and embedded systems.
                      </span>
                    </li>
                    <li>
                      <b>Compatibility with C: </b>
                      <span>
                        : C++ is an extension of the C programming language. C++
                        compilers can compile most C programs with few
                        modifications, making it easy to integrate existing C
                        code into C++ projects.
                      </span>
                    </li>
                    <li>
                      <b>Industry Demand: </b>
                      <span>
                        C++ is widely used in various industries, including game
                        development, system programming, finance, and embedded
                        systems.{" "}
                      </span>
                    </li>
                    <li>
                      <b>Educational Value: </b>
                      <span>
                        Learning C++ can provide a solid foundation in
                        programming concepts and principles. C++ requires a good
                        understanding of memory management, pointers, and other
                        low-level details, which can enhance your overall
                        programming skills and prepare you for learning other
                        languages and technologies. As C++ is close to C, C# and
                        java, it makes it easy for programmers to switch to C++
                        or vice versa.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </p>
              <br />

              <h2
                className="ui left floated header"
                style={{ color: "#001C30" }}
              >
                Syntax of C and C++:
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                As C++ is derived from C, both have almost the same syntax. C++
                compilers can compile most C programs with few modifications,
                making it easy to integrate existing C code into C++ projects.
              </p>

              <h4
                class="ui horizontal divider header"
                style={{ backgroundColor: "#FBEEAC", padding: "10px" }}
              >
                Difference of C and C++
              </h4>
              <p>
                The basic difference between C and C++ is Object Oriented
                Programming
              </p>

              <table class="ui definition table">
                <tbody>
                  <tr>
                    <td
                      style={{ backgroundColor: "grey" }}
                      class="eight wide column"
                    >
                      C++
                    </td>
                    <td style={{ backgroundColor: "grey" }}>C</td>
                  </tr>
                  <tr>
                    <td class="eight wide column">
                      C++ allows the use of classes, objects, inheritance,
                      polymorphism, and other OOP concepts
                    </td>
                    <td>
                      C is a procedural programming language and does not
                      support OOP
                    </td>
                  </tr>
                  <tr>
                    <td>
                      C++ includes the Standard Template Library (STL), which
                      provides a collection of generic data structures (like
                      vectors, lists, and queues) and algorithms (like sorting
                      and searching)
                    </td>
                    <td>
                      C does not have an equivalent standard library for these
                      features.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      C++ supports exception handling, which allows for the
                      detection and handling of runtime errors or exceptional
                      conditions
                    </td>
                    <td>
                      C does not have built-in support for exception handling,
                      and error handling is typically done through error codes
                      or return values.
                    </td>
                  </tr>
                </tbody>
              </table>

              <p style={{ backgroundColor: "#FBEEAC", padding: "10px" }}>
                This tutorial will teach you the basics of C++.
                <br />
                It is not necessary to have any prior programming experience.
              </p>
              <div className="quiz">
                <Link to="/quizes/quiz1">
                  <button class="ui secondary button">Start Quiz</button>
                </Link>
              </div>
            </div>
            <button class="ui primary button">Previous</button>
            <Link to="/tutorials/Chapter2">
              <button class="ui primary button" style={{ float: "right" }}>
                Next
              </button>
            </Link>
            <br />
          </div>
        </div>
      </Sidebar>

      <div class="sideBarBody">
        <Footer />
      </div>
    </>
  );
};
export default Ch1;
