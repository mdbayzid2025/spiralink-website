import { MoveUpRight, Asterisk } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function CollaborationBanner() {
  return (
    <section className="text-white pt-6 lg:pt-24 lg:py-20 relative overflow-hidden">
      {/* 1st section */}
      <div className="container mx-auto w-full flex flex-col md:flex-row gap-5 z-10 pt-20 2xl:pt-28 relative ">
        {/* left */}
        <div className="flex-1 text-center md:text-left">
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
              AI + Human Collaboration 👋
            </span>
          </div>
          <h1 className="section-title mt-6 text-4xl! lg:text-[78px] leading-[1.1] max-w-[600px]">
            Built for the reality of inbound customer support.
          </h1>
          <div className="flex flex-wrap gap-4 mt-8 lg:mt-16">
            <button
              style={{
                background: "linear-gradient(135deg, #7D3BB7 0%, #2C4C91 100%)",
              }}
              className="flex items-center justify-center gap-2  text-white px-6 py-3.5 rounded-full font-medium hover:bg-gray-100 transition-colors group cursor-pointer w-full md:w-auto text-center"
            >
              Request free tailored demo
              <MoveUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button className="px-6 py-3.5 rounded-full font-semibold bg-[#1A1A1A] text-white border border-white/10 hover:bg-[#252525] transition-colors cursor-pointer w-full md:w-auto text-center">
              Listen to samples
            </button>
          </div>
        </div>

        {/* right */}
        <div className="flex-1 flex justify-end relative">
          <div className="relative">
            <Image
              draggable={false}
              src={"/assets/images/collaboration/collab-banner.png"}
              alt="collaboration"
              width={1000}
              height={800}
              className="w-fit lg:h-[723px] 2xl:h-[900px] lg:-mt-10 "
            />
          </div>
        </div>
      </div>

      {/* SpiraLink Reality Section */}
      <div className="container mx-auto relative z-10 pb-20  lg:-mt-72">
        {/* Inbound Info Block */}
        <div className="max-w-md mb-8 lg:mb-16">
          <div className="flex flex-col md:flex-row md:ap-3">
            <Asterisk className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-medium mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Inbound customer support is
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                unpredictable by nature.
              </span>
            </h3>
          </div>
          <p className="section-subtitle text-sm! md:pl-10.5">
            Some calls are straightforward and repeatable. Others require
            judgment, empathy, or experience.
          </p>
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 md:pl-8">
          SpiraLink is built <br />
          around this reality.
        </h2>
        <div className="flex md:pl-60">
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Instead of forcing full automation or relying entirely on humans, we
            design one continuous support flow where AI and human agents each
            handle what they are best at. This collaboration is intentional,
            controlled, and designed for real call center operations.
          </p>
        </div>
      </div>
      {/* lines */}
      <Image
        src={"/assets/lines/collab/line-up.svg"}
        alt="line"
        width={600}
        height={600}
        className="absolute  lg:top-28  lg:-right-96  2xl:-right-30 w-contain h-auto lg:scale-150 z-0 hidden md:block"
        draggable={false}
      />
      <Image
        src="/assets/lines/collab/inbound.svg"
        alt="line"
        width={600}
        height={600}
        className="absolute bottom-226 -left-49  lg:bottom-65 lg:-left-85 2xl:-left-15 h-auto 2xl:scale-125 z-0 pointer-events-none "
        draggable={false}
      />
    </section>
  );
}
