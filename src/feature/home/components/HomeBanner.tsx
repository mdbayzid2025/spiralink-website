import React from "react";
import { MoveUpRight, Zap } from "lucide-react";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="text-white pt-24 lg:py-20 md:min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto w-full flex flex-col md:flex-row gap-5 lg:gap-0 items-end lg:grid lg:grid-cols-12 z-10">
        {/* Left Content */}
        <div className=" space-y-8 lg:col-span-6 2xl:col-span-7">
          {/* Glowing Tag */}
          <div
            style={{
              background: "#010403A6",
              backdropFilter: "blur(45px)",
              boxShadow: "-9px 11px 48px 0px #BC72F873",
            }}
            className="inline-flex items-center gap-0.5 lg:gap-2 px-4 py-2 rounded-full border-[1.5px] border-[#6C35BE]"
          >
            <span className="text-gray-300 text-[10px] md:text-sm font-medium tracking-wide">
              You focus on the calls. We handle the technology.
            </span>
            <Zap className="lg:w-3.5 lg:h-3.5 w-4 h-4 text-yellow-400 fill-yellow-400" />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-[6rem] leading-[0.9] font-medium tracking-tighter">
            Humanlike AI Voicebots built exclusively <br className="" /> for
            call centers.
          </h1>
        </div>

        {/* Right Content */}
        <div className=" flex flex-col justify-end  pb-4 space-y-8  lg:col-span-6 2xl:col-span-5">
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            We are your dedicated AI engineering division. We manufacture the
            intelligence, integrate the workflows, and help you scale your
            operations.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center justify-center gap-2 bg-white text-[#050507] px-6 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-colors group cursor-pointer w-full md:w-auto text-center">
              Request free tailored demo
              <MoveUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button className="px-6 py-3.5 rounded-full font-semibold bg-[#1A1A1A] text-white border border-white/10 hover:bg-[#252525] transition-colors cursor-pointer w-full md:w-auto text-center">
              Listen to samples
            </button>
          </div>
        </div>
      </div>
      <Image
        src={"/assets/bg/home/home-line.svg"}
        alt="line"
        width={600}
        height={600}
        className="absolute bottom-0 md:top-18 md:-right-92 lg:top-3/8 2xl:top-2/5 -left-38.5 lg:-left-60  2xl:left-0 w-contain h-auto 2xl:scale-150 z-0"
        draggable={false}
      />
      <Image
        src={"/assets/bg/home/home-line2.svg"}
        alt="line"
        width={600}
        height={600}
        className="absolute top-28  -right-40 w-contain h-auto md:hidden"
        draggable={false}
      />
    </section>
  );
}
