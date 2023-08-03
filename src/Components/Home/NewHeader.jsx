import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Header = () => {
  const signin = () => {
    return (
      <div class="ui placeholder segment">
        <div class="ui two column very relaxed stackable grid">
          <div class="column">
            <div class="ui form">
              <div class="field">
                <label>Username</label>
                <div class="ui left icon input">
                  <input type="text" placeholder="Username" />
                  <i class="user icon"></i>
                </div>
              </div>
              <div class="field">
                <label>Password</label>
                <div class="ui left icon input">
                  <input type="password" />
                  <i class="lock icon"></i>
                </div>
              </div>
              <div class="ui blue submit button">Login</div>
            </div>
          </div>
          <div class="middle aligned column">
            <div class="ui big button">
              <i class="signup icon"></i>
              Sign Up
            </div>
          </div>
        </div>
        <div class="ui vertical divider">
          Or
        </div>
      </div>
    )
  }

  return (
    <nav className="bg-[#222222] w-full fixed top-0 z-50 p-5 flex flex-col sm:flex-row gap-2 justify-between items-center">
      <div className="text-white w-full flex justify-center sm:justify-normal">
        <Link to='/' className="text-2xl font-bold">CodeCrafter</Link>
      </div>
      <div className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-center sm:justify-end w-full gap-4">
        <div className="text-white text-center sm:text-left text-xl">
          <Link to="/tutorials/Chapter1">Tutorial</Link>
        </div>
        <div className="text-white text-center sm:text-left text-xl">
          <Link to="/quizes/quiz1">Quiz</Link>
        </div>
        <div className="text-white text-center sm:text-left text-xl">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="text-white text-center sm:text-left text-xl">
          <Link to="/cppatglance">C++ at Glance</Link>
        </div>
      </div>
    </nav>
  );
};
export default Header;
