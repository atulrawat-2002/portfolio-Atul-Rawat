import "./App.css";
import Comman from "./Comman";
import hmimg from './Images/home.jpg'

const Home = () => {
  return (
    <>
      <Comman 
        name='Welcome to my portfolio website'
        imgsrc={hmimg}
        visit='/service'
        btntext='Get Started'
        tag="I am a frontend developer who focuses on clean interfaces and user experience"
      />
    </>
  );
};

export default Home;
