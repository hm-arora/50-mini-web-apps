"use client";
import React, { useEffect, useRef } from "react";

const ScrollAnimation: React.FC = () => {
  const NUMBER_OF_BOXES = 8;
  const boxesRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const checkBoxes = () => {
      const triggerBottom = (window.innerHeight / 5) * 4;

      boxesRef.current.forEach((box, idx) => {
        const boxTop = box.getBoundingClientRect().top;

        const showClasses = ["opacity-100", "translate-x-0"];
        const hideClasses = ["opacity-0", "translate-x-full"];
        if (idx % 2 != 0) {
          hideClasses[1] = "-translate-x-full";
        }
        if (boxTop < triggerBottom) {
          box.classList.add(...showClasses);
          box.classList.remove(...hideClasses);
        } else {
          box.classList.remove(...showClasses);
          box.classList.add(...hideClasses);
        }
      });
    };

    checkBoxes();
    window.addEventListener("scroll", checkBoxes);
    return () => window.removeEventListener("scroll", checkBoxes);
  }, []);

  return (
    <div className="flex justify-center">
      <div>
        <h2 className="font-semibold text-4xl mt-4 text-center ">
          Scroll to see the animation
        </h2>
        <ul>
          {Array.from({ length: NUMBER_OF_BOXES }).map((_, idx) => (
            <li
              key={idx}
              ref={(el) => (boxesRef.current[idx] = el!)}
              className="opacity-0 translate-y-10 transition duration-300 ease-out"
            >
              <div className="bg-blue-700 px-16 py-24 m-4 text-center rounded-xl text-3xl text-white">
                Content
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScrollAnimation;
