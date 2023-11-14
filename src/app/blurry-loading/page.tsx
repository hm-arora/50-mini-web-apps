"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const BlurryLoading = () => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((currentCounter) => {
        if (currentCounter > 99) {
          clearInterval(interval);
          return currentCounter;
        }
        return currentCounter + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const scale = (
    num: number,
    in_min: number,
    in_max: number,
    out_min: number,
    out_max: number
  ) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  return (
    <div className="w-screen h-screen relative">
      <Image
        src="https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80"
        alt="blurry image"
        quality={100}
        layout="fill"
        objectFit="cover"
        style={{ filter: `blur(${scale(counter, 0, 100, 30, 0)}px)` }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3
          style={{ opacity: scale(counter, 0, 100, 1, 0) }}
          className={`text-4xl font-bold text-white`}
        >
          {counter}%
        </h3>
      </div>
    </div>
  );
};

export default BlurryLoading;
