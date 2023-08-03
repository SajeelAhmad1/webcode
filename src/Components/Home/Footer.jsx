import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white px-4 py-8 text-black flex flex-col md:flex-row justify-between gap-6 md:gap-0 border-t-2">
      <div className="flex flex-col justify-center items-center w-full md:w-1/2">
        <Link to="/" className="text-4xl">CodeCrafter</Link>
        <p className="text-gray-600">
          Master C++, Create Limitless Possibilities!
        </p>
        <div className="flex gap-3 mt-2 text-xl">
          <a href="/"><FaGithub /></a>
          <a href="/"><FaFacebook /></a>
          <a href="/"><FaInstagram /></a>
          <a href="/"><FaTwitter /></a>
        </div>
      </div>
      <div className="flex justify-center gap-32 w-full md:w-1/2">
        <div className="text-gray-600">
          <h2 className="text-black text-2xl">Quick Links</h2>
          <div className="flex flex-col">
            <Link to="/" className="hover:text-black">Home</Link>
            <Link to="/tutorials/Chapter1" className="hover:text-black">Tutorials</Link>
            <Link to="/quizes/quiz1" className="hover:text-black">Quiz</Link>
            <Link to="cppatglance" className="hover:text-black">C++ at Glance</Link>
          </div>
        </div>
        <div className="text-gray-600">
          <h2 className="text-black text-2xl">Help</h2>
          <div className="flex flex-col">
            <Link to="/quizes/quiz1" className="hover:text-black">About</Link>
            <Link to="/quizes/quiz1" className="hover:text-black">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
