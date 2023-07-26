import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Ch1 from '../Chapters/Ch1';
import Ch2 from '../Chapters/Ch2';
import Ch3 from '../Chapters/Ch3';
import Ch4 from '../Chapters/Ch4';
import Ch5 from '../Chapters/Ch5';
import Ch6 from '../Chapters/Ch6';
import Ch7 from '../Chapters/Ch7';
import Ch8 from '../Chapters/Ch8';
import Ch9 from '../Chapters/Ch9';
import Ch10 from '../Chapters/Ch10';
import Ch11 from '../Chapters/Ch11';
import Ch12 from '../Chapters/Ch12';
import Ch13 from '../Chapters/Ch13';
import Ch14 from '../Chapters/Ch14';
import Ch15 from '../Chapters/Ch15';
import Ch16 from '../Chapters/Ch16';
import Ch17 from '../Chapters/Ch17';
import Ch18 from '../Chapters/Ch18';
import Header from '../Home/NewHeader';
import Footer from '../Home/Footer';
import Home from '../Home/Home';

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
          <Route path="/tutorials/Chapter8" element={<Ch8 />} />
          <Route path="/tutorials/Chapter9" element={<Ch9 />} />
          <Route path="/tutorials/Chapter10" element={<Ch10 />} />
          <Route path="/tutorials/Chapter11" element={<Ch11 />} />
          <Route path="/tutorials/Chapter12" element={<Ch12 />} />
          <Route path="/tutorials/Chapter13" element={<Ch13 />} />
          <Route path="/tutorials/Chapter14" element={<Ch14 />} />
          <Route path="/tutorials/Chapter15" element={<Ch15 />} />
          <Route path="/tutorials/Chapter16" element={<Ch16 />} />
          <Route path="/tutorials/Chapter17" element={<Ch17 />} />
          <Route path="/tutorials/Chapter18" element={<Ch18 />} />
        </Routes>
      </Sidebar>
      
      
    
    </>
  );
};

export default Tutorials;
