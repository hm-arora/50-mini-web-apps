"use client";
import Button from "@/components/Button";
import HomeBack from "@/components/HomeBack";
import { cn } from "@/lib/utils";
import { useState } from "react";

const ProgressSteps = () => {
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const MAX_COUNT = 4;
  return (
    <div className="flex flex-col gap-2 p-2 sm:p-4 h-screen">
      <HomeBack />
      <div className="flex flex-grow items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center gap-8">
          <div className="flex">
            {Array.from({ length: MAX_COUNT }).map((_, idx) => {
              return (
                <div key={idx} className="flex items-center">
                  <div
                    className={cn(
                      "border-4 h-8 w-8 rounded-full text-center transition-all duration-300 delay-100",
                      {
                        "border-blue-400": idx <= selectedCount,
                      }
                    )}
                  >
                    {idx + 1}
                  </div>
                  {idx != MAX_COUNT - 1 && (
                    <div
                      className={cn(
                        "w-20 border-2 transition-all duration-800 ease-in ",
                        {
                          "border-blue-400": idx <= selectedCount - 1,
                        }
                      )}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex gap-4">
            <Button
              isDisabled={selectedCount == 0}
              onClick={() =>
                setSelectedCount((prev) => {
                  if (prev > 0) return prev - 1;
                  return prev;
                })
              }
            >
              Prev
            </Button>
            <Button
              isDisabled={selectedCount == MAX_COUNT - 1}
              onClick={() =>
                setSelectedCount((prev) => {
                  if (prev == MAX_COUNT - 1) return prev;
                  return prev + 1;
                })
              }
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
