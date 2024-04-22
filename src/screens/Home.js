import React,{useState, useRef} from 'react';
import "./home.css";


import Button from "../ReuableComponents/Buttons";
import MyWorkExp from "./HomeComponents/MyWorkExp";
import MySkills from "./HomeComponents/MySkills";
import MyProjects from "./HomeComponents/MyProjects";
import About from "./HomeComponents/About";

import portfolioTopImage from "../Media/Juberkhan.webp"
import ContactInfo from './HomeComponents/ContactInfo';
import HireMeServicePage from './HomeComponents/HireMeServicePage';

function Home() {


 // starRating
  const [rating, setRating] = useState(0);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
   // starRating

// email
  const openEmail = () => {
    window.location.href = "mailto: juberkhan.jkc@gmail.com";
  };

  //  my work
  const contentRef = useRef(null);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Content reference is null.");
    }
  };

  // const textList = [
  // "Welcome to my Website",
  // "Step into My Digital Haven: Navigating the World Within",
  // ];

 return ( 
 <div>
 

 <div className="home">

    <div className="homeContainer">
        <div className="homeContent"> 
        <h1 className='homeContentHeading'>Hello, I'M Juber Khan</h1>
        <p className='homeContentSubText'>Experienced React.js Developer | Seeking a Challenging Role in Innovative Web Application Development | Committed
to High- Quality Code and Collaborative Teamwork.</p>
<p className='homeContentSubText'><i className="bi bi-geo-alt"></i> Jaipur, Rajasthan (India)</p>
<p className='homeContentSubText'> <span className="circle"></span><i className="bi bi-circle-fill text-success"></i> Available for new projects</p>
            <div className="star-rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={index <= rating ? 'star filled' : 'star'}
          onClick={() => handleRatingChange(index)}
        >
          &#9733;
        </span>
      ))}
  
       <p className="homeStarText">01+ Years of Exp.</p>
    </div>
         
       <br/>
       <div className='container'>
       
       <div className='homeContentRowButton'>
       <div className='homeContent1stRowButton'>
       <Button label="LinkdIn" className="homeContentButtons" link="https://www.linkedin.com/in/juber-khan-27a8751b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
       <Button label="GitHub" className="homeContentButtons" link="https://github.com/juberkb" />
        </div>

        <div className='homeContent2ndRowButton'>
               <Button label="Instagarm" className="homeContentButtons" link="https://www.instagram.com/khan.juber_kb?igsh=MXNoYmV5bmw2Mzg4YQ==" />
              <Button label="Email" className="homeContentButtons" onClick={openEmail} />
           
        
          <Button label="My Work" className="homeContentButtons" onClick={scrollToContent} 
        />
                </div>
                </div>
              </div>
        </div>

      <div className="homeImg">
       <img className="homeTopImage" src={portfolioTopImage} alt="juberBG" rel='preload' />
       </div>

     </div>
     <section id="aboutMe">
<About/>
</section>

 <section id="myskills">
 <MySkills/>
</section>

 <section id="myProjects" ref={contentRef}>
<MyProjects/>
</section>
 <section id="myservice">
<HireMeServicePage/>
</section>
<MyWorkExp/>
 <section id="contactme">
<ContactInfo/>
</section>






 </div>
 </div>

        );
}

export default Home;