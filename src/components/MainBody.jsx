import React, { useState } from "react";

import "./MainBody.css";
import SideMenu from "./SideMenu";
import Carousel from "./Carousel";
import PlaylistSection from "./PlaylistSection";
import BottomPlayer from "./BottomPlayer";

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
    vertical: "Game Development",
    img: "/seniorImg/ritvik.png"
  },
  {
    name: "Aditya R Patil",
    vertical: "Design UI/UX",
    img: "/seniorImg/aditya.png"
  },
  {
    name: "Achinthya Hebbar",
    vertical: "App Development",
    img: "/seniorImg/achintya.png"
  }
];

export default function MainBody() {
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
  return (
    <>
        <div className="mainbody">
            <SideMenu></SideMenu>
            <PlaylistSection />
            <Carousel items={[data[currentIndex]]} ></Carousel>
        </div>
        <BottomPlayer prev={handlePrev} next={handleNext}/>
    </>
  );
}