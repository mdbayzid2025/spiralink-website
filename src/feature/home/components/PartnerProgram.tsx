import React from "react";
import Image from "next/image";
import PrimaryButton from "../../../shared/PrimaryButton";

export default function PartnerProgram() {
  return (
    <section className="py-8 lg:py-16 pb-16 lg:pb-32">
      <div className="container lg:overflow-visible">
        <div
          style={{
            backgroundImage: "url('/assets/bg/home/partner-bg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backdropFilter: "blur(45px)",
          }}
          className="relative rounded-[2.5rem] overflow-visible border border-white/5 max-w-6xl"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between lg:p-14 lg:max-h-[400px] ">
            {/* Content Section */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl lg:max-w-xl z-20 order-2 lg:order-1 px-4 pb-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium lg:font-semibold tracking-tight text-white mb-4 leading-[1.1]">
                Introducing our <br />
                Co-Branded <br />
                partner program.
              </h2>
              <p className="section-subtitle mb-8 lg:mb-0">
                Want to leverage our brand authority with your clients?
              </p>

              {/* Button - Mobile/Tablet only */}
              <div className="lg:hidden w-full md:w-auto">
                <PrimaryButton
                  label="Learn more about partnerships"
                  className="w-full md:w-auto"
                />
              </div>
            </div>

            {/* Image Section */}
            <div className="relative w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center order-1 lg:order-2 lg:mb-0">
              <div className="absolute lg:-right-70 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[140%] h-full">
                <Image
                  src="/assets/images/home/partner.png"
                  alt="3D Rings"
                  fill
                  className="object-contain lg:object-cover scale-110 lg:scale-100"
                />
              </div>

              {/* Button - Desktop only (Overlaid) */}
              <div className="hidden lg:block absolute bottom-30 right-20 z-30">
                <PrimaryButton
                  label="Learn more about partnerships"
                  className="shadow-xl shadow-purple-900/20 text-nowrap! "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
