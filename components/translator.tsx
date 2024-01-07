"use client";
import Image from "next/image";
import translateBg from "@/public/cinema.svg";
import avatar from "@/public/alis.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import moviee from "@/public/movie1.png";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carouselt";
import { translator } from "@/data";
export default function Translator() {
  return (
    <section className="flex h-full w-full flex-col justify-between gap-4 text-right">
      <div className="flex  flex-row-reverse items-center justify-between">
        <h2 className="text-2xl">وەرگێڕی ئەمڕۆ</h2>
        <Link href="" className="flex items-center gap-2">
          <IoIosArrowBack /> بینیبی زیاتر
        </Link>{" "}
      </div>
      <div className="relative h-full w-full overflow-clip rounded-xl">
        <div className="absolute right-0 top-0 z-40 flex h-full w-full flex-row-reverse items-center justify-end ">
          <div className="flex h-full w-1/4 flex-col justify-center gap-2 2xl:gap-6">
            <div className="flex w-full flex-col items-center gap-2 text-right 2xl:gap-4">
              <Image src={avatar} alt="avatar" />
              <div className="flex flex-col items-center">
                <span className="text-2xl">{translator.name}</span>
                <span className="text-sm opacity-35">
                  {translator.username}
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-2 text-center text-white">
              {translator.socials.map((social, idx) => (
                <div
                  className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/10"
                  key={idx}
                >
                  {social.icon}
                </div>
              ))}
            </div>
          </div>
          {/* <div className="no-scrollbar relative flex h-full w-1/2 flex-shrink-0 items-center justify-end gap-4 overflow-x-scroll overscroll-contain md:w-3/4 "> */}
          <Carousel
            className="flex h-full w-3/4"
            opts={{
              align: "end",
            }}
          >
            <CarouselContent className=" gap-4">
              {translator.movies.map((movie, i) => (
                <CarouselItem
                  className=" mt-2 flex h-full w-fit grow flex-col items-center justify-center"
                  key={i}
                >
                  <Image src={movie.poster} width="195" alt="movie" />
                  <span className="text-xl ">{movie.title}</span>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <Image
          src={translateBg}
          alt="translotor"
          className=" w-full object-contain"
        />
      </div>
    </section>
  );
}
