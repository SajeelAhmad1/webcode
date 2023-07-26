import { useState } from "react";
import "../Chapters/Chapters.css";
import Sidebar from "./SideBar";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
import "./Quiz.css";
import "../Chapters/Chapters.css";
import Modal from "react-modal";

const Quiz19 = () => {
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
      question:
        "Compiler translates the instructions written in High Level Language to:",
      options: [
        "High Level Language",
        "Middle Level Language",
        "Machine Understandable language",
        "English Language",
      ],
      correctAnswer: "Machine Understandable language",
    },
    {
      id: 2,
      question: "An Integrated Development Environment (IDE) will works as:",
      options: ["Text editor", "Compiler", "Both", "None"],
      correctAnswer: "Both",
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
                {questions.map((question) => (
                  <div key={question.id}>
                    <div class="con">
                      <div class="que">{question.question}</div>
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
                          {option}
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
export default Quiz19;
