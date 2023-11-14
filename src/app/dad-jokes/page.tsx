"use client";
import Button from "@/components/Button";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const DadJokes = () => {
  const [joke, setJoke] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateJoke = async () => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    setIsLoading(true);

    const res = await fetch("https://icanhazdadjoke.com", config);

    const data = await res.json();

    setIsLoading(false);
    setJoke(data.joke);
  };

  useEffect(() => {
    generateJoke();
  }, []);

  return (
    <div className="bg-blue-700 flex w-screen h-screen justify-center items-center">
      <div className="bg-white px-8 py-8 w-[50vw] rounded-lg flex flex-col gap-8 items-center">
        <h2 className="text-center text-3xl text-zinc-700 font-semibold">
          Don&apos;t laugh callenge
        </h2>
        <p className="text-2xl text-center">{joke}</p>
        <div
          className="cursor-pointer px-8 py-4 bg-blue-700 rounded-3xl max-w-fit text-white"
          onClick={() => generateJoke()}
        >
          {isLoading ? (
            <Loader2 className="animate-spin w-6 h-6" />
          ) : (
            <p>Generate more</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DadJokes;
