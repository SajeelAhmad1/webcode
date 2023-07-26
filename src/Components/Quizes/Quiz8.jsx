import { useState } from "react";
import "../Chapters/Chapters.css";
import Sidebar from "./SideBar";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
import "./Quiz.css";
import "../Chapters/Chapters.css";
import Modal from "react-modal";

const Quiz8 = () => {
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
      question: "For storing numbers, we use:",
      options: [
        "int",
        "float",
        "double",
        "All of these",
      ],
      correctAnswer: "All of these",
    },
    {
      id: 2,
      question: 'Boolean stores:',
      options: ["true/false", "0/1", "yes/no", "All of these"],
      correctAnswer: "All of these",
    },
    {
      id: 3,
      question: 'char data type can store:',
      options: ["A", "#", "%", "All of these"],
      correctAnswer: "All of these",
    },
    {
      id: 4,
      question: 'Size of data type double is:',
      options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
      correctAnswer: "8 bytes",
    },
    {
      id: 5,
      question: 'sizeOf() operator can be used to find the size of any variable/datatype:',
      options: ["Yes", "No"],
      correctAnswer: "Yes",
    },
    {
      id: 6,
      question: 'Modifiers are used with:',
      options: ["Primitive data-types", "User-defined data-types", "Derived data-types", "Inherited data-types"],
      correctAnswer: "Primitive data-types",
    },
    {
      id: 7,
      question: 'Data types restricts data storing in a variable:',
      options: ["Yes", "No"],
      correctAnswer: "Yes",
    },
    {
      id: 8,
      question: 'Correct syntax for storing 100000 in scientific number is:',
      options: ["1x10^5", "1e5", "1*10e5", "we can not store numbers in this form"],
      correctAnswer: "1e5",
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
              <Link to="/quizes/quiz3">
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
              </Link>
              <Link to="/quizes/quiz3">
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
              <div>
                {questions.map((question,i) => (
                  <div key={question.id}>
                    <div class="con">
                    <div class="que">Q{i+1}:<span class="one-per-left-margin">{question.question}</span></div>
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
                ))}<br/>
                <center><button class="ui primary button" onClick={handleQuizSubmit}>Submit Quiz</button></center>

                {/* Modal for displaying results */}
                <Modal class="modal" isOpen={isModalOpen} onRequestClose={closeModal}>
                  <b style={{fontSize:'20px'}}>Quiz Results</b>
                  {questions.map((question,i) => (
                    <div key={question.id}>
                      <p>Q{i+1}: {question.question}</p>
                      <p><b>Correct Answer:</b> {question.correctAnswer}</p>
                      <p>
                        <b>Your Answer:</b> {answers[question.id] || "Not answered"}
                      </p>
                      <hr />
                    </div>
                  ))}
                  <button class="ui secondary button" onClick={closeModal}>Close</button><br /><br />
                  <b><p>Your score is {correctCount}/{questions.length} </p></b>
                </Modal>
              </div>

              <br />
            </div>
            <Link to="/quizes/quiz3">
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
            </Link>
            <Link to="/quizes/quiz3">
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
export default Quiz8;
