import Link from "next/link";

export default function JoinUsNewsletter() {
  return (
    <section id="get-the-app" className="mt-16 lg:mt-24">
      <div className="bg-[#f48c25] text-white rounded-3xl p-8 lg:p-12 shadow-2xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold">
              Join the First 100 Foodies
            </h2>
            <p className="text-white/90 mt-4">
              You are early. We are just getting started. You are in Version 1.0
              - taste-testing mode. Bug spotting equals brownie points.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>Track every dish you have ever loved.</li>
              <li>See what your inner circle is eating.</li>
              <li>Earn early taster badges for your profile.</li>
            </ul>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/get-the-app"
                className="bg-[#181411] text-white px-6 py-3 rounded-xl font-bold"
              >
                Download on App Store
              </Link>
              <Link
                href="/get-the-app"
                className="bg-white text-[#181411] px-6 py-3 rounded-xl font-bold"
              >
                Get it on Google Play
              </Link>
            </div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
            <p className="text-sm font-semibold">Stay in the loop</p>
            <p className="text-xs text-white/80 mt-2">
              Get early updates as we roll out new cities and features.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-xl text-[#181411]"
              />
              <button className="bg-[#181411] text-white px-5 py-3 rounded-xl font-semibold">
                Join updates
              </button>
            </form>
            <p className="text-xs text-white/70 mt-3">
              No spam. Just the good stuff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
