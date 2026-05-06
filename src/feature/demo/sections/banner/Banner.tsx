import React from "react";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative min-h-screen pt-24 lg:pt-44 pb-12 lg:pb-[180px] overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        // style={{
        //   backgroundImage: "url('/assets/images/home/banner_bg.png')",
        //   backgroundSize: "contain",
        //   backgroundPosition: "top",
        //   backgroundRepeat: "no-repeat",
        // }}
      />

      <div className="container relative z-10 pb-14 md:pb-40 lg:pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 2xl:gap-20 items-start">
          {/* Left Column */}
          <BannerLeft />
          {/* Right Column - Form */}
          <BannerRight />
        </div>
        <Image
          src="/assets/bg/Spiralink.png"
          alt="line"
          width={1400}
          height={800}
          draggable={false}
          className="
    absolute
    -bottom-16 
    lg:-bottom-52
    2xl:-bottom-60 
    left-1/2 
    -translate-x-1/2 
    w-full 
    h-fit 
    object-contain
  "
        />
      </div>
      <Image
        src={"/assets/images/home/line.png"}
        alt="line"
        width={600}
        height={600}
        className="absolute bottom-11 md:bottom-18 md:-right-92 lg:bottom-60 -right-64 lg:-right-96  2xl:-right-60 w-contain h-auto"
        draggable={false}
      />
    </div>
  );
}
