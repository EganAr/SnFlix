"use client";

import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import PlayVideoModal from "./PlayVideoModal";
import { useState } from "react";

interface iAppProps {
  title: string;
  overview: string;
  youtubeUrl: string;
  age: number;
  duration: number;
  release: number;
  id: number;
}

export default function MovieButton({
  title,
  overview,
  youtubeUrl,
  age,
  duration,
  release,
}: iAppProps) {
    const [open , setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)} className="font-medium">
        <PlayCircle className="mr-2 h-6 w-8" /> Play
      </Button>
      <PlayVideoModal
        state={open}
        changeState={() => setOpen(!open)}
        title={title}
        overview={overview}
        youtubeUrl={youtubeUrl}
        age={age}
        duration={duration}
        release={release}
      />
    </>
  );
}
