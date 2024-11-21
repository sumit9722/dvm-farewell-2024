import "./MainBody.css"
import SideMenu from "./SideMenu"
import Carousel from "./Carousel"
import PlaylistSection from "./PlaylistSection"

export default function MainBody(){
    return (
        <div className="mainbody">
            <SideMenu></SideMenu>
            <PlaylistSection></PlaylistSection>
            <Carousel></Carousel>
        </div>
    )
}