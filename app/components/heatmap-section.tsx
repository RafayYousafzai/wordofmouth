"use client";

import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

export default function HeatmapSection() {
  return (
    <section id="app-features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Food Discovery on the{" "}
              <span className="bg-gradient-to-r from-[#FFC94A] to-[#FFD700] bg-clip-text text-transparent">
                Map
              </span>
            </h2>
            <p className="text-lg text-default-600">
              Our innovative heatmap feature shows you where the best food is
              happening in real-time. See trending restaurants, popular dishes,
              and discover new places based on community activity. The warmer
              the color, the more buzz around that location!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-default-600">
                  Hot spots - Most popular right now
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-[#FFC94A] rounded-full"></div>
                <span className="text-default-600">
                  Trending - Growing popularity
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-default-600">
                  Hidden gems - Local favorites
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/heatmap.png"
              alt="Heatmap Feature"
              width={400}
              height={500}
              className="rounded-2xl"
            />

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFC94A]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FFD700]/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
