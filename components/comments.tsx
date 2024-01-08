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
import movie1 from "@/public/movie1.svg";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import saveList from "@/public/savee.svg";
import { AvatarImage } from "@radix-ui/react-avatar";
import avatarImg from "@/public/alis.svg";

export default function Comments() {
  return (
    <section className="flex h-[355px] w-full flex-col justify-between">
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
                <div className="flex h-full flex-col gap-2 rounded-lg bg-[#212122] px-4 py-2">
                  <div className="flex h-1/5 w-full flex-row-reverse items-center justify-between border-b-2 border-[#4a4a4a]">
                    <div className="flex flex-row-reverse items-center gap-2">
                      <Avatar></Avatar>
                      <div className="flex flex-col items-end leading-6">
                        <span className="m-0">ناتالیا عەزیز عەبدوڵا</span>
                        <span className="m-0">2 Stars</span>
                      </div>
                    </div>
                  </div>
                  <div className="1/4 group relative  text-right ">
                    <p className="blur-sm transition-all hover:blur-none">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nobis ipsam tempore quaerat, culpa aliquam doloribus ipsa?
                      Ullam quibusdam, voluptatibus aliquam tenetur obcaecati
                      nam dignissimos soluta. Unde culpa harum enim qui?
                    </p>
                    <span className=" absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 font-bold transition-all group-hover:hidden">
                      کلیك بکە بۆ بینینی سپۆیڵ
                    </span>
                  </div>
                  <div className="flex h-[100px] flex-row-reverse items-end ">
                    <Image
                      src={movie1}
                      alt="Great"
                      className="h-[100px] w-[69px]"
                    />
                    <div className="flex h-3/4 w-full rounded-l-md bg-[#313133]">
                      <div className="flex h-full w-2/5 items-center justify-center gap-2">
                        <div className=" rounded-full bg-[#414143] p-4">
                          <FaPlay />
                        </div>
                        <div className=" flex aspect-square items-center justify-center rounded-full bg-[#414143] p-4 px-5">
                          <Image src={saveList} alt="savelist" />
                        </div>
                      </div>
                      <div className="flex h-full w-3/5 flex-col items-end justify-center  px-5 text-right">
                        <span>The First Soldier</span>
                        <span>2014 / ترسناك</span>
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
