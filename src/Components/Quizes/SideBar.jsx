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
            path:"/quizes/quiz1",
            name:"Quiz 1",
        },
        {
            path:"/quizes/quiz2",
            name:"Quiz 2",
        },
        {
            path:"/quizes/quiz3",
            name:"Quiz 3",
        },
        {
            path:"/quizes/quiz4",
            name:"Quiz 4",
        },
        {
            path:"/quizes/quiz5",
            name:"Quiz 5",
        },
        {
            path:"/quizes/quiz6",
            name:"Quiz 6",
        },
        {
            path:"/quizes/quiz7",
            name:"Quiz 7",
        },
        {
            path:"/quizes/quiz8",
            name:"Quiz 8",
        },
        {
            path:"/quizes/quiz9",
            name:"Quiz 9",
        },
        {
            path:"/quizes/quiz10",
            name:"Quiz 10",
        },
        {
            path:"/quizes/quiz11",
            name:"Quiz 11",
        },
        {
            path:"/quizes/quiz12",
            name:"Quiz 12",
        },
        {
            path:"/quizes/quiz13",
            name:"Quiz 13",
        },
        {
            path:"/quizes/quiz14",
            name:"Quiz 14",
        },
        {
            path:"/quizes/quiz15",
            name:"Quiz 15",
        },
        {
            path:"/quizes/quiz16",
            name:"Quiz 16",
        },
        {
            path:"/quizes/quiz17",
            name:"Quiz 17",
        },
        {
            path:"/quizes/quiz18",
            name:"Quiz 18",
        },
        {
            path:"/quizes/quiz19",
            name:"Quiz 19",
        },
        {
            path:"/quizes/quiz20",
            name:"Quiz  20",
        },
        
    ]
    return (
        <>
        <div className="container">
           <div style={{width: isOpen ? "200px" : "200px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "block", fontSize:'25px'}} className="logo"><b style={{color:'black'}}>C++ Quiz</b></h1>
                   
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