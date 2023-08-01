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
        
        
    ]
    return (
        <>
        <div className="container">
           <div style={{width: isOpen ? "200px" : "200px"}} className="sidebar">
               <div className="top_section"><br /><br /><br />
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