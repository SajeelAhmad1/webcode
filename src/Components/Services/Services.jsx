import React from 'react'
import "./Services.css"
import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';


const Services = () => {
  return (
    <>
    <div class="services"><br /><br /><br/><br />
      <div>
      <h2 class="ax ui header">
        <div class="content">
         We provide following  <span className="ques indigo-500"> Services</span> 
          
        </div>
      </h2>
      </div><br /><br />
      
        <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <div class="abs absolute inset-0 w-full h-full object-cover object-center"><div class="text">Free Tutorials</div></div>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"><b>Free Tutorials</b></h2>
            <p class="leading-relaxed">With our tutorials, we provide limitless possibilities to learn Computer Programming.</p>
            <button onclick="window.location.href='bubblesort.html';" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              <Link to="/tutorials">Explore</Link>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
          <div class="abs absolute inset-0 w-full h-full object-cover object-center"><div class="text">Exercises</div></div>          
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"><b>Exercises</b></h2>
              <p class="leading-relaxed">Dive into the world of coding and tackle real-life scenarios, solve hands-on practice questions.</p>
              <button onclick="window.location.href='insertion.html';" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Explore
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
          <div class="abs absolute inset-0 w-full h-full object-cover object-center"><div class="text">Quizes</div></div>          
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"><b>Quizes</b></h2>
              <p class="leading-relaxed">Put your knowledge to the test and solidify your understanding of programming concepts.</p>
              <button onclick="window.location.href='heapsort.html';" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                <Link to="/quizes">Explore</Link>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
          <div class="abs absolute inset-0 w-full h-full object-cover object-center"><div class="text">Projects</div></div>           
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"><b>Projects</b></h2>
              <p class="leading-relaxed">Unleash your imagination, learn cutting-edge techniques with our diverse range of projects.</p>
              <button onclick="window.location.href='selectionsort.html';" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                <Link to="/projects">Explore</Link>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
          <div class="abs absolute inset-0 w-full h-full object-cover object-center"><div class="text">Beginner Guide</div></div>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"><b>Beginner Guide</b></h2>
              <p class="leading-relaxed">If you are a beginner and do not know from where to start? This section will help you.</p>
              <button onclick="window.location.href='mergesort.html';" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Explore
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
          <div class="abs absolute inset-0 w-full h-full object-cover object-center"><div class="text">
            C++ at Glance
            </div></div>
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"><b>C++ at Glance</b></h2>
              <p class="leading-relaxed">In this section, you can go through all the topics of C++.</p>
                <button onclick="window.location.href='quicksort.html';" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                  <Link to="/cppatglance">Explore</Link>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
export default Services;
