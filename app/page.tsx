import Link from "next/link";
import {
  Utensils,
  BadgeCheck,
  Star,
  Search,
  Home,
  Compass,
  Plus,
  Users,
  User,
  ThumbsUp,
  MapPin,
} from "lucide-react";
import Founders from "@/components/founders";
import JoinUs from "@/components/join-us/join-us-banner";
import WOMHowItWorks from "@/components/how-it-works";

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
      <main className="flex-grow flex flex-col max-w-[1280px] mx-auto px-6 lg:px-10 py-12 lg:py-24 relative z-10 mt-20 md:0">
        <section
          id="home"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column: Copy and Social Proof */}
          <div className="flex flex-col items-start gap-8 order-1 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f48c25]/10 border border-[#f48c25]/20 rounded-full">
              <BadgeCheck
                size={16}
                className="text-[#f48c25]"
                fill="currentColor"
              />
              <span className="text-[#f48c25] text-xs font-bold uppercase tracking-wider">
                Voted #1 Food Discovery App by Real Foodies
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#181411] dark:text-white">
                Follow your foodie friends, rate dishes, and explore real
                reviews nearby.
              </h1>
              <p className="text-lg text-[#8a7560] dark:text-gray-400 max-w-[540px] leading-relaxed">
                No more mystery menus or paid reviews. Word of Mouth lets you
                rate dishes, not restaurants, and see what your friends are
                actually eating.
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="https://apps.apple.com/us/app/word-of-mouth-foodie/id6744751812"
                className="flex items-center gap-3 bg-[#181411] dark:bg-white text-white dark:text-[#181411] px-6 py-3 rounded-xl transition-transform active:scale-95 shadow-lg hover:shadow-xl"
              >
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
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=com.wordofmouth.limited&hl=en_US"
                className="flex items-center gap-3 bg-[#181411] dark:bg-white text-white dark:text-[#181411] px-6 py-3 rounded-xl transition-transform active:scale-95 shadow-lg hover:shadow-xl"
              >
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
              </Link>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-4">
              {[
                {
                  label: "10,000+ Hungry Foodies",
                  subtext: "Food-lovers just like you.",
                  icon: Users,
                },
                {
                  label: "50,000+ Dish Reviews",
                  subtext: "Real dishes. Real opinions.",
                  icon: Utensils,
                },
                {
                  label: "4.9/5 Star Rating",
                  subtext: "Hot, fresh, and loved.",
                  icon: Star,
                  iconColor: "text-[#f48c25] fill-current",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-white/5 border border-[#e6e0db] dark:border-white/10 p-5 rounded-2xl shadow-sm"
                >
                  <div className="flex items-center gap-2 text-[#f48c25]">
                    <stat.icon size={16} className={stat.iconColor || ""} />
                    <p className="text-sm font-semibold text-[#181411] dark:text-white">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: App Mockup */}
          <div className="relative flex justify-center order-2 lg:order-2">
            {/* Decor Circles */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#f48c25]/20 blur-[80px] rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#f48c25]/10 blur-[60px] rounded-full"></div>

            {/* Hero Image */}
            <div className="relative w-full max-w-[480px]">
              <img
                src="/phone-ss.png"
                alt="Word of Mouth app screenshot"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Float Tag */}
          </div>
        </section>

        <WOMHowItWorks />

        <section className="mt-16 lg:mt-24">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#f48c25] font-bold">
                Meet the Minds Behind the Menu
              </p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#181411] dark:text-white mt-3">
                Meet Our Founders
              </h2>
            </div>
          </div>
          <Founders headerShown={false} />
        </section>

        <div className="h-24" />

        <section id="testimonials" className="mt-16 lg:mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-[#f48c25] font-bold">
              Founding Foodies
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#181411] dark:text-white mt-3">
              Early love from real diners
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {[
              {
                name: "Priya S.",
                quote:
                  "I stopped guessing what to order. The dish-first reviews are a game changer.",
              },
              {
                name: "Marco R.",
                quote:
                  "It feels like a private feed of my friends' best bites. Instant trust.",
              },
              {
                name: "Tess L.",
                quote:
                  "The tags make it easy to find exactly what I am craving.",
              },
              {
                name: "Jordan K.",
                quote:
                  "Foodies helping foodies. I have discovered three new spots already.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-white dark:bg-white/5 border border-[#e6e0db] dark:border-white/10 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-2 text-[#f48c25]">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-[#8a7560] dark:text-gray-400 mt-4">
                  "{item.quote}"
                </p>
                <p className="text-xs font-bold text-[#181411] dark:text-white mt-4">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        <JoinUs />
      </main>
    </div>
  );
};

export default WOMHome;
