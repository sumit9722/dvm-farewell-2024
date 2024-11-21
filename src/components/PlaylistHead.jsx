import "./PlaylistHead.css"

export default function PlaylistHead() {
    return(
        <div className="playlistHead">
            <div className="dvmImg"> <img src="/DVM.png" alt="DVM" className="DVMLogo"/></div>
            <div className="headTitle">
                <div className="subHeading">Playlist</div>
                <div className="title">Farewell 2024</div>
                <div className="blurb">You made our time here special! This journey had tons of learning, fun and memories along the way. Here's to a bright future!</div>
            </div>
        </div>
    )
}