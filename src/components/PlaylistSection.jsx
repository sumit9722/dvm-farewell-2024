import Playlist from "./Playlist"
import PlaylistHead from "./PlaylistHead"
import "./PlaylistSection.css"

export default function PlaylistSection(){
    return(
        <div className="playlistSection">
            <PlaylistHead></PlaylistHead>
            <Playlist></Playlist>
        </div>
    )
}