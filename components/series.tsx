"use client";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { CgTimer } from "react-icons/cg";

import Image from "next/image";
import { moviesList } from "@/data";
import { FaEye } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

import React from "react";
export default function Movies() {
  return (
    <section className=" flex h-full w-full flex-col justify-between gap-4">
      <div className="flex flex-row-reverse justify-between">
        <h2 className="text-2xl">زنجیرەکان</h2>
        <Link href="" className="flex items-center gap-2">
          <IoIosArrowBack /> بینیبی زیاتر
        </Link>
      </div>
      <div className="flex w-full gap-4">
        {moviesList.map((movie, index) => (
          <div
            key={index}
            className="group flex w-full flex-col items-end justify-center"
          >
            <div className=" relative">
              <Image
                alt=""
                className=" rounded-xl  transition-all  group-hover:opacity-50"
                src={movie.image}
              />
              <div className="absolute left-1/2 top-1/2 flex  aspect-square h-20 -translate-x-1/2 -translate-y-1/2 items-center  justify-center rounded-full bg-[#555556] opacity-0 transition-all group-hover:opacity-100">
                <FaPlay fontSize="24px" />
              </div>
              <div className="absolute bottom-0 left-0 z-10 flex h-1/4 w-full flex-col px-2 opacity-0 transition-all group-hover:opacity-100">
                <span className="flex gap-1">
                  {movie.rates.map((item, index) => (
                    <span
                      key={index}
                      className=" flex w-full justify-start gap-2"
                    >
                      <Image src={item.icon} alt="rate" />
                      {item.rate}
                      <span className=" opacity-60">|</span>
                    </span>
                  ))}
                </span>
                <span className="flex items-center gap-2">
                  <CgTimer scale={5} fontWeight={7} />
                  {movie.time} mins
                </span>
                <span className="flex items-center gap-1">
                  <FaEye />
                  {movie.views.toLocaleString()}
                </span>
              </div>
            </div>
            <p className="flex flex-col text-right">
              <span>{movie.name}</span>
              <span className="text-[#888889]">
                {movie.year} / {movie.genre}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
