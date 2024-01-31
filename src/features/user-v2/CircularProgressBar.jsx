import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function CircularProgressBarItem({ width, height, percent, text }) {
  return (
    <div style={{ width: width, height: height }}>
      <CircularProgressbar
        strokeWidth={15}
        // circleRatio={0.55}
        value={percent}
        text={`${percent}% ${text ? text : ""}`}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 1,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",

          // Text size
          textSize: "12px",
          // Colors
          pathColor: "#0D5152",
          textColor: "#777986",
          trailColor: "#FF6321",
          backgroundColor: "#3e98c7",
        })}
      />
    </div>
  );
}

export default CircularProgressBarItem;
