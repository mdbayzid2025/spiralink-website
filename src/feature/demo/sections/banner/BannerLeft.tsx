import React from "react";
import {
  FileText,
  Settings2,
  Clock,
  PhoneCall,
  CheckSquare,
} from "lucide-react";
export default function BannerLeft() {
  const steps = [
    {
      title: "15-minute brief",
      desc: "You tell us about your workflow. We listen, ask questions, take notes.",
      icon: <FileText className="w-6 h-6 lg:w-8 lg:h-8  text-primary" />,
    },
    {
      title: "Systems integration?",
      desc: "Your choice. We can connect to your CRM platform if you want to see it work with real data. Or we simulate it. Whatever makes you comfortable.",
      icon: <Settings2 className="w-6 h-6 lg:w-8 lg:h-8  text-primary" />,
    },
    {
      title: "48-72 hours",
      desc: "We build and build. You hear nothing from us.",
      icon: <Clock className="w-6 h-6 lg:w-8 lg:h-8  text-primary" />,
    },
    {
      title: "You get a phone number",
      desc: "Call it. Test real scenarios. Angry customers. Complex issues. Whatever breaks your current system. Call it 50 times if you want.",
      icon: <PhoneCall className="w-6 h-6 lg:w-8 lg:h-8  text-primary" />,
    },
    {
      title: "After 7 days",
      desc: "Did it work? Yes? Let's talk partnership. No? No hard feelings. We part as friends.",
      icon: <CheckSquare className="w-6 h-6 lg:w-8 lg:h-8  text-primary" />,
    },
  ];
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
        Call it yourself.
        <br />
        If it works, we&apos;ll talk.
      </h1>
      <p className="text-primary text-lg lg:text-xl 2xl:text-2xl font-medium mb-4 max-w-[460px]">
        We build a working AI for your call centre. You test it by calling it.
        48 hours. Free.
      </p>
      <p className="text-[#FFFFFF]/70 text-base lg:text-lg mb-12 max-w-xl font-normal">
        We don&apos;t do sales pitches. We build demos. Pick your most painful
        call type. We&apos;ll build an AI that handles it. Then you call it
        yourself and decide if it works.
      </p>

      <h3 className="text-primary text-lg lg:text-2xl font-semibold mb-6">
        What happens:
      </h3>

      {/* Steps Grid - Scrollable on Mobile */}
      <div className="flex lg:grid lg:grid-cols-2 gap-4 overflow-x-auto pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0 items-center">
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              backdropFilter: "blur(25px)",
              background:
                "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
            }}
            className={`
      border border-white/10
      p-6
      rounded-2xl
      min-w-[280px] lg:min-w-0
      snap-center
      flex flex-col gap-4 min-h-[270px] lg:min-h-auto
      ${index === 1 || index === 3 ? "lg:row-span-2 lg:h-full" : ""}
    `}
          >
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              {step.icon}
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-3xl lg:text-[40px] font-semibold mb-2">
          Why free?
        </h2>
        <p className="text-primary text-lg lg:text-2xl font-medium lg:font-semibold mb-4">
          Because we&apos;re confident.
        </p>
        <p className="text-gray-400 max-w-lg">
          Every call center gets pitched &quot;AI solutions&quot; that
          don&apos;t work. So we don&apos;t pitch. We build it, you test it, you
          decide. That&apos;s the only way to prove this actually works.
        </p>
      </div>
    </div>
  );
}
