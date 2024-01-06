"use client";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carouselc";
import { Avatar } from "./ui/avatar";
export default function Comments() {
  return (
    <section className="flex h-[350px] w-full flex-col justify-between">
      <div className="flex flex-row-reverse justify-between">
        <h2>پێداچوونەوەکان</h2>
        <Link href="" className="flex items-center gap-2">
          <IoIosArrowBack /> بینیبی زیاتر
        </Link>
      </div>
      <Carousel
        opts={{
          align: "end",
        }}
        className="flex h-full w-full"
      >
        <CarouselContent className="gap-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="h-full rounded-lg bg-[#212122]"></div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
