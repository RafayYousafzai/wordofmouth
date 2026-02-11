"use client";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  ChefHat,
  Map as MapIcon,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Card, CardBody, Chip } from "@nextui-org/react";

export default function WhatsCooking() {
  const features = [
    {
      icon: BrainCircuit,
      title: "AI Recommendations",
      desc: "Discover dishes based on your unique flavor profile.",
      status: "Beta",
    },
    {
      icon: Users,
      title: "Group Dining Polls",
      desc: "Decide where to eat with friends using real-time voting.",
      status: "Soon",
    },
    {
      icon: MapIcon,
      title: "Global Foodie Map",
      desc: "Expansion to 50+ new cities with community hotspots.",
      status: "Q2 2025",
    },
    {
      icon: BadgeCheck,
      title: "Verified Chef Reviews",
      desc: "Expert insights from professional culinary masters.",
      status: "Progress",
    },
  ];

  return (
    <section
      id="whats-next"
      className="relative min-h-[90vh] rounded-2xl overflow-hidden bg-gradient-to-br from-[#f48c25]/5 via-[#f48c25]/10 to-[#f48c25]/5 dark:from-[#f48c25]/10 dark:via-[#1a1512] dark:to-[#f48c25]/10 border border-[#f48c25]/20 flex items-center justify-center p-4 sm:p-6 md:p-12"
    >
      {/* Background - Hidden on mobile */}
      <div className="hidden md:block absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
        <ChefHat size={300} className="text-[#181411] dark:text-white" />
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10 py-8 md:py-0">
        {/* Header */}
        <div className="text-center mb-6 md:mb-10">
          <Chip
            size="sm"
            variant="flat"
            color="warning"
            className="mb-3 bg-[#f48c25]/10 text-[#f48c25] border-none"
          >
            Roadmap 2025
          </Chip>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-[#181411] dark:text-white">
            <span>What's Cooking</span>
            <ChefHat className="text-[#f48c25]" size={28} strokeWidth={2.5} />
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#8a7560] dark:text-[#c4b5a6] max-w-xl mx-auto px-2 sm:px-0">
            Our roadmap for the coming months. We're constantly refining the
            recipe for the perfect social food app.
          </p>
        </div>

        {/* Features Grid - Single column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              isPressable
              className="bg-white/80 dark:bg-[#2d2218]/80 backdrop-blur-sm border border-[#f48c25]/20 hover:border-[#f48c25]/50 transition-all duration-300"
            >
              <CardBody className="flex flex-row items-start gap-3 sm:gap-4 p-4 sm:p-6">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-[#f48c25]/20 to-[#f48c25]/5 rounded-lg sm:rounded-xl text-[#f48c25] shrink-0">
                  <feature.icon
                    size={20}
                    className="sm:w-6 sm:h-6"
                    strokeWidth={2}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <h4 className="font-bold text-sm sm:text-base md:text-lg text-[#181411] dark:text-white truncate">
                      {feature.title}
                    </h4>
                    <Chip
                      size="sm"
                      variant="flat"
                      className="text-[10px] bg-[#f48c25]/10 text-[#f48c25] border-none font-medium w-fit"
                    >
                      {feature.status}
                    </Chip>
                  </div>
                  <p className="text-xs sm:text-sm text-[#8a7560] dark:text-[#a09080] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-12 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#f48c25] text-white text-sm sm:text-base rounded-full font-semibold hover:bg-[#e07d1a] transition-all active:scale-95"
          >
            Help Shape the Next Version
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
