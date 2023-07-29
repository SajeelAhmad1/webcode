import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch19 = () => {
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

  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
              <Link to="/tutorials/Chapter18b">
                <button
                  class="ui primary button"
                  style={{ flex: 1, minWidth: "100px", height: "40px" }}
                >
                  Previous
                </button>
              </Link>
              <Link to="/tutorials/Chapter20">
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
              <div class="start content">OOP</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Object Oriented Programming
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Object Oriented Programming is a programming paradigm in which
                we work around the objects. <br />
              </p>
              <span>
                In OOP, we create objects and objects have
                <ul class="ui unordered list">
                  <li>Attributes/Properties</li>
                  <li>Behaviours</li>
                </ul>
                which are defined inside the class. <br />
                <b>Object</b> is the instance of class. <br /> <b>Class</b> is a
                template which contains attributes and behaviours of objects.{" "}
                <br />
                For example, we have class named animals. The objects will be
                lion, monkey, zebra etc. objects have attributes, lion is brave.
                and behavior, monkey can jump. These attributes and behaviours
                are defined inside the class.
              </span>
              <br />
              <br />
              <div class="ui segment">
                <div class="ui two column very relaxed grid">
                  <div class="column">
                    <b>Class</b>
                    <div class="ui divider"></div>
                    <p>Animals</p>
                    <b>Properties </b>(data members):
                    <p>brave, intelligent, beautiful</p>
                    <b>Behaviors </b>(member functions):
                    <p>walk(), eat(), sleep()</p>
                  </div>
                  <div class="column">
                    <b>Objects</b>
                    <div class="ui divider"></div>
                    <p>Lion</p>
                    <p>Elephant</p>
                    <p>Donkey</p>
                    <p>Zebra</p>
                  </div>
                </div>
                <div class="ui vertical divider"></div>
              </div>
              <br />
              <br />
              <b>A simple explanation:</b>
              <br />
              <span>
                An object created as an instance of a class will have all the
                properties and behaviors of that class. For example, if animal
                class has properties brave, intelligent, magnificiant. And we
                create two objects lion and donkey. Then lion and donkey both
                will inherit all the properties. If lion is magnificiant, the
                donkey will also be magnificiant if it is the instance of the
                same class.
              </span>
              <br />
              <br />
              <b>Why OOP:</b>
              <br />
              <ul class="ui unordered list">
                <li>It makes your code easier to read.</li>
                <li>Makes your code 'DRY' - Do not Repeat Yourself.</li>
                <li>Easier to find errors</li>
                <li>Code looks beautiful and structured.</li>
                <li>Code will be reusable.</li>
                <li>Less time consumption.</li>
              </ul>
              <br />
              <b>Here is a roadmap to OOP:</b>
              <br />
              <br />
              <b>1. Classes and Objects:</b>
              <br />
              Learn about concept of classes and objects and how they interact.{" "}
              <br />
              <b>2. Four pillars of OOP:</b>
              <br />
              Study the four pillars of OOP.
              <ul class="ui unordered list">
                <li>Encapsulation</li>
                <li>Inheritance</li>
                <li>Polymorphism</li>
                <li>Abstraction</li>
              </ul>
              <b>3. Class Relationships:</b>
              <br />
              Study different types of class relationships, such as association,
              aggregation, and composition. <br />
              <b>4. Study Design Patterns:</b>
              <br />
              Study about the different design patterns.
              <br />
              <b>5. Error Handling and Debugging:</b>
              <br />
              Learn how to handle exceptions in OOP. <br />
              <b>6. Software Development Principles:</b>
              <br />
              Learn about software development principles. <br />
              <br />
              Now move to advanced OOP concepts and start development softwares.
              <div className="quiz">
                <Link to="/quizes/quiz21">
                  <button class="ui secondary button">Start Quiz</button>
                </Link>
              </div>
            </div>

            <Link to="/tutorials/Chapter18b">
              <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button>
            </Link>
            <Link to="/tutorials/Chapter20">
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
export default Ch19;
