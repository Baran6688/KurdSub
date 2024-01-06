import { CarouselFilm } from "@/components/carosel-film";
import Translator from "@/components/translator";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex h-full flex-col gap-10 px-16 py-10">
      <CarouselFilm />
      <Translator />
    </section>
  );
}
