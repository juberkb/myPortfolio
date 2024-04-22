import './myskills.css'

// import Fonts from '../../static/EBGaramond-Regular'

import skillsImg1 from "../../Media/Html.png"
import skillsImg2 from "../../Media/CSS.png"
import skillsImg3 from "../../Media/Bootstrap.png"
import skillsImg4 from "../../Media/JavaScript.png"
import skillsImg5 from "../../Media/reactjsLogo.png"
import skillsImg6 from "../../Media/Exp.png"
import skillsImg7 from "../../Media/ReactNativeLogo.png"
import skillsImg8 from "../../Media/NodeJSLogo.png"
import skillsImg9 from "../../Media/Mongo.png"

import skillsImg11 from "../../Media/Figma.png"
import skillsImg12 from "../../Media/GitLens.png"
import skillsImg13 from "../../Media/GitIcon.png"

// import Slide from "react-reveal/Slide";

function MySkills() {
    return ( 
       <section className="skills">

        <div className="container">
            <h2 className="skillsHeading">My Skills</h2>

            <div className='mySkillsContent'>


 <div className='skillsImg1'>
            <img src={skillsImg1} alt='htmlSkillImg' className='SkillImg'/>
            <p className='skillsText'>HTML</p>
            </div>
         
            
 <div className='skillsImg2'>
            <img src={skillsImg2} alt='cssSkillImg' className='SkillImg'/>
             <p className='skillsText'>CSS</p>
            </div>
           
              <div className='skillsImg3'>
            <img src={skillsImg3} alt='bootstrapSkillImg' className='SkillImg'/>
             <p className='skillsText'>BOOTSTRAP</p>
            </div>
            
                 <div className='skillsImg4'>
                 <img src={skillsImg4} alt='jsSkillImg' className='SkillImg'/>
 <p className='skillsText'>JavaScript</p>
            </div>
         
                   <div className='skillsImg5'>
                                <img src={skillsImg5} alt='ReactjsSkillImg' className='SkillImg'/>
                                 <p className='skillsText'>ReactJS</p>
                                </div>
             
                <div className='skillsImg6'>
            <img src={skillsImg8} alt='nodeSkillImg' className='SkillImg'/>
           <p className='skillsText'>Nodejs</p> 
            </div>  
                 
           
             <div className='skillsImg7'>
                           <img src={skillsImg6} alt='expjsSkillImg' className='SkillImg'/>
                            <p className='skillsText'>Expressjs</p>
                                </div>
              
                  <div className='skillsImg8'>
                      <img src={skillsImg9} alt='mongoSkillImg' className='SkillImg'/>
                      <p className='skillsText'>MongoDB</p>
                  </div>   
            
                   <div className='skillsImg9'>
                    <img src={skillsImg7} alt='reactNativeSkillImg' className='SkillImg'/>
                    <p className='skillsText'>ReactNative</p>                    </div>
            
                   <div className='skillsImg10'>
           <img src={skillsImg11} alt='Reactjs' className='SkillImg'/>
           <p className='skillsText'>Figma</p>
           </div>
          
              <div className='skillsImg11'>
           <img src={skillsImg12} alt='Reactjs' className='SkillImg'/>
            <p className='skillsText'>Git Lens</p>
           </div>
            
               <div className='skillsImg12'>
           <img src={skillsImg13} alt='Reactjs' className='SkillImg'/>
            <p className='skillsText'>Git Hub</p>
           </div>
            



        
    
           </div>
            

            {/* <div className="mySkillsRow2">
                <div className="subMRR3">
                <h3 className="subText">My creative skills & experiences.</h3>
                 <Slide bottom>
                <h5 className='subTextI'>I have two years of professional experience specializing in Frontend Development with expertise in the MERN Stack (MongoDB, Express.js, React, Node.js) and React Native Development, My 1 year+ professional journey includes actively contributing to various projects in these domains.</h5>
                </Slide>
                </div>
             

               <div className="subMRR4">
                <Slide bottom>
                    <div className="bars">
                        <div className="info">
                            <span className='spanText'>HTML 5</span>
                            <span className='spanText'>99%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    </Slide>
                     <Slide bottom>
                    <div className="bars">
                        <div className="info">
                            <span className='spanText'>CSS 3</span>
                            <span className='spanText'>85%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    </Slide>
                     <Slide bottom>
                    <div className="bars">
                        <div className="info">
                            <span className='spanText'>Bootstrap 5.1</span>
                            <span className='spanText'>99%</span>
                        </div>
                        <div className="line Bootstrap"></div>
                    </div>
                    </Slide>
                     <Slide bottom>
                    <div className="bars">
                        <div className="info">
                            <span className='spanText'>JavaScript</span>
                            <span className='spanText'>80%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    </Slide>
                     <Slide bottom>
                      <div className="bars">
                        <div className="info">
                            <span className='spanText'>ReactJs</span>
                            <span className='spanText'>85%</span>
                        </div>
                        <div className="line Reactjs"></div>
                    </div>
                    </Slide>
                     <Slide bottom>
                        <div className="bars">
                        <div className="info">
                            <span className='spanText'>NodeJs</span>
                            <span className='spanText'>50%</span>
                        </div>
                        <div className="line Nodejs"></div>
                    </div>
                    </Slide>
                     <Slide bottom>
                       <div className="bars">
                        <div className="info">
                            <span className='spanText'>ExpressJs</span>
                            <span className='spanText'>50%</span>
                        </div>
                        <div className="line Expressjs"></div>
                    </div>
                    </Slide>
                 <Slide bottom>
                    <div className="bars">
                        <div className="info">
                            <span className='spanText'>MongoDB</span>
                            <span className='spanText'>50%</span>
                        </div>
                        <div className="line MongoDB"></div>
                    </div>
                    </Slide>
                     <Slide bottom>
                    <div className="bars">
                        <div className="info">
                            <span className='spanText'>ReactNative</span>
                            <span className='spanText'>70%</span>
                        </div>
                        <div className="line ReactNative"></div>
                    </div> 
                  </Slide>
               </div>

            </div> */}

            </div>
     
    </section>
     );
}

export default MySkills;