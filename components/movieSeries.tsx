import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import ms1 from "@/public/ms1.jpg";
import Image from "next/image";
import imdbI from "imdb.svg";
import meta from "meta.svg";
import rotten from "rotten.svg";
export default function MovieSeries() {
  return (
    <section className="flex h-[295px] w-full flex-col justify-between">
      <div className="flex flex-row-reverse justify-between">
        <h2 className="text-2xl">زنجیرە فیلمەکان</h2>
        <Link href="" className="flex items-center gap-2">
          <IoIosArrowBack /> بینیبی زیاتر
        </Link>
      </div>
      <div className="flex h-[230px] w-full flex-row-reverse items-center gap-2">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              className=" relative flex h-[95%] basis-1/3 flex-row-reverse overflow-hidden rounded-xl bg-black"
              key={index}
            >
              <div className=" absolute z-10 flex h-full w-3/4 flex-col items-end justify-center gap-4 bg-gradient-to-l from-red-900 to-red-900/0 pr-10">
                <span>21 فیلم</span>
                <span className="text-4xl">ستارشات</span>
                <span className="text-sm text-white/70">
                  رۆمانسی | دراما | زانستی
                </span>
                <span className="text-sm">IMDB</span>
              </div>
              <Image
                src={ms1}
                alt="slaw"
                className=" h-full w-full bg-black object-cover"
              />
            </div>
          ))}
      </div>
    </section>
  );
}
