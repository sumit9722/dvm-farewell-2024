import Playlist from "./Playlist"
import PlaylistHead from "./PlaylistHead"
import "./PlaylistSection.css"

export default function PlaylistSection(props){
    return(
        <div className="playlistSection">
            <PlaylistHead></PlaylistHead>
            <Playlist items = {props.items} curr ={props.curr}></Playlist>
            <img src="/blur.png" alt="blur" className="blur" />
        </div>
    )
}