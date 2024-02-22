import MovieVideo from "../component/MovieVideo";
import RecentlyAdded from "../component/RecentlyAdded";

export default function HomePage() {
  return (
    <div className="p-5 lg:p-0">
      <MovieVideo />
      <h1 className="text-2xl text-foreground">recently added</h1>
      <RecentlyAdded />
    </div>
  );
}
