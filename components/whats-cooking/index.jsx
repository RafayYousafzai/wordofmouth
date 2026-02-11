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
      title: "AI-Powered Recommendations",
      desc: "Discover dishes based on your unique flavor profile and past reviews.",
      status: "Beta",
    },
    {
      icon: Users,
      title: "Group Dining Polls",
      desc: "Decide where to eat with friends effortlessly using real-time voting.",
      status: "Coming Soon",
    },
    {
      icon: MapIcon,
      title: "Global Foodie Map",
      desc: "Expansion to 50+ new cities with interactive community hotspots.",
      status: "Q2 2025",
    },
    {
      icon: BadgeCheck,
      title: "Verified Chef Reviews",
      desc: "Expert insights from professional culinary masters in your city.",
      status: "In Progress",
    },
  ];

  return (
    <section
      id="whats-next"
      className="relative h-[90vh] rounded-2xl overflow-hidden bg-gradient-to-br from-[#f48c25]/5 via-[#f48c25]/10 to-[#f48c25]/5 dark:from-[#f48c25]/10 dark:via-[#1a1512] dark:to-[#f48c25]/10 border border-[#f48c25]/20 flex items-center justify-center p-6 md:p-12"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
        <ChefHat size={300} className="text-[#181411] dark:text-white" />
      </div>
      <div className="absolute bottom-0 left-0 p-8 opacity-[0.03] pointer-events-none rotate-180">
        <ChefHat size={200} className="text-[#f48c25]" />
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Chip
            variant="flat"
            color="warning"
            className="mb-4 bg-[#f48c25]/10 text-[#f48c25] border-none"
          >
            Roadmap 2025
          </Chip>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center justify-center gap-3 text-[#181411] dark:text-white">
            What's Cooking
            <ChefHat
              className="text-[#f48c25] animate-bounce"
              size={40}
              strokeWidth={2.5}
            />
          </h2>

          <p className="text-lg md:text-xl text-[#8a7560] dark:text-[#c4b5a6] max-w-2xl mx-auto leading-relaxed">
            Our roadmap for the coming months. We're constantly refining the
            recipe for the perfect social food app.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              isPressable
              className="bg-white/80 dark:bg-[#2d2218]/80 backdrop-blur-sm border border-[#f48c25]/20 hover:border-[#f48c25]/50 hover:shadow-lg hover:shadow-[#f48c25]/10 transition-all duration-300 group"
            >
              <CardBody className="flex flex-row items-start gap-4 p-6">
                <div className="p-3 bg-gradient-to-br from-[#f48c25]/20 to-[#f48c25]/5 rounded-xl text-[#f48c25] shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={26} strokeWidth={2} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-lg text-[#181411] dark:text-white">
                      {feature.title}
                    </h4>
                    <Chip
                      size="sm"
                      variant="flat"
                      className="text-[10px] bg-[#f48c25]/10 text-[#f48c25] border-none font-medium"
                    >
                      {feature.status}
                    </Chip>
                  </div>
                  <p className="text-sm text-[#8a7560] dark:text-[#a09080] leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f48c25] text-white rounded-full font-semibold hover:bg-[#e07d1a] transition-all duration-300 hover:gap-3 hover:shadow-lg hover:shadow-[#f48c25]/25 group"
          >
            Help Shape the Next Version
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
