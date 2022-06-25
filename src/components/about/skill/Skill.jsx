import React from "react";
import "./skill.css";

function Skill(props) {
  const {result , skill} = props;
  let style = {strokeDasharray: 60*result}

  
  
  return (
    <>
      <div className="skill">
        <div className="outer">
          <div className="inner">
            <p className="skill">{skill}</p>
          </div>
        </div>
        <span className="html-circle-skill">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#e91e63" />
                <stop offset="100%" stopColor="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              id="html-circle"
              cx="80"
              cy="80"
              r="70"
              strokeLinecap="round"
              style={style}
            />
          </svg>
        </span>
      </div>
    </>
  );
}

export default Skill;
