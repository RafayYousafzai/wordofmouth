"use client";

import { Card, CardBody, Chip } from "@nextui-org/react";
import { Users, Star, MapPin, Sparkles, Heart, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: (
        <Users size={48} className="text-warning-500 dark:text-warning-400" />
      ),
      title: "Follow & Post with Friends",
      description:
        "Connect with friends and share your favorite meals. See what they're eating and get inspired by their food adventures.",
      highlight: "Social",
      accentColor: "from-primary-400 to-primary-600",
      bgGradient:
        "from-primary-50/50 to-primary-100/30 dark:from-primary-950/30 dark:to-primary-900/20",
    },
    {
      icon: (
        <Star size={48} className="text-warning-500 dark:text-warning-400" />
      ),
      title: "Review Dishes",
      description:
        "Rate and review dishes. Help others discover amazing food with your honest feedback.",
      highlight: "Reviews",
      accentColor: "from-warning-400 to-warning-600",
      bgGradient:
        "from-warning-50/50 to-warning-100/30 dark:from-warning-950/30 dark:to-warning-900/20",
    },
    {
      icon: (
        <MapPin size={48} className="text-warning-500 dark:text-warning-400" />
      ),
      title: "Discover Nearby Food via Heatmap",
      description:
        "Explore trending restaurants and dishes in your area with our interactive heatmap feature. Find hidden gems nearby.",
      highlight: "Discover",
      accentColor: "from-success-400 to-success-600",
      bgGradient:
        "from-success-50/50 to-success-100/30 dark:from-success-950/30 dark:to-success-900/20",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-default-50/80 via-background to-default-100/40 dark:from-default-950/50 dark:via-background dark:to-default-900/30"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-warning-200/10 dark:bg-warning-600/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-200/10 dark:bg-primary-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Enhanced Header */}
        <div className="text-center mb-20 space-y-6">
          <Chip
            startContent={<Sparkles className="w-4 h-4" />}
            variant="flat"
            color="warning"
            size="lg"
            className="bg-warning-50/80 dark:bg-warning-950/50 border border-warning-200/50 dark:border-warning-800/50 backdrop-blur-md text-warning-700 dark:text-warning-300 font-semibold"
          >
            Features That Matter
          </Chip>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Why{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-warning-400 via-warning-500 to-warning-600 dark:from-warning-300 dark:via-warning-400 dark:to-warning-500 bg-clip-text text-transparent animate-gradient font-black">
                Word of Mouth?
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-warning-400/20 to-warning-600/20 dark:from-warning-300/15 dark:to-warning-500/15 blur-xl opacity-60 animate-pulse"></div>
            </span>
          </h2>

          <p className="text-xl text-default-600 dark:text-default-400 max-w-3xl mx-auto leading-relaxed">
            Join thousands of food lovers in the ultimate social dining
            experience
          </p>
        </div>

        {/* Enhanced Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-warning-400/20 to-warning-600/20 dark:from-warning-300/10 dark:to-warning-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <Card className="relative h-full hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-0 bg-background/60 dark:bg-background/40 backdrop-blur-xl">
                <CardBody className="p-8 lg:p-10 space-y-6 text-center">
                  {/* Icon Container with Enhanced Background */}
                  <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500`}
                    ></div>
                    <div className="relative bg-background/80 dark:bg-background/60 backdrop-blur-sm rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg">
                      {feature.icon}
                    </div>
                    {/* Floating Highlight Badge */}
                    <Chip
                      size="sm"
                      variant="flat"
                      color="warning"
                      className="absolute -top-2 -right-2 bg-warning-100/90 dark:bg-warning-900/70 text-warning-700 dark:text-warning-300 font-bold text-xs border border-warning-200/50 dark:border-warning-800/50"
                    >
                      {feature.highlight}
                    </Chip>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-warning-600 dark:group-hover:text-warning-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-default-600 dark:text-default-400 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="pt-4">
                    <div
                      className={`h-1 w-16 mx-auto bg-gradient-to-r ${feature.accentColor} rounded-full group-hover:w-24 transition-all duration-500`}
                    ></div>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Heart,
                value: "10K+",
                label: "Happy Users",
                color: "text-danger-500",
              },
              {
                icon: Star,
                value: "50K+",
                label: "Reviews",
                color: "text-warning-500",
              },
              {
                icon: TrendingUp,
                value: "2M+",
                label: "Dish Ratings",
                color: "text-success-500",
              },
              {
                icon: Users,
                value: "500+",
                label: "Cities",
                color: "text-primary-500",
              },
            ].map((stat, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-default-100/80 dark:bg-default-800/50 flex items-center justify-center">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-default-500">{stat.label}</div>
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
