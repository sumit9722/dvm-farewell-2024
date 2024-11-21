import "./SongDetail.css"

export default function SongDetail({ items }){
    return (
        <>
        {items.map((item, index) => (
            <div className="songDetail" key={index}>
                <div className="songDetailPic">
                    <img src={item.img} alt="samplepics" className="songDetailImg"/>
                </div>
                <div className="songName">{item.name}</div>
            </div>
            ))
            }
        </>
    )
}