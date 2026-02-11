import { Sparkles, Users, Star, Tags, Medal, Trophy } from "lucide-react";

export const WOMHowItWorks = () => {
  return (
    <div className="font-sans text-[#181411] dark:text-white bg-[#f8f7f5] dark:bg-[#221910] antialiased transition-colors duration-300 min-h-screen flex flex-col relative overflow-x-hidden">
      <main className="flex-1">
        {/* Hero/Intro Section */}
        <section
          id="how-it-works"
          className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f48c25]/10 text-[#f48c25] mb-6 border border-[#f48c25]/20">
            <Sparkles size={14} fill="currentColor" />
            <span className="text-xs font-bold uppercase tracking-wider">
              The Future of Food Reviews
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-[#181411] to-[#5e4d3e] dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            What Is Word of Mouth?
          </h1>
          <p className="text-lg md:text-xl text-[#8a7560] dark:text-gray-400 max-w-[720px] mx-auto leading-relaxed">
            It is like Yelp, but better. And with friends. WOM focuses on the
            specific dishes you love, shared by the people you trust.
          </p>
        </section>

        {/* Features Grid (How It Works) */}
        <section id="features" className="max-w-[1200px] mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1: Social */}
            <div className="group flex flex-col gap-6 p-8 rounded-3xl border border-[#e6e0db] dark:border-[#3d2f21] bg-white dark:bg-[#2d2116] hover:shadow-2xl hover:border-[#f48c25]/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 size-32 bg-[#f48c25]/5 rounded-full blur-3xl group-hover:bg-[#f48c25]/10 transition-colors"></div>
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#fef1e4] dark:bg-[#f48c25]/20 text-[#f48c25]">
                <Users size={28} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold leading-tight">
                  Follow & Post with Friends
                </h3>
                <p className="text-[#8a7560] dark:text-gray-400 text-base leading-relaxed">
                  Snap, share, and scroll through your friends' foodie finds.
                  Get inspired (or just really hungry) by what everyone is
                  eating, from taco trucks to truffle pasta.
                </p>
              </div>
              <div className="mt-auto pt-4 flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="size-10 rounded-full border-2 border-white dark:border-[#2d2116] bg-gray-200 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/150?img=${i + 10}`}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="size-10 rounded-full bg-[#f8f7f5] dark:bg-[#221910] border-2 border-white dark:border-[#2d2116] flex items-center justify-center text-xs font-bold text-[#8a7560] dark:text-gray-400">
                  +12
                </div>
              </div>
            </div>

            {/* Card 2: Dish Specific */}
            <div className="group flex flex-col gap-6 p-8 rounded-3xl border border-[#e6e0db] dark:border-[#3d2f21] bg-white dark:bg-[#2d2116] hover:shadow-2xl hover:border-[#f48c25]/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 size-32 bg-[#f48c25]/5 rounded-full blur-3xl group-hover:bg-[#f48c25]/10 transition-colors"></div>
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#fef1e4] dark:bg-[#f48c25]/20 text-[#f48c25]">
                <Star
                  size={28}
                  strokeWidth={2.5}
                  fill="currentColor"
                  className="fill-transparent"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold leading-tight">
                  Review Dishes
                </h3>
                <p className="text-[#8a7560] dark:text-gray-400 text-base leading-relaxed">
                  Dish it out literally. Rate the exact dishes you try, not just
                  the place. Share bites, not just stars, with photos, tags, and
                  emojis.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="flex items-center gap-1 text-[#f48c25]">
                  {[1, 2, 3, 4].map((s) => (
                    <Star key={s} size={20} fill="currentColor" />
                  ))}
                  <div className="relative">
                    <Star size={20} className="text-[#f48c25]" />
                    <div className="absolute inset-0 overflow-hidden w-1/2">
                      <Star
                        size={20}
                        fill="currentColor"
                        className="text-[#f48c25]"
                      />
                    </div>
                  </div>
                  <span className="ml-2 text-sm font-bold text-[#181411] dark:text-white">
                    4.8 for Spicy Tuna Roll
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Discovery & Tags */}
            <div className="group flex flex-col gap-6 p-8 rounded-3xl border border-[#e6e0db] dark:border-[#3d2f21] bg-white dark:bg-[#2d2116] hover:shadow-2xl hover:border-[#f48c25]/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 size-32 bg-[#f48c25]/5 rounded-full blur-3xl group-hover:bg-[#f48c25]/10 transition-colors"></div>
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#fef1e4] dark:bg-[#f48c25]/20 text-[#f48c25]">
                <Tags size={28} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold leading-tight">
                  Tag & Filter Dishes
                </h3>
                <p className="text-[#8a7560] dark:text-gray-400 text-base leading-relaxed">
                  Food is not one-size-fits-all. Use tags like "spicy", "vegan",
                  "gluten-free", or "hangover cure" to find dishes that match
                  your cravings and your lifestyle.
                </p>
              </div>
              <div className="mt-auto pt-4 flex flex-wrap gap-2">
                <div className="px-3 py-1 rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold">
                  #Spicy
                </div>
                <div className="px-3 py-1 rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold">
                  #Vegan
                </div>
                <div className="px-3 py-1 rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400 text-xs font-bold">
                  #HangoverCure
                </div>
                <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold">
                  #DateNight
                </div>
              </div>
            </div>

            {/* Card 4: Gamification */}
            <div className="group flex flex-col gap-6 p-8 rounded-3xl border border-[#e6e0db] dark:border-[#3d2f21] bg-white dark:bg-[#2d2116] hover:shadow-2xl hover:border-[#f48c25]/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 size-32 bg-[#f48c25]/5 rounded-full blur-3xl group-hover:bg-[#f48c25]/10 transition-colors"></div>
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#fef1e4] dark:bg-[#f48c25]/20 text-[#f48c25]">
                <Medal size={28} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold leading-tight">
                  Become a Local Food Hero
                </h3>
                <p className="text-[#8a7560] dark:text-gray-400 text-base leading-relaxed">
                  Become the go-to expert in your city. The more you post, the
                  more your foodie cred grows and the more your recommendations
                  help others eat better.
                </p>
              </div>
              <div className="mt-auto pt-4 flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white shadow-lg">
                  <Trophy size={18} fill="currentColor" />
                </div>
                <span className="text-sm font-bold tracking-tight">
                  "Elite Taster" Status Achieved
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WOMHowItWorks;
