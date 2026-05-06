import { ReactNode } from "react";

interface BadgeHeroProps {
  label: string;
  icon?: ReactNode;
  glowColor?: string;
  borderColor?: string;
}

export default function BadgeHero({
  label,
  icon,
  glowColor = "#BC72F873",
  borderColor = "#6C35BE",
}: BadgeHeroProps) {
  return (
    <div className="relative group cursor-default inline-flex">
      {/* glow */}
      <div
        className="absolute inset-0 blur-xl opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-500"
        style={{ backgroundColor: glowColor }}
      />

      {/* content */}
      <div
        className="relative bg-[#010403A6] text-white px-6 py-2.5 rounded-full flex items-center gap-2 z-10 border-2"
        style={{
          borderColor,
          boxShadow: "-9px 11px 48px 0px #BC72F873",
          backdropFilter: "blur(45px)",
        }}
      >
        <span className="text-sm md:text-base 2xl:text-lg">{label}</span>
        {icon}
      </div>
    </div>
  );
}
