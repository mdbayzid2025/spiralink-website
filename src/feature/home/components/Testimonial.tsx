import React from "react";
import Image from "next/image";
import BadgeHero from "../../../shared/BadgeHero";
import { Heart, Plus } from "lucide-react";

export default function Testimonial() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/home/testimonial-bg.svg')",
        backgroundSize: "60%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="pb-8 lg:pb-16 overflow-visible"
    >
      <div className="container mx-auto">
        <div className="relative max-w-5xl mx-auto mt-16">
          {/* Profile Image with Glow */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-50" />
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-[#050507]">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop"
                  alt="Founder"
                  fill
                  className="object-cover grayscale object-top"
                />
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div
            style={{ backdropFilter: "blur(45px)", backgroundColor: "#050507" }}
            className="rounded-4xl pt-24 pb-16 px-4 lg:px-6 md:px-12 text-center border border-white/5 relative z-10"
          >
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <BadgeHero
                label="Founder message"
                icon={<Heart className="w-4 h-4 text-pink-500 fill-pink-500" />}
              />
            </div>

            {/* Quote */}
            <blockquote className="max-w-4xl mx-auto space-y-4 mb-10">
              <p className="text-[16px] md:text-2xl lg:text-3xl leading-relaxed text-gray-200 font-light lg:font-normal">
                “I founded SpiraLink to give call centers a real engineering
                partner. You do not need another software tool. You need a team
                that takes responsibility for the code.{" "}
                <br className="md:hidden" /> <br className="md:hidden" /> We
                manufacture your bot, integrate your workflows, and ensure AI
                and agents operate as one.”
              </p>
            </blockquote>

            {/* Read our story link */}
            <button className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-lg group">
              <Plus className="w-5 h-5 transition-transform group-hover:rotate-90" />
              <span>Read our story</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
