// Import necessary modules and components
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css'; 

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* Background video, set to autoplay, loop, and muted */}
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      {/* Main headline */}
      <h1>ADVENTURE CALLS</h1>
      {/* Subheading text */}
      <p>Embrace The Opportunity!</p>
      {/* Container for buttons */}
      <div className='hero-btns'>
        {/* Button for 'GET STARTED' with outlined style and large size */}
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        {/* Button for 'WATCH TRAILER' with primary style and large size */}
        {/* onClick prop includes a console.log statement */}
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}


export default HeroSection;