import { useState } from "react";
import "./Hexagon.css";
import harp0top from "../assets/audio/harp_audio/harp_0_top.mp3";
import harp1bottom from "../assets/audio/harp_audio/harp_1_bottom.mp3";
import harp1top from "../assets/audio/harp_audio/harp_1_top.mp3";
import harp2bottom from "../assets/audio/harp_audio/harp_2_bottom.mp3";
import harp2top from "../assets/audio/harp_audio/harp_2_top.mp3";
import harp3bottom from "../assets/audio/harp_audio/harp_3_bottom.mp3";
import harp3top from "../assets/audio/harp_audio/harp_3_top.mp3";
import harp4bottom from "../assets/audio/harp_audio/harp_4_bottom.mp3";
import harp4top from "../assets/audio/harp_audio/harp_4_top.mp3";
import harp5bottom from "../assets/audio/harp_audio/harp_5_bottom.mp3";
import harp5top from "../assets/audio/harp_audio/harp_5_top.mp3";

const AUDIO_SOUNDS = {
  0: harp0top,
  1: harp1top,
  2: harp1top,
  3: harp2top,
  4: harp2top,
  5: harp3top,
  6: harp3top,
  7: harp4top,
  8: harp4top,
  9: harp5top,
  10: harp5top,
};

// TODO: fix the error "user must interact before play()"

const playAudio = (row: number) => {
  const audioContext = new AudioContext();
  const sound = AUDIO_SOUNDS[row];
  const audio = new Audio(sound);

  audio.play();

  return null;
};

// is there a way to indicate that a prop may sometimes not be defined?
function Hexagon({
  fill,
  stroke,
  size,
  row,
  column,
}: {
  fill: string;
  stroke: string;
  size: number;
  row: number; // this is the row adjustment so that we can create a honeycomb pattern
  column: number; // this is the column adjustment so that we can create a honeycomb pattern
}) {
  const [isHovered, setIsHovered] = useState(false);

  // set a default width and height if one is not given
  // width and height should be the same value
  const width = size || 100;
  const height = size || 100;
  const fillColor = "transparent";
  const outlineColor = isHovered ? fill : "#fff";

  return (
    <svg
      style={{
        position: "absolute",
        top: `${row * 90}px`,
        left: `${column * 108 + ((row * 54) % 108)}px`,
      }}
      className="hex-harp"
      onMouseEnter={() => {
        setIsHovered(true);
        playAudio(row);
      }}
      onMouseLeave={() => setIsHovered(false)}
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="svg-light-body"
        d="M14 4.21281L7.5 0.421143L1 4.21281V10.7872L7.5 14.5788L14 10.7872V4.21281Z"
        fill={fillColor}
        stroke={outlineColor}
      />
    </svg>
  );
}

export default Hexagon;
