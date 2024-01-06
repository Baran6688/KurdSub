import reklam from "@/public/reklam.svg";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function Reklam() {
  return (
    <div className="flex h-[201px] w-full flex-col justify-between">
      <div className="flex flex-row-reverse justify-between">
        <h3 className="text-[#919193]">ڕێكلام</h3>
        <Link href="" className="flex items-center gap-2">
          <IoIosArrowBack />
          لابردنی ڕێكلام
        </Link>
      </div>
      <Image src={reklam} alt="reklam" />
    </div>
  );
}
