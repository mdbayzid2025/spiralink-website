import BadgeHero from "@/shared/BadgeHero";
import PrimaryButton from "@/shared/PrimaryButton";
import { Sparkles, Flame, Gem, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function HybridModel() {
  const features = {
    topLeft: {
      icon: <Flame className="w-5 h-5 text-[#FF5D01]" />,
      title: "100 calls enter",
      description:
        "Support up to 100 calls at a time with 50+ languages support.",
    },
    bottomLeft: {
      icon: <Gem className="w-5 h-5 text-[#38BDF8]" />,
      title: "10% escalate",
      description: "Your agents become problem solvers, not data entry clerks.",
    },
    topRight: {
      icon: <Sparkles className="w-5 h-5 text-[#FDE047]" />,
      title: "AI resolves 90%",
      description:
        "No need to hire multiple resources when you've the spiralink.",
    },
    bottomRight: {
      icon: <Zap className="w-5 h-5 text-[#FDE047]" />,
      title: "Boost Productivity",
      description:
        "Companies see a 20-40% increase in efficiency when automating processes",
    },
  };

  return (
    <section className="pb-8 lg:pb-16 relative overflow-hidden">
      <Image
        src="/assets/bg/Spiralink.png"
        alt="line"
        width={1400}
        height={800}
        draggable={false}
        className="w-full h-fit object-contain container"
      />
      <div className=" lg:-mt-24 -mt-6 ">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 relative z-20 container ">
          <BadgeHero
            label="Hybrid model"
            icon={<Sparkles className="w-4 h-4 text-[#FDE047]" />}
          />
          <h2 className="section-title mt-8 text-white">The Perfect Handoff</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Your agents become problem solvers, not data entry clerks.
          </p>
          <div className="mt-8">
            <PrimaryButton label="See the agent workflow" />
          </div>
        </div>

        {/* Desktop Layout (>lg) */}
        <div
          style={{
            backgroundImage: "url('/assets/bg/home/bg-globe.png')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
          }}
          className="hidden lg:flex relative justify-center items-center min-h-[600px] container"
        >
          {/* Central Ring */}
          {/* <div className="relative w-[400px] h-[400px] z-10 flex items-center justify-center">
            <Image
              src="/assets/bg/home/globe.png"
              alt="globe core"
              width={400}
              height={400}
              className="w-full h-full object-contain animate-pulse-slow z-0"
              draggable={false}
            />
          </div> */}

          {/* Lines Layer - Absolute over the container */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="dotted-pattern"
                x="0"
                y="0"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="#6B7280" opacity="0.5" />
              </pattern>
              <mask id="dots-mask">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="url(#dotted-pattern)"
                />
              </mask>
            </defs>

            {/* Top Left Line: From Text (approx 20% left, 20% top) to Ring Top (approx 50% left, 35% top) */}
            {/* Using polylines for sharp scaling corners as seen in screenshot */}

            {/* Top Left Path: Starts near text, goes right, then down to ring */}
            <path
              d="M 320 150 L 480 150 L 480 250"
              fill="none"
              stroke="#6C35BE"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="opacity-60"
            />

            {/* Bottom Left Path */}
            <path
              d="M 320 450 L 480 450 L 480 350"
              fill="none"
              stroke="#6C35BE"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="opacity-60"
            />

            {/* Top Right Path */}
            <path
              d="M 960 150 L 800 150 L 800 250"
              fill="none"
              stroke="#6C35BE"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="opacity-60"
            />

            {/* Bottom Right Path */}
            <path
              d="M 960 450 L 800 450 L 800 350"
              fill="none"
              stroke="#6C35BE"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="opacity-60"
            />
          </svg>

          {/* Cards Positioning */}
          {/* Top Left */}
          <div className="absolute top-[10%] left-[5%] xl:left-[10%] max-w-xs text-left">
            <div className="flex items-center gap-2 mb-3">
              {features.topLeft.icon}
              <h3 className="text-xl font-bold text-white">
                {features.topLeft.title}
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              {features.topLeft.description}
            </p>
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-[25%] left-[5%] xl:left-[10%] max-w-xs text-left">
            <div className="flex items-center gap-2 mb-3">
              {features.bottomLeft.icon}
              <h3 className="text-xl font-bold text-white">
                {features.bottomLeft.title}
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              {features.bottomLeft.description}
            </p>
          </div>

          {/* Top Right */}
          <div className="absolute top-[10%] right-[5%] xl:right-[10%] max-w-xs text-right items-end flex flex-col">
            <div className="flex items-center gap-2 mb-3 flex-row-reverse">
              {features.topRight.icon}
              <h3 className="text-xl font-bold text-white">
                {features.topRight.title}
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              {features.topRight.description}
            </p>
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-[25%] right-[5%] xl:right-[10%] max-w-xs text-right items-end flex flex-col">
            <div className="flex items-center gap-2 mb-3 flex-row-reverse">
              {features.bottomRight.icon}
              <h3 className="text-xl font-bold text-white">
                {features.bottomRight.title}
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              {features.bottomRight.description}
            </p>
          </div>
        </div>

        {/* Mobile/Tablet Layout (<lg) */}
        <div className="flex lg:hidden flex-col items-center md:container">
          {/* Ring */}
          <div className="w-full h-[400px] mb-12 relative flex items-center justify-center overflow-hidden">
            <Image
              src="/assets/bg/home/bg-globe.png"
              alt="Spiralink AI Core"
              width={800}
              height={800}
              className="w-full h-full  object-cover scale-125"
              draggable={false}
            />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl px-4 md:container lg:px-0">
            {/* 1. Top Left */}
            <div className="bg-[#111] border border-[#222] p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                {features.topLeft.icon}
                <h3 className="text-lg font-bold text-white">
                  {features.topLeft.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                {features.topLeft.description}
              </p>
            </div>

            {/* 2. Top Right */}
            <div className="bg-[#111] border border-[#222] p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                {features.topRight.icon}
                <h3 className="text-lg font-bold text-white">
                  {features.topRight.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                {features.topRight.description}
              </p>
            </div>

            {/* 3. Bottom Left */}
            <div className="bg-[#111] border border-[#222] p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                {features.bottomLeft.icon}
                <h3 className="text-lg font-bold text-white">
                  {features.bottomLeft.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                {features.bottomLeft.description}
              </p>
            </div>

            {/* 4. Bottom Right */}
            <div className="bg-[#111] border border-[#222] p-6 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                {features.bottomRight.icon}
                <h3 className="text-lg font-bold text-white">
                  {features.bottomRight.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm">
                {features.bottomRight.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
