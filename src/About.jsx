import "./App.css";
import Comman from "./Comman";
import web from './Images/atul.jpeg'

const About = () => {
  return <>
    <Comman 
      name='Know something interesting about me'
      imgsrc={web}
      visit='/contact'
      btntext='Contact Now'
      tag="A 2nd year student of web developement at J.C. BOSE UNIVERSITY OF SCIENCE AND TECHNOLOGY YMCA, looking for an opportunity where I can contribute and enhance my skills "
    />
  </>
};

export default About;
