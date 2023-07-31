import React from "react";
import "./RoadMap.css";

const RoadMap = () => {
  return (
    <div class="beginner-guide">
      <h2 class="ax ui header">
        <div class="content">
         Start Learning  <span className="ques indigo-500"> How To Code?</span>
          <div class="tag-line sub header">
            Master Programming, Create Limitless Possibilities!
          </div>
        </div>
      </h2><br /><br />
      <div class="ax ui header content" style={{fontSize:'30px'}}>
         <b>Welcome to our Beginner Guide!</b>
        </div>
      <div class="ui three top attached steps">
        <div class="step">
          {/* <i class="truck icon"></i> */}
          <div class="content">
            <div class="title">Purpose</div>
            <div class="description">Determine what you want to achieve.</div>
          </div>
        </div>
        <div class="active step">
          {/* <i class="payment icon"></i> */}
          <div class="content">
            <div class="title">Learning Curve</div>
            <div class="description">Assess the complexity of the language.</div>
          </div>
        </div>
        <div class="disabled step">
          {/* <i class="info icon"></i> */}
          <div class="">
            <div class="title">Job Market</div>
            <div class="description">Research the job market.</div>
          </div>
        </div>
      </div>

      <div class="content ui attached segment">
        
          
            <h2 class="ui left floated header">Beginner Guide</h2>
            <div class="ui clearing divider"></div>
            <h1 style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
              <b>
                Introduction to our{" "}
                <span class="highlighted-text">Beginner Guide</span>:
              </b>
            </h1>
            <p style={{ fontSize: "17px", fontFamily: "sans-serif" }}>
              Welcome to the Beginner's Guide to Programming Languages! Whether
              you're completely new to coding or looking to expand your
              programming skills, this guide will provide you with a solid
              foundation to get started. In this guide, we'll cover the basics
              of programming languages, their purpose, and how they work.
            </p>
            <br />
            <br />
            <h1 style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
              <b>What is a Programming Language?</b>
            </h1>
            <p style={{ fontSize: "17px", fontFamily: "sans-serif" }}>
              Programming languages are formal languages used to give
              instructions to computers. They provide a way for programmers to
              write code that can be executed by a computer, enabling it to
              perform specific tasks or solve problems. Each programming
              language has its own syntax, rules, and capabilities.
            </p>
            <br />
            <br />
            <h1 style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
              <b>Choosing a Programming Language:</b>
            </h1>
            <p style={{ fontSize: "17px", fontFamily: "sans-serif" }}>
              Before diving into learning a specific programming language, it's
              essential to consider your goals and the purpose of your
              programming journey. Here are a few factors to consider when
              choosing a programming language:
            </p>
          





          <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="step font-medium title-font text-gray-900 mb-1 text-xl"><b>Purpose:</b></h2>
          <p class="leading-relaxed">Determine what you want to achieve with programming. Are you interested in web development, data analysis, or mobile app development? Different programming languages excel in different domains.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="step font-medium title-font text-gray-900 mb-1 text-xl"><b>Popularity and Community: </b></h2>
          <p class="leading-relaxed">Consider the popularity and community support for a programming language. More popular languages often have extensive documentation, online resources, and active communities that can help you learn and troubleshoot.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="step font-medium title-font text-gray-900 mb-1 text-xl"><b>Learning Curve:</b></h2>
          <p class="leading-relaxed">Assess the complexity of the language and your comfort level with learning new concepts. Some languages are more beginner-friendly, while others may have steeper learning curves but offer more advanced capabilities.</p>
        </div>
      </div>
    </div>
    <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="step font-medium title-font text-gray-900 mb-1 text-xl"><b>Job Market:</b></h2>
          <p class="leading-relaxed">If you're learning programming with career prospects in mind, it's worth researching the job market to see which programming languages are in demand in your desired industry.</p>
        </div>
      </div>
    </div>
  </div>
  <h1 style={{ fontSize: "20px", fontFamily: "sans-serif", color:'black' }}><b>Common Programming Languages for Beginners:</b></h1>
    <p style={{ fontSize: "17px", fontFamily: "sans-serif" }}>There are several programming languages suitable for beginners. Here are a few popular options:</p><br />
    
    <p style={{ fontSize: "17px", fontFamily: "sans-serif", marginLeft:'3%' }}>1. <span style={{color:'black'}}><b>Python </b></span>Python is widely regarded as one of the best programming languages for beginners. It has a clean and readable syntax, with a strong emphasis on simplicity and ease of use. Python is versatile and widely used in various fields, including web development, data analysis, and artificial intelligence.</p><br/>
    <p style={{ fontSize: "17px", fontFamily: "sans-serif", marginLeft:'3%' }}>2. <span style={{color:'black'}}><b>JavaScript </b></span>JavaScript is the language of the web. It allows you to create dynamic and interactive websites. JavaScript is beginner-friendly, and learning it opens up opportunities for front-end and back-end web development.</p><br/>
    <p style={{ fontSize: "17px", fontFamily: "sans-serif", marginLeft:'3%'}}>3. <span style={{color:'black'}}><b>Java </b></span>Java is a versatile programming language commonly used for building enterprise-level applications, Android apps, and more. It has a strong, statically-typed foundation and a vast ecosystem of libraries and frameworks.</p><br/>
    <p style={{ fontSize: "17px", fontFamily: "sans-serif", marginLeft:'3%', marginBottom:'5%' }}>4. <span style={{color:'black'}}><b>C++ </b></span>C++ is a versatile programming language known for its powerful functionalities, allowing developers to efficiently create high-performance applications, leverage object-oriented programming principles, and access low-level system resources for optimal control and performance.</p>
</section>





        
      </div>
      <div class="ui three bottom attached steps">
        <div class="step">
        {/* <i class="python icon"></i> */}
          <div class="content">
            <div class="title">Python</div>
            <div class="description">"One of the best programming lanhuages"</div>
          </div>
        </div>
        <div class="active step">
          <div class="content">
            <div class="title">JavaScript</div>
            <div class="description">"Language of the web"</div>
          </div>
        </div>
        <div class="disabled step">
          <div class="content">
            <div class="title">Java</div>
            <div class="description">"A versatile programming language"</div>
          </div>
        </div>
      </div>
      <div class="btn">
      <button class="ui vk massive button">Start Now</button>
      </div>
    </div>
  );
};
export default RoadMap;
