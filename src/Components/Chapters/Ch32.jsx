import { useRef } from "react";
import "./Chapters.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
// import Q32 from "../Questions/Q32";
import Sidebar from "../SideBar/Sidebar";
import Footer from "../Home/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Ch32 = () => {
  const divRef = useRef(null);

  const copyContent = () => {
    const divContent = divRef.current.innerText;
    navigator.clipboard
      .writeText(divContent)
      .then(() => {
        toast.success("Content copied!", { position: "top-center" });
      })
      .catch((error) => {
        toast.error("Error copying content:", error, {
          position: "top-center",
        });
      });
  };
  const containerStyle = {
    width: "100%",
    backgroundColor: "#A9A9A9",
    padding: "20px",
    borderRadius: "3px",
    marginLeft: "0%",
  };

  const code1 = `#include <iostream>
using namespace std;

template <typename T>
void max(T &a, T &b) {
    if(a > b){
    	cout<<a<<endl;
	}
	
	else{
		cout<<b<<endl;
	}
	
}
int main() {
	int a = 10, b = 12;
	max(a, b);
	
	float c = 12.12, d = 34.21;
	max(c, d);
	
	char e = 'A', f = 'Z';
	max(e, f);
    return 0;
}`;
const code2 = `#include <iostream>
using namespace std;

template <typename T1, typename T2>
class Pair {
	private:
    	T1 first;
    	T2 second;
	public:
    	Pair(T1 first, T2 second){
			this->first = first;
			this->second = second;
		}

    	T1 getFirst() const { 
			return first; 
		}
    	T2 getSecond() const {
		 return second; 
		}


};
int main() {
    Pair<int, double> myPair(42, 3.14);
    cout << "First value: " << myPair.getFirst() << ", Second value: " << myPair.getSecond() << endl;
    
    Pair<string, char> anotherPair("Hello", 'X');
    cout << "First value: " << anotherPair.getFirst() << ", Second value: " << anotherPair.getSecond() << endl;
    
    return 0;
}`

 
  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
              <Link to="/tutorials/Chapter31">
                <button
                  class="ui primary button"
                  style={{ flex: 1, minWidth: "100px", height: "40px" }}
                >
                  Previous
                </button>
              </Link>
              <Link to="/tutorials/Chapter33">
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
              <div class="start content">Standard Template Library</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Standard Template Library
              </h2>
              <div class="ui clearing divider"></div>
              <p>
              Standard Template Library is a collection of template classes and functions ( discussed in the previous section ) 
              that provide common data structures and algorithms. The STL is designed to provide generic and efficient implementations of common data structures (like vectors, lists, queues, and stacks) and algorithms (like sorting, searching, and manipulating sequences). 
              It enables a C++ programmer to use these data structures without writing them from scratch. 
              These are more optimized and save development time. That is why using STL is a better decision. They are 
              mostly used in competitive programming where time is short.
                <br />
                <br />
                
            <b>Components of STL:</b><br />
            STL has three components.
            <ul class="ui unordered list">
                <li>Containers</li>
                <li>Algorithms</li>
                <li>Iterators</li>
            </ul>
                <br />
                <b>Containers:</b><br />
                <p>Containers are data structures that store and manage collection of objects.</p>
                <br />Containers are further: <br />
                <ul class="ui unordered list">
                    <li>Sequence containers - Array, vectors, deque etc.</li>
                    <li>Container Adaptors - Stacks, Queues, Priority Queues</li>
                    <li>Associative Containers - Set, Map, Multiset, Multimap</li>
                    <li>Unordered Associative - Unordered Set, Unordered Map, Unordered Multiset, Unordered Multimap</li>
                </ul>
                <br />

                <b>Algorithms:</b><br />
                <p>Algorithms are set of instructions ( not code ) that perform various operations on 
                    sequences of elements. Some commonly used algorithms are:</p>
                    <ul class="ui unordered list">
                        <li>Sort</li>    
                        <li>Find</li>
                        <li>Accumulate</li>
                        <li>Reverse</li>
                        <li>Binary Search</li>
                    </ul><br />


                <b>Iterators:</b><br />
                <p> Iterators provide a way to access the elements of a container in a generic and uniform manner. They act like pointers to elements in the container and allow traversal through the container's elements.</p><br />
                
              </p>
              <br />
              {/* <div className="quiz">
                <Link to="/quizes/quiz34">
                  <button class="ui secondary button">Start Quiz</button>
                </Link>
              </div> */}
              {/* <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Practice Questions:
              </h2> */}

              <br />
              <br />
              {/* <Q32 /> */}
            </div>
            <Link to="/tutorials/Chapter31">
              <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button>
            </Link>
            <Link to="/tutorials/Chapter33">
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
          </div>
        </div>
      </Sidebar>
      <div class="sideBarBody">
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};
export default Ch32;
