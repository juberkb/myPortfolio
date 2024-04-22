import React,{useEffect,useState} from 'react'
import { FaArrowUp } from "react-icons/fa";
import "./GotoTop.css"

const GoTop = () => {
const [isVisible, setIsVisible] = useState(false);


// working functionality of button bottom to top
    const gotobtn =()=>{
        window.scrollTo({top:0, left:0, behavior:'smooth'})
    }
    // working functionality of button bottom to top

const listenToScroll = () => {
    let heightToHidden = 60;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className='wrapper'>
    {isVisible && (
    <div className='gotobtn' onClick={gotobtn}>
    <FaArrowUp  className='top-btn-icon'/>
</div>)}
</div>

  )
}







export default GoTop