import WhatsCooking from "@/components/whats-cooking";
import Founders from "@/components/founders";
import JoinUs from "@/components/join-us/join-us-newsletter";

const WOMFounders = () => {
  return (
    <div className="font-sans text-[#181411] dark:text-white bg-[#f8f7f5] dark:bg-[#221910] transition-colors duration-300 min-h-screen flex flex-col">
      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-16 w-full">
        {/* Founders Section */}
        <section>
          <Founders />
          <div className="h-24" />
          <WhatsCooking />
          <JoinUs />
        </section>
      </main>
    </div>
  );
};

export default WOMFounders;
