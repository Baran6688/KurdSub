import reklam from "@/public/reklam.svg";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function Reklam() {
  return (
    <div className="flex h-full w-full flex-col items-end gap-4">
      <div className="flex w-full flex-row-reverse justify-between">
        <h3 className="text-[#919193]">ڕێكلام</h3>
        <Link href="" className="flex items-center gap-2">
          <IoIosArrowBack />
          لابردنی ڕێكلام
        </Link>
      </div>
      <div className="h-[155px] w-full rounded-lg bg-gradient-to-r from-[#313133] to-[#212122]">
        {/* <Image src={reklam} alt="reklam" /> */}
      </div>
    </div>
  );
}
