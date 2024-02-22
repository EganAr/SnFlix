import { Button } from "@/components/ui/button";
import prisma from "../utils/db";
import MovieButton from "./MovieButton";

async function getData() {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      id: true,
      age: true,
    },
  });
  return data;
}

export default async function MovieVideo() {
  const data = await getData();

  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
      <video
        poster={data?.imageString}
        autoPlay
        muted
        loop
        src={data?.videoSource}
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-50"
      ></video>

      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          {data?.title}
        </h1>
        <p className="mt-5 text-white line-clamp-3">{data?.overview}</p>
        <div className="flex mt-4">
          <MovieButton
            title={data?.title as string}
            overview={data?.overview as string}
            youtubeUrl={data?.videoSource as string}
            age={data?.age as number}
            duration={data?.duration as number}
            release={data?.release as number}
            id={data?.id as number}
          />
        </div>
      </div>
    </div>
  );
}
