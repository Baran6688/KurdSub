"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa";
import { sliderFilms } from "@/data";

export function CarouselFilm() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col items-center justify-center gap-10 py-10">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {sliderFilms.map((film, index) => (
            <CarouselItem key={index}>
              <div className="relative mx-0.5 h-full w-full overflow-hidden rounded-3xl">
                <div className="absolute right-20 top-1/2 z-20 flex h-[218px] w-[410px] -translate-y-1/2 flex-col items-end gap-2">
                  <div className="flex gap-2">
                    {film.rates?.map((rating, index) => (
                      <React.Fragment key={index}>
                        |
                        <span className="flex gap-2">
                          {rating.rate}
                          <Image
                            src={rating.icon}
                            width={20}
                            alt={rating.name}
                          />
                        </span>
                      </React.Fragment>
                    ))}
                    |
                  </div>
                  <h3 className="text-xl lg:text-4xl">{film.title}</h3>
                  <div className="flex flex-row-reverse items-center gap-2 text-right text-gray-400">
                    <span>{film.year}</span>
                    {film.genres.map((genre: any, index: number) => (
                      <span key={index}>| {genre}</span>
                    ))}
                  </div>
                  <div>
                    <p className="hidden text-right md:block">{film.short}</p>
                  </div>
                  <div className="flex flex-row-reverse gap-2">
                    <Button className=" flex gap-2 rounded-full px-8">
                      <FaPlay />
                      سەیرکردن
                    </Button>
                    <button className=" rounded-full bg-white bg-opacity-30 px-4 text-white">
                      ترایلەر
                    </button>
                  </div>
                </div>
                <Image
                  src={film.bg}
                  alt="another movie"
                  className="w-full object-fill brightness-50"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}
