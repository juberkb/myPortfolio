import React from 'react';
import {Link} from "react-router-dom"
import './contactinfo.css'

import Button from "../../ReuableComponents/Buttons";
import LogoLinkDin from "../../Media/Logolinkdin.png"
import LogoGithub from "../../Media/Logogithub.png"
import LogoInsta from "../../Media/Logoinsta.png"

function ContactInfo() {
  const openEmail = () => {
    window.location.href = "mailto: juberkhan.jkc@gmail.com";
  };


    return ( 
      // <div className='container'>
        <div className='contactInfoContainer'>
        <h2 className='contactInfoHeading'>Contact Info :  </h2>
        <div className='contactInfoAll'>
      <p className='contactInfoText'>What`s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.</p>
      <div className='contactInfoContent'>
      <div className='contactInfoContactVia'>
      <div className='conatctInfoEmail'>
      <i className="bi bi-envelope-at text-primary"></i>
       <Button label="juberkhan.jkc@gmail.com" className="conatctInfoEmailText" onClick={openEmail} />
      {/* <p className='conatctInfoEmailText' onClick={openEmail} >juberkhan.jkc@gmail.com</p> */}

      </div>
         <div className='conatctInfoNumber'>
          <i className="bi bi-telephone text-primary "></i>
             <a href="tel:+918003138760" className='conatctInfoNumberText'>  +91-8003139760</a>
         </div>
         </div>
                 <div className='contactInfoSocialMedia'>
   {/* Map over links and images */}
     <Link to="https://www.linkedin.com/in/juber-khan-27a8751b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
        <img src={LogoLinkDin} alt="About"  className='contactInfoSocialMediaLogos'/>
      </Link>
      <Link to="https://github.com/juberkb" target="_blank">
        <img src={LogoGithub} alt="Contact"  className='contactInfoSocialMediaLogos'/>
      </Link>
      <Link to="https://www.instagram.com/khan.juber_kb?igsh=MXNoYmV5bmw2Mzg4YQ==" target="_blank">
        <img src={LogoInsta} alt="Services" className='contactInfoSocialMediaLogos' />
      </Link>
</div>
              {/* <p className='contactInfoSocialMediaText'>you may also find me on these platforms !</p> */}
              
 
</div>
   

         </div>
  
        </div>
        // </div>
     );
}

export default ContactInfo;