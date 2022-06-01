import React from "react";
import About from './components/pages/About'
import Resume from './components/pages/Resume'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NavBar from "./components/NavBar"
import {BrowserRouter,Routes,Route} from "react-router-dom"


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

     </BrowserRouter>

  );
}

export default App;
