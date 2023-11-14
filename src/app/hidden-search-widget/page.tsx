"use client";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useRef, useState } from "react";

const HiddenSearchWidget = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex w-screen h-screen items-center justify-center bg-gradient-to-r from-amber-500 to-pink-500">
      <div
        className={cn(
          "p-2 bg-white cursor-pointer flex items-center rounded-lg"
        )}
      >
        <input
          ref={inputRef}
          className={cn("w-0 h-8 outline-none transform duration-300 ease-in", {
            "w-[10rem]": isOpen,
          })}
          placeholder="Search..."
        />
        <Search
          onClick={() =>
            setIsOpen((prev) => {
              if (!prev) {
                inputRef.current?.focus();
              }
              return !prev;
            })
          }
        />
      </div>
    </div>
  );
};

export default HiddenSearchWidget;
