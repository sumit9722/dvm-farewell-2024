import Playlist from "./Playlist"
import PlaylistHead from "./PlaylistHead"
import "./PlaylistSection.css"

export default function PlaylistSection(props){
    return(
        <>
        <div className="playlistSection">
            <PlaylistHead></PlaylistHead>
            <Playlist clickFunc = {props.clickFunc} items = {props.items} curr ={props.curr}></Playlist>
        </div>
            <img src="/blur.png" alt="blur" className="blur" />
        </>
    )
}