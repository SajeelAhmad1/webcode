import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/tutorials/Chapter1",
            name:"Intro to C++",
        },
        {
            path:"/tutorials/Chapter2",
            name:"Getting Started",
        },
        {
            path:"/tutorials/Chapter3",
            name:"Basic Syntax",
        },
        {
            path:"/tutorials/Chapter4",
            name:"Printing Output",
        },
        {
            path:"/tutorials/Chapter5",
            name:"Comments",
        },
        {
            path:"/tutorials/Chapter6",
            name:"Variables",
        },
        {
            path:"/tutorials/Chapter7",
            name:"Taking Input",
        },
        {
            path:"/tutorials/Chapter8",
            name:"Data types",
        },
        {
            path:"/tutorials/Chapter9",
            name:"Operators",
        },
        {
            path:"/tutorials/Chapter10",
            name:"Strings",
        },
        {
            path:"/tutorials/Chapter11",
            name:"Conditional Statements",
        },
        {
            path:"/tutorials/Chapter12",
            name:"Switch Statements",
        },
        {
            path:"/tutorials/Chapter13",
            name:"For Loop",
        },
        {
            path:"/tutorials/Chapter14",
            name:"While and do-while Loop",
        },
        {
            path:"/tutorials/Chapter14b",
            name:"Continue and Break Statements",
        },
        {
            path:"/tutorials/Chapter15",
            name:"Arrays",
        },
        {
            path:"/tutorials/Chapter16",
            name:"Structures and Unions",
        },
        {
            path:"/tutorials/Chapter17",
            name:"Pointers",
        },
        {
            path:"/tutorials/Chapter18",
            name:"Functions",
        },
        {
            path:"/tutorials/Chapter18b",
            name:"Built-in Functions",
        },
        {
            path:"/tutorials/Chapter19",
            name:"OOP",
        },
        {
            path:"/tutorials/Chapter20",
            name:"Classes and Objects",
        },
        {
            path:"/tutorials/Chapter21",
            name:"Constructors and Destructors",
        },
        {
            path:"/tutorials/Chapter22",
            name:"Access Specifiers",
        },
        {
            path:"/tutorials/Chapter23",
            name:"Friend Functions and Friend Classes",
        },
        {
            path:"/tutorials/Chapter24",
            name:"Encapsulation",
        },
        {
            path:"/tutorials/Chapter25",
            name:"Inheritance",
        },
        {
            path:"/tutorials/Chapter26",
            name:"Polymorphism",
        },
        {
            path:"/tutorials/Chapter27",
            name:"Abstraction",
        },

        
    ]
    return (
        <>
        <div className="container">
           <div style={{width: isOpen ? "200px" : "200px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "block", fontSize:'25px'}} className="logo"><b style={{color:'black'}}>C++Tutorial</b></h1>
                   
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            {/* <div style={{color:'black'}}>{index+1}</div> */}
                           <div style={{display: isOpen ? "block" : "block", color:'black'}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div></>
    );
};

export default Sidebar;