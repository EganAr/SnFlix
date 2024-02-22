import Image from "next/image";
import prisma from "../utils/db";
import MovieCard from "./MovieCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";

async function getData(userId: string) {
  const data = await prisma.movie.findMany({
    select: {
      title: true,
      overview: true,
      youtubeString: true,
      imageString: true,
      release: true,
      id: true,
      WatchList: {
        where: {
          userId: userId
        }
      },
      age: true,
      duration: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });

  return data;
}

export default async function RecentlyAdded() {
  const session = await getServerSession(authOptions)
  const data = await getData(session?.user?.email as string);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
      {data.map((movie) => (
        <div key={movie.id} className="relative h-48">
          <Image
            src={movie.imageString}
            alt={movie.title}
            width={1000}
            height={1000}
            className="rounded-sm absolute h-full w-full object-cover"
          />

          <div className="h-60 relative z-20 w-full transform transition-all duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black/70 h-full w-full rounded-lg flex items-center justify-center">
              <Image
                src={movie.imageString}
                alt={movie.title}
                width={1000}
                height={1000}
                className="rounded-lg absolute -z-10 h-full w-full object-cover"
              />
              <MovieCard
                movieId={movie.id}
                title={movie.title}
                overview={movie.overview}
                watchListId={movie.WatchList[0]?.id}
                watchList={movie.WatchList.length > 0 ? true : false}
                youtubeUrl={movie.youtubeString}
                key={movie.id}
                age={movie.age}
                duration={movie.duration}
                release={movie.release}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
