"use client";

import { useState, useEffect } from "react";

interface TitleBoxProps {
  title: string;
  result: string;
}
const TitleBox = ({ title, result }: TitleBoxProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-zinc-600">{title}</h1>
      <div className="border border-zinc-500 py-4 px-8 bg-white rounded-md hover:bg-zinc-50 cursor-pointer">
        <h2 className="font-semibold">{result}</h2>
      </div>
    </div>
  );
};
const EventKeycodes = () => {
  const [eventKey, setEventKey] = useState<KeyboardEvent>();

  const keyboardListener = (event: KeyboardEvent) => {
    setEventKey(event);
  };

  useEffect(() => {
    window.addEventListener("keydown", keyboardListener);
    return () => window.removeEventListener("keydown", keyboardListener);
  }, []);
  return (
    <div className="bg-[#E1E1E1] w-screen h-screen flex items-center justify-center">
      {eventKey ? (
        <div className="flex gap-12">
          <TitleBox
            title="is shift pressed"
            result={eventKey.shiftKey.toString()}
          />
          <TitleBox
            title="is alt pressed"
            result={eventKey.altKey.toString()}
          />
          <TitleBox
            title="is meta pressed"
            result={eventKey.metaKey.toString()}
          />
          <TitleBox
            title="event.key"
            result={eventKey.key == " " ? "Space" : eventKey.key}
          />
          <TitleBox title="event.code" result={eventKey.code} />
        </div>
      ) : (
        <div>
          <div className="border border-zinc-500 py-4 px-8 bg-white rounded-md hover:bg-zinc-50 cursor-pointer">
            <h2 className="font-semibold">Press any key to get the keyCode</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventKeycodes;
