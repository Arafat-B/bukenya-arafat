import React from 'react';
import './myskills.css';

const Myskills = () => (
  <div className="design__container" id="skillspage">
    <div className="design__container-slogan">My Skills</div>
    <div className="skills__container">
      <div className="skill__container-pallets">
        <div className="skill skill-frontend">
          <div className="frontend">FrontEnd <br/>Development</div>
        </div>
        <div className="skill skill-backend">
          <div className="backend">BackEnd <br/> Development</div>
        </div>
        <div className="skill skills-cloud">
          <div className="cloud">Cloud <br/> Services</div>
        </div>
        <div className="skill skills-version">
          <div className="version">Version <br/> control</div>
        </div>
        <div className="skills-display">
          <div className="frontendskills skills-content"> HTML<br/> JavaScript<br/>CSS<br/> React</div>
          <div className="backendskills skills-content"> PHP<br/> Python<br/>Node.js</div>
          <div className="cloudskills skills-content"> Google Cloud<br/> services<br/>AWS</div>
          <div className="versionskills skills-content"> Git</div>
        </div>
      </div>
    </div>
  </div>
);

export default Myskills;
