import { useState } from "react";
import "./Harp.css";
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
  1: harp1bottom,
  2: harp2bottom,
  3: harp3bottom,
  4: harp4bottom,
  5: harp5bottom,
};

const playAudio = (index: string) => {
  const audioContext = new AudioContext();
  const sound = AUDIO_SOUNDS[index];
  const audio = new Audio(sound);

  audio.play();

  return null;
};

function Hex({ index, color }: { index: number; color: string }) {
  const [isHovered, setIsHovered] = useState(false);

  const fill = isHovered ? color : "transparent";
  const stroke = isHovered ? color : "#fff";

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
        playAudio(index);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        className="hex-harp"
        width="200px"
        height="200px"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="svg-light-body"
          d="M14 4.21281L7.5 0.421143L1 4.21281V10.7872L7.5 14.5788L14 10.7872V4.21281Z"
          fill={fill}
          stroke={color}
        />
      </svg>
    </div>
  );
}

function Harp() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Hex index={1} color="#BBDBFE" />
      <Hex index={2} color="#BEBCFC" />
      <Hex index={3} color="#C09CFA" />
      <Hex index={4} color="#C37DF8" />
      <Hex index={5} color="#C55DF6" />
    </div>
  );
}

export default Harp;
