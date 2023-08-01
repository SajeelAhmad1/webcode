import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Ch1 from "../Chapters/Ch1";
import Ch2 from "../Chapters/Ch2";
import Ch3 from "../Chapters/Ch3";
import Ch4 from "../Chapters/Ch4";
import Ch5 from "../Chapters/Ch5";
import Ch6 from "../Chapters/Ch6";
import Ch7 from "../Chapters/Ch7";

const Tutorials = () => {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route index element={<Ch1 />} />
          <Route path="/Chapter1" element={<Ch1 />} />
          <Route path="/tutorials/Chapter2" element={<Ch2 />} />

          <Route path="/tutorials/Chapter3" element={<Ch3 />} />
          <Route path="/tutorials/Chapter4" element={<Ch4 />} />
          <Route path="/tutorials/Chapter5" element={<Ch5 />} />
          <Route path="/tutorials/Chapter6" element={<Ch6 />} />
          <Route path="/tutorials/Chapter7" element={<Ch7 />} />
        </Routes>
      </Sidebar>
    </>
  );
};

export default Tutorials;
