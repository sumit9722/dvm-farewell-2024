import "./BottomPlayer.css"
import SongDetail from "./SongDetail"
import Player from "./Player"
import PlayerOptions from "./PlayerOptions"

export default function BottomPlayer(navFunc){
    return (
        <div className="bottomPlayerDiv">
            <SongDetail items = {navFunc.items} />
            <Player prev={navFunc.prev} next={navFunc.next} pause = {navFunc.pause} isPause={navFunc.isPause}></Player>
            <PlayerOptions></PlayerOptions>
        </div>
    )
}