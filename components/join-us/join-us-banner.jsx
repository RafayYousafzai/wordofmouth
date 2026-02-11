import { Utensils, Users, BadgeCheck } from "lucide-react";

export default function JoinUsBanner() {
  return (
    <section className="max-w-[1280px] mx-auto  py-12 md:py-24">
      <div className="bg-gradient-to-br from-[#f48c25] to-[#e67e15] rounded-3xl p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,white,transparent)]" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Join the First 100 Foodies
              </h1>
              <p className="text-lg md:text-xl font-medium opacity-90 max-w-lg">
                You're in Version 1.0 - taste-testing mode. Bug spotting =
                brownie points. Help us build the future of food discovery.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center bg-white/20 p-2 rounded-full text-white">
                  <Utensils size={20} />
                </div>
                <p className="text-base font-semibold">
                  Track every dish you've ever loved
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center bg-white/20 p-2 rounded-full text-white">
                  <Users size={20} />
                </div>
                <p className="text-base font-semibold">
                  See what your inner circle is eating
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center bg-white/20 p-2 rounded-full text-white">
                  <BadgeCheck size={20} />
                </div>
                <p className="text-base font-semibold">
                  Earn 'Early Taster' badges for your profile
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-3 min-w-[200px] h-14 px-6 bg-[#181411] hover:bg-black rounded-xl transition-all shadow-lg group active:scale-95">
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.62 4.37-1.54 1.81.07 3.48 1.08 4.25 2.56-3.8 1.77-3.15 6.38 1.48 8.23-.33 1.1-1.25 3.05-2.18 4.98zM15.02 5.51C14.7 3.25 16.65 1.5 19.04 1c.2 2.4-2.13 4.67-4.02 4.51z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold leading-none opacity-80">
                    Download on the
                  </p>
                  <p className="text-lg font-bold leading-none">App Store</p>
                </div>
              </button>
              <button className="flex items-center justify-center gap-3 min-w-[200px] h-14 px-6 bg-[#181411] hover:bg-black rounded-xl transition-all shadow-lg group active:scale-95">
                <svg
                  className="w-7 h-7 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.54,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold leading-none opacity-80">
                    Get it on
                  </p>
                  <p className="text-lg font-bold leading-none">Google Play</p>
                </div>
              </button>
            </div>
            <p className="text-sm font-semibold opacity-90">
              You're early. We're just getting started.
            </p>
          </div>

          {/* App Preview / Illustration */}
          <div className="hidden lg:block relative h-[500px]">
            {/* Back Phone (White) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-white rounded-[3rem] border-8 border-black shadow-2xl rotate-12 overflow-hidden z-10">
              <div className="bg-gray-100 h-full w-full flex flex-col items-center justify-center text-[#f48c25]">
                <Utensils size={64} />
                <p className="mt-4 text-gray-400 font-bold uppercase tracking-widest">
                  Feed Preview
                </p>
              </div>
            </div>

            {/* Front Phone (Cream) */}
            <div className="absolute right-32 top-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-[#fdfaf5] rounded-[3rem] border-8 border-black shadow-2xl -rotate-6 overflow-hidden z-20">
              <div className="h-full w-full p-6 flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#f48c25] rounded-full mb-4"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                <div className="aspect-square w-full bg-gray-200 rounded-2xl"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-[#f48c25]/20 rounded-full"></div>
                  <div className="h-6 w-16 bg-[#f48c25]/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
