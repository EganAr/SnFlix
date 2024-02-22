"use client";

import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import { format } from "path";
import PlayVideoModal from "./PlayVideoModal";
import { useState } from "react";
import { addToWatchList, deleteWatchList } from "../action";
import { usePathname } from "next/navigation";

interface iAppProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
  age: number;
  duration: number;
  release: number;
}

export default function MovieCard({
  title,
  overview,
  movieId,
  watchList,
  watchListId,
  youtubeUrl,
  age,
  duration,
  release,
}: iAppProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname()
  return (
    <div className="">
      <button onClick={() => setOpen(true)}>
        <PlayCircle className="w-12 h-12 text-white" />
      </button>

      <div className="right-3 top-3 absolute z-10">
        {watchList ? (
          <form action={deleteWatchList}>
            <input type="hidden" name="watchListId" value={watchListId} />
            <input type="hidden" name="pathname" value={pathname} />
            <Button variant="outline" size={"icon"}>
              <Heart className="h-4 w-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form action={addToWatchList}>
            <input type="hidden" name="movieId" value={movieId} />
            <input type="hidden" name="pathname" value={pathname} />
            <Button variant="outline" size={"icon"}>
              <Heart className="h-4 w-4" />
            </Button>
          </form>
        )}
      </div>

      <div className="p-3 absolute bottom-0 left-0">
        <div className="flex gap-x-2 items-center">
          <h1 className="font-bold text-md line-clamp-1 text-white">{title}</h1>
          <p className="rounded p-0.5 text-gray-400">{age}+</p>
        </div>

        <div className="flex gap-4 items-center text-gray-400 text-sm">
          <p>{release}</p>
          <p>{duration} hr</p>
        </div>
      </div>

      <PlayVideoModal
        title={title}
        youtubeUrl={youtubeUrl}
        overview={overview}
        state={open}
        changeState={setOpen}
        release={release}
        age={age}
        duration={duration}
      />
    </div>
  );
}
