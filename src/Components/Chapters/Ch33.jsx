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
#include <vector>  //header file for vector
using namespace std;
int main(){
	//declaration of vector
	//vector keyword <datatype> nameOfVector;
	vector <int> v;
	
	//push_back method is used to add elements at the end of vector
	v.push_back(1);
	cout<<"Element in v is "<<v[0]<<endl;
	//pushing some more elements
	v.push_back(2);
	v.push_back(3);
	v.push_back(4);
	//printing all elements of vector
	for(int i=0; i<v.size(); i++){
		cout<<"Element "<<i+1<<" of vector is "<<v[i]<<endl;
	}
	
	
	//removing elements at the end of vector
	v.pop_back();
	cout<<"After poping last element from vector:\n";
	for(int i=0; i<v.size(); i++){
		cout<<"Element "<<i+1<<" of vector is "<<v[i]<<endl;
	}
	
}`;
  const code2 = `#include <iostream>
#include <deque>  //header file for deque
using namespace std;
int main(){
	//declaration of deque
	//deque keyword <datatype> nameOfDeque;
	deque <int> d;
	
	//push_back method is used to add elements at the end of deque
	d.push_back(1);
	cout<<"Element in v is "<<d[0]<<endl;
	//push_front() is used to add element at the start of deque
	d.push_front(33);
	//pushing some more elements
	d.push_back(2);
	d.push_back(3);
	d.push_back(4);
	//printing all elements of deque
	for(int i=0; i<d.size(); i++){
		cout<<"Element "<<i+1<<" of deque is "<<d[i]<<endl;
	}
	
	
	//removing elements at the end of deque
	d.pop_back();
	//push_front() is used to remove element at the start of deque
	d.pop_front();
	cout<<"After poping last element from deque:\n";
	for(int i=0; i<d.size(); i++){
		cout<<"Element "<<i+1<<" of deque is "<<d[i]<<endl;
	}
	
}`;
  const code3 = `#include <iostream>
#include <map>
using namespace std;

int main() {
    // Define and initialize a map with string keys and integer values
    map<string, int> scores;

    // Inserting elements into the map
    scores["Miranda"] = 90;
    scores["Daniel"] = 85;
    scores["Charlie"] = 95;

    // Accessing elements
    cout << "Miranda's score: " << scores["Miranda"] << endl;

    // Traversing the map using a for loop
    for (const auto& pair : scores) {
        const string& name = pair.first; // Key
        int score = pair.second; // Value

        cout << name << ": " << score << endl;
    }

    return 0;
}
`;
  const code4 = `#include <iostream>
#include <list>
using namespace std;

int main() {
    std::list<int> myList;

    // Inserting elements at the back of the list
    myList.push_back(10);
    myList.push_back(20);
    myList.push_back(30);

    // Inserting elements at the front of the list
    myList.push_front(5);
    myList.push_front(15);

    // Removing elements from the list
    myList.pop_back();
    myList.pop_front();

    // Traversing the list using iterators
    for (const auto& value : myList) {
        cout << value << " ";
    }
    cout << endl;

    return 0;
}
`;

  return (
    <>
      <Sidebar>
        <div class="container">
          <div className="ch-content">
            <h2 class="ui header">
              <Link to="/tutorials/Chapter32">
                <button
                  class="ui primary button"
                  style={{ flex: 1, minWidth: "100px", height: "40px" }}
                >
                  Previous
                </button>
              </Link>
              {/* <Link to="/tutorials/Chapter25"> */}
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
              {/* </Link> */}
              <br />
              <div class="start content">Containers</div>
            </h2>

            <div class="main-body ui segment">
              <h2 class="ui left floated header" style={{ color: "#001C30" }}>
                Containers
              </h2>
              <div class="ui clearing divider"></div>
              <p>
                Containers are data structures that manage collection of
                objects.
                <br />
                <br />
                <b>Array:</b>
                <br />
                Array is a data type that stores multiple elements of same data
                type. We have discussed details about arrays in previous
                section. <br />
                <br />
                <b>Vectors:</b>
                <br />
                These are dynamic arrays that can grow and shrink their size.
                Elements in vectors can be accessed using indexing.
                <br />
                <br />
                <b>Example:</b>
                <div style={containerStyle}>
                  <div style={{ fontSize: "25px" }}>
                    <b>vector.cpp</b>

                    <i
                      class="copy icon"
                      onClick={copyContent}
                      style={{
                        cursor: "pointer",
                        float: "right",
                        fontSize: "20px",
                      }}
                    ></i>
                  </div>
                  <div ref={divRef}>
                    <SyntaxHighlighter language="cpp" style={darcula}>
                      {code1}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <br />
                <br />
                <table class="ui celled striped table">
                  <thead>
                    <tr>
                      <th colspan="3">Methods of Vectors</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="collapsing">
                        <b>Methods</b>
                      </td>
                      <td>
                        <center>
                          <b>Description</b>
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td>push_back()</td>
                      <td>
                        <center>It is used to push elements to a vector</center>
                      </td>
                    </tr>
                    <tr>
                      <td>pop_back()</td>
                      <td>
                        <center>
                          It is used to pop elements from a vector
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td>capacity()</td>
                      <td>
                        <center>
                          It is used to check how many elements can be inserted
                          to a vector.
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td>size()</td>
                      <td>
                        <center>
                          It is used to check how many elements are there in a
                          vector
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td>front()</td>
                      <td>
                        <center>
                          It gives the reference to the first element in a
                          vector
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td>back()</td>
                      <td>
                        <center>
                          It gives the reference to the last element in a vector
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td>swap()</td>
                      <td>
                        <center>
                          It exchanges the elements between vector
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td>empty()</td>
                      <td>
                        <center>It checks if the vector is empty or not</center>
                      </td>
                    </tr>
                    <tr>
                      <td>clear()</td>
                      <td>
                        <center>
                          It removes all the elements from the vector.
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td>resize()</td>
                      <td>
                        <center>It modifies the size of the vector.</center>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <br />
                <br />
                <b>Deque:</b>
                <br />
                Deque is a short from of Double Ended Queue. It allows the
                insertion and deletion of elements from both ends.
                <div style={containerStyle}>
                  <div style={{ fontSize: "25px" }}>
                    <b>deque.cpp</b>

                    <i
                      class="copy icon"
                      onClick={copyContent}
                      style={{
                        cursor: "pointer",
                        float: "right",
                        fontSize: "20px",
                      }}
                    ></i>
                  </div>
                  <div ref={divRef}>
                    <SyntaxHighlighter language="cpp" style={darcula}>
                      {code2}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <br />
                <br />
                <b>Lists:</b>
                <br />
                List is a linear data structure that stores elements in a
                sequence, and each element (node) in the list contains a value
                and two pointers: one to the previous element and one to the
                next element.
                <div style={containerStyle}>
                  <div style={{ fontSize: "25px" }}>
                    <b>list.cpp</b>

                    <i
                      class="copy icon"
                      onClick={copyContent}
                      style={{
                        cursor: "pointer",
                        float: "right",
                        fontSize: "20px",
                      }}
                    ></i>
                  </div>
                  <div ref={divRef}>
                    <SyntaxHighlighter language="cpp" style={darcula}>
                      {code4}
                    </SyntaxHighlighter>
                  </div>
                </div>
                <br />
                <br />
                <b>Maps:</b>
                <br />
                Maps are containers that stores elements in key-value pairs
                where each key is unique.
                <div style={containerStyle}>
                  <div style={{ fontSize: "25px" }}>
                    <b>maps.cpp</b>

                    <i
                      class="copy icon"
                      onClick={copyContent}
                      style={{
                        cursor: "pointer",
                        float: "right",
                        fontSize: "20px",
                      }}
                    ></i>
                  </div>
                  <div ref={divRef}>
                    <SyntaxHighlighter language="cpp" style={darcula}>
                      {code3}
                    </SyntaxHighlighter>
                  </div>
                </div>
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
            <Link to="/tutorials/Chapter32">
              <button
                class="ui primary button"
                style={{ flex: 1, minWidth: "100px", height: "40px" }}
              >
                Previous
              </button>
            </Link>
            {/* <Link to="/tutorials/Chapter25"> */}
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
            {/* </Link> */}
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
