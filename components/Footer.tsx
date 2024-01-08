import kurdsubLogo from "@/public/kurdsub.svg";
import Image from "next/image";
import { FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa";
import Divider from "./divider";

export default function Footer() {
  return (
    <>
      <footer className="mt-10 flex h-[430px] w-full max-w-[1920px] flex-col gap-2 border-t-2 border-[#313133] px-20 py-4">
        <div className="grid h-[90%] grid-cols-5  ">
          <div className="flex h-5/6 basis-1/5 flex-col items-end gap-4 px-6 text-right">
            <h3 className="text-2xl">کۆمپانیا</h3>
            <ul className=" flex flex-col gap-2 text-[#767676]">
              <li>تیمەکەمان</li>
              <li>دەربارەی ئێمە</li>
              <li>یاسا و مەرجەکان</li>
              <li>پەیوەندی کردن</li>
            </ul>
          </div>
          <div className="flex h-5/6 basis-1/5 flex-col items-end gap-4 border-l-2 border-[#313133] px-6 text-right">
            <h3 className="text-2xl">کەتەگۆرییەکان</h3>
            <ul className=" flex flex-col gap-2 text-[#767676]">
              <li>فارسی</li>
              <li>کۆری، چینی، یابانی</li>
              <li>توركی</li>
              <li>ئەنیمێ</li>
              <li>چاوپێکەوتن</li>
              <li>ڵایف ئەکشن</li>
              <li>عەرەبی</li>
              <li>كۆمیك</li>
            </ul>
          </div>
          <div className="flex h-5/6 basis-1/5 flex-col  items-end gap-4 border-l-2 border-[#313133] px-6 text-right">
            <h3 className="text-2xl">ژانراکان</h3>
            <ul className=" flex flex-col gap-2 text-[#767676]">
              <li>ترسناك</li>
              <li>مێژووی</li>
              <li>خۆرهەڵاتی</li>
              <li>ڕۆمانسی</li>
              <li>زانستی</li>
              <li>گوماناوی</li>
              <li>ژیانامە</li>
              <li>ئاسمانی</li>
            </ul>
          </div>
          <div className="flex h-5/6 basis-1/5 flex-col  items-end gap-4 border-l-2 border-[#313133] px-6 text-right">
            <h3 className="text-2xl">بەشەکان</h3>
            <ul className=" flex flex-col gap-2 text-[#767676]">
              <li>سەرەتا</li>
              <li>فیلم</li>
              <li>زنجیرە</li>
              <li>مانگا</li>
              <li>زنجیرە فیلم</li>
              <li>٢٥٠ی مێژوو</li>
              <li>پێداچوونەوە</li>
            </ul>
          </div>

          <div className="flex h-5/6 basis-1/5 flex-col items-end gap-6 border-l-2 border-l-[#313133] text-right">
            <h3 className="text-2xl">
              <Image src={kurdsubLogo} alt="log" />
            </h3>
            <p className="w-3/4">
              گەورەترین کۆگای فیلم و زنجیرەی ژێرنووسکراوی کوردی
            </p>
            <div className="flex gap-2 ">
              <div className="aspect-square rounded-full border-2 border-[#313133] bg-background p-3">
                <FaTwitter />
              </div>

              <div className="aspect-square rounded-full border-2 border-[#313133] bg-background p-3">
                <FaDiscord />
              </div>
              <div className="aspect-square rounded-full border-2 border-[#313133] bg-background p-3">
                <FaFacebook />
              </div>
            </div>
          </div>
        </div>
        <Divider className="my-[1px]" />
      </footer>
    </>
  );
}
