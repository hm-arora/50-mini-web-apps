import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const HomeBack = () => {
  return (
    <div className="flex">
      <Link
        href="/"
        className="flex gap-1 mt-6 items-center rounded-md px-2 py-1 hover:bg-zinc-200"
      >
        <ArrowLeft className="h-6 w-6" />
        <h2 className="text-zinc-700 text-xl">Home</h2>
      </Link>
    </div>
  );
};

export default HomeBack;
