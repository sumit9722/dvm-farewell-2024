import "./Playlist.css";

function isZenBrowser() {
  // Get the user agent string
  const userAgent = navigator.userAgent.toLowerCase();

  console.log(userAgent);

  // Check for Zen Browser-specific identifier
  // Replace 'zenbrowser' with the actual unique identifier for Zen Browser
  return userAgent.includes("firefox");
}

export default function Playlist({ clickFunc, items, curr }) {
  const isZen = isZenBrowser();
  return (
    <div
      className="playlistDiv"
      style={
        isZen
          ? {
              height: "90%",
            }
          : {}
      }
    >
      {/* <div className="playlistIcons">
                <div className="playlistPlayBtn">
                    <svg width="54.75" height="54.75" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.5 0.25C29.3304 0.25 22.3219 2.37603 16.3606 6.35923C10.3993 10.3424 5.75306 16.0039 3.00938 22.6277C0.265707 29.2515 -0.452164 36.5402 0.94655 43.572C2.34526 50.6038 5.79774 57.063 10.8674 62.1326C15.937 67.2023 22.3962 70.6548 29.428 72.0535C36.4598 73.4522 43.7485 72.7343 50.3723 69.9906C56.9961 67.247 62.6576 62.6007 66.6408 56.6394C70.624 50.6781 72.75 43.6696 72.75 36.5C72.75 31.7396 71.8124 27.0258 69.9907 22.6277C68.1689 18.2297 65.4988 14.2335 62.1326 10.8674C58.7665 7.50126 54.7703 4.8311 50.3723 3.00937C45.9742 1.18763 41.2604 0.25 36.5 0.25ZM29.428 48.4412V22.6499L49.2941 36.5L29.428 48.4412Z" fill="#784BD2"/>
                    </svg>
                </div>
                <div className="followingBtn">
                    Following
                </div>
            </div> */}
      <div className="playlist">
        <div className="playlistTableTitles">
          <div className="hash">#</div>
          <div className="titleName">Name</div>
          <div className="verticaltitle">Vertical</div>
          <div className="timestampTitle">
            <svg
              width="22"
              height="22"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.19428 10.5408C0.561849 10.482 -0.00457571 10.9477 2.78684e-05 11.5829C0.014267 13.5474 0.531796 15.4825 1.51189 17.1999C2.68267 19.2513 4.45672 20.8925 6.59292 21.9004C8.72911 22.9083 11.1238 23.234 13.4516 22.8332C15.7794 22.4325 17.9273 21.3246 19.6035 19.6604C21.2796 17.9961 22.4026 15.8561 22.8199 13.5312C23.2372 11.2063 22.9285 8.80934 21.9358 6.66604C20.9431 4.52275 19.3145 2.73709 17.2714 1.55179C15.561 0.559535 13.6297 0.0282879 11.6653 0.000109041C11.0302 -0.00900132 10.5605 0.554105 10.6148 1.18693C10.6691 1.81976 11.2275 2.28117 11.8622 2.30615C13.3542 2.36489 14.8157 2.78627 16.1172 3.54133C17.7516 4.48957 19.0545 5.91809 19.8487 7.63273C20.6429 9.34736 20.8898 11.265 20.556 13.1249C20.2221 14.9848 19.3237 16.6968 17.9828 18.0282C16.6419 19.3596 14.9236 20.2459 13.0614 20.5665C11.1991 20.8871 9.28334 20.6266 7.57438 19.8202C5.86543 19.0139 4.44619 17.701 3.50957 16.0598C2.76376 14.753 2.35277 13.2885 2.30462 11.7962C2.28413 11.1613 1.8267 10.5997 1.19428 10.5408Z"
                fill="#8B8A88"
              />
              <path
                d="M7.56585 2.47167C7.56585 3.1632 7.00525 3.72379 6.31372 3.72379C5.62219 3.72379 5.06159 3.1632 5.06159 2.47167C5.06159 1.78014 5.62219 1.21954 6.31372 1.21954C7.00525 1.21954 7.56585 1.78014 7.56585 2.47167Z"
                fill="#8B8A88"
              />
              <path
                d="M3.78611 6.3341C3.78611 7.02563 3.22551 7.58623 2.53398 7.58623C1.84245 7.58623 1.28185 7.02563 1.28185 6.3341C1.28185 5.64257 1.84245 5.08198 2.53398 5.08198C3.22551 5.08198 3.78611 5.64257 3.78611 6.3341Z"
                fill="#8B8A88"
              />
              <path
                d="M11.6419 4.232C11.0771 4.232 10.6189 4.68991 10.6189 5.25504V12.6205H15.8012C16.3885 12.6205 16.8648 12.1447 16.8648 11.5571C16.8648 10.9696 16.3885 10.4933 15.8012 10.4933H12.6652V5.25504C12.6652 4.68991 12.207 4.232 11.6419 4.232Z"
                fill="#8B8A88"
              />
            </svg>
          </div>
        </div>
        <div className="line"></div>
        <div className="playlistdata">
          {items.map((item, index) => (
            <div
              className={
                curr === index
                  ? `seniordata senior${index} selected`
                  : `seniordata senior${index}`
              }
              key={index}
              onClick={() => clickFunc(index)}
            >
              <div className="seniorImgDiv">
                <img src={item.img} alt="samplepics" className="seniorImg" />
              </div>
              <div className="seniorNamePlaylist">{item.name}</div>
              <div className="seniorVerticalPlaylist">{item.vertical}</div>
              <div className="heart">
                <svg
                  width="18.75"
                  height="17.25"
                  viewBox="0 0 25 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.7227 2.1925C22.0334 1.4984 21.2138 0.947371 20.3109 0.571104C19.408 0.194837 18.4396 0.000749508 17.4614 0C15.6112 0.000302449 13.8285 0.695341 12.4664 1.9475C11.1044 0.69513 9.32167 5.81919e-05 7.47141 0C6.49208 0.00101963 5.52262 0.195699 4.61883 0.572836C3.71503 0.949972 2.89474 1.50212 2.20516 2.1975C-0.736094 5.15125 -0.734844 9.77125 2.20766 12.7125L12.4664 22.9712L22.7252 12.7125C25.6677 9.77125 25.6689 5.15125 22.7227 2.1925Z"
                    fill="#784BD2"
                  />
                </svg>
              </div>
              <div className="timestampPlaylist">22:22</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
