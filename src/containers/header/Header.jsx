import React from 'react';
import profile from '../../assets/profile.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import behance from '../../assets/behance.png';
import facebook from '../../assets/facebook.png';
import github from '../../assets/github.png';
import rectangle from '../../assets/rectangle.png';
import whatsapp from '../../assets/whatsapp.png';
import './header.css';

const Header = () => (
  <div className="kai__header section__padding">
    <div className="kai__header-content">
      <div className="about__container">
      <h1 className="about__text">Hi there! I'm Kai, a Full Stack web Developer<br/>I make digital things easy and enjoyable <br/> for everyone. </h1>
        <div className="kai__header-content__profile">
        <img src={profile} />
      </div>
      <div className="kai__header-content__rectangle">
        <img src={rectangle} />
      </div>
      </div>
      <div className="about__links-container">
          <div className="about__links">
            <p><a href="#about">About</a></p>
            <p><a href="#skillspage">My Skills</a></p>
            <p><a href="#design">Contact Me</a></p>
          </div>
        <div className="kai__socialimedia__links">
           <div className="github">
              <a href="https://github.com/Arafat-B" target="_blank" rel="noopener noreferrer">
            <img src={github} />
            </a>
        </div>
        <div className="linkedin">
         <a href="https://www.linkedin.com/in/bukenya-arafat/" target="_blank" rel="noopener noreferrer">
           <img src={linkedin} />
           </a>
        </div>
        <div className="instagram">
          <a href="https://wa.me/message/GACTSSZXSD5FO1" target="_blank" rel="noopener noreferrer">
           <img src={instagram} />
           </a>
        </div>
        <div className="facebook">
           <a href="https://wa.me/message/GACTSSZXSD5FO1" target="_blank" rel="noopener noreferrer">
            <img src={facebook} />
            </a>
        </div>
        <div className="behance">
          <a href="https://www.behance.net/bukenyaarafat" target="_blank" rel="noopener noreferrer">
            <img src={behance} />
            </a>
        </div>
        <div className="whatsapp">
          <a href="https://wa.me/message/GACTSSZXSD5FO1" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="WhatsApp" />
          </a>
</div>
      </div>
      </div>
    </div>
  </div>
);

export default Header;
