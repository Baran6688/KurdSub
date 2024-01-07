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
    <section className=" flex h-[452px] w-full flex-col justify-between">
      <div className="flex flex-row-reverse justify-between">
        <h2 className="text-2xl">فیلمەکان</h2>
        <Link href="" className="flex items-center gap-2">
          <IoIosArrowBack /> بینیبی زیاتر
        </Link>
      </div>
      <div className="flex h-[400px]  justify-end gap-4">
        {moviesList.map((movie, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col justify-between">
              <div className="group relative">
                <Image
                  alt=""
                  className=" size h-[342px] w-[228px] rounded-xl  transition-all  group-hover:opacity-50"
                  src={movie.image}
                />
                <div className="absolute left-1/2 top-1/2  flex h-20 w-1/3 -translate-x-1/2 -translate-y-1/2 items-center  justify-center rounded-full bg-[#555556] opacity-0 transition-all group-hover:opacity-100">
                  <FaPlay fontSize="24px" />
                </div>
                <div className="absolute bottom-0 left-0 flex h-1/4 w-full flex-col px-2 opacity-0 transition-all group-hover:opacity-100 ">
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
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
