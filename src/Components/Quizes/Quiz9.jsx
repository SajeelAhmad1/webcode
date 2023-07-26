import { useState } from "react";
import "../Chapters/Chapters.css";
import Sidebar from "./SideBar";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
import "./Quiz.css";
import "../Chapters/Chapters.css";
import Modal from "react-modal";

const Quiz9 = () => {
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
      question: "Identify the unary operator:",
      options: [
        "*",
        "+",
        "--",
        "/",
      ],
      correctAnswer: "--",
    },
    {
      id: 2,
      question: 'Modulus operator (%) returns:',
      options: ["quotient", "remainder", "divisor", "number"],
      correctAnswer: "remainder",
    },
    {
      id: 3,
      question: '"=" is used to:',
      options: ["check equality", "check unequality", "assign a value", "All of these"],
      correctAnswer: "assign a value",
    },
    {
      id: 4,
      question: '"a+=b" is an alias for:',
      options: ["a = b+b", "a = b", "a = a+b", "a = (a++) + b"],
      correctAnswer: "a = a+b",
    },
    {
      id: 5,
      question: 'Logical operators return:',
      options: ["true/false", "they do not return anything", "answer", "logic"],
      correctAnswer: "true/false",
    },
    {
      id: 6,
      question: 'Bitwise operators work on:',
      options: ["Hexa-decimal numbers", "Octal numbers", "Binary numbers", "Decimal numbers"],
      correctAnswer: "Binary numbers",
    },
    {
      id: 7,
      question: 'Sign for bitwise NOT is:',
      options: ["!", "~", "^", "N"],
      correctAnswer: "~",
    },
    {
      id: 8,
      question: 'Right shift operator is:',
      options: ["Unary operator", "Binary operator", "Bitwise Operator", "Both B and C"],
      correctAnswer: "Both B and C",
    },
    {
      id: 9,
      question: 'All computations(+ , - , * , /) are done left to right:',
      options: ["Yes", "No"],
      correctAnswer: "Yes",
    },
    {
      id: 10,
      question: '"(10>5)" - operator used in this expression is:',
      options: ["Bitwise", "Ligical", "Arithmetic", "Comparison"],
      correctAnswer: "Comparison",
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
              <Link to="/quizes/quiz8">
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
              <Link to="/quizes/quiz10">
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
                Operators
              </div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Quiz # 9
              </h2>
              <span class="tut-btn"><Link to="/tutorials/Chapter9">
                  <button class="ui secondary button">Read Tutorial</button>
                </Link></span>
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
            <Link to="/quizes/quiz8">
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
              <Link to="/quizes/quiz10">
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
export default Quiz9;
