import React from 'react'
import CodeContainer from './CppCode'

const Cpp = () => {
  return (
        <div class="underflow ui segment" style={{width:'80%', marginLeft:'10%', border:'2px solid grey'}}>
        <div class="ui two column very relaxed grid">
          <div class="column">
            <h1
              style={{ fontSize: "25px", marginLeft: "50%", marginTop: "8%" }}
            >
              <b>C++</b>
            </h1>
            <center>
              <p style={{ marginTop: "2%", color: "green", fontSize: "15px" }}>
                A robust programming language renowned for its high performance
                <br /> and wide-ranging applications.
              </p>
            </center>
            <button
              style={{
                color: "white",
                backgroundColor: "rgb(99 102 241)",
                marginLeft: "43%",
                marginTop: "3%",
              }}
              class="ui button"
            >
              Start Now
            </button>
          </div>
          <div class="column">
            <p>
              <CodeContainer />
            </p>
          </div>
        </div>
      </div>
  )
}
export default Cpp;