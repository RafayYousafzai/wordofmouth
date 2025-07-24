"use client";

import { Card, CardBody, Avatar, Chip } from "@nextui-org/react";
import { Crown, Heart, Sparkles, Users } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Jorge",
      role: "CEO & Co-Founder",
      image: "/jorje.avif",
      quote:
        "Food brings people together, and technology should make those connections even stronger.",
      specialty: "Vision & Strategy",
      icon: <Crown className="w-5 h-5" />,
      gradient: "from-primary-400 to-primary-600",
      bgGradient:
        "from-primary-50/50 to-primary-100/30 dark:from-primary-950/30 dark:to-primary-900/20",
    },
    {
      name: "Alen",
      role: "CEO & Co-Founder",
      image: "/allen.png",
      quote:
        "Building the future of social food discovery, one dish at a time.",
      specialty: "Innovation & Growth",
      icon: <Heart className="w-5 h-5" />,
      gradient: "from-warning-400 to-warning-600",
      bgGradient:
        "from-warning-50/50 to-warning-100/30 dark:from-warning-950/30 dark:to-warning-900/20",
    },
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-default-50/80 via-background to-default-100/40 dark:from-default-950/50 dark:via-background dark:to-default-900/30"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary-200/10 dark:bg-primary-600/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-warning-200/10 dark:bg-warning-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Enhanced Header */}
        <div className="text-center mb-20 space-y-6">
          <Chip
            startContent={<Users className="w-4 h-4" />}
            variant="flat"
            color="warning"
            size="lg"
            className="bg-warning-50/80 dark:bg-warning-950/50 border border-warning-200/50 dark:border-warning-800/50 backdrop-blur-md text-warning-700 dark:text-warning-300 font-semibold"
          >
            Leadership Team
          </Chip>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Meet Our{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-warning-400 via-warning-500 to-warning-600 dark:from-warning-300 dark:via-warning-400 dark:to-warning-500 bg-clip-text text-transparent animate-gradient font-black">
                Founders
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-warning-400/20 to-warning-600/20 dark:from-warning-300/15 dark:to-warning-500/15 blur-xl opacity-60 animate-pulse"></div>
              <Sparkles className="absolute -top-6 -right-8 w-8 h-8 text-warning-500 dark:text-warning-400 animate-pulse" />
            </span>
          </h2>

          <p className="text-xl text-default-600 dark:text-default-400 max-w-3xl mx-auto leading-relaxed">
            The visionaries behind Word of Mouth, bringing passion for food and
            technology together
          </p>
        </div>

        {/* Team Cards - Centered Layout for 2 members */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative">
                {/* Card Glow Effect */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 dark:group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-700`}
                ></div>

                <Card className="relative hover:scale-105 transition-all duration-700 shadow-xl hover:shadow-2xl border-0 bg-background/60 dark:bg-background/40 backdrop-blur-xl h-full">
                  <CardBody className="p-8 lg:p-10 space-y-8 text-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${member.bgGradient} rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700`}
                    ></div>

                    {/* Avatar with Enhanced Styling */}
                    <div className="relative">
                      <div
                        className={`absolute -inset-3 bg-gradient-to-r ${member.gradient} rounded-full opacity-0 group-hover:opacity-30 dark:group-hover:opacity-20 blur-lg transition-all duration-700`}
                      ></div>
                      <div
                        className={`absolute -inset-2 bg-gradient-to-r ${member.bgGradient} rounded-full`}
                      ></div>
                      <Avatar
                        src={member.image}
                        className="w-32 h-32 mx-auto group-hover:scale-110 transition-all duration-700 relative z-10 shadow-2xl"
                        isBordered
                      />
                      {/* Role Icon Badge */}
                      <div
                        className={`absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}
                      >
                        {member.icon}
                      </div>
                    </div>

                    {/* Name and Role */}
                    <div className="space-y-3">
                      <h3 className="text-3xl font-black text-foreground group-hover:text-warning-600 dark:group-hover:text-warning-400 transition-colors duration-500">
                        {member.name}
                      </h3>
                      <div className="space-y-2">
                        <p
                          className={`text-lg font-bold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
                        >
                          {member.role}
                        </p>
                        <Chip
                          size="sm"
                          variant="flat"
                          className={`bg-gradient-to-r ${member.bgGradient} text-foreground/80 font-medium`}
                        >
                          {member.specialty}
                        </Chip>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="relative">
                      <div className="text-6xl text-warning-200/30 dark:text-warning-800/30 font-serif absolute -top-4 -left-2">
                        "
                      </div>
                      <p className="text-default-600 dark:text-default-400 text-lg leading-relaxed italic font-medium relative z-10 px-4">
                        {member.quote}
                      </p>
                      <div className="text-6xl text-warning-200/30 dark:text-warning-800/30 font-serif absolute -bottom-8 -right-2 rotate-180">
                        "
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="pt-4">
                      <div
                        className={`h-1 w-20 mx-auto bg-gradient-to-r ${member.gradient} rounded-full group-hover:w-32 transition-all duration-700`}
                      ></div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: "5+", label: "Years Experience", icon: Crown },
              { value: "2", label: "Co-Founders", icon: Users },
              { value: "∞", label: "Passion for Food", icon: Heart },
            ].map((stat, index) => (
              <div key={index} className="space-y-4 group">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-warning-100/80 to-warning-200/80 dark:from-warning-900/50 dark:to-warning-800/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className="w-8 h-8 text-warning-600 dark:text-warning-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-default-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </section>
  );
}
