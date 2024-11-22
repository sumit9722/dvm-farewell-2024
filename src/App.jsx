import './App.css'
import Navbar from './components/Navbar'
import MainBody from './components/MainBody'
import MobilePage from './components/MobilePage'
import Footer from './components/Footer'
import React, { useState } from "react";

const data = [
  {
    name: "Prateek Kashyap",
    vertical: "Front-End",
    img: "/seniorImg/prateek.png",
  },
  {
    name: "Jay Goyal",
    vertical: "Front-End",
    img: "/seniorImg/jay.png",
  },
  {
    name: "Vaibhav Singla",
    vertical: "Front-End",
    img: "/seniorImg/vaibhav.png",
  },
  {
    name: "Ritvik Mittal",
    vertical: "Game Dev",
    img: "/seniorImg/ritvik.png"
  },
  {
    name: "Aditya R Patil",
    vertical: "UI/UX",
    img: "/seniorImg/aditya.png"
  },
  {
    name: "Achinthya Hebbar",
    vertical: "App Dev",
    img: "/seniorImg/achintya.png"
  }
];

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClick = (ind) => {
    setCurrentIndex(ind);
  };

  return (
    <>
    <div className="page">
      <Navbar />
      <MainBody data={data} curr={currentIndex} handleClick={handleClick} handlePrev={handlePrev} handleNext={handleNext}/>
      <Footer />
    </div>
    <div className="pageMobile">
      <MobilePage data={data} curr={currentIndex} handlePrev={handlePrev} handleNext={handleNext}/>
    </div>
    </>
  )
}

export default App
