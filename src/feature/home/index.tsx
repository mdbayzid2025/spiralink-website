import React from "react";
import HomeBanner from "./components/HomeBanner";
import HumanlikeQuality from "./components/HumanlikeQuality";
import RequestDemo from "./components/RequestDemo";
import TechBrain from "./components/TechBrain";
import HybridModel from "./components/HybridModel";
import IndustriesScale from "./components/IndustriesScale";
import Testimonial from "./components/Testimonial";
import HowItWorks from "./components/HowItWorks";
import TechTeam from "./components/TechTeam";
import PartnerProgram from "./components/PartnerProgram";

export default function HomePage() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/bg/home/home_bg.svg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen overflow-hidden"
    >
      <HomeBanner />
      <HumanlikeQuality />
      <RequestDemo />
      <TechBrain />
      <HybridModel />
      <IndustriesScale />
      <Testimonial />
      <HowItWorks />
      <TechTeam />
      <PartnerProgram />
    </section>
  );
}
