import "./MobilePage.css";
import { useRef } from "react";

export default function MobilePage({
  data,
  curr,
  handlePrev,
  handleNext,
  handlePause,
  pause,
  dur,
  handleTime,
  currTime,
}) {
  const slideRef = useRef(null);

  function handleSeekbar(e) {
    handleTime((e.target.value / 100) * dur);
  }

  const beforeStyle = {
    transform: `scaleX(${(currTime / dur)<=1?(currTime / dur):1})`,
  };

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }
  return (
    <div className="mobilePage">
      <div className="mobileDvmLogo">
        <svg viewBox="0 0 37 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 5.57593V27.8794L15.6112 39.0296L30.2941 27.8794V5.5774L16.2619 16.2635L8.17724 10.7802L8.08471 16.0769L16.1694 21.2812L26.3913 13.7532V25.0914L15.7052 33.3612L5.29677 26.0212L5.11169 8.27132L0 5.57593Z"
            fill="white"
          />
          <path
            d="M0.448006 31.6367L15.222 41.9996L32.0539 29.3629V3.36373L36.7998 0V31.2724L14.5948 48L0 37.3653V31.7278L0.448006 31.6367Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="mobileText">
        <div className="mobileSubHeading">PLAYING FROM PLAYLIST</div>
        <div className="mobileTitle">Farewell 2024</div>
      </div>
      <div className="mobileSeniorPic">
        <img src={data[curr].img} alt="pic" className="mobileSeniorImg" />
      </div>
      <div className="mobileSeniorDetail">
        <div className="mobileSeniorInfo">
          <div className="mobileSeniorName">{data[curr].name}</div>
          <div className="mobileSeniorVertical">{data[curr].vertical}</div>
        </div>
        <div className="mobileHeart">
          <svg
            width="25"
            height="23"
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
      </div>
      <div className="mobileControlPanel">
        <div className="mobileTimeline">
          <div className="timebar">
            <div style={beforeStyle} className="mblBefore"></div>
            <input
              ref={slideRef}
              type="range"
              value={`${(currTime / dur) * 100}`}
              min="0"
              max="100"
              className="mblSeekbar"
              onChange={handleSeekbar}
            />
          </div>
        </div>
        <div className="mobileTimestamps">
          <div className="time startTime">{formatTime(currTime)}</div>
          <div className="time endTime">{formatTime(dur)}</div>
        </div>
        <div className="mobileKeyPanel">
          <div className="mobilePrevious">
            <button onClick={handlePrev}>
              <svg
                className="navbtnsvg"
                width="20.46"
                height="22.76"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="navbtns"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.99707 22C0.444786 22 -0.00292969 21.5523 -0.00292969 21L-0.00292969 1C-0.00292969 0.447716 0.444786 0 0.997071 0H2.78996C3.34225 0 3.78996 0.447716 3.78996 1L3.78996 9.43451L19.0262 0.444916C19.3595 0.248259 19.7803 0.488546 19.7803 0.875549L19.7803 21.1335C19.7803 21.5185 19.3634 21.759 19.0301 21.5664L3.78996 12.7592L3.78996 21C3.78996 21.5523 3.34225 22 2.78996 22H0.99707Z"
                  fill="#C4C4C4"
                />
              </svg>
            </button>
          </div>
          <div className="play">
            <button onClick={handlePause}>
              {pause ? (
                <>
                  <svg
                    width="66"
                    height="66"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM18 28H14V12H18V28ZM26 28H22V12H26V28Z"
                      fill="white"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    width="66"
                    height="66"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="32" cy="32" r="32" fill="white" />
                    <path
                      d="M25.5 40.5343V23.5022C25.5 22.3412 26.7623 21.6203 27.7622 22.2103L42.3456 30.8147C43.3344 31.3981 43.328 32.8308 42.3339 33.4053L27.7505 41.833C26.7505 42.4109 25.5 41.6892 25.5 40.5343Z"
                      fill="black"
                      stroke="black"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
          <div className="next" onClick={handleNext}>
            <button>
              <svg
                className="navbtnsvg"
                width="20.46"
                height="22.76"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="navbtns"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.7832 0C19.3355 0 19.7832 0.447716 19.7832 1V21C19.7832 21.5523 19.3355 22 18.7832 22H16.9903C16.438 22 15.9903 21.5523 15.9903 21V12.5655L0.754078 21.5551C0.420767 21.7517 0 21.5115 0 21.1245L-1.90735e-06 0.866495C-1.90735e-06 0.481504 0.416843 0.240952 0.750175 0.433584L15.9903 9.24083V1C15.9903 0.447715 16.438 0 16.9903 0H18.7832Z"
                  fill="#C4C4C4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mobileBlurb">
        You made our time here special! This journey had tons of learning, fun
        and memories along the way. Here’s to a bright future!
      </div>
    </div>
  );
}
