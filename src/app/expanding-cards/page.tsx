"use client";
import HomeBack from "@/components/HomeBack";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ExpandingCard = () => {
  const urls = [
    "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
    "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  ];

  const titles = [
    "Explore The World",
    "Wild Forest",
    "Sunny Beach",
    "City on Winter",
    "Mountains - Clouds",
  ];

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="flex flex-col gap-2 items-stretch p-2 sm:p-4">
      <HomeBack />
      <div className="flex max-h-screen items-center justify-center overflow-hidden">
        {urls.map((url, index) => {
          const hideOnSmall = index > 2 ? "hidden sm:block" : "block";
          return (
            <div
              onClick={() => setSelectedIndex(index)}
              key={index}
              className={cn(
                "h-[80vh] m-2.5 rounded-[50px] cursor-pointer transition-all duration-700 ease-in bg-no-repeat relative",
                {
                  "flex-[0.5]": selectedIndex != index,
                  "flex-[5]": selectedIndex === index,
                },
                hideOnSmall
              )}
              style={{ backgroundImage: `url(${url})` }}
            >
              <h3
                className={cn(
                  "text-white font-semibold text-2xl absolute bottom-4 left-4 opacity-0",
                  {
                    "transition-all duration-300 delay-500 opacity-100":
                      selectedIndex === index,
                  }
                )}
              >
                {" "}
                {titles[index]}{" "}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpandingCard;
