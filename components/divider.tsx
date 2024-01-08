"use client";
import { Separator } from "@radix-ui/react-separator";

export default function Divider({ className = "my-[1.5px]" }) {
  return (
    <div className="bg-[#4a4a4a]/60">
      <Separator className={className} />
    </div>
  );
}
