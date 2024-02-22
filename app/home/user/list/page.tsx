import MovieCard from "@/app/component/MovieCard";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import Image from "next/image";

async function getData(userId: string) {
  const data = await prisma.watchList.findMany({
    where: {
      userId: userId,
    },
    select: {
      Movie: {
        select: {
          title: true,
          age: true,
          duration: true,
          imageString: true,
          overview: true,
          release: true,
          id: true,
          WatchList: true,
          youtubeString: true,
        },
      },
    },
  });
  return data;
}

export default async function WatchList() {
  const session = await getServerSession(authOptions);
  const data = await getData(session?.user?.email as string);
  return (
    <>
      <h1 className="text-2xl text-foreground font-bold mt-10 px-5 sm:px-0">
        Your WatchList
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
        {data?.map((movie: any) => (
          <div key={movie.Movie.id} className="relative h-60">
            <Image
              src={movie.Movie.imageString}
              alt={movie.Movie.title}
              width={1000}
              height={1000}
              className="rounded-sm absolute h-full w-full object-cover"
            />

            <div className="h-60 relative z-20 w-full transform transition-all duration-500 hover:scale-125 opacity-0 hover:opacity-100">
              <div className="bg-gradient-to-b from-transparent via-black/50 to-black/70 h-full w-full rounded-lg flex items-center justify-center">
                <Image
                  src={movie.Movie.imageString}
                  alt={movie.Movie.title}
                  width={1000}
                  height={1000}
                  className="rounded-lg absolute -z-10 h-full w-full object-cover"
                />
                <MovieCard
                  movieId={movie.Movie.id}
                  title={movie.Movie.title}
                  overview={movie.Movie.overview}
                  watchListId={movie.Movie.WatchList[0]?.id}
                  watchList={movie.Movie.WatchList.length > 0 ? true : false}
                  youtubeUrl={movie.Movie.youtubeString}
                  key={movie.Movie.id}
                  age={movie.Movie.age}
                  duration={movie.Movie.duration}
                  release={movie.Movie.release}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
