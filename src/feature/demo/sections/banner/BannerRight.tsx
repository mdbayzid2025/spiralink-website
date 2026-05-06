"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function BannerRight() {
  const [activeAccordion, setActiveAccordion] = useState<number[]>([
    1, 2, 3, 4, 5, 6,
  ]);
  const [callAbout, setCallAbout] = useState<string>("Password resets");
  const [contextAbout, setContextAbout] =
    useState<string>("Specific workflows");

  const toggleAccordion = (index: number) => {
    setActiveAccordion((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const inputStyle = {
    background:
      "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
    backdropFilter: "blur(45px)",
  };

  return (
    <section>
      <div
        style={{
          background:
            "linear-gradient(304.65deg, rgba(255, 255, 255, 0.05) 13.81%, rgba(153, 153, 153, 0.0332332) 33.55%, rgba(153, 153, 153, 0.0125) 81.13%)",
        }}
        className="border border-white/10 rounded-3xl p-6 lg:p-8"
      >
        <div className="mb-8">
          <h2 className="text-2xl lg:text-[40px] font-semibold mb-2">
            Tell us what you need.
            <br />
            We&apos;ll build it.
          </h2>
        </div>

        <form className="space-y-6">
          {/* Section 1: About you */}
          <div className="space-y-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAccordion(1)}
            >
              <h3 className="text-primary font-semibold text-xl">
                1. About you
              </h3>
              {activeAccordion.includes(1) ? (
                <Minus className="w-5 h-5 text-primary" />
              ) : (
                <Plus className="w-5 h-5 text-primary" />
              )}
            </div>

            {activeAccordion.includes(1) && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs lg:text-[16px] text-white/80 ml-1 ">
                      First name*
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      style={inputStyle}
                      className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors border border-white/10"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs lg:text-[16px] text-white/80 ml-1">
                      Last name*
                    </label>
                    <input
                      type="text"
                      placeholder="Smith"
                      style={inputStyle}
                      className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors border border-white/10"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs lg:text-[16px] text-white/80 ml-1">
                    Work email*
                  </label>
                  <input
                    type="email"
                    placeholder="john.smith@example.com"
                    style={inputStyle}
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors border border-white/10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs lg:text-[16px] text-white/80 ml-1">
                    Phone number{" "}
                    <span className="text-gray-600">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Only if email doesn't reach you"
                    style={inputStyle}
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors border border-white/10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs lg:text-[16px] text-white/80 ml-1">
                    Company name*
                  </label>
                  <input
                    type="text"
                    placeholder="ABC Company"
                    style={inputStyle}
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors border border-white/10"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Section 2: Your operation */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAccordion(2)}
            >
              <h3 className="text-primary font-semibold text-xl">
                2. Your operation
              </h3>
              {activeAccordion.includes(2) ? (
                <Minus className="w-5 h-5 text-primary" />
              ) : (
                <Plus className="w-5 h-5 text-primary" />
              )}
            </div>

            {activeAccordion.includes(2) && (
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs lg:text-[16px] text-white/80 ml-1">
                    What&apos;s currently breaking with your phone support?
                  </label>
                  <div className="relative">
                    <select
                      style={inputStyle}
                      className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors appearance-none text-gray-300 border border-white/10"
                    >
                      <option className="bg-[#111]">
                        Volume overwhelming our team
                      </option>
                      <option className="bg-[#111]">
                        High operational costs
                      </option>
                      <option className="bg-[#111]">
                        Poor customer experience
                      </option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs lg:text-[16px] text-white/80 ml-1">
                    What do customers mostly call about?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Password resets",
                      "Delivery tracking",
                      "Billing questions",
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setCallAbout(item)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                          callAbout === item
                            ? "bg-[#7c3aed] text-white"
                            : "bg-[#111] border border-white/10 text-gray-300 hover:bg-white/5"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <textarea
                    placeholder="Use your own words. Be specific. This helps us build something that actually works."
                    rows={3}
                    style={inputStyle}
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors resize-none border border-white/10 text-white placeholder:text-gray-500"
                  ></textarea>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs lg:text-[16px] text-white/80 ml-1 ">
                    What platform does your team use?
                  </label>
                  <div className="relative">
                    <select
                      style={inputStyle}
                      className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors appearance-none text-gray-300 border border-white/10"
                    >
                      <option className="bg-[#111]">Zendesk</option>
                      <option className="bg-[#111]">Salesforce</option>
                      <option className="bg-[#111]">HubSpot</option>
                      <option className="bg-[#111]">Intercom</option>
                      <option className="bg-[#111]">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs lg:text-[16px] text-white/80 ml-1">
                    How many inbound calls per month?
                  </label>
                  <div className="relative">
                    <select
                      style={inputStyle}
                      className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors appearance-none text-gray-300 border border-white/10"
                    >
                      <option className="bg-[#111]">Under 1,000</option>
                      <option className="bg-[#111]">1,000 - 5,000</option>
                      <option className="bg-[#111]">5,000 - 10,000</option>
                      <option className="bg-[#111]">10,000+</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 3: Demo Preferences */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAccordion(3)}
            >
              <h3 className="text-primary font-semibold text-xl">
                3. Demo Preferences
              </h3>
              {activeAccordion.includes(3) ? (
                <Minus className="w-5 h-5 text-primary" />
              ) : (
                <Plus className="w-5 h-5 text-primary" />
              )}
            </div>
            {activeAccordion.includes(3) && (
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs lg:text-[16px] text-white/80 ml-1">
                    What language should the AI speak?
                  </label>
                  <div className="relative">
                    <select
                      style={inputStyle}
                      className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors appearance-none text-gray-300 border border-white/10"
                    >
                      <option className="bg-[#111]">Dutch (Netherlands)</option>
                      <option className="bg-[#111]">English (US)</option>
                      <option className="bg-[#111]">English (UK)</option>
                      <option className="bg-[#111]">Spanish</option>
                      <option className="bg-[#111]">French</option>
                      <option className="bg-[#111]">German</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs lg:text-[16px] text-white/80 ml-1">
                    Preferred accent?
                  </label>
                  <div className="relative">
                    <select
                      style={inputStyle}
                      className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors appearance-none text-gray-300 border border-white/10"
                    >
                      <option className="bg-[#111]">
                        Dutch: Standard/Neutral
                      </option>
                      <option className="bg-[#111]">Standard</option>
                      <option className="bg-[#111]">Friendly</option>
                      <option className="bg-[#111]">Professional</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 4: Decision Context */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAccordion(4)}
            >
              <h3 className="text-primary font-semibold text-xl">
                4. Decision Context
              </h3>
              {activeAccordion.includes(4) ? (
                <Minus className="w-5 h-5 text-primary" />
              ) : (
                <Plus className="w-5 h-5 text-primary" />
              )}
            </div>
            {activeAccordion.includes(4) && (
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs lg:text-[16px] text-white/80 ml-1">
                    Who needs to see this working before you can move forward?
                  </label>
                  <div className="relative">
                    <select
                      style={inputStyle}
                      className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors appearance-none text-gray-300 border border-white/10"
                    >
                      <option className="bg-[#111]">Just me (I decide)</option>
                      <option className="bg-[#111]">My manager/boss</option>
                      <option className="bg-[#111]">The board/CEO</option>
                    </select>
                  </div>
                  <p className="text-[10px] text-[#A78BFA] cursor-pointer hover:underline mt-1 ml-1">
                    Helps us know the timeline
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Section 5: Additional Context */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAccordion(5)}
            >
              <h3 className="text-primary font-semibold text-xl">
                5. Additional Context
              </h3>
              {activeAccordion.includes(5) ? (
                <Minus className="w-5 h-5 text-primary" />
              ) : (
                <Plus className="w-5 h-5 text-primary" />
              )}
            </div>
            {activeAccordion.includes(5) && (
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs lg:text-[16px] text-white/80 ml-1">
                    What&apos;s currently breaking with your phone support?
                  </label>
                  <div className="relative">
                    <select
                      style={inputStyle}
                      className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors appearance-none text-gray-300 border border-white/10"
                    >
                      <option className="bg-[#111]">
                        Volume overwhelming our team
                      </option>
                      <option className="bg-[#111]">High costs</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs lg:text-[16px] text-white/80 ml-1">
                    What do customers mostly call about?
                  </label>
                  <div className="flex flex-wrap gap-2 ">
                    {[
                      "Specific workflows",
                      "Compliance requirements",
                      "Integration details",
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setContextAbout(item)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                          contextAbout === item
                            ? "bg-[#7c3aed] text-white"
                            : "bg-[#111] border border-white/10 text-gray-300 hover:bg-white/5"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <textarea
                    placeholder="The more context, the better we can build. But skip this if you prefer"
                    rows={3}
                    style={inputStyle}
                    className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors resize-none border border-white/10 text-white placeholder:text-gray-500"
                  ></textarea>
                </div>
              </div>
            )}
          </div>

          {/* Section 6: Source */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAccordion(6)}
            >
              <h3 className="text-primary font-semibold text-xl">6. Source</h3>
              {activeAccordion.includes(6) ? (
                <Minus className="w-5 h-5 text-primary" />
              ) : (
                <Plus className="w-5 h-5 text-primary" />
              )}
            </div>
            {activeAccordion.includes(6) && (
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs lg:text-[16px] text-white/80 ml-1">
                    How did you find us?
                  </label>
                  <div className="relative">
                    <select
                      style={inputStyle}
                      className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#A78BFA] transition-colors appearance-none text-gray-300 border border-white/10"
                    >
                      <option className="bg-[#111]">LinkedIn</option>
                      <option className="bg-[#111]">Google Search</option>
                      <option className="bg-[#111]">Referral</option>
                      <option className="bg-[#111]">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
      <div className="pt-6">
        <button
          style={{
            background: "linear-gradient(135deg, #7D3BB7 0%, #2C4C91 100%)",
            backdropFilter: "blur(45px)",
            boxShadow: "-9px 11px 48px 0px #BC72F873",
            border: "1.5px solid",
            borderImageSource:
              "linear-gradient(90deg, #C175FC 0%, #6C35BE 100%)",
          }}
          type="submit"
          className="w-full  text-white font-semibold py-4 rounded-full transition-all cursor-pointer!  hover:scale-105! "
        >
          Request Free Demo
        </button>
        <p className="text-center text-sm lg:text-base text-white/80! mt-6">
          Prefer to email first?{" "}
          <a
            href="mailto:hello@spiralink.com"
            className="text-white hover:underline"
          >
            hello@spiralink.com
          </a>
        </p>
      </div>
    </section>
  );
}
