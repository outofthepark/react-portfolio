import React from 'react';

const About = () => {
  
    return (
      <div className="about">
          <div className="aboutMeHeader">
                <h1>About Me</h1>
            </div>
            <div className="aboutMeContentContainer">

                <div className="aboutMeContent">
                    <img className="myPicture" src="/me.png" alt="Allison Harden" />
                </div>

                <div className="aboutMeContent">
                    <p>Allison Harden is a recent University of Utah mathematics graduate. 
                        Her interests include number theory, interior design, and star trek. 
                        She currently works as a junior full stack developer at Summit Global Investments. 
                    </p>
                </div>

            </div>
      </div>
    );
  };
  
  export default About;
  