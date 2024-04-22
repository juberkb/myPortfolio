import React from 'react';
import './about.css'
import Kbjuber from '../../Media/aboutImageKB.jpg'

function About() {

    return ( 
<div className="container">
 <div className='aboutContainer'>
<h2 className="aboutHeading">About Me</h2>
<div className='aboutContent'>
    <img src={Kbjuber} alt='aboutImg' className='aboutImg'/>
    <div className='aboutContentText'>
    <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
<br/>
I began my journey as a web developer in 2023, since then I'm building cutting-edge web applications using modern technologies such as Reactjs, javaScript, CSS, and much more. then i never look back and I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. 
<br/>
When I'm not in full-on developer mode, you can find me hovering around on LinkdIn or on Instagram, witnessing the journey of early startups or enjoying some free time. You can follow me on <a href='https://www.linkedin.com/in/juber-khan-27a8751b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel="noreferrer" className='aboutSocialText'>LinkdIn</a> where I share tech-related bites and build in public, or you can follow me on <a href='https://github.com/juberkb' target="_blank" rel="noreferrer" className='aboutSocialText'>GitHub</a></p>

  <p>  Finally, some quick bits about me :</p>
  {/* <div > */}
    <ul className='aboutContenttextpoints'>
    <li><i className="bi bi-1-square-fill"> B.Tech. in Computer Science Engineering </i></li>
        <li><i className="bi bi-2-square-fill"> Frontend dev </i></li>
          </ul>
            <ul className='aboutContenttextpoints'>
            <li><i className="bi bi-3-square-fill">  part time freelancer </i></li>
                <li><i className="bi bi-4-square-fill"> Avid learner </i></li>
                </ul>

 {/* </div> */}
    </div>
    </div>
    </div>
       </div>
     );
}

export default About;