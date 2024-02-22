import MovieCard from "@/app/component/MovieCard";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import Image from "next/image";

async function getData(userId: string,category: string) {
  switch (category) {
    case "shows": {
      const data: any = await prisma.movie.findMany({
        where: {
          category: "show",
        },
        select: {
          title: true,
          overview: true,
          youtubeString: true,
          imageString: true,
          release: true,
          id: true,
          age: true,
          duration: true,
          WatchList: {
            where: {
              userId: userId,
            },
          },
        },
      });
      return data;
    }
    default: {
      throw new Error();
    }
    case "recently": {
      const data: any = await prisma.movie.findMany({
        where: {
          category: "recent",
        },
        select: {
          title: true,
          overview: true,
          youtubeString: true,
          imageString: true,
          release: true,
          id: true,
          age: true,
          duration: true,
          WatchList: {
            where: {
              userId: userId,
            },
          },
        },
      });
      return data;
    }
    case "movies": {
      const data: any = await prisma.movie.findMany({
        where: {
          category: "movie",
        },
        select: {
          title: true,
          overview: true,
          youtubeString: true,
          imageString: true,
          release: true,
          id: true,
          age: true,
          duration: true,
          WatchList: {
            where: {
              userId: userId,
            },
          },
        },
      });
      return data;
    }
  }
}

export default async function CategoryPage({
  params,
}: {
  params: { genre: string };
}) {
  const session = await getServerSession(authOptions);
  const data = await getData(session?.user?.email as string ,params.genre as string);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
      {data?.map((movie: any) => (
        <div key={movie.id} className="relative h-60">
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
