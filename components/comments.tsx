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
        <h2 className="text-2xl">پێداچوونەوەکان</h2>
        <Link href="" className="flex items-center gap-2">
          <IoIosArrowBack /> بینیبی زیاتر
        </Link>
      </div>
      <div className="h-[300px]">
        <Carousel
          opts={{
            align: "end",
          }}
          className="flex h-full w-full "
        >
          <CarouselContent className="gap-2">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="h-full rounded-lg bg-[#212122] px-4 py-2">
                  <div className="flex h-1/4 w-full flex-row-reverse items-center justify-between ">
                    <div className="flex flex-row-reverse items-center gap-2">
                      <Avatar />
                      <div className="flex flex-col items-end leading-6">
                        <span className="m-0">ناتالیا عەزیز عەبدوڵا</span>
                        <span className="m-0">2 Stars</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
