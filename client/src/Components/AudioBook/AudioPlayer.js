import React, { useState, useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const AudioPlayer = ({ bookData }) => {
  const { audio } = bookData; 
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 5);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 5);
    changeRange();
  };

  return (
    <div>
        <div>
      <audio
        ref={audioPlayer}
        src={audio}
        preload="metadata"
      ></audio>
      <div className="">
      <div>
          <div className="flex justify-center p-3 bg-base-300 ">
            {/* current time */}
            <div>
              {calculateTime(currentTime)}
            </div>

            {/* progress bar */}
            <div className="mx-3 w-full">
              <input
                type="range"
                defaultValue="0"
                className="w-full"
                ref={progressBar}
                onChange={changeRange}
              />
            </div>

            {/* duration */}
            <div>
              {duration && !isNaN(duration) && calculateTime(duration)}
            </div>
          </div>
        </div>
        <div className="flex gap-8 justify-center py-4">
          <button onClick={backThirty}>
            <span><i className="fa-solid fa-backward"></i></span>{" "}
          </button>
          <span>
            <button onClick={togglePlayPause} className='pl-[14px] pt-[1px] bg-[#005CC8] text-white btn-circle text-xl'>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </span>
          <button onClick={forwardThirty}>
            {" "}
            <span><i className="fa-solid fa-forward"></i></span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export { AudioPlayer };
