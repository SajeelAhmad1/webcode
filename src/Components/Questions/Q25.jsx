import React from "react";

const Q25 = () => {
  return (
    <div>
      <b>Q1: </b>Why there is a need of inheritance (theory type question).{" "}
      <br />
      <b>Q2: </b>Make a class "Person", "Employee" and "Student". Point out the
      parent and child classes and add inheritance. Common attributes of these
      classes are id, name, age and they should be private. Add getter and
      setter methods to set and get them. Demonstrate how you can access members
      and resolve any ambiguity that may arise due to multiple inheritance.
      (Hint: Employee and Students are persons). <br />
      <b>Q3: </b>Make classes like Person, Employee, Student, and
      GraduateStudent, where Employee and Student inherit from Person, and
      GraduateStudent inherits from both Employee and Student. Implement
      appropriate constructors, demonstrate any potential problems related to
      inheritance, and provide a solution to overcome the problems. <br />
      <b>Q4: </b> Create two base classes - Shape and Color. Derive a class
      ColoredShape from both Shape and Color. Override the display() method in
      each base class to show the shape's properties and the color,
      respectively. Implement the display() method in ColoredShape to call the
      overridden methods from both base classes to display the shape with its
      color.
      <br />
      <b>Q5: </b>Create simple programs and apply all types of inheritance.
      (Create classes and members using your imagination).
    </div>
  );
};
export default Q25;
