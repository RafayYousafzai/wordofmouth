import React from "react";
import {
  Utensils,
  BadgeCheck,
  TrendingUp,
  Star,
  Search,
  Home,
  Compass,
  Plus,
  Users,
  User,
  ThumbsUp,
  Share2,
  Globe,
} from "lucide-react";

const WOMHome = () => {
  // Inline styles for the background pattern to avoid external CSS files
  const patternStyle = {
    backgroundColor: "transparent",
    backgroundImage: `radial-gradient(#f48c25 0.5px, transparent 0.5px), radial-gradient(#f48c25 0.5px, #f8f7f5 0.5px)`,
    backgroundSize: "20px 20px",
    backgroundPosition: "0 0, 10px 10px",
    opacity: 0.05,
  };

  return (
    <div className="font-sans text-[#181411] dark:text-white bg-[#f8f7f5] dark:bg-[#221910] transition-colors duration-300 min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Texture Layer */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={patternStyle}
      />

      {/* Hero Content Section */}
      <main className="flex-grow flex flex-col justify-center max-w-[1280px] mx-auto px-6 lg:px-10 py-12 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Copy and Social Proof */}
          <div className="flex flex-col items-start gap-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f48c25]/10 border border-[#f48c25]/20 rounded-full">
              <BadgeCheck
                size={16}
                className="text-[#f48c25]"
                fill="currentColor"
              />
              <span className="text-[#f48c25] text-xs font-bold uppercase tracking-wider">
                Voted #1 Food Discovery App
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#181411] dark:text-white">
                Follow your foodie friends,{" "}
                <span className="text-[#f48c25]">rate dishes</span>, and explore
                real reviews.
              </h1>
              <p className="text-lg text-[#8a7560] dark:text-gray-400 max-w-[540px] leading-relaxed">
                Stop guessing what to order. Join a community of thousands of
                foodies sharing authentic reviews on specific dishes at
                restaurants near you.
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="flex items-center gap-3 bg-[#181411] dark:bg-white text-white dark:text-[#181411] px-6 py-3 rounded-xl transition-transform active:scale-95 shadow-lg hover:shadow-xl">
                {/* Apple Icon SVG */}
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.62 4.37-1.54 1.81.07 3.48 1.08 4.25 2.56-3.8 1.77-3.15 6.38 1.48 8.23-.33 1.1-1.25 3.05-2.18 4.98zM15.02 5.51C14.7 3.25 16.65 1.5 19.04 1c.2 2.4-2.13 4.67-4.02 4.51z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase font-bold opacity-70">
                    Download on
                  </span>
                  <span className="text-lg font-bold">App Store</span>
                </div>
              </button>

              <button className="flex items-center gap-3 bg-[#181411] dark:bg-white text-white dark:text-[#181411] px-6 py-3 rounded-xl transition-transform active:scale-95 shadow-lg hover:shadow-xl">
                {/* Play Store Icon SVG */}
                <svg
                  className="w-7 h-7 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.54,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase font-bold opacity-70">
                    Get it on
                  </span>
                  <span className="text-lg font-bold">Google Play</span>
                </div>
              </button>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-4">
              {[
                {
                  label: "Hungry Users",
                  val: "10,000+",
                  change: "15% this week",
                  icon: TrendingUp,
                },
                {
                  label: "Dish Reviews",
                  val: "50,000+",
                  change: "22% monthly",
                  icon: TrendingUp,
                },
                {
                  label: "Avg Rating",
                  val: "4.9/5",
                  change: "Top rated app",
                  icon: Star,
                  iconColor: "text-[#f48c25] fill-current",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-white/5 border border-[#e6e0db] dark:border-white/10 p-5 rounded-2xl shadow-sm"
                >
                  <p className="text-sm font-medium text-[#8a7560] dark:text-gray-400">
                    {stat.label}
                  </p>
                  <h3 className="text-2xl font-extrabold mt-1">{stat.val}</h3>
                  <div
                    className={`flex items-center gap-1 text-[#07880e] text-xs font-bold mt-2`}
                  >
                    <stat.icon size={14} className={stat.iconColor || ""} />
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: App Mockup */}
          <div className="relative flex justify-center order-1 lg:order-2">
            {/* Decor Circles */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#f48c25]/20 blur-[80px] rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#f48c25]/10 blur-[60px] rounded-full"></div>

            {/* Mobile Mockup Container */}
            <div className="relative w-full max-w-[320px] aspect-[9/19] bg-white dark:bg-[#1c140d] border-[8px] border-[#181411] dark:border-[#3a2f26] rounded-[3rem] shadow-2xl overflow-hidden ring-4 ring-[#f48c25]/20">
              {/* Top Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#181411] dark:bg-[#3a2f26] rounded-b-2xl z-20"></div>

              {/* App Content Mockup */}
              <div className="h-full flex flex-col pt-8 bg-gray-50 dark:bg-[#1c140d]">
                {/* Header */}
                <div className="px-5 py-4 flex items-center justify-between">
                  <span className="text-lg font-extrabold text-[#f48c25]">
                    WOM
                  </span>
                  <Search className="text-gray-800 dark:text-white" size={20} />
                </div>

                {/* Feed Scroll */}
                <div className="flex-1 overflow-y-auto px-4 flex flex-col gap-4 pb-10 scrollbar-hide">
                  {/* Card 1 */}
                  <div className="bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm overflow-hidden">
                    {/* Placeholder for Food Image */}
                    <div className="h-40 w-full bg-gray-200 dark:bg-gray-700 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <Utensils size={32} />
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                          Truffle Tagliatelle
                        </h4>
                        <div className="flex items-center text-[#f48c25]">
                          <Star size={12} fill="currentColor" />
                          <span className="text-xs font-bold ml-1">4.8</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-gray-200" />
                        <p className="text-[10px] text-[#8a7560] dark:text-gray-400">
                          <strong>Alex J.</strong> reviewed at Trattoria
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm overflow-hidden">
                    {/* Placeholder for Food Image */}
                    <div className="h-40 w-full bg-gray-200 dark:bg-gray-700 relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <Utensils size={32} />
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                          Spicy Al Pastor
                        </h4>
                        <div className="flex items-center text-[#f48c25]">
                          <Star size={12} fill="currentColor" />
                          <span className="text-xs font-bold ml-1">4.9</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-gray-200" />
                        <p className="text-[10px] text-[#8a7560] dark:text-gray-400">
                          <strong>Maya K.</strong> reviewed at Taco House
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nav Tab */}
                <div className="h-16 border-t border-gray-200 dark:border-white/10 flex justify-around items-center px-4 bg-white dark:bg-[#1c140d]">
                  <Home
                    className="text-[#f48c25]"
                    size={24}
                    fill="currentColor"
                  />
                  <Compass className="text-gray-400" size={24} />
                  <div className="size-10 rounded-full bg-[#f48c25] flex items-center justify-center text-white -mt-8 shadow-lg ring-4 ring-white dark:ring-[#1c140d]">
                    <Plus size={24} />
                  </div>
                  <Users className="text-gray-400" size={24} />
                  <User className="text-gray-400" size={24} />
                </div>
              </div>
            </div>

            {/* Float Tag */}
            <div className="absolute top-24 -right-8 lg:-right-12 bg-white dark:bg-[#221910] p-4 rounded-2xl shadow-xl border border-[#e6e0db] dark:border-white/10 hidden md:flex items-center gap-3 animate-bounce-slow">
              <div className="size-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <ThumbsUp size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 dark:text-white">
                  New Review!
                </p>
                <p className="text-[10px] text-[#8a7560]">
                  Sarah just rated "Miso Ramen"
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WOMHome;
