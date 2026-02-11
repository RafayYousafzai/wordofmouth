"use client";
import { Sparkles, Users, Star, Tags, Medal, Trophy } from "lucide-react";
import {
  Card,
  CardBody,
  Chip,
  Avatar,
  AvatarGroup,
  Badge,
} from "@nextui-org/react";

export const WOMHowItWorks = () => {
  const features = [
    {
      icon: Users,
      title: "Follow & Post with Friends",
      description:
        "Snap, share, and scroll through your friends' foodie finds. Get inspired by what everyone is eating.",
      visual: (
        <AvatarGroup isBordered max={3} total={12} size="sm">
          {[10, 11, 12].map((i) => (
            <Avatar
              key={i}
              src={`https://i.pravatar.cc/150?img=${i}`}
              size="sm"
            />
          ))}
        </AvatarGroup>
      ),
    },
    {
      icon: Star,
      title: "Review Dishes",
      description:
        "Rate the exact dishes you try, not just the place. Share bites with photos and tags.",
      visual: (
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4].map((s) => (
            <Star key={s} size={16} className="fill-[#f48c25] text-[#f48c25]" />
          ))}
          <div className="relative">
            <Star size={16} className="text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-[50%]">
              <Star size={16} className="fill-[#f48c25] text-[#f48c25]" />
            </div>
          </div>
          <span className="ml-2 text-xs font-medium text-gray-600">4.8</span>
        </div>
      ),
    },
    {
      icon: Tags,
      title: "Tag & Filter Dishes",
      description:
        "Use tags like 'spicy', 'vegan', or 'date night' to find dishes that match your cravings.",
      visual: (
        <div className="flex flex-wrap gap-1.5">
          {["#Spicy", "#Vegan", "#DateNight"].map((tag) => (
            <Chip
              key={tag}
              size="sm"
              variant="flat"
              className="text-xs bg-gray-100 text-gray-700"
            >
              {tag}
            </Chip>
          ))}
        </div>
      ),
    },
    {
      icon: Medal,
      title: "Become a Food Hero",
      description:
        "The more you post, the more your foodie cred grows. Help others eat better.",
      visual: (
        <div className="flex items-center gap-2">
          <Badge
            content={<Trophy size={10} />}
            color="warning"
            shape="circle"
            size="sm"
          >
            <Avatar src="https://i.pravatar.cc/150?img=33" size="sm" />
          </Badge>
          <span className="text-xs font-medium text-gray-600">
            Elite Taster
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full my-16 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <Chip
            size="sm"
            variant="flat"
            className="mb-3 bg-orange-50 text-orange-600 border border-orange-200"
          >
            How It Works
          </Chip>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#181411] dark:text-white mb-3">
            What Is Word of Mouth?
          </h2>

          <p className="text-base text-[#8a7560] dark:text-[#a09080] leading-relaxed">
            Like Yelp, but better. And with friends. Focus on the dishes you
            love, shared by people you trust.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-white/80 dark:bg-[#2d2218]/80 backdrop-blur-sm border border-[#f48c25]/20 hover:border-[#f48c25]/50 transition-all duration-300"
              shadow="sm"
            >
              <CardBody className="flex flex-row items-start gap-3 sm:gap-4 p-4 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 sm:p-3 bg-gradient-to-br from-[#f48c25]/20 to-[#f48c25]/5 rounded-lg sm:rounded-xl text-[#f48c25] shrink-0">
                    <feature.icon size={20} strokeWidth={2} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-[#181411] dark:text-white truncate">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8a7560] dark:text-[#a09080] leading-relaxed">
                      {feature.description}
                    </p>
                    {feature.visual}
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WOMHowItWorks;
