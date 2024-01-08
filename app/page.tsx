import { CarouselFilm } from "@/components/carosel-film";
import Reklam from "@/components/reklam";
import Translator from "@/components/translator";
import Movies from "@/components/movies";
import Divider from "@/components/divider";
import Comments from "@/components/comments";
import Series from "@/components/series";
import MovieSeries from "@/components/movieSeries";
export default function Home() {
  return (
    <main className="flex h-full w-full max-w-[1920px] flex-col gap-10 px-20 py-10">
      <CarouselFilm />
      <Translator />
      <Reklam />
      <Movies />
      <Divider />
      <Comments />
      <Series />
      <Divider />
      <Reklam />
      <MovieSeries />
    </main>
  );
}
