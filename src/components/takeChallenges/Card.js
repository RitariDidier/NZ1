import React from "react";
import PropTypes from "prop-types";
const Card = ({ style, number }) => {
  return (
    <>
      <div className={`card ${style}`}>
        <div className="fields">
          <div className="field description">
            <h3>Assigned Challenge #{number}</h3>
            <p>Some Description about this challenge</p>
            <p className="pDate">Complete by 10th May, 2022</p>
          </div>
          <div className="field">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-car"
              // width="100"
              // height="100"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              // stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
              <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
            </svg> */}
            <svg
              version="1.0"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 450 300"
              xmlSpace="preserve"
            >
              <g>
                <path
                  className="path1"
                  d="M129.196,206.148c0.412-1.75,0.825-3.501,1.237-5.251c1.876-7.912,3.84-15.804,5.804-23.695
                      c1.964-7.89,3.949-15.778,6-23.646c0.034-0.134,0.072-0.266,0.106-0.4L98.962,1.807H70.717l58.297,205.109
                      C129.077,206.66,129.129,206.403,129.196,206.148z"
                />
                <path
                  className="path2"
                  d="M192.087,1.807L150.177,166.08c-0.192,0.977-0.404,1.95-0.658,2.915c-0.412,1.75-0.825,3.501-1.237,5.251
                      c-1.876,7.912-3.84,15.804-5.804,23.695c-1.964,7.89-3.949,15.778-6,23.646c-0.509,2.002-1.046,3.996-1.592,5.988l14.339,50.448
                      L220.242,1.807H192.087z"
                />
                <polygon
                  className="polygon1"
                  points="31.915,1.807 116.197,297.825 144.441,297.825 60.34,1.807 	"
                />
                <polygon
                  className="polygon2"
                  points="390.521,1.807 306.419,297.825 334.484,297.825 418.766,1.807 	"
                />
                <path
                  className="path3"
                  d="M290.095,186.196c2.101-7.855,4.223-15.707,6.412-23.538c0.562-2.058,1.151-4.109,1.752-6.155L258.954,1.807h-28.515
                      l53.491,207.784C285.929,201.779,288.012,193.987,290.095,186.196z"
                />
                <path
                  className="path4"
                  d="M351.719,1.807l-49.087,171.888c-1.991,7.777-4.063,15.533-6.137,23.287c-2.101,7.855-4.223,15.707-6.412,23.538
                      c0.26-0.93-0.875,2.903-1.789,6.022l13.253,51.481L379.512,1.807H351.719z"
                />
                <path
                  className="path5"
                  d="M243.148,91.216c-2.222,9.366-5.969,24.482-6.385,26.153c-0.495,1.987-5.349,21.844-7.586,29.957l39.161,150.908h28.064
                      L243.148,91.216z"
                />
                <path
                  className="path6"
                  d="M224.86,130.689c0.163-0.779,0.346-1.555,0.55-2.327c0.412-1.75,0.825-3.501,1.237-5.251
                      c1.876-7.912,3.84-15.804,5.804-23.695c1.964-7.89,3.949-15.778,6-23.646c0.118-0.463,0.248-0.922,0.368-1.384l-13.524-52.572
                      l-71.378,276.011h28.064l42.863-167.199L224.86,130.689z"
                />
              </g>
            </svg>
          </div>
          <div className="field">
            <button className="button">Take Challenge</button>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  style: PropTypes.string,
  number: PropTypes.string,
};
export default Card;
