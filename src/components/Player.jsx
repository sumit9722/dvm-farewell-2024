import "./Player.css";
import { useRef } from "react";

export default function Player(navFunc) {
  const slideRef = useRef(null);

  function handleSeekbar(e) {
    navFunc.time((e.target.value / 100) * navFunc.dur);
  }

  const beforeStyle = {
    transform: `scaleX(${(navFunc.currTime / navFunc.dur)<=1?(navFunc.currTime / navFunc.dur):1})`,
  };

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  }

  return (
    <div className="playerDiv">
      <div className="controls">
        <div className="shuffle">
          <svg
            width="21"
            height="17.25"
            viewBox="0 0 28 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.3389 18.73C21.3865 18.73 21.4298 18.7547 21.4471 18.8C21.4688 18.8412 21.4561 18.8905 21.4214 18.9235C21.0622 19.2651 20.3434 19.9483 20.3434 19.9483C19.85 20.4175 19.85 21.1789 20.3434 21.6481C20.8368 22.1173 21.6334 22.1173 22.1268 21.6481C22.1268 21.6481 25.4033 18.5366 26.2733 17.7052C26.3295 17.6517 26.3598 17.5776 26.3598 17.5035C26.3598 17.4294 26.3295 17.3553 26.2733 17.3018C25.4033 16.4704 22.1268 13.3589 22.1268 13.3589C21.6334 12.8897 20.8368 12.8897 20.3434 13.3589C19.85 13.8281 19.85 14.5895 20.3434 15.0587C20.3434 15.0587 21.1009 15.779 21.4732 16.1329C21.5078 16.1658 21.5208 16.2152 21.4992 16.2564C21.4819 16.3017 21.4386 16.3264 21.391 16.3264C20.7331 16.3264 19.1923 16.3222 19.1923 16.3222C18.6123 16.3222 18.032 16.0547 17.4217 15.6637C16.647 15.1616 15.8636 14.4537 15.0672 13.6306C15.0672 13.6306 14.5998 13.149 14.3574 12.8979C14.3184 12.8568 14.2665 12.8321 14.2059 12.8321C14.1496 12.828 14.0933 12.8485 14.0544 12.8855C13.7038 13.1942 12.864 13.9269 12.5134 14.2356C12.4701 14.2726 12.4441 14.322 12.4441 14.3755C12.4398 14.429 12.4616 14.4825 12.5006 14.5237C12.743 14.7747 13.2104 15.2563 13.2104 15.2563C15.2404 17.3512 17.3094 18.7218 19.1879 18.7218C19.1879 18.7218 20.694 18.7259 21.3389 18.73ZM21.4214 3.07762C21.4561 3.11055 21.4688 3.15582 21.4471 3.2011C21.4298 3.24226 21.3865 3.27103 21.3389 3.27103C20.694 3.27103 19.1879 3.27513 19.1879 3.27513C17.8678 3.27513 16.4611 3.91313 15.0587 5.03263C13.2971 6.44024 11.4702 8.63396 9.65229 10.8359C7.94691 12.8938 6.25478 14.964 4.60567 16.2811C3.73566 16.9766 2.91733 17.4788 2.09926 17.4788C2.09926 17.4788 0.74881 17.4788 0.216419 17.4788C0.0952244 17.4788 0 17.5693 0 17.6804C0 18.1373 0 19.2198 0 19.6725C0 19.7301 0.0219124 19.7795 0.0608678 19.8207C0.104152 19.8577 0.155822 19.8783 0.216419 19.8783C0.575675 19.8783 1.26402 19.8783 1.26402 19.8783H2.09926C3.42375 19.8783 4.82641 19.2445 6.22881 18.1209C7.99046 16.7133 9.81704 14.5196 11.6393 12.3176C13.3403 10.2597 15.0368 8.18942 16.6859 6.87236C17.5559 6.17679 18.3699 5.67468 19.1879 5.67468H19.1923C19.1923 5.67468 20.7331 5.67058 21.391 5.67058C21.4386 5.67058 21.4819 5.69936 21.4992 5.74052C21.5208 5.78168 21.5078 5.83106 21.4732 5.86399C21.1009 6.22207 20.3434 6.94238 20.3434 6.94238C19.85 7.41158 19.85 8.16886 20.3434 8.63806C20.8368 9.10726 21.6334 9.10726 22.1268 8.63806C22.1268 8.63806 25.4033 5.52648 26.2733 4.69509C26.3295 4.64158 26.3598 4.57168 26.3598 4.49348C26.3598 4.41939 26.3295 4.34529 26.2733 4.29179C25.4033 3.46451 22.1268 0.348814 22.1268 0.348814C21.6334 -0.116271 20.8368 -0.116271 20.3434 0.348814C19.85 0.818016 19.85 1.57947 20.3434 2.04867C20.3434 2.04867 21.0622 2.7319 21.4214 3.07762ZM1.26402 4.52225H2.09926C2.82643 4.52225 3.5538 4.92557 4.31993 5.49767C5.28948 6.21793 6.27209 7.22225 7.26762 8.34175C7.26762 8.34175 7.70885 8.83977 7.94258 9.10318C7.97721 9.14433 8.03374 9.169 8.09001 9.17311C8.14628 9.18134 8.20228 9.16078 8.24556 9.12786C8.60915 8.83563 9.47915 8.1359 9.84707 7.84368C9.89035 7.80663 9.91646 7.75731 9.92078 7.7038C9.92511 7.6503 9.90773 7.59673 9.8731 7.55557C9.63937 7.29216 9.19375 6.79415 9.19375 6.79415C7.83897 5.26718 6.48838 3.94603 5.18121 3.12698C4.13807 2.47257 3.09912 2.11861 2.09926 2.11861H0V4.52225H1.26402Z"
              fill="#C4C4C4"
            />
          </svg>
        </div>
        <div className="previous">
          <button onClick={navFunc.prev}>
            <svg
              className="navbtnsvg"
              width="15"
              height="16.5"
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
          <button onClick={navFunc.pause}>
            {navFunc.isPause ? (
              <>
                <svg
                  width="48"
                  height="48"
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
                  width="48"
                  height="48"
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
        <div className="next" onClick={navFunc.next}>
          <button>
            <svg
              className="navbtnsvg"
              width="15"
              height="16.5"
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
        <div className="loop">
          <svg
            width="19.5"
            height="17.25"
            viewBox="0 0 26 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.2294 17.4395L15.6156 16.1174C16.1048 15.6522 16.1048 14.9015 15.6156 14.4363C15.1307 13.9712 14.3367 13.9712 13.8475 14.4363L9.52625 18.5452L13.8475 22.6542C14.3367 23.1153 15.1307 23.1153 15.6156 22.6542C16.1048 22.189 16.1048 21.4341 15.6156 20.969L14.2294 19.6511H19.31C22.6012 19.6511 25.2746 17.1049 25.2746 13.9752V5.6717C25.2746 2.54206 22.6012 0 19.31 0H5.96899C2.67342 0 0 2.54206 0 5.6717V13.9752C0 17.1049 2.67342 19.6511 5.96899 19.6511H7.1534V17.4395H5.96899C3.95646 17.4395 2.32591 15.8848 2.32591 13.9752V5.6717C2.32591 3.76209 3.95646 2.20754 5.96899 2.20754H19.31C21.3182 2.20754 22.9534 3.76209 22.9534 5.6717V13.9752C22.9534 15.8848 21.3182 17.4395 19.31 17.4395H14.2294Z"
              fill="#C4C4C4"
            />
          </svg>
        </div>
      </div>
      <div className="timeline">
        <div className="time currTime">{formatTime(navFunc.currTime)}</div>
        <div className="timebar">
          <div style={beforeStyle} className="before"></div>
          <input
            ref={slideRef}
            type="range"
            value={`${(navFunc.currTime / navFunc.dur) * 100}`}
            min="0"
            max="100"
            className="seekbar"
            onChange={handleSeekbar}
          />
        </div>
        <div className="time finishtime">{formatTime(navFunc.dur)}</div>
      </div>
    </div>
  );
}
