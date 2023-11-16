"use client";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface QuestionBlockProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqCollapse = () => {
  const QuestionBlock = ({
    question,
    answer,
    isOpen,
    onClick,
  }: QuestionBlockProps) => {
    return (
      <div
        className={cn(
          "px-8 py-6 border rounded-lg mt-5 bg-white flex justify-between gap-8",
          {
            shadow: isOpen,
          }
        )}
      >
        <div>
          <h1 className="font-semibold text-xl">{question}</h1>
          {isOpen && <h1 className="mt-2">{answer}</h1>}
        </div>
        {isOpen && <ChevronUp onClick={() => onClick()} />}
        {!isOpen && <ChevronDown onClick={() => onClick()} />}
      </div>
    );
  };

  const ques = [
    "Why shouldn't we trust atoms?",
    "What do you call someone with no body and no nose?",
    "What's the object-oriented way to become wealthy?",
    "How many tickles does it take to tickle an octopus?",
    "What is: 1 + 1?",
  ];

  const ans = [
    "They make up everything",
    "Nobody knows.",
    "Inheritance",
    "Ten-tickles",
    "Depends on who are you asking.",
  ];

  const [isOpenArr, setIsOpenArr] = useState<boolean[]>(
    new Array(5).fill(false)
  );

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div>
        <h2 className="text-center font-semibold text-3xl">Frequently Asked Questions</h2>
        <div className="mt-4 flex flex-col ">
          {ques.map((_, idx) => {
            return (
              <QuestionBlock
                question={ques[idx]}
                answer={ans[idx]}
                isOpen={isOpenArr[idx]}
                onClick={() =>
                  setIsOpenArr((prevIsOpenArr) => {
                    const newIsOpenArr = [...prevIsOpenArr];
                    newIsOpenArr[idx] = !newIsOpenArr[idx]; // Toggle the boolean value at the specified index
                    return newIsOpenArr;
                  })
                }
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqCollapse;
