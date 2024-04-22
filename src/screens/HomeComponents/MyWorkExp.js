import './myworkexp.css'
import upworkLogo from "../../Media/upwork.png"
import magicEdtechLogo from "../../Media/magicEdtech.png"
import grassSolutionLogo from "../../Media/grassSolutions.png"
import lineStyleFirstImage from "../../Media/p5.png"

function MyWorkExp() {
    return ( 
      
     <div className='myWorkExpContent'>
       <div className="container">
     <h2 className='myWorkExpHeading'>My Work Experience</h2>
    
       <div className="myWorkExp1">
      <img src={upworkLogo} alt='Freelance' className='imgWorkExpUpworkLogo'/>
      <div className='workExp1TextContent'>
  <h3>Self-Employed/ freelancer</h3>
 <span>As a React Native developer, i have build mobile apps using JavaScript and React, crafting cross-platform experiences that feel native on both iOS and Android devices while leveraging code reusability.
</span>
</div>
       <span className='spanText'>July 2023 - present</span>
      </div>

        <div className="myWorkExp2">
 

 
        <img src={grassSolutionLogo} alt='Freelance' className='imgWorkExpGrassSolution'/>

        <div className="workExp2TextContent">
      <h3>Frontend Reactjs Developer</h3>
<span>As a MERN stack developer, I'm specialize in building full-stack applications using MongoDB, Express.js, React.js, and Node.js. My role involves designing and implementing end-to-end solutions, from database management to crafting responsive user interfaces.</span>
      </div>  

 <span className='spanText'>Dec 2021 - June 2022</span>
     
    </div>

            <div className="myWorkExp3">
                  <img src={magicEdtechLogo} alt='Freelance' className='imgWorkExpMagicEdtechLogo'/>
                     <div className="workExp3TextContent">
     <h3>QA Engineer</h3>
   <span>
  With over a year of experience as a QA engineer, I excel in meticulously testing software to ensure quality and functionality. Skilled in test case design, bug identification, and collaboration with development teams, I'm dedicated to delivering high-quality, user-centric solutions.</span>
  </div> 
 <span className='spanText'>July 2022 - present</span> 
    </div>
   
   
</div>
<img src={lineStyleFirstImage} alt="" className="lineStyleImg"/>
  </div>
   
     );
}

export default MyWorkExp;