
import './HireMeServicePage.css'
// import Button from "../../ReuableComponents/Buttons";
import HireMe from '../../ReuableComponents/HireMe';
import ResumeDownloadButton from '../../ReuableComponents/ResumeDownloadButton';


import image1 from '../../Media/frontEndDeveloper.png';
import image2 from '../../Media/ReactNativeDev.png';
import image3 from '../../Media/MERNSTACK.png';
// import image4 from '../../Media/WebDesign.png';
import image5 from '../../Media/QA.png';


function HireMeServicePage() {

     const cards = [
       {
      image: image1,
      title: 'Front-End Development',
      content: 'What I Offer:',
        reviewJ: 'User Interface (UI) Design' ,
               reviewU: 'Responsive Design' ,
                reviewB: 'Interactive Elements' ,
                 reviewE: 'Cross-Browser Compatibility' ,
                  reviewR: 'Accessibility' ,

    },
    {
      image: image2,
      title: 'ReactNative Development',
     content: 'What I Offer:',
        reviewJ: 'Cross-Platform Mobile App Development' ,
               reviewU: 'UI/UX Design' ,
                reviewB: 'Custom App Development' ,
                 reviewE: 'Integration with Backend Services' ,
                  reviewR: 'App Store Deployment' ,
    },
    {
      image: image3,
      title: 'MERN-STACK Development',
             content: 'What I Offer:',
        reviewJ: 'Full-Stack Web Development' ,
               reviewU: 'Database Design and Implementation' ,
                reviewB: 'RESTful API Development' ,
                 reviewE: 'User Authentication and Authorization' ,
                  reviewR: 'Real-Time Functionality' ,
    },
    //  {
    //   image: image4,
    //   title: 'UI/UX Design',
    //    content: 'What I Offer:',
    //     reviewJ: 'User Research' ,
    //            reviewU: 'User Flow Design' ,
    //             reviewB: 'Visual Design' ,
    //              reviewE: 'Responsive Design' ,
    //               reviewR: 'Wireframing' ,
    // },
     {
      image: image5,
      title: 'Quality Analysis',
     content: 'What I Offer:',
        reviewJ: 'Test Case Design' ,
               reviewU: 'Test Automation' ,
                reviewB: 'Manual Testing' ,
                 reviewE: 'Regression Testing' ,
                  reviewR: 'Accessibility Testing' ,
    },
    //  {
    //   image: image3,
    //   title: 'Card 3 Title',
    //   content: 'Content for Card 3',
    // },
  ];




    return ( 
      <div className="container">
        <div className="hireMePage">
    
      <h2 className="hireMeHeading">Hire Me For</h2>
  
  <div className="hireMeContainer">

<div className="hireMeSubContainer1">
           
             <div className="hireMeTextContainer">
             <h3 className="gradient-text">Your company, my exceptional expertise.</h3>
             <h6 className="gradient-text2">If you are looking for an agency to help you create a remarkable presence online, you`ve come to the right place. We can help you take your business to the next level.</h6>
           <div  style={{display:"flex",justifyContent:"center", alignItems:"center",paddingTop:"1rem", paddingBottom:"3rem"}}>
            <ResumeDownloadButton/>
           </div> 
 
          
                  </div>
</div>

<div className="hireMeSubContainer2">

   <div className="cards-container">
      <div className="textColumn">
        <h2 className="text-column1">what are we offering ...</h2>
        <span className="text-column2">Contact Me For</span><br/><br/>
         <span className="text-column2">Slide to know more...</span>
      </div>
      
      
      <div className="cards-row"> 
 
        {cards.map((card, index) => (
          <HireMe
            key={index}
            imageSrc={card.image}
            title={card.title}
            content={card.content}
             reviewJ={card.reviewJ}
             reviewU={card.reviewU}
             reviewB={card.reviewB}
             reviewE={card.reviewE}
             reviewR={card.reviewR}
        
           />
        ))}
      </div>
    </div>

</div>
</div>
</div>
</div>
     );
}

export default HireMeServicePage;