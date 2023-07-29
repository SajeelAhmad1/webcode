import React from "react";

const Q27 = () => {
  return (
    <div>
      <b>Q1: </b>Design a Base abstract class Shape with a pure virtual function
      calcArea(). Create three child classes - Rectangle, Circle, and Triangle -
      from the Shape. Implement the calcArea() method in each derived class to
      calculate the area of the corresponding shape. Create instances of these
      classes and print the areas on screen. <br />
      <b>Q2: </b>Imagine of a real-world scenario where we can apply
      abstraction. For example, consider a library management system. Identify
      the features and functionalities that are needed to be exposed to the
      users while hiding the complex details and handling books. Now think how
      many classes are required and create different methods. Apply abstraction
      and build a mini project of library management.
      <br />
      <b>Q3: </b>Design an abstract class Animal with a pure virtual function
      makeSound(). Create three sub-classes - Dog, Cat, and Cow - deriving from
      Animal. Implement the makeSound() method in each derived class to display
      the sound made by the respective animal.
    </div>
  );
};
export default Q27;
