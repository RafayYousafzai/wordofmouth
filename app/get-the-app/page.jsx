import JoinUsBanner from "@/components/join-us/join-us-banner";

const WOMJoin = () => {
  return (
    <div className="font-sans text-[#181411] dark:text-white bg-[#f8f7f5] dark:bg-[#221910] transition-colors duration-300 min-h-screen flex flex-col">
      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Final CTA Section */}
        <JoinUsBanner />
      </main>
    </div>
  );
};

export default WOMJoin;
