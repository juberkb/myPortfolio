import React from 'react';
import footerLogo from "../Media/jkb-png.png"
import lineStyleSecondImage from "../Media/p7.png"

import "./footer.css"

function Footer() {

    return ( 
<section className="footer">
   <img src={lineStyleSecondImage} alt="" className="lineStyleSecondImage"/>
<div className="container">
 <div className="footerContainer">
  <div className="footerContent">
  <img className="footerLogo" src={footerLogo} alt="portfolioLogo"/>
  <p className="footerText">👋 Hi there! If you are looking for an agency to help you create a remarkable presence online, you`ve come to the right place. We can help you take your business to the next level.</p>
  </div>

<div className="footerContactPage">
 <div className="footerContactInfo">
    <h3 className='footerHeadingText'>Contact Info.</h3>
    <p className="footerContactInfoText">  <i className="bi bi-telephone"></i>  +91-8003138660</p>
    <p >  <i className="bi bi-envelope-at"></i>  juberkhan.jkc@gmail.com</p>
  </div>
<div className="footerContactAddress">
  <h3 className='footerHeadingText'>You can find us at:</h3>
  <p>K34, House in Board,</p>
 <p>Shastri Nagar, Jaipur,</p>
 <p> Raj. India - 302016</p>
  </div>

   
</div>
  </div>

<div className="footerCopyRightsHandle">
<p className="footerCopyRights">Copyrights 2023 <span style={{color: "lightblue"}}> @juberKB </span>  All Rights Reserverd </p>
 </div>

</div>
</section>
  );
};


  

export default Footer;