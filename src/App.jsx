import React from 'react'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import { Route, Routes } from 'react-router-dom'
import Ch1 from './Components/Chapters/Ch1.jsx'
import Ch2 from './Components/Chapters/Ch2.jsx'
import Ch3 from './Components/Chapters/Ch3.jsx'
import Ch4 from './Components/Chapters/Ch4.jsx'
import Ch5 from './Components/Chapters/Ch5.jsx'
import Ch6 from './Components/Chapters/Ch6.jsx'
import Ch7 from './Components/Chapters/Ch7.jsx'
import Ch8 from './Components/Chapters/Ch8.jsx'
import Ch9 from './Components/Chapters/Ch9.jsx'
import Ch10 from './Components/Chapters/Ch10.jsx'
import Ch11 from './Components/Chapters/Ch11';
import Ch12 from './Components/Chapters/Ch12';
import Ch13 from './Components/Chapters/Ch13';
import Ch14 from './Components/Chapters/Ch14';
import Ch15 from './Components/Chapters/Ch15';
import Ch16 from './Components/Chapters/Ch16';
import Ch17 from './Components/Chapters/Ch17';
import Ch18 from './Components/Chapters/Ch18';
import Ch19 from './Components/Chapters/Ch19';
import Ch20 from './Components/Chapters/Ch20';
import Ch21 from './Components/Chapters/Ch21';
import Ch22 from './Components/Chapters/Ch22'
import Ch23 from './Components/Chapters/Ch23'
import Ch24 from './Components/Chapters/Ch24'
import Ch25 from './Components/Chapters/Ch25'
import Ch26 from './Components/Chapters/Ch26'
import Ch27 from './Components/Chapters/Ch27'
import Ch28 from './Components/Chapters/Ch28'
import Ch29 from './Components/Chapters/Ch29'
import Header from './Components/Home/NewHeader.jsx';
import Projects from './Components/Projects/Projects.jsx';
import CppatGlance from './Components/CppatGlance/CppatGlance.jsx';
import Ch14b from './Components/Chapters/Ch14b'
import Ch18b from './Components/Chapters/Ch18b'
import Quiz1 from './Components/Quizes/Quiz1'
import Quiz2 from './Components/Quizes/Quiz2'
import Quiz3 from './Components/Quizes/Quiz3'
import Quiz4 from './Components/Quizes/Quiz4'
import Quiz5 from './Components/Quizes/Quiz5'
import Quiz6 from './Components/Quizes/Quiz6'
import Quiz7 from './Components/Quizes/Quiz7'
import Quiz8 from './Components/Quizes/Quiz8'
import Quiz9 from './Components/Quizes/Quiz9'
import Quiz10 from './Components/Quizes/Quiz10'
import Quiz11 from './Components/Quizes/Quiz11'
import Quiz12 from './Components/Quizes/Quiz12'
import Quiz13 from './Components/Quizes/Quiz13'
import Quiz14 from './Components/Quizes/Quiz14'
import Quiz15 from './Components/Quizes/Quiz15'
import Quiz16 from './Components/Quizes/Quiz16'
import Quiz17 from './Components/Quizes/Quiz17'
import Quiz18 from './Components/Quizes/Quiz18'
import Quiz19 from './Components/Quizes/Quiz19'
import Quiz20 from './Components/Quizes/Quiz20'
import Quiz21 from './Components/Quizes/Quiz21'
import Quiz22 from './Components/Quizes/Quiz22'
import Quiz23 from './Components/Quizes/Quiz23'
import Quiz24 from './Components/Quizes/Quiz24'
import Quiz25 from './Components/Quizes/Quiz25'
import Quiz26 from './Components/Quizes/Quiz26'
import Quiz27 from './Components/Quizes/Quiz27'
import Quiz28 from './Components/Quizes/Quiz28'
import Quiz29 from './Components/Quizes/Quiz29'
import Quiz30 from './Components/Quizes/Quiz30'
import Quiz31 from './Components/Quizes/Quiz31'



const App = () => {
  return (
    
    <><Header/><br /><br />
    <Routes>
      
      <Route path='/tutorials' element={<Ch1/>}/>
      <Route path="/tutorials/Chapter1" element={<Ch1 />} />
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
      <Route path="/tutorials/Chapter14b" element={<Ch14b />} />
      <Route path="/tutorials/Chapter15" element={<Ch15 />} />
      <Route path="/tutorials/Chapter16" element={<Ch16 />} />
      <Route path="/tutorials/Chapter17" element={<Ch17 />} />
      <Route path="/tutorials/Chapter18" element={<Ch18 />} />
      <Route path="/tutorials/Chapter18b" element={<Ch18b />} />
      <Route path="/tutorials/Chapter19" element={<Ch19 />} />
      <Route path="/tutorials/Chapter20" element={<Ch20 />} />
      <Route path="/tutorials/Chapter21" element={<Ch21 />} />
      <Route path="/tutorials/Chapter22" element={<Ch22 />} />
      <Route path="/tutorials/Chapter23" element={<Ch23 />} />
      <Route path="/tutorials/Chapter24" element={<Ch24 />} />
      <Route path="/tutorials/Chapter25" element={<Ch25 />} />
      <Route path="/tutorials/Chapter26" element={<Ch26 />} />
      <Route path="/tutorials/Chapter27" element={<Ch27 />} />
      <Route path="/tutorials/Chapter28" element={<Ch28 />} />
      <Route path="/tutorials/Chapter29" element={<Ch29 />} />
      <Route path='/' element={<Home/>} />
      <Route path='/services' element={<Services/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path="/cppatglance" element={<CppatGlance/>}/>
      <Route path="/quizes" element={<Quiz1/>}/>
      <Route path="/quizes/quiz1" element={<Quiz1/>}/>
      <Route path="/quizes/quiz2" element={<Quiz2/>}/>
      <Route path="/quizes/quiz3" element={<Quiz3/>}/>
      <Route path="/quizes/quiz4" element={<Quiz4/>}/>
      <Route path="/quizes/quiz5" element={<Quiz5/>}/>
      <Route path="/quizes/quiz6" element={<Quiz6/>}/>
      <Route path="/quizes/quiz7" element={<Quiz7/>}/>
      <Route path="/quizes/quiz8" element={<Quiz8/>}/>
      <Route path="/quizes/quiz9" element={<Quiz9/>}/>
      <Route path="/quizes/quiz10" element={<Quiz10/>}/>
      <Route path="/quizes/quiz11" element={<Quiz11/>}/>
      <Route path="/quizes/quiz12" element={<Quiz12/>}/>
      <Route path="/quizes/quiz13" element={<Quiz13/>}/>
      <Route path="/quizes/quiz14" element={<Quiz14/>}/>
      <Route path="/quizes/quiz15" element={<Quiz15/>}/>
      <Route path="/quizes/quiz16" element={<Quiz16/>}/>
      <Route path="/quizes/quiz17" element={<Quiz17/>}/>
      <Route path="/quizes/quiz18" element={<Quiz18/>}/>
      <Route path="/quizes/quiz19" element={<Quiz19/>}/>
      <Route path="/quizes/quiz20" element={<Quiz20/>}/>
      <Route path="/quizes/quiz21" element={<Quiz21/>}/>
      <Route path="/quizes/quiz22" element={<Quiz22/>}/>
      <Route path="/quizes/quiz23" element={<Quiz23/>}/>
      <Route path="/quizes/quiz24" element={<Quiz24/>}/>
      <Route path="/quizes/quiz25" element={<Quiz25/>}/>
      <Route path="/quizes/quiz26" element={<Quiz26/>}/>
      <Route path="/quizes/quiz27" element={<Quiz27/>}/>
      <Route path="/quizes/quiz28" element={<Quiz28/>}/>
      <Route path="/quizes/quiz29" element={<Quiz29/>}/>
      <Route path="/quizes/quiz30" element={<Quiz30/>}/>
      <Route path="/quizes/quiz31" element={<Quiz31/>}/>
      </Routes>
      
      
  </>
  )
}
export default App;