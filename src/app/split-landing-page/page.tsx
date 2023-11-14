"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const SplitLandingPage = () => {
  const [hoverState, setHoverState] = useState<string | undefined>();
  return (
    <div className="relative flex w-screen h-screen justify-stretch">
      <div
        className={cn(
          `relative flex-1 transition-all duration-1000 bg-no-repeat bg-cover flex items-center justify-center ease-in-out`,
          {
            "flex-[3]": hoverState == "left",
          }
        )}
        onMouseEnter={() => setHoverState("left")}
        onMouseLeave={() => setHoverState(undefined)}
        style={{ backgroundImage: `url(ps.jpg)` }}
      >
        <div className="absolute inset-0 bg-[#5754ec] opacity-70" />
        <h1 className="text-5xl font-semibold text-white z-10 px-4">
          Play station
        </h1>
      </div>
      <div
        className={cn(
          `relative flex-1 transition-all duration-1000 bg-no-repeat bg-cover flex items-center justify-center ease-in-out`,
          {
            "flex-[3]": hoverState == "right",
          }
        )}
        onMouseEnter={() => setHoverState("right")}
        onMouseLeave={() => setHoverState(undefined)}
        style={{ backgroundImage: `url(xbox.jpg)` }}
      >
        <h1 className="text-5xl font-semibold text-white z-10 px-4">Xbox</h1>
        <div className="absolute inset-0 bg-[#2b2b2b] opacity-70" />
      </div>
    </div>
  );
};

export default SplitLandingPage;
