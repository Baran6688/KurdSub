import { CarouselFilm } from "@/components/carosel-film";
import Reklam from "@/components/reklam";
import Translator from "@/components/translator";
import Movies from "@/components/movies";
import Divider from "@/components/divider";
import Comments from "@/components/comments";
export default function Home() {
  return (
    <section className="flex h-full max-w-[1720px] flex-col gap-10 py-10">
      <CarouselFilm />
      <Translator />
      <Reklam />
      <Movies />
      <Divider />
      <Comments />
    </section>
  );
}
