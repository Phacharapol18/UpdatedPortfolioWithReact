import React from "react";
import About from './components/pages/About'
import Resume from './components/pages/Resume'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NavBar from "./components/NavBar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'


function App() {
  return (
<BrowserRouter>
    <NavBar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/resume" element={<Resume/>}/>
       <Route path="/contact" element={<Contact/>}/>
       </Routes>
       <footer className='lastPart'>
         <a href='https://github.com/Phacharapol18'><FontAwesomeIcon icon={faGithub} size="4x" className="symbol brands"></FontAwesomeIcon></a>
         <a href='mailto:phacharapol18@gmail.com'><FontAwesomeIcon icon={faEnvelopeSquare} size="4x" className="symbol brands"></FontAwesomeIcon></a>
         <a href='https://www.linkedin.com/in/phacharapol-phukana-223457232/'><FontAwesomeIcon icon={faLinkedin} size="4x" className="symbol brands"></FontAwesomeIcon></a>
       </footer>
     </BrowserRouter>

  );
}

export default App;
