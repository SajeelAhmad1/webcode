import React from 'react'
import Home from './Components/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Ch1 from './Components/Chapters/Ch1.jsx'
import Ch2 from './Components/Chapters/Ch2.jsx'
import Ch3 from './Components/Chapters/Ch3.jsx'
import Ch4 from './Components/Chapters/Ch4.jsx'
import Ch5 from './Components/Chapters/Ch5.jsx'
import Ch6 from './Components/Chapters/Ch6.jsx'
import Ch7 from './Components/Chapters/Ch7.jsx'
import Header from './Components/Home/NewHeader'

import Projects from './Components/Projects/Projects.jsx';
import CppatGlance from './Components/CppatGlance/CppatGlance.jsx';
import Quiz1 from './Components/Quizes/Quiz1'
import Quiz2 from './Components/Quizes/Quiz2'
import Quiz3 from './Components/Quizes/Quiz3'
import Quiz4 from './Components/Quizes/Quiz4'
import Quiz5 from './Components/Quizes/Quiz5'
import Quiz6 from './Components/Quizes/Quiz6'
import Quiz7 from './Components/Quizes/Quiz7'

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/tutorials' element={<Ch1 />} />
        <Route path="/tutorials/Chapter1" element={<Ch1 />} />
        <Route path="/tutorials/Chapter2" element={<Ch2 />} />
        <Route path="/tutorials/Chapter3" element={<Ch3 />} />
        <Route path="/tutorials/Chapter4" element={<Ch4 />} />
        <Route path="/tutorials/Chapter5" element={<Ch5 />} />
        <Route path="/tutorials/Chapter6" element={<Ch6 />} />
        <Route path="/tutorials/Chapter7" element={<Ch7 />} />

        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/cppatglance" element={<CppatGlance />} />
        <Route path="/quizes" element={<Quiz1 />} />
        <Route path="/quizes/quiz1" element={<Quiz1 />} />
        <Route path="/quizes/quiz2" element={<Quiz2 />} />
        <Route path="/quizes/quiz3" element={<Quiz3 />} />
        <Route path="/quizes/quiz4" element={<Quiz4 />} />
        <Route path="/quizes/quiz5" element={<Quiz5 />} />
        <Route path="/quizes/quiz6" element={<Quiz6 />} />
        <Route path="/quizes/quiz7" element={<Quiz7 />} />

      </Routes>


    </>
  )
}
export default App;