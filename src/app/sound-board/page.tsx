"use client";
import { useRef } from "react";

const SoundBoard = () => {
  const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
  const audioRefs = useRef<HTMLAudioElement[]>([]);

  const stopSongs = () => {
    audioRefs.current.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
  };

  const playSound = (idx: number) => {
    stopSongs();
    audioRefs.current[idx].play();
  };

  return (
    <div className="bg-[#9867D8] h-screen w-screen flex items-center justify-center">
      <div className="flex gap-8">
        {sounds.map((sound, idx) => {
          return (
            <div
              className="cursor-pointer bg-[#5F3694] px-12 py-6 rounded-lg text-white text-xl font-semibold hover:opacity-80"
              key={idx}
              onClick={() => playSound(idx)}
            >
              <audio
                src={`/sounds/${sound}.mp3`}
                ref={(el) => (audioRefs.current[idx] = el!)}
              />
              {sound}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SoundBoard;
