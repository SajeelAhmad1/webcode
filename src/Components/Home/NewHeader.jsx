import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Header = () => {
  const signin = () =>{
    return(
      <div class="ui placeholder segment">
  <div class="ui two column very relaxed stackable grid">
    <div class="column">
      <div class="ui form">
        <div class="field">
          <label>Username</label>
          <div class="ui left icon input">
            <input type="text" placeholder="Username"/>
            <i class="user icon"></i>
          </div>
        </div>
        <div class="field">
          <label>Password</label>
          <div class="ui left icon input">
            <input type="password"/>
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
    <>
      <div className="nav ">
        <div className="mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          {" "}
          <div className="logo"> Home</div>
          <div className="first-header-bar text-white text-sm text-center sm:text-left text-xl"></div>
          <div className="header-bar text-white text-sm text-center sm:text-left text-xl">
            <Link to="/">Home</Link>
          </div>
          
          
          <div className="header-bar text-white text-center sm:text-left text-xl">
            <Link to="/services">Services</Link>
          </div>
          <div className="header-bar text-white text-center sm:text-left text-xl">
            <Link to="/tutorials">Tutorials</Link>
          </div>
          <div className="header-bar text-white text-center sm:text-left text-xl">
            <Link to="/projects">Projects</Link>
          </div>
          <div class="header-bar-btn">
            <button class="ui button"
            onClick={()=>signin}
            >Signin</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
