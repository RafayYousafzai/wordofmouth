"use client";

import { Button, Card, CardBody, Chip } from "@nextui-org/react";
import { Download, Star, Users, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const handleDownloadClick = () => {
    window.open(
      "https://apps.apple.com/us/app/word-of-mouth-foodie/id6744751812",
      "_blank",
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-warning-200/20 via-transparent to-warning-300/10 dark:from-warning-400/10 dark:via-transparent dark:to-warning-500/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-warning-200/10 dark:bg-warning-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-warning-300/10 dark:bg-warning-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-warning-100/5 to-warning-200/5 dark:from-warning-600/5 dark:to-warning-700/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-12 fade-in-up">
            {/* Enhanced Badge */}
            <Chip
              startContent={<Star className="w-4 h-4 fill-current" />}
              variant="flat"
              color="warning"
              size="lg"
              className="bg-warning-50/80 dark:bg-warning-950/50 border border-warning-200/50 dark:border-warning-800/50 backdrop-blur-md text-warning-700 dark:text-warning-300 font-semibold px-4 py-2"
            >
              #1 Social Food App
            </Chip>

            {/* Main Heading */}
            <div className="space-y-8">
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="block text-foreground">Discover Food</span>
                <span className="block text-foreground">Through </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-warning-400 via-warning-500 to-warning-600 dark:from-warning-300 dark:via-warning-400 dark:to-warning-500 bg-clip-text text-transparent animate-gradient font-black">
                    Friends
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-warning-400/30 to-warning-600/30 dark:from-warning-300/20 dark:to-warning-500/20 blur-2xl opacity-60 animate-pulse"></div>
                  <Sparkles className="absolute -top-4 -right-6 w-8 h-8 text-warning-500 dark:text-warning-400 animate-pulse" />
                </span>
              </h1>

              <p className="text-2xl md:text-3xl text-default-600 dark:text-default-400 max-w-2xl leading-relaxed font-light">
                Follow friends, share your meals, and explore dishes near you —
                all in one beautiful social food experience.
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="flex items-center gap-12 py-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-warning-100/80 dark:bg-warning-900/50">
                  <Users className="w-6 h-6 text-warning-600 dark:text-warning-400" />
                </div>
                <div>
                  <div className="font-bold text-xl text-foreground">10K+</div>
                  <div className="text-sm text-default-500">Users</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-warning-100/80 dark:bg-warning-900/50">
                  <Heart className="w-6 h-6 text-warning-600 dark:text-warning-400 fill-current" />
                </div>
                <div>
                  <div className="font-bold text-xl text-foreground">50K+</div>
                  <div className="text-sm text-default-500">Reviews</div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button
                size="lg"
                onClick={handleDownloadClick}
                className="bg-gradient-to-r from-warning-400 to-warning-600 hover:from-warning-500 hover:to-warning-700 text-white font-bold px-12 py-4 h-auto shadow-2xl hover:shadow-warning-500/25 dark:hover:shadow-warning-400/25 transition-all duration-300 hover:scale-105"
                startContent={<Download size={24} />}
                radius="full"
              >
                <span className="text-lg">Download Free</span>
              </Button>
            </div>
          </div>

          {/* Right Content - Fixed Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Floating Animation Container */}
              <div className="relative transform transition-all duration-700 hover:scale-105 animate-float">
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-8 bg-gradient-to-r from-warning-400/20 to-warning-600/20 dark:from-warning-300/15 dark:to-warning-500/15 rounded-[4rem] blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Phone Mockup Frame - Fixed */}
                <div className="relative bg-gradient-to-br from-gray-900 to-black dark:from-gray-800 dark:to-gray-900 p-3 rounded-[3.5rem] shadow-2xl">
                  {/* Screen Container - Properly sized */}
                  <div
                    className="relative bg-white dark:bg-gray-100 rounded-[3rem] overflow-hidden"
                    style={{ width: "280px", height: "580px" }}
                  >
                    {/* Dynamic Island/Notch - Positioned correctly */}
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 flex items-center justify-center">
                      <div className="w-14 h-1 bg-gray-800 rounded-full"></div>
                    </div>

                    {/* App Content - Positioned below notch */}
                    <div className="relative w-full h-full pt-12">
                      <Image
                        src="/hero.jpg"
                        alt="Word of Mouth App Interface"
                        width={280}
                        height={520}
                        className="w-full h-full object-cover"
                        priority
                      />

                      {/* Subtle Screen Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5"></div>
                    </div>
                  </div>

                  {/* Phone Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent rounded-[3.5rem] pointer-events-none"></div>
                </div>
              </div>

              {/* Enhanced Floating UI Elements */}
              <div className="absolute -top-8 -left-8 animate-bounce-slow">
                <Card className="shadow-2xl border-0 bg-background/80 backdrop-blur-xl">
                  <CardBody className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-success-500 rounded-full animate-pulse shadow-lg shadow-success-500/50"></div>
                      <span className="font-semibold text-foreground">
                        Live Reviews
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              <div className="absolute -bottom-8 -right-8 animate-bounce-slow delay-1000">
                <Card className="shadow-2xl border-0 bg-background/80 backdrop-blur-xl">
                  <CardBody className="p-4">
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-warning-500 fill-current" />
                      <span className="font-semibold text-foreground">
                        4.9 Rating
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              <div className="absolute top-1/2 -right-16 animate-bounce-slow delay-500">
                <Card className="shadow-2xl border-0 bg-background/80 backdrop-blur-xl">
                  <CardBody className="p-3">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 bg-warning-400 rounded-full border-2 border-background"></div>
                        <div className="w-6 h-6 bg-success-400 rounded-full border-2 border-background"></div>
                        <div className="w-6 h-6 bg-primary-400 rounded-full border-2 border-background"></div>
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        +5K Foodies
                      </span>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-r from-warning-200/20 to-warning-400/20 dark:from-warning-600/10 dark:to-warning-800/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-24 -left-24 w-40 h-40 bg-gradient-to-r from-warning-300/20 to-warning-500/20 dark:from-warning-700/10 dark:to-warning-900/10 rounded-full blur-3xl animate-pulse delay-700"></div>
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
            transform: translateY(-25px) rotate(1deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
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
          background-size: 300% 300%;
          animation: gradient 4s ease infinite;
        }

        .fade-in-up {
          animation: fadeInUp 1.2s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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
