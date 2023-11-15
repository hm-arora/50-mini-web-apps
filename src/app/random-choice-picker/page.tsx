"use client";
import { ChangeEvent, useRef, useState } from "react";
import { KeyboardEvent } from "react";

const RandomChoicePicker = () => {
  const [choices, setChoices] = useState<string[]>(["hello", "pound"]);

  const tagRefs = useRef<HTMLSpanElement[]>([]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    const arr: string[] = [];
    if (value.length > 0) {
      const values = value.split(",");
      values.forEach((value) => {
        if (value.trim().length > 0) {
          arr.push(value);
        }
      });
    }
    setChoices(arr);
  };

  const handleKeyboardEvent = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      randomSelect();
    }
  };

  const pickRandomTag = () => {
    return tagRefs.current[Math.floor(Math.random() * tagRefs.current.length)];
  };

  const randomSelect = () => {
    const times = 30;

    const interval = setInterval(() => {
      const randomTag = pickRandomTag();

      if (randomTag !== undefined) {
        highlightTag(randomTag);

        setTimeout(() => {
          unHighlightTag(randomTag);
        }, 100);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);
      }, 100);
    }, times * 100);
  };

  const highlightTag = (tag: HTMLSpanElement) => {
    const classes = ["bg-red-500", "text-white"];
    tag.classList.add(...classes);
  };

  const unHighlightTag = (tag: HTMLSpanElement) => {
    const classes = ["bg-red-500", "text-white"];
    tag.classList.remove(...classes);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-stretch gap-4 px-8 py-2 w-[40vw]">
        <h3 className="text-center text-xl">
          Enter all of the choices divided by a comma (&apos;,&apos;)
          <p>Press enter when you&apos;re done</p>
        </h3>
        <input
          className="px-2 py-4"
          placeholder="Enter choices here"
          onChange={onInputChange}
          onKeyDown={handleKeyboardEvent}
        />
        {choices.length > 0 && (
          <div className="">
            {choices.map((choice, idx) => {
              return (
                <span
                  ref={(el) => (tagRefs.current[idx] = el!)}
                  className="px-4 py-1 mr-2 mb-4 rounded-md inline-block border"
                  key={idx}
                >
                  {choice}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomChoicePicker;
