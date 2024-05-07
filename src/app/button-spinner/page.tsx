"use client";
import Button from "@/components/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const SlotMachine: React.FC = () => {
  const targetNumber = 88;
  const [currentNumber, setCurrentNumber] = useState(10);
  const [previousDigits, setPreviousDigits] = useState<string[]>([]);

  useEffect(() => {
    setCurrentNumber(10); // Initialize with '10'
    setPreviousDigits(["1", "0"]); // Initial digits as strings
  }, []);
  const path = "M 0,100 Q 50,-50 100,100";

  const animateNumber = () => {
    let newNumber = currentNumber;
    const interval = setInterval(() => {
      newNumber += 1;
      if (newNumber <= targetNumber) {
        setNewNumber(newNumber);
      } else {
        clearInterval(interval);
      }
    }, 1200);
  };

  const setNewNumber = (newNumber: number) => {
    setCurrentNumber(newNumber);
    setPreviousDigits(newNumber.toString().padStart(2, "0").split(""));
  }

  const circlePath = {
    rotate: [0, 360],
    x: [0, 150, 0, -150, 0],
    y: [0, 0, -150, 0, 150, 0],
  };

  const transition = {
    duration: 4,
    ease: "linear",
    repeat: Infinity,
  };

  // return (
  //   <motion.div
  //     animate={circlePath}
  //     transition={transition}
  //     style={{
  //       width: 100,
  //       height: 100,
  //       backgroundColor: "red",
  //       borderRadius: "50%",
  //     }}
  //   />
  // );

  const currentDigits = currentNumber.toString().padStart(2, "0").split("");
  console.log(previousDigits);
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 text-white p-4 rounded"
        onClick={animateNumber}
      >
        Start
      </button>
      <Button onClick={() => {
        setNewNumber(currentNumber - 1);
      }}>-</Button>
      <div className="text-6xl font-bold flex w-20 h-20 bg-red-400 relative">
        <AnimatePresence initial={false}>
          {currentDigits.map((digit, index) => (
            <motion.div
              className={cn("absolute bg-fuchsia-300 overflow-hidden", {
                "left-0": index === 0,
                "left-12": index === 1,
              })}
              key={
                digit === previousDigits[index]
                  ? `${digit}-${index}`
                  : `${digit}-${index}-${new Date().getTime()}`
              } // Key changes only if digit changes
              initial={{ y: 200, opacity: 0 }}
              animate={{
                // y: 0,
                opacity: 1,
                // rotate: [0, 360],
                // x: [0, 150, 0, -150, 0],
                y: 0,
              }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ duration: 1 }}
              style={{
                translateX: "calc(-50% + 12px)", // Adjust according to your layout needs
                translateY: "calc(-50% + 50px)", // Adjust according to your layout needs
              }}
              custom={path}
            >
              {digit}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <Button onClick={() => {
        setNewNumber(currentNumber + 1);
      }}>+</Button>
    </div>
  );
};

export default SlotMachine;
