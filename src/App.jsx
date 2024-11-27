import "./App.css";
import Navbar from "./components/Navbar";
import MainBody from "./components/MainBody";
import MobilePage from "./components/MobilePage";
import Footer from "./components/Footer";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import GridShader from "./components/Grid/GridShader";

const data = [
  {
    name: "Prateek Kashyap",
    vertical: "Front-End",
    img: "/seniorImg/prateek.png",
    audio: "/audio/prateek.mp3",
  },
  {
    name: "Jay Goyal",
    vertical: "Front-End",
    img: "/seniorImg/jay.png",
    audio: "/audio/jay.mp3",
  },
  {
    name: "Vaibhav Singla",
    vertical: "Front-End",
    img: "/seniorImg/vaibhav.png",
    audio: "/audio/vaibhav.mp3",
  },
  {
    name: "Harsh Singh",
    vertical: "Back-End",
    img: "/seniorImg/harsh.jpg",
    audio: "/audio/harsh.mp3",
  },
  {
    name: "Harshith Vasireddy",
    vertical: "Back-End",
    img: "/seniorImg/harshith.jpg",
    audio: "/audio/universal.mp3",
  },
  {
    name: "Utkarsh Sharma",
    vertical: "Back-End",
    img: "/seniorImg/utkarsh.jpg",
    audio: "/audio/universal.mp3",
  },
  {
    name: "Ritvik Mittal",
    vertical: "Game Dev",
    img: "/seniorImg/ritvik.png",
    audio: "/audio/ritvik.mp3",
  },
  {
    name: "Nitin Aravind Birur",
    vertical: "Game Dev",
    img: "/seniorImg/nitin.png",
    audio: "/audio/universal.mp3",
  },
  {
    name: "Satwik Rath",
    vertical: "UI/UX",
    img: "/seniorImg/satwik.png",
    audio: "/audio/universal.mp3",
  },
  {
    name: "Achinthya Hebbar",
    vertical: "App Dev",
    img: "/seniorImg/achintya.png",
    audio: "/audio/achintya.mp3",
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(144);
  const [currDuration, setCurrDuration] = useState(0);
  const audioRef = useRef(null);

  const handlePause = () => {
    setIsPlaying((prev) => !prev);
  };

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
    setIsPlaying(true);
  };

  const handleTime = (val) => {
    if (audioRef.current) {
      audioRef.current.currentTime = val;
      setCurrDuration(val);
    }
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrDuration(audioRef.current.currentTime);
      }, 500);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    console.log(audioRef);
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    if (audio) {
      audio.load();
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
    return () => {
      if (audio) {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      }
    };
  }, [currentIndex]);

  return (
    <>
      <GridShader />
      <div className="page">
        <Navbar />
        <MainBody
          data={data}
          curr={currentIndex}
          handleClick={handleClick}
          handlePrev={handlePrev}
          handleNext={handleNext}
          handlePause={handlePause}
          pause={isPlaying}
          dur={duration}
          handleTime={handleTime}
          currTime={currDuration}
        />
        <Footer />
      </div>
      <div className="pageMobile">
        <MobilePage
          data={data}
          curr={currentIndex}
          handlePrev={handlePrev}
          handleNext={handleNext}
          handlePause={handlePause}
          pause={isPlaying}
          dur={duration}
          handleTime={handleTime}
          currTime={currDuration}
        />
      </div>
      <audio
        ref={audioRef}
        src={data[currentIndex].audio}
        onEnded={handleNext}
      />
      {/* <audio ref={audioRef} src="/audio/universal.mp3" loop/> */}
    </>
  );
}

export default App;
