import React from "react";
import {
  Utensils,
  ChefHat,
  Map,
  Users,
  BrainCircuit,
  BadgeCheck,
  ArrowRight,
  Globe,
  Share2,
  AtSign,
  Menu,
} from "lucide-react";

const WOMFounders = () => {
  return (
    <div className="font-sans text-[#181411] dark:text-white bg-[#f8f7f5] dark:bg-[#221910] transition-colors duration-300 min-h-screen flex flex-col">
      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-16 w-full">
        {/* Founders Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <span className="text-[#f48c25] font-bold tracking-widest text-xs uppercase mb-3 block">
              The People
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#181411] dark:text-white">
              Meet the Minds Behind the Menu
            </h2>
            <p className="text-[#8a7560] dark:text-[#c4b5a6] max-w-2xl mx-auto text-lg">
              We're on a mission to make every meal a shared adventure. Meet the
              foodies building the future of social dining.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Allen - CEO */}
            <div className="group relative bg-white dark:bg-[#2d2218] rounded-xl p-6 shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#f48c25]/20">
              <div className="aspect-square w-full rounded-lg overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  alt="Allen - CEO"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-[#181411] dark:text-white">
                    Allen
                  </h3>
                  <span className="px-3 py-1 bg-[#f48c25]/10 text-[#f48c25] rounded-full text-xs font-bold uppercase tracking-wider">
                    CEO & Vision
                  </span>
                </div>
                <p className="text-lg italic text-[#5c4d3e] dark:text-[#d1c2b4] mb-4">
                  "Leading the Feast & Turning Appetites into Adventures"
                </p>
                <div className="flex items-center gap-3 p-3 bg-[#f8f7f5] dark:bg-[#3d2e1f] rounded-lg border border-[#eee] dark:border-[#4d3c2b]">
                  <Utensils className="text-[#f48c25]" size={20} />
                  <p className="text-sm font-medium text-[#181411] dark:text-white">
                    <span className="text-[#8a7560] dark:text-[#a09080]">
                      Favorite Dish:
                    </span>{" "}
                    Chicken Cutlet Sandwiches
                  </p>
                </div>
              </div>
            </div>

            {/* Jorge - CTO */}
            <div className="group relative bg-white dark:bg-[#2d2218] rounded-xl p-6 shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#f48c25]/20">
              <div className="aspect-square w-full rounded-lg overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  alt="Jorge - CTO"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-[#181411] dark:text-white">
                    Jorge
                  </h3>
                  <span className="px-3 py-1 bg-[#f48c25]/10 text-[#f48c25] rounded-full text-xs font-bold uppercase tracking-wider">
                    CTO & Engineering
                  </span>
                </div>
                <p className="text-lg italic text-[#5c4d3e] dark:text-[#d1c2b4] mb-4">
                  "Engineering the Future of Food, One Line at a Time"
                </p>
                <div className="flex items-center gap-3 p-3 bg-[#f8f7f5] dark:bg-[#3d2e1f] rounded-lg border border-[#eee] dark:border-[#4d3c2b]">
                  <ChefHat className="text-[#f48c25]" size={20} />
                  <p className="text-sm font-medium text-[#181411] dark:text-white">
                    <span className="text-[#8a7560] dark:text-[#a09080]">
                      Favorite Dish:
                    </span>{" "}
                    Street Tacos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Next Section */}
        <section className="relative rounded-2xl overflow-hidden py-20 px-6 md:px-12 bg-[#f48c25]/5 dark:bg-[#f48c25]/10 border border-[#f48c25]/20">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <ChefHat size={200} className="text-[#181411] dark:text-white" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="mb-12">
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
                  icon: Map,
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

            {/* <div className="mt-12 text-center">
              <button className="inline-flex items-center gap-2 font-bold text-[#f48c25] hover:underline group">
                View Detailed Roadmap
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default WOMFounders;
