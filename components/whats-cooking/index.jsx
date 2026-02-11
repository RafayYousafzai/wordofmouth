import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  ChefHat,
  Map as MapIcon,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function WhatsCooking() {
  return (
    <div>
      {/* What's Next Section */}
      <section
        id="whats-next"
        className="relative h-[90vh] rounded-2xl overflow-hidden py-20 px-6 md:px-12 bg-[#f48c25]/5 dark:bg-[#f48c25]/10 border border-[#f48c25]/20"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <ChefHat size={200} className="text-[#181411] dark:text-white" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="my-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-4 text-[#181411] dark:text-white">
              What's Cooking
              <ChefHat className="text-[#f48c25] animate-pulse" size={36} />
            </h2>
            <p className="text-lg text-[#8a7560] dark:text-[#c4b5a6]">
              Our roadmap for the coming months. We're constantly refining the
              recipe for the perfect social food app.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: BrainCircuit,
                title: "AI-Powered Recommendations",
                desc: "Discover dishes based on your unique flavor profile and past reviews.",
              },
              {
                icon: Users,
                title: "Group Dining Polls",
                desc: "Decide where to eat with friends effortlessly using real-time voting.",
              },
              {
                icon: MapIcon,
                title: "Global Foodie Map",
                desc: "Expansion to 50+ new cities with interactive community hotspots.",
              },
              {
                icon: BadgeCheck,
                title: "Verified Chef Reviews",
                desc: "Expert insights from professional culinary masters in your city.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 bg-white dark:bg-[#2d2218] rounded-xl shadow-sm border border-transparent hover:border-[#f48c25]/30 transition-colors"
              >
                <div className="p-2 bg-[#f48c25]/10 rounded-lg text-[#f48c25] shrink-0">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-[#181411] dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-[#8a7560] dark:text-[#a09080]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 font-bold text-[#f48c25] hover:underline group"
            >
              Help Shape the Next Version
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
