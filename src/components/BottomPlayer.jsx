import "./BottomPlayer.css"
import SongDetail from "./SongDetail"
import Player from "./Player"
import PlayerOptions from "./PlayerOptions"

export default function BottomPlayer(){
    return (
        <div className="bottomPlayerDiv">
            <SongDetail></SongDetail>
            <Player></Player>
            <PlayerOptions></PlayerOptions>
        </div>
    )
}