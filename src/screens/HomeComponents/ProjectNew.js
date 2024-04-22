import React, { useState, useEffect } from 'react';
import './projectnew.css';
// Importing images
import project1 from "../../Media/project2.png";
import project2 from "../../Media/project1.png";
import project3 from "../../Media/project3.png";
import project4 from "../../Media/project4.png";
import project5 from "../../Media/project5.png";
import project6 from "../../Media/project6.png";
import project7 from "../../Media/project7.png";
import project8 from "../../Media/project8.png";

const images = [
  { id: 1, src: project1, title: 'Osira Network', link: 'https://osira.network/' },
  { id: 2, src: project2, title: 'Raaz Ludo', link: 'https://raazludo.com/login#' },
  { id: 3, src: project3, title: 'Daily Live Media', link: 'https://dailylivemedia.netlify.app/' },
  { id: 4, src: project4, title: 'Apple Web Clone', link: 'https://juberkb.github.io/apple-clone.in/' },
  { id: 5, src: project5, title: 'Tic Tac Toe Game', link: 'https://juberkb.github.io/tictactoe/' },
  { id: 6, src: project6, title: 'Live Clock', link: 'https://juberkb.github.io/realtimeclock/' },
  { id: 7, src: project7, title: 'Demo Project', link: 'https://juberkb.github.io/Project1.github.io/' },
  { id: 8, src: project8, title: 'First portfolio', link: 'https://juberkb.github.io/juberjkc/' },
  // Add more images as needed
];

function ProjectNew() {
  const [selectedImage, setSelectedImage] = useState(images[0]); // Start with the first image as selected

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage(prevSelectedImage => {
        // Find the index of the current selected image
        const currentIndex = images.findIndex(img => img === prevSelectedImage);
        // Update to the next image, or go back to the first image if at the end
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5 * 60 * 1000); // Change image every 5 minutes

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div>
      <div className="image-gallery">
        <div className="main-image-container">
          <img src={selectedImage.src} alt={selectedImage.title} className="main-image" />
          <div className='projectbtn'> 
           <a href={selectedImage.link} target="_blank" rel="noopener noreferrer" >{selectedImage.title}</a>
          </div>
        </div>
        <div className="thumbnail-container">
          {images.map(image => (
            <img
              key={image.id}
              src={image.src}
              alt={image.title}
              className="thumbnail"
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectNew;
