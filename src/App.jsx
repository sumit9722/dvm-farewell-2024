import './App.css'
import Navbar from './components/Navbar'
import MainBody from './components/MainBody'
import MobilePage from './components/MobilePage'
import Footer from './components/Footer'
import React, { useState } from "react";
import { useEffect } from 'react'
import { useRef } from 'react'

const data = [
  {
    name: "Prateek Kashyap",
    vertical: "Front-End",
    img: "/seniorImg/prateek.png",
    audio:"/audio/sample1.mp3",
  },
  {
    name: "Jay Goyal",
    vertical: "Front-End",
    img: "/seniorImg/jay.png",
    audio:"/audio/sample2.mp3",
  },
  {
    name: "Vaibhav Singla",
    vertical: "Front-End",
    img: "/seniorImg/vaibhav.png",
    audio:"/audio/sample1.mp3",
  },
  {
    name: "Ritvik Mittal",
    vertical: "Game Dev",
    img: "/seniorImg/ritvik.png",
    audio:"/audio/sample2.mp3",
  },
  {
    name: "Aditya R Patil",
    vertical: "UI/UX",
    img: "/seniorImg/aditya.png",
    audio:"/audio/sample1.mp3",
  },
  {
    name: "Achinthya Hebbar",
    vertical: "App Dev",
    img: "/seniorImg/achintya.png",
    audio:"/audio/sample2.mp3",
  }
];

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePause = () => {setIsPlaying((prev) => !prev);};

  
  
  
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

  useEffect(()=>{

    if(isPlaying)
    {
      audioRef.current.play();
    }
    else
    {
      audioRef.current.pause();
    }
    
  },[isPlaying])

  useEffect(() => {
    if (audioRef.current)
    {
      audioRef.current.load();
      if(isPlaying)
      {
        audioRef.current.play();
      }
      else
      {
        audioRef.current.pause();
      }
    } 
  }, [currentIndex]);

  return (
    <>
    <div className="page">
      <Navbar />
      <MainBody data={data} curr={currentIndex} handleClick={handleClick} handlePrev={handlePrev} handleNext={handleNext} handlePause = {handlePause} pause = {isPlaying}/>
      <Footer />
    </div>
    <div className="pageMobile">
      <MobilePage data={data} curr={currentIndex} handlePrev={handlePrev} handleNext={handleNext} handlePause = {handlePause} pause = {isPlaying}/>
    </div>
    <audio ref={audioRef} src={data[currentIndex].audio} autoPlay/>
    </>
  )
}

export default App
