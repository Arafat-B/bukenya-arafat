import React from 'react';
import subtract from '../../assets/subtract.png';

import './about.css';

const About = () => (

  <div className ="about">
  <div className="kai__section__margin" id="about">
    <div className="kai-heading">About me
    </div>
   
      <div className="kai__aboutme-text-heading"> Your favourite website or app - </div>
      <div className="kai__aboutme-holder">
      <div className="kai__aboutme-text-des">I'm the person who works on the parts <br/>you see and the behind-the-scenes <br/>
      stuff that makes it all work smoothly.
      </div>
    </div>
    <div className="kai__about-content__images">
        <img src={subtract} />
      </div>
      </div>
    </div>
  

 

  
);

export default About;
