import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./screens/Home";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer/Footer";

import "./app.css"
import About from "./screens/HomeComponents/About";
import MyServices from "./screens/HomeComponents/MyServices";
import MySkills from "./screens/HomeComponents/MySkills";
import MyProjects from "./screens/HomeComponents/MyProjects";

import GotoTop from "./screens/HomeComponents/GotoTop";

function App() {

  return ( 
  
        <Router>
   

            <Navbar />
        
            <Routes>
        
          <Route path="/" element={<Home />} ></Route> 
                <Route path="/about" element={<About />}></Route>
                <Route path="/skills" element={<MySkills />} ></Route>
                <Route path="/services" element={<MyServices />} ></Route>
                <Route path="/projects" element={<MyProjects />} ></Route>
                {/* Add more routes for other sections */}
                
            </Routes>
              <GotoTop/> 
         <Footer/> 
        </Router>

    );
};




export default App;
