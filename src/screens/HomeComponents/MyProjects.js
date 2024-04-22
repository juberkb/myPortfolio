import './myprojects.css'
import Button from '../../ReuableComponents/Buttons'

import Background1 from "../../Media/DLM.jpg"
import Background2 from "../../Media/appleClone.jpg"
import Background3 from "../../Media/personalPortFolio.jpg"
import Background4 from "../../Media/userManagmentCapture2.png"
import Background5 from "../../Media/tictactoeCapture.jpg"
import Background6 from "../../Media/ClockCapture09.png"
import Background7 from "../../Media/TypingMaster.png"

// import Zoom from 'react-reveal/Zoom';

import ProjectNew from './ProjectNew'

  //  Buttons
   const handleButtonClick = () => {
    // alert('Drop a mail kbaj289@gmail.com');
  };
   //  Buttons


function MyProjects() {
    return ( 
 
<div className='projectContainer'>
  
 <h2 className='projectMainHeading'>My Projects :</h2>
 
  
    <p className='projectOnlyText' style={{marginLeft:"3rem"}}>You can access each of these projects by clicking on the corresponding project's name.</p>
     <ProjectNew className="myNewProject"/>
    <section className="myProject">
  
      <ol className="carouselViewport">
        <li className="carouselSlide" id="carouselSlide1">
          <div className="carouselSnapper" >
          <img src={Background1} alt="Bimg" className='projectImgDemo'/>
          </div>
             <div className="projectLinkButton">
            <Button label="Daily Live Media" onClick={handleButtonClick} className="linkButton" link="https://dailylivemedia.netlify.app/"/>
            </div>
        </li>

        <li className="carouselSlide">
          <div
            className="carouselSnapper">
               <img src={Background2} alt="Bimg" className='projectImg'/>
             </div>
             <div className="projectLinkButton">
            <Button label="Apple Clone" onClick={handleButtonClick} className="linkButton" link="https://juberkb.github.io/apple-clone.in/" />
            </div>
        </li>

        <li className="carouselSlide">
          <div
            className="carouselSnapper">
              <img src={Background3} alt="Bimg" className='projectImg'/>
            </div>
             <div className="projectLinkButton">
            <Button label="First Portfolio" onClick={handleButtonClick} className="linkButton"  link="https://juberkb.github.io/juberjkc/" />
            </div>
        </li>
     
 <li className="carouselSlide">
          <div
            className="carouselSnapper">
              <img src={Background4} alt="Bimg" className='projectImg'/>
            </div>
             <div className="projectLinkButton">
            <Button label="User Management" onClick={handleButtonClick} className="linkButton" link="https://juberkb.github.io/Project1.github.io/" />
            </div>
        </li>

         <li className="carouselSlide">
          <div
            className="carouselSnapper">
              <img src={Background5} alt="Bimg" className='projectImg'/>
            </div>
             <div className="projectLinkButton">
            <Button label="Tic Tac Toe" onClick={handleButtonClick} className="linkButton" link="https://juberkb.github.io/tictactoe/"/>
            </div>
        </li>

         <li className="carouselSlide">
          <div
            className="carouselSnapper">
              <img src={Background6} alt="Bimg" className='projectImg'/>
            </div>      
             <div className="projectLinkButton">
            <Button label="Live Clock" onClick={handleButtonClick} className="linkButton" link="https://juberkb.github.io/realtimeclock/"/>
            </div>
        </li>

         <li className="carouselSlide" id="carouselSlide">
          <div
            className="carouselSnapper">
              <img src={Background7} alt="Bimg" className='projectImg'/>
            </div>       
             <div className="projectLinkButton">
            <Button label="Typing Master" onClick={handleButtonClick} className="linkButton" link=""/>
               
            </div>
        </li>

      </ol>
    </section>
  
    </div>

     );
}

export default MyProjects;