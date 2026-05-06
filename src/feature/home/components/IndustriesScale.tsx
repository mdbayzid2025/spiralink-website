import React from "react";
import BadgeHero from "../../../shared/BadgeHero";
import PrimaryButton from "../../../shared/PrimaryButton";
import { Cpu, BadgeCheck } from "lucide-react";
import Marquee from "react-fast-marquee";

export default function IndustriesScale() {
  const industries = [
    "Finance",
    "Retail",
    "Government",
    "Travel",
    "Insurance",
    "50+",
  ];

  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/home/scale-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="py-24 overflow-hidden relative lg:my-16"
    >
      <div className="md:max-w-7xl md:px-4 mx-auto flex flex-col items-center text-center z-10 relative">
        <div className="mb-8">
          <BadgeHero
            label="Industries & Scale"
            icon={<Cpu className="w-4 h-4 text-cyan-400" />}
          />
        </div>

        <h2 className="section-title mb-6 px-4">Engineered for high volume</h2>

        <p className="section-subtitle max-w-2xl leading-relaxed mb-12 px-4">
          Engineered for 24/7 operations with instant autoscaling for more than
          <br className="hidden md:block" />
          10,000 concurrent calls without latency.
        </p>

        <div className="flex flex-col items-center gap-6 mb-16 w-full">
          <span className="text-gray-500 text-sm font-medium">Built for:</span>

          <div className="w-full relative">
            {/* Mobile View - Double Marquee */}
            <div className="flex flex-col gap-4 md:hidden">
              <Marquee gradient={false} speed={40} autoFill>
                {industries.slice(0, 3).map((item, index) => (
                  <div
                    key={`mobile-1-${index}`}
                    style={{
                      background:
                        "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
                      backdropFilter: "blur(45px)",
                    }}
                    className="group flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/5 hover:border-purple-500/50 hover:bg-[#111] transition-all duration-300 mx-2"
                  >
                    <BadgeCheck className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </Marquee>
              <Marquee gradient={false} speed={40} direction="right" autoFill>
                {industries.slice(3).map((item, index) => (
                  <div
                    key={`mobile-2-${index}`}
                    style={{
                      background:
                        "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
                      backdropFilter: "blur(45px)",
                    }}
                    className="group flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/5 hover:border-purple-500/50 hover:bg-[#111] transition-all duration-300 mx-2"
                  >
                    <BadgeCheck className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Desktop View - Single Marquee */}
            <div className="hidden md:flex w-full overflow-hidden">
              <Marquee gradient={false} speed={50} autoFill>
                {industries.map((item, index) => (
                  <div
                    key={`desktop-${index}`}
                    style={{
                      background:
                        "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
                      backdropFilter: "blur(45px)",
                    }}
                    className="group flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/5 hover:border-purple-500/50 hover:bg-[#111] transition-all duration-300 mx-3"
                  >
                    <BadgeCheck className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>

        <div className="relative">
          <PrimaryButton label="View all use cases" />
        </div>
      </div>
    </section>
  );
}
