import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaVimeoV,
  FaYoutube,
} from "react-icons/fa";
import VoiceWave from "./Waveform";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundImage: "url('/assets/images/footer/footer-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative pt-20 pb-10 overflow-hidden text-white"
    >
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center mb-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 tracking-tight">
          Ready to scale your
          <br />
          call center with AI?
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 ">
          <Link
            href="/demo"
            className="px-6 py-3 rounded-full flex items-center gap-2 transition-transform hover:scale-105 font-medium text-white "
            style={{
              background: "linear-gradient(135deg, #7D3BB7 0%, #2C4C91 100%)",
              backdropFilter: "blur(45px)",
              boxShadow: "-9px 11px 48px 0px #BC72F873",
              border: "1.5px solid",
              borderImageSource:
                "linear-gradient(90deg, #C175FC 0%, #6C35BE 100%)",
            }}
          >
            Request free tailored demo
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11L11 1M11 1H3M11 1V9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          {/* <button
            style={{
              backdropFilter: "blur(25px)",
            }}
            className="bg-[#FFFFFF0D] border border-white/10 hover:bg-white/10 text-white px-8 py-3 rounded-full transition-colors font-medium cursor-pointer "
          >
            Listen to samples
          </button> */}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-[15px]  mb-8 ">
          <Link
            href="#"
            className="hover:text-white transition-colors text-white "
          >
            Platform
          </Link>
          <span className="text-white">|</span>
          <Link
            href="#"
            className="hover:text-white transition-colors text-white"
          >
            About
          </Link>
          <span className="text-white">|</span>
          <Link
            href="#"
            className="hover:text-white transition-colors text-white"
          >
            Contact
          </Link>
          <span className="text-white">|</span>
          <Link
            href="#"
            className="hover:text-white transition-colors text-white"
          >
            Privacy
          </Link>
        </div>

        <div className="flex items-center gap-4 mb-6">
          {[
            FaFacebookF,
            FaTwitter,
            FaPinterestP,
            FaInstagram,
            FaVimeoV,
            FaYoutube,
          ].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              style={{
                backdropFilter: "blur(25px)",
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFFFFF0D] border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white/90 hover:text-white"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <div className="text-sm text-[#959595]">
          © 2025 Spiralink. All rights reserved
        </div>
      </div>
      {/* <Image
        src={"/assets/images/footer/radiation.svg"}
        alt="footer-bg"
        width={1920}
        height={100}
        className="absolute bottom-[155px] lg:bottom-[260px] 2xl:bottom-[335px]  w-full h-[60px] object-cover z-0"
        draggable={false}
      /> */}
      <VoiceWave className="absolute bottom-[155px] lg:bottom-[260px] 2xl:bottom-[330px]" />

      <Image
        src={"/assets/images/footer/bottom-line.svg"}
        alt="footer-bg"
        width={1920}
        height={100}
        className=" bottom-12 left-0 w-full h-fit object-contain z-0"
        draggable={false}
      />
    </footer>
  );
}
