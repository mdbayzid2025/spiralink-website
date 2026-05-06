import React from "react";
import BadgeHero from "../../../shared/BadgeHero";
import { Zap, Play } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-8 lg:py-16 relative">
      <div className="container ">
        <div className="flex flex-col items-center text-center mb-6 md:mb-10 lg:mb-16">
          {/* Badge */}
          <div className="mb-8">
            <BadgeHero
              label="How it works"
              icon={<Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
            />
          </div>

          {/* Title */}
          <h2 className="section-title max-w-4xl leading-[1.1]">
            See how spiralink works for <br className="hidden md:block" /> your
            in 3 simple steps
          </h2>
        </div>

        {/* Video Placeholder */}
        <div className="w-full relative">
          {/* Glow behind video */}
          <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-[3rem] -z-10" />

          <div className="aspect-video w-full rounded-4xl bg-[#030304] border border-white/5 relative flex items-center justify-center overflow-hidden group cursor-pointer shadow-2xl">
            {/* Background subtle gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-white/3 to-transparent pointer-events-none" />

            {/* Play Button */}
            <div className="relative z-10 flex items-center justify-center">
              {/* Outer glow ring */}
              <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/30 transition-colors duration-500" />

              {/* Button container */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                {/* Inner gradient circle */}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-linear-to-br from-[#9D5CFF] to-[#6C35BE] flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5 fill-white" />
                </div>
              </div>
            </div>

            {/* Placeholder Text for Development */}
            {/* <div className="absolute bottom-4 right-4 text-xs text-gray-700">Video Placeholder</div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
