import "./MainBody.css";
import SideMenu from "./SideMenu";
import Carousel from "./Carousel";
import PlaylistSection from "./PlaylistSection";
import BottomPlayer from "./BottomPlayer";

export default function MainBody({data, curr, handleNext, handlePrev, handleClick}) {
  
  return (
    <>
        <div className="mainbody">
            <SideMenu />
            <PlaylistSection clickFunc = {handleClick} items = {data} curr ={curr}/>
            <Carousel items={[data[curr]]} />
        </div>
        <BottomPlayer prev={handlePrev} next={handleNext} items={[data[curr]]}/>
    </>
  );
}