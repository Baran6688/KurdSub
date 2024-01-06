import { CarouselFilm } from "@/components/carosel-film";
import Translator from "@/components/translator";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex h-full max-w-[1720px] flex-col gap-10 px-20 py-10">
      <CarouselFilm />
      <Translator />
    </section>
  );
}
