import React from 'react';
import Project from '../components/Project'

const Portfolio = () => {
  const projects = [
    {
      title: "Lorenz System Modeler",
      github: "https://github.com/outofthepark/LorenzSystem",
      deployment: "https://colab.research.google.com/drive/1ii7PEti0lONfEMEQXJ8jpgrlxPQwkO_x?usp=sharing",
      img: "lorenz-system.png"
    },
    {
      title: "Tech Blog",
      github: "https://github.com/outofthepark/tech-blog",
      deployment: "https://agile-temple-92129.herokuapp.com/",
      img: "tech-blog.png"
    },
    {
      title: "Weather App",
      github: "https://github.com/outofthepark/WeatherApp",
      deployment: "https://outofthepark.github.io/WeatherApp/",
      img: "weather-app.png"
    },
    {
      title: "Note Taker",
      github: "https://github.com/outofthepark/notetaker",
      deployment: "https://blooming-anchorage-66352.herokuapp.com/notes",
      img: "note-taker.png"
    },
    {
      title: "Coding Quiz",
      github: "https://github.com/outofthepark/codequiz",
      deployment: "https://outofthepark.github.io/codequiz/",
      img: "coding-quiz.png"
    },
    {
      title: "Portfolio (You are here!)",
      github: "https://github.com/outofthepark/react-portfolio",
      deployment: "https://nameless-oasis-74729.herokuapp.com/portfolio",
      img: "react-portfolio.png"
    }
  ]
    return (
      <div className="portfolio">
          <h1>Portfolio</h1>
          <Project projects={projects}/>
      </div>
    );
  };
  
  export default Portfolio;