import { CarouselFilm } from "@/components/carosel-film";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full px-10 py-10">
      <CarouselFilm />
    </section>
  );
}
