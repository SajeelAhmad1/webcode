import { useRef } from "react";
import Footer from "../Home/Footer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css"

const CppatGlance = () => {
  const containerStyle = {
    width: "100%",
    backgroundColor: "#A9A9A9",
    padding: "20px",
    borderRadius: "3px",
    marginLeft: "0%",
  };
  const code1 = `#include <iostream>
using namespace std;

int main() {
  //code goes here
  return 0;
}`;
const code2 = `cout<<`;
const code3 = `cin>>`;
const code4 = `//this is a single lined comment.
/*this is a 
multi-lined comment*/`;
const code5 = `int sum = 10;`
const code6 = `int sum = 10; //stores integer
float average = 90.33; //stores numbers with decimal
double percentage = 80.3452; //stores numbers with decimal but precision is double as compared to float
char letter = 'A'; //stores single character
bool isTrue = true; //stores true or false
string intro = "My name is Sajeel"; //stores sequence of characters
void myFunc();//it represent the absence of data type. Mostly used with functions and pointers`
const code7 = `//declaring string
string fname = "John";
string lname = "Doe";
//concatenating strings
//using "+"
const name = fname + lname;
//using append method
string name = fname.append(lname);
//finding length of string
//using .length() method
cout << myString.length();
//using .size() method
cout << myString.size();
//accessing characters of string
cout << myString[0]; //it will access the character at first index and so on
//Changing characters
mystring[0] = "A"; //change the first character to "A"
cout << myString[0];
//taking string input ignoring spaces
getline (cin, myString);`
const code8 = `Arithmetic Operators
+ //addition
- //subtraction
* //multiplication
/ //division
% //modulus
++ //increment
-- //decrement
Assignment Operators
= //assign value
+= //add and assign
-= //subtract and assign
/= //divide and assign
*= //multiply and assign
%= //taking modulus and assign
Comparison Operators
== //checks equality
!= //checks unequality
> //checks greater than
>= //checks greater than or equal to
< //check less than
<= //checks less than or equal to
Logical Operators
&& //returns true if all are expressions true
|| //returns true if only one expression is true
! //returns true if false and vice versa
Bitwise Operators
& //bitwise AND
| //bitwise OR
~ //bitwise NOT
>> //shift right 
<< //shift left
`
const code9 = `//if statement
if(condition){
    //code
}
//if-else statement
if(condition){
    //code
}
else{
    //code
}
//else-if statement
if(condition){
    //code
}
else if(condition){
    //code
}
else{
    //code
}

Ternary Operator
variable = condition ? ifTrue : ifFalse;
`
const code10 = `switch(expression){
    case const-exp:
        //code
        break;
    case const-exp:
        //code
        break;
    .
    .
    .
    default:
        //code
        break;
}`

const code11 = `//for Loop:
for( initialization ; condition ; change-variable-value ){
    //code
}

//while Loop:
initialize variable
while(condition){
    //code
    //change-variable-value
}

//do-while Loop:
initialize variable
do{
    //code
    //change-variable-value
}while(condition);`

const code12 = `//initializing arrays
int arrayName[size] = {data1, data2,.....}
//printing array
for(int i=0 ; i < ( sizeof(array)/ sizeof(int) ) ; i++){
    cout<<array[i];
}
//taking input in array
for(int i=0 ; i < ( sizeof(array)/ sizeof(int) ) ; i++){
    cin>>array[i];
}
//changing array elements at specified index
int myArray [3] = {1, 2, 3};
myArray[0] = 5; //now array has 5 at first index
`
const code13 = `//initializing struct
struct struct_name{
    //data members and member functions
};
int main(){
    //making instance of struct
    struct struct_name var_name;
    //accessing data members of struct  
    var_name.datamember;
    //accessing member functions of struct
    var_name.memberFunction();
}
//initializing union
union union_name{
    //data members 
};
int main(){
    //making instance of union
    union union_name var_name;
    //accessing data members of union  
    var_name.datamember;
}`
const code14 = `int var = 10;
//initialization of pointer
int *ptr = &var;
// &var is the reference to variable named var`

const code15 = `//declaring a function
returnType functionName(dataType parameters){
    //code
}
//calling a function
functionName(arguments);
//recursion
returnType functionName(dataType parameters){
    //code
    functionName(arguments);
    //code
}

//Function Overloading
int sum(int a, int b){
  return a+b;
}
float sum(float a, float b, int c){
  return a+b;
}
int main(){
  sum(5, 10);  
  sum(5.0, 10.0, 20);  
}`
const code16 = `//break statement
for( initialization ; condition ; change-variable-value ){
  if(condition){
    break;  //moves out of the loop when condition is true
  }
}

//continue statement
for( initialization ; condition ; change-variable-value ){
  if(condition){
    continue;  //skip the iteration when condition is true
  }
}`
const code17 = `//escape sequences
\\n //adds a new line
\\t //adds four spaces
\\b //backspace
\\a //beep sound
\\f //form feed
\\r //carriage return
\\\ //adds backslash
\\' adds single quote
\\? //adds question mark
\\0 //null character`

const code18 = `// built-in functions in stdio.h
var = getchar();
int putchar(int c);
gets(var_name);
puts(var_name); 

//built-in functions in string.h
int strlen(string);
int strcmp(string1 , string2 );
int strncmp (string1, string2, n);
strcpy(string1, string2);
strncpy(string1, srting2, n);
strcat(string1,string2);
strncat(string1, string2, n);

//built-in functions in math.h
pow(x , y);
sqrt(x);
floor(x);
ceil(x);
fmod(x, y);
cos(x);
sin(x);
tan(x);
log(x);
log10(x);`
const code19 = `// Syntax for class
class class_name{
  //access modifier
  public / private / protected:
  // class members
};
int main(){
  //Syntax for creating object
  class_name obj_name;
}`
const code20 = `class A{
  public:
  //constructor
  A(){
    //code goes here
  }

  //destructor
  ~A(){
    //code goes here
  }
};`
const code21 = `class className{
  friend returnType funcName(dataType params...);
};
returnType funcName(dataType params...) {
  // Function definition with access to private and protected members of the class
}`
const code22 = `class MyClass
{
    friend class FriendClass;
};`
const code23 = `class class_name{
  private:
    //data members
  public:
    //member functions to access data members
};`
const code24 = `//Single Inheritance
class BaseClass {
  // Base class members
};
class DerivedClass : public BaseClass {
  // Derived class members
};


//Multiple Inheritance
class Shape { 
  protected:
    int length;
    int width;
  public:
    // Parametrized constructor
    Shape(int length, int width) {
      this->length = length;
      this->width = width;
    }
};
class Triangle : public Shape {
  public:
    // Parametrized constructor
    Triangle(int base, int height) : Shape(base, height) {
  }
};


//Multi-level Inheritance
class Shape { 
  protected:
    int length;
    int width;
  public:
    // Parametrized constructor
    Shape(int length, int width) {
      this->length = length;
      this->width = width;
    }
};
class Triangle : public Shape {
  public:
    // Parametrized constructor
    Triangle(int base, int height) : Shape(base, height) {
  }
};


//Hierarchical Inheritance
class Shape { 
  protected:
    int length;
    int width;
  public:
    // Parametrized constructor
    Shape(int length, int width) {
      this->length = length;
      this->width = width;
    }
};
class Triangle : public Shape {
  public:
    // Parametrized constructor
    Triangle(int base, int height) : Shape(base, height) {
  }
};


//Hybrid Inheritance
class Shape { 
  protected:
    int length;
    int width;
  public:
    // Parametrized constructor
    Shape(int length, int width) {
      this->length = length;
      this->width = width;
    }
};
class Triangle : public Shape {
  public:
    // Parametrized constructor
    Triangle(int base, int height) : Shape(base, height) {
  }
};`
const code25 = `// Compile time Polymorphism
class MathOperations {
  public:
      int add(int a, int b) {
          // code goes here
      }
      // Overloaded function
      int add(int a, int b, int c) {
          // code goes here
      }
};
Run time Polymorphism
class Animal {
  public:
    virtual void make_sound() {
      // code goes here
    }
};
  
class Dog : public Animal {
  public:
    // Overriding make_sound() function
    void make_sound() override {
      // redefining make_sound() function
    }
};
  
class Cat : public Animal {
  public:
    // Overriding make_sound() function
    void make_sound() override {
      // redefining make_sound() function
    }
};`
const code26 = `class Animals{
  public:
    // pure virtual function
    virtual void behavior() = 0;
};

class Lion : public Animals{
 public:
   void behavior(){
     // redefining behavior() function for Lion class
";
   }
};

class Donkey : public Animals{
 public:
   void behavior(){
    // redefining behavior() function for Donkey class
";
   }
};`
const code27 = `try {
  // here goes the code and if there is an error throw exception
  throw exception; 
}
catch () {
  // Block of code to handle errors
}`

  return (
    <>
      <div>
        <div
          class="ui segment"
          style={{
            width: "80%",
            marginLeft: "10%",
            marginTop: "5%",
            marginBottom: "5%",
          }}
        >
          <h2 class="ui left floated header">C++ at Glance</h2>
          <div class="ui clearing divider"></div>

          <p>
            <span class="h1">Basic Syntax</span>
            <div>Basic syntax for a C++ code: </div>
            <div >
              <SyntaxHighlighter language="cpp" >
                {code1}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>

          <p>
          <span class="h1">cout</span>
            <div>cout along with insertion operator is used to print on console. </div>
            <div>
              <SyntaxHighlighter language="cpp" >
                {code2}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>

          <p>
          <span class="h1">cin</span>
            <div>cin along with extraction operator is used to take input from user. </div>
            <div>
              <SyntaxHighlighter language="cpp" >
                {code3}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>

          <p>
          <span class="h1">Comments</span>
            <div>Comments are used to make your code more readable. Everything in comments are ignored by the compiler.</div>
            <div >
              <SyntaxHighlighter language="cpp" >
                {code4}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>

          <p>
          <span class="h1">Escape Sequences</span>
            <div >
              <SyntaxHighlighter language="cpp" >
                {code17}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>

          <p>
          <span class="h1">Variables</span>
            <div>Variables are used to store data of specified data type.</div>
            <div >
              <SyntaxHighlighter language="cpp" >
                {code5}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>

          <p>
          <span class="h1">Data Types</span>
            <div>Data type specifies the type of data, stored in a variable.</div>
            <div >
              <SyntaxHighlighter language="cpp" >
                {code6}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>

          <p>
          <span class="h1">String and its methods</span>
            <div>Strings are sequence of characters.</div>
            <div >
              <SyntaxHighlighter language="cpp">
                {code7}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>

          <p>
          <span class="h1">Operators</span>
           
            <div >
              <SyntaxHighlighter language="cpp" >
                {code8}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>

          <p>
          <span class="h1">Conditional statements</span>
            <div >
              <SyntaxHighlighter language="cpp" >
                {code9}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>

          <p>
          <span class="h1">Switch Statements</span>
            <div >
              <SyntaxHighlighter language="cpp" >
                {code10}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>

          <p>
          <span class="h1">Loops</span>
            
            <div >
              <SyntaxHighlighter language="cpp" >
                {code11}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>

          <p>
          <span class="h1">Continue And Break Statements</span>
            
            <div >
              <SyntaxHighlighter language="cpp" >
                {code16}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>


          <p>
          <span class="h1">Arrays</span>
            <div >
              <SyntaxHighlighter language="cpp" >
                {code12}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>

          <p>
          <span class="h1">Structures and Unions</span>
            
            <div >
              <SyntaxHighlighter language="cpp" >
                {code13}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>

          <p>
          <span class="h1">Pointers</span>
            
            <div >
              <SyntaxHighlighter language="cpp" >
                {code14}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>

          <p>
          <span class="h1">Functions</span>
            
            <div >
              <SyntaxHighlighter language="cpp" >
                {code15}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>

          <p>
          <span class="h1">Built-in Functions</span>
            
            <div >
              <SyntaxHighlighter language="cpp" >
                {code18}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>


          <p>
          <span class="h1">Object Oriented Programming <br /> Classes and Objects</span>
            
            <div >
              <SyntaxHighlighter language="cpp" >
                {code19}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>


          <p>
          <span class="h1">Constructors and destructors</span>
            
            <div >
              <SyntaxHighlighter language="cpp" >
                {code20}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>


          <p>
          <span class="h1">Friend Functions</span>
            
            <div >
              <SyntaxHighlighter language="cpp" >
                {code21}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>


          <p>
          <span class="h1">Friend Classes</span>
            
            <div >
              <SyntaxHighlighter language="cpp" >
                {code22}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>


          <p>
          <span class="h1">Encapsulation</span>
            
            <div >
              <SyntaxHighlighter language="cpp" >
                {code23}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>


          <p>
          <span class="h1">Inheritance</span>
            
            <div >
              <SyntaxHighlighter language="cpp" >
                {code24}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>


          <p>
          <span class="h1">Polymorphism</span>
            
            <div >
              <SyntaxHighlighter language="cpp" >
                {code25}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>


          <p>
          <span class="h1">Abstraction</span>
            
            <div >
              <SyntaxHighlighter language="cpp" >
                {code26}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>


          <p>
          <span class="h1">Exceptions</span>
            
            <div >
              <SyntaxHighlighter language="cpp" >
                {code27}
              </SyntaxHighlighter>
            </div>
          </p><br/><br/>

          


        </div>
      </div>
      <Footer />
    </>
  );
};
export default CppatGlance;
