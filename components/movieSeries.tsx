import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { filmSeries } from "@/data";
import { Fragment } from "react";

export default function MovieSeries() {
  return (
    <section className="flex h-[275px] w-full flex-col justify-between">
      <div className="flex flex-row-reverse justify-between">
        <h2 className="text-2xl">زنجیرە فیلمەکان</h2>
        <Link href="" className="flex items-center gap-2">
          <IoIosArrowBack /> بینیبی زیاتر
        </Link>
      </div>
      <div className="flex h-[230px] w-full flex-row-reverse items-center gap-2">
        {filmSeries.map((film, index) => (
          <div
            className=" relative flex h-[95%] basis-1/3 flex-row-reverse overflow-hidden rounded-xl bg-black"
            key={index}
          >
            <div
              className={`absolute z-10 flex h-full w-3/4 flex-col items-end justify-center gap-4 bg-gradient-to-l from-${film.color} to-${film.color}/0 pr-10`}
            >
              <span className="flex justify-center gap-1 rounded-md bg-background/70 p-1 px-2">
                <span>فیلم</span>
                <span>21</span>
              </span>
              <span className="text-4xl">{film.title}</span>
              <span className="bg- flex gap-2 text-sm text-white/70">
                {film.genres.map((genre, index) => (
                  <Fragment key={index}>
                    <span>{index % 2 !== 0 && "|"}</span>
                    <span>{genre}</span>
                  </Fragment>
                ))}
              </span>
              <div className="flex gap-2">
                {film.rates.map((item, index) => (
                  <span className="flex gap-1 text-sm" key={index}>
                    <Image src={item.icon} alt="rate" />
                    8.2
                  </span>
                ))}
              </div>
            </div>
            <Image
              src={film.image}
              alt="slaw"
              className=" h-full w-full bg-black object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
