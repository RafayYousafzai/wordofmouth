"use client";

import { Button, Card } from "@nextui-org/react";
import { Download, Play, Star, Users, Heart } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const handleDownloadClick = () => {
    window.open(
      "https://apps.apple.com/us/app/word-of-mouth-foodie/id6744751812",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FFC94A]/10 via-transparent to-[#FFD700]/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFC94A]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FFC94A]/10 to-[#FFD700]/10 border border-[#FFC94A]/20 backdrop-blur-sm">
              <Star className="w-4 h-4 text-[#FFC94A] fill-current" />
              <span className="text-sm font-medium text-[#FFC94A]">
                #1 Social Food App
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Discover Food
                <br />
                Through{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#FFC94A] via-[#FFD700] to-[#FFC94A] bg-clip-text text-transparent animate-gradient">
                    Friends
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FFC94A] to-[#FFD700] blur-lg opacity-30 animate-pulse"></div>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-default-600 max-w-xl leading-relaxed font-light">
                Follow friends, share your meals, and explore dishes near you —
                all in one beautiful social food experience.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 py-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#FFC94A]" />
                <span className="font-semibold">10K+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-[#FFC94A] fill-current" />
                <span className="font-semibold">50K+ Reviews</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={handleDownloadClick}
                className="bg-gradient-to-r from-[#FFC94A] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFC94A] text-black font-semibold px-10 py-3 shadow-2xl hover:shadow-[#FFC94A]/25 transition-all duration-300 hover:scale-105 rounded-2xl"
                startContent={<Download size={22} />}
              >
                Download Free
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-2 border-[#FFC94A]/50 text-[#FFC94A] hover:bg-[#FFC94A]/10 hover:border-[#FFC94A] px-10 py-3 font-semibold transition-all duration-300 hover:scale-105 rounded-2xl backdrop-blur-sm"
                startContent={<Play size={22} />}
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Enhanced Image Display */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main Image Container */}
            <div className="relative group">
              {/* Floating Animation Container */}
              <div className="relative transform transition-all duration-700 hover:scale-105 animate-float">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#FFC94A]/20 to-[#FFD700]/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Phone Mockup Frame */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-[3rem] shadow-2xl">
                  {/* Screen Bezel */}
                  <div className="bg-black rounded-[2.5rem] p-1">
                    {/* Notch */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-10"></div>

                    {/* Screen Content */}
                    <div className="relative overflow-hidden rounded-[2rem] bg-white">
                      <Image
                        src="/hero.jpg"
                        alt="Word of Mouth App Interface"
                        width={320}
                        height={640}
                        className="w-full h-full object-cover rounded-[2rem]"
                        priority
                      />

                      {/* Screen Overlay for better integration */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-black/5 rounded-[2rem]"></div>
                    </div>
                  </div>

                  {/* Phone Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent rounded-[3rem] pointer-events-none"></div>
                </div>
              </div>

              {/* Floating UI Elements */}
              <div className="absolute -top-8 -left-8 animate-bounce-slow">
                <Card className="p-3 bg-white/90 backdrop-blur-sm shadow-xl border-0">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live Reviews</span>
                  </div>
                </Card>
              </div>

              <div className="absolute -bottom-8 -right-8 animate-bounce-slow delay-1000">
                <Card className="p-3 bg-white/90 backdrop-blur-sm shadow-xl border-0">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#FFC94A] fill-current" />
                    <span className="text-sm font-medium">4.9 Rating</span>
                  </div>
                </Card>
              </div>

              {/* Decorative Blobs */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-[#FFC94A]/10 to-[#FFD700]/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-r from-[#FFD700]/10 to-[#FFC94A]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(1deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
