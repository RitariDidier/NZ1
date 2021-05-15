import React, { useState } from "react";
import "./Leaderboard.css";

const Leaderboard = () => {
  const [today, setToday] = useState("block");
  const [month, setMonth] = useState("none");
  const [year, setYear] = useState("none");

  const handleClick = (scope) => {
    switch (scope) {
      case "Today":
        setToday("block");
        setMonth("none");
        setYear("none");
        break;
      case "Month":
        setToday("none");
        setMonth("block");
        setYear("none");
        break;
      case "Year":
        setToday("none");
        setMonth("none");
        setYear("block");
        break;
      default:
        break;
    }
  };

  return (
    <div className="wrapper">
      <p className="leaderboard_title">LEADERBOARD</p>
      <div className="leaderboard_section">
        <div className="leaderboard_tabs">
          <div className="tabs">
            <ul>
              <li
                data-li="today"
                class={today === "block" && "active"}
                onClick={() => handleClick("Today")}
              >
                Today
              </li>
              <li
                class={month === "block" && "active"}
                data-li="Month"
                onClick={() => handleClick("Month")}
              >
                Month
              </li>
              <li
                data-li="year"
                class={year === "block" && "active"}
                onClick={() => handleClick("Year")}
              >
                Year
              </li>
            </ul>
          </div>
        </div>
        <div className="leaderboard_wrap">
          <div className="leaderboard_item today" style={{ display: today }}>
            <div className="leaderboard_mem">
              <div className="img">
                <img src="resources/profile_pic.png" alt="picture_1" />
              </div>
              <div className="name_bar">
                <p>
                  <span>1.</span> Charles John
                </p>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="points">195 points</div>
            </div>
            <div className="leaderboard_mem">
              <div className="img">
                <img src="resources/profile_pic.png" alt="picture_2" />
              </div>
              <div className="name_bar">
                <p>
                  <span>2.</span> Pedro Suarez
                </p>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="points">180 points</div>
            </div>
            <div className="leaderboard_mem">
              <div className="img">
                <img src="resources/profile_pic.png" alt="picture_3" />
              </div>
              <div className="name_bar">
                <p>
                  <span>3.</span> Mike Smith
                </p>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "60%" }}></div>
                </div>
              </div>
              <div className="points">155 points</div>
            </div>
            <div className="leaderboard_mem">
              <div className="img">
                <img src="resources/profile_pic.png" alt="picture_4" />
              </div>
              <div className="name_bar">
                <p>
                  <span>4.</span> Rosey{" "}
                </p>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "30%" }}></div>
                </div>
              </div>
              <div className="points">130 points</div>
            </div>
            <div className="leaderboard_mem">
              <div className="img">
                <img src="resources/profile_pic.png" alt="picture_5" />
              </div>
              <div className="name_bar">
                <p>
                  <span>5.</span> Scarlett Angela
                </p>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "20%" }}></div>
                </div>
              </div>
              <div className="points">110 points</div>
            </div>
          </div>
          <div className="leaderboard_item month" style={{ display: month }}>
            <div className="leaderboard_mem">
              <div className="img">
                <img src="resources/profile_pic.png" alt="picture_1" />
              </div>
              <div className="name_bar">
                <p>
                  <span>1.</span> Charles John
                </p>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="points">1500 points</div>
            </div>
            <div className="leaderboard_mem">
              <div className="img">
                <img src="resources/profile_pic.png" alt="picture_3" />
              </div>
              <div className="name_bar">
                <p>
                  <span>2.</span> Mike Smith
                </p>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className="points">1250 points</div>
            </div>
            <div className="leaderboard_mem">
              <div className="img">
                <img src="resources/profile_pic.png" alt="picture_2" />
              </div>
              <div className="name_bar">
                <p>
                  <span>3.</span> Pedro Suarez
                </p>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="points">980 points</div>
            </div>
            <div className="leaderboard_mem">
              <div className="img">
                <img src="resources/profile_pic.png" alt="picture_4" />
              </div>
              <div className="name_bar">
                <p>
                  <span>4.</span> Rosey
                </p>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "30%" }}></div>
                </div>
              </div>
              <div className="points">570 points</div>
            </div>
            <div className="leaderboard_mem">
              <div className="img">
                <img src="resources/profile_pic.png" alt="picture_5" />
              </div>
              <div className="name_bar">
                <p>
                  <span>5.</span> Scarlett Angela
                </p>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "20%" }}></div>
                </div>
              </div>
              <div className="points">470 points</div>
            </div>
          </div>
          <div className="leaderboard_item year" style={{ display: year }}>
            <div className="leaderboard_mem">
              <div className="img">
                <img src="resources/profile_pic.png" alt="picture_3" />
              </div>
              <div className="name_bar">
                <p>
                  <span>1.</span> Mike
                </p>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className="points">8900 points</div>
            </div>
            <div className="leaderboard_mem">
              <div className="img">
                <img src="resources/profile_pic.png" alt="picture_1" />
              </div>
              <div className="name_bar">
                <p>
                  <span>2.</span> Charles John
                </p>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "89%" }}></div>
                </div>
              </div>
              <div className="points">7980 points</div>
            </div>
            <div className="leaderboard_mem">
              <div className="img">
                <img src="resources/profile_pic.png" alt="picture_2" />
              </div>
              <div className="name_bar">
                <p>
                  <span>3.</span> Pedro Suarez
                </p>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "82%" }}></div>
                </div>
              </div>
              <div className="points">5980 points</div>
            </div>
            <div className="leaderboard_mem">
              <div className="img">
                <img src="resources/profile_pic.png" alt="picture_4" />
              </div>
              <div className="name_bar">
                <p>
                  <span>4.</span> Rosey
                </p>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "50%" }}></div>
                </div>
              </div>
              <div className="points">4800 points</div>
            </div>
            <div className="leaderboard_mem">
              <div className="img">
                <img src="resources/profile_pic.png" alt="picture_5" />
              </div>
              <div className="name_bar">
                <p>
                  <span>5.</span> Scarlett Angela
                </p>
                <div className="bar_wrap">
                  <div className="inner_bar" style={{ width: "40%" }}></div>
                </div>
              </div>
              <div className="points">3705 points</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
