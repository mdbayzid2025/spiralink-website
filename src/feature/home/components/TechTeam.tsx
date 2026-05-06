import PrimaryButton from "@/shared/PrimaryButton";
import Image from "next/image";
import React from "react";

export default function TechTeam() {
  return (
    <section className="py-8 lg:py-16 relative mb-8 lg:mb-16">
      <div className=" lg:max-w-4xl mx-auto 2xl:max-w-7xl relative z-10 px-6 md:px-4 ">
        <h1 className="text-5xl md:text-6xl lg:text-[8rem] 2xl:text-[9rem] leading-[0.9] font-medium tracking-tighter lg:max-w-3xl  2xl:max-w-5xl mb-12">
          Let us be your tech team.
        </h1>
        <PrimaryButton label="Book a Strategy Call with the CEO" className="w-fit text-nowrap" />
      </div>

      <Image
        src="/assets/lines/home/line-up.svg"
        alt="line"
        width={600}
        height={600}
        className="absolute -top-18 -left-48  lg:-top-18 lg:-left-52 2xl:-top-28 2xl:-left-40 h-auto 2xl:scale-150 z-0 pointer-events-none"
        draggable={false}
      />
      <Image
        src="/assets/lines/home/line-down.svg"
        alt="line"
        width={600}
        height={600}
        className="absolute bottom-4 -right-40 lg:bottom-28  lg:-right-52 2xl:bottom-20 2xl:right-20 h-auto 2xl:scale-150 z-0 pointer-events-none"
        draggable={false}
      />
    </section>
  );
}
