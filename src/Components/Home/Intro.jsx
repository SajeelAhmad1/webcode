import React from 'react'
import "./Home.css"

const Intro = () => {
  return (
    <div className="intro">
      <h2 class="ax ui header">
        <div class="content" style={{marginTop:'25%', marginBottom:'5%'}}>
         Start Learning  <span className="ques indigo-500"> How To Code?</span>
          <div class="tag-line sub header">
            Master Programming, Create Limitless Possibilities!
          </div>
        </div>
      </h2>
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Kickstart your programming career with us!</h1><br />
      <p>Do not know where to start? Check out our beginner guide now. Choose a language and start reading tutorials. Do exercises and quizes to check your knowledge and unleash your imagination, learn cutting-edge techniques, and leave your mark on the digital landscape with our diverse range of inspiring coding projects. </p><br />
      <button class="ui secondary button">
            Tutorials
          </button>
      <button class="ui secondary button">
            Beginner Guide
          </button>
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </div>
  </div>
</section>
    </div>
  )
}
export default Intro;