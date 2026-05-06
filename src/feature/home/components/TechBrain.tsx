import React from "react";
import BadgeHero from "@/shared/BadgeHero";
import { Sparkles, Headset, Rocket, Brain } from "lucide-react";
import PrimaryButton from "@/shared/PrimaryButton";

export default function TechBrain() {
  const cards = [
    {
      title: "Full ownership",
      description:
        "We own the entire voice AI setup — behavior, performance, edge cases, and continuous improvement. No prompts, models or logic for your team to manage.",
      icon: <Brain className="w-8 h-8 text-white" />,
      glowColor: "#6C35BE",
    },
    {
      title: "Production-ready",
      description:
        "Built for real call center conditions: interruptions, accents, emotional callers, compliance, and human handover.",
      icon: <Headset className="w-8 h-8 text-white" />,
      glowColor: "#BC72F8",
    },
    {
      title: "Effortless scaling",
      description:
        "As call volume grows, the AI scales with it — without extra tools, teams, or operational overhead.",
      icon: <Rocket className="w-8 h-8 text-white" />,
      glowColor: "#BC72F8",
    },
  ];

  return (
    <section className="py-8 lg:py-16 relative overflow-hidden ">
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <BadgeHero
            label="Tech brain"
            icon={<Sparkles className="w-4 h-4 text-[#FDE047]" />}
            glowColor="#BC72F873"
            borderColor="#6C35BE"
          />
          <h2 className="section-title mt-8">
            We handle the AI.
            <br />
            You scale the operation.
          </h2>
          <p className="section-subtitle">
            We design, integrate, and run custom voice AI so your team can focus
            on growth, not technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group p-8 rounded-3xl bg-[#030605] border border-[#1A1D1C] overflow-hidden"
            >
              {/* Glow effect behind icon */}
              <div
                className="absolute top-12 left-8 w-16 h-16 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                style={{ backgroundColor: card.glowColor }}
              />

              {/* Icon */}
              <div className="relative mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-b from-[#ffffff1a] to-transparent border border-[#ffffff1a]">
                {card.icon}
              </div>

              <h3 className="text-2xl font-medium text-white mb-4">
                {card.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="mb-12">
            <span className="text-[#BC72F8] text-lg font-medium mb-4 block">
              — Why Internal Hiring Fails
            </span>
            <blockquote className="text-2xl md:text-3xl text-white font-normal max-w-4xl mx-auto leading-relaxed">
              &ldquo; Generalist developers write code. We write conversations.
              We bridge the gap between raw AI and the messy reality of human
              interaction. &rdquo;
            </blockquote>
          </div>
          <PrimaryButton label="Read more about integrations" />
        </div>
      </div>
    </section>
  );
}
