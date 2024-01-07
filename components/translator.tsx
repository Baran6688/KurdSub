import Image from "next/image";
import translateBg from "@/public/cinema.svg";
import avatar from "@/public/alis.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import moviee from "@/public/movie1.png";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function Translator() {
  return (
    <section className="flex h-[440px] w-full flex-col justify-between text-right ">
      {/* <div className="flex  flex-row-reverse items-center justify-between">
        <h2 className="text-2xl">وەرگێڕی ئەمڕۆ</h2>
        <Link href="" className="flex items-center gap-2">
          <IoIosArrowBack /> بینیبی زیاتر
        </Link>{" "}
      </div>
      <div className="relative h-full w-full overflow-clip rounded-xl">
        <div className="absolute right-0 top-0 z-40 flex h-full w-full flex-row-reverse items-center justify-end ">
          <div className="flex h-full w-1/4 flex-col justify-center gap-6">
            <div className="flex w-full flex-col items-center gap-4 text-right">
              <Image src={avatar} alt="avatar" />
              <div className="flex flex-col items-center">
                <span className="text-2xl">ئەلیستا عەبدوڵا</span>
                <span className="text-sm opacity-35">@sanria</span>
              </div>
            </div>
            <div className="flex justify-center gap-2 text-center text-white">
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/10">
                <FaFacebook />
              </div>
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/10">
                <FaTwitter />
              </div>
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/10">
                <FaDiscord />
              </div>
            </div>
          </div>
          <div className="no-scrollbar relative flex h-full w-1/2 flex-shrink-0 items-center justify-end gap-4 overflow-x-scroll overscroll-contain md:w-3/4 ">
            {[...Array(19)].map((x, i) => (
              <div className="flex w-full flex-col gap-2" key={i}>
                <Image src={moviee} alt="movie" />
                <span className="text-xl ">Shutter Island</span>
              </div>
            ))}

            <div className="absolute left-0 top-0 h-full w-1/4  bg-gradient-to-r from-[#1E1E1E] "></div>
          </div>
        </div> */}
      <Image
        src={translateBg}
        alt="translotor"
        className=" w-full object-contain"
      />
      {/* </div> */}
    </section>
  );
}
