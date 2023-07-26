import { useState } from "react";
import "../Chapters/Chapters.css";
import Sidebar from "./SideBar";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
import "./Quiz.css";
import "../Chapters/Chapters.css";
import Modal from "react-modal";

const Quiz5 = () => {
  const [answers, setAnswers] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuizSubmit = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const questions = [
    {
      id: 1,
      question: "  C++ is an extension of:",
      options: ["Java", "C", "Javascript", "Python"],
      correctAnswer: "C",
    },
    {
      id: 2,
      question: "  C++ is a ____ programming language:",
      options: ["Functional", "Procedural", "Object Oriented", "None"],
      correctAnswer: "Object Oriented",
    },
    {
      id: 3,
      question: "  C++ is not used for:",
      options: [
        "Game Development",
        "Web Development",
        "Embedded Systems",
        "Networking",
      ],
      correctAnswer: "Web Development",
    },
    {
      id: 4,
      question: "  C++ Supports Standard Template Library.",
      options: ["Yes", "No"],
      correctAnswer: "Yes",
    },
  ];
  const handleAnswerChange = (questionId, selectedAnswer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedAnswer,
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    let incorrectCount = 0;

    questions.forEach((question) => {
      const userAnswer = answers[question.id];
      if (userAnswer === question.correctAnswer) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });

    return { correctCount, incorrectCount };
  };

  const { correctCount, incorrectCount } = calculateScore();
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
              <button
                class="ui primary button"
                style={{
                  flex: 1,
                  minWidth: "100px",
                  height: "40px",
                }}
              >
                Previous
              </button>

              <Link to="/quizes/quiz2">
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
              <span class="start content">
              Introduction to C++</span>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
              Quiz # 1
              </h2><span class="tut-btn"><Link to="/tutorials/Chapter1">
                  <button class="ui secondary button">Read Tutorial</button>
                </Link></span>
              <div class="ui clearing divider"></div>
              <div>
                {questions.map((question, i) => (
                  <div key={question.id}>
                    <div class="con">
                      <div class="que">
                        Q{i + 1}:
                        <span class="one-per-left-margin">
                          {question.question}
                        </span>
                      </div>
                      {question.options.map((option) => (
                        <label class="label" key={option}>
                          <input
                            type="radio"
                            name={`question_${question.id}`}
                            value={option}
                            checked={answers[question.id] === option}
                            onChange={(e) =>
                              handleAnswerChange(question.id, e.target.value)
                            }
                          />
                          <span className="one-per-left-margin">{option}</span>
                          <br />
                        </label>
                      ))}
                    </div>
                    <hr />
                  </div>
                ))}
                <br />
                <center>
                  <button class="ui primary button" onClick={handleQuizSubmit}>
                    Submit Quiz
                  </button>
                </center>

                {/* Modal for displaying results */}
                <Modal
                  class="modal"
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                >
                  <b style={{ fontSize: "20px" }}>Quiz Results</b>
                  {questions.map((question, i) => (
                    <div key={question.id}>
                      <p>
                        Q{i + 1}: {question.question}
                      </p>
                      <p>
                        <b>Correct Answer:</b> {question.correctAnswer}
                      </p>
                      <p>
                        <b>Your Answer:</b>{" "}
                        {answers[question.id] || "Not answered"}
                      </p>
                      <hr />
                    </div>
                  ))}
                  <button class="ui secondary button" onClick={closeModal}>
                    Close
                  </button>
                  <br />
                  <br />
                  <b>
                    <p>
                      Your score is {correctCount}/{questions.length}{" "}
                    </p>
                  </b>
                </Modal>
              </div>

              <br />
            </div>
            <button
              class="ui primary button"
              style={{
                flex: 1,
                minWidth: "100px",
                height: "40px",
              }}
            >
              Previous
            </button>

            <Link to="/quizes/quiz2">
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
          </div>
        </div>
      </Sidebar>

      <div class="sideBarBody">
        <Footer />
      </div>
    </>
  );
};
export default Quiz5;
