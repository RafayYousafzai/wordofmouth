import Link from "next/link";
import { Globe, MessageCircle, Utensils, Video } from "lucide-react";

const Footer = () => {
  return (
    <>
      <section className="bg-[#f48c25]/5 dark:bg-[#f48c25]/10 py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#181411] dark:text-white">
            Ready to join the food revolution?
          </h2>
          <p className="text-[#8a7560] dark:text-gray-400 text-lg mb-10 leading-relaxed">
            Stop guessing what to order. Start sharing your favorite bites today
            and join a community of passionate foodies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto flex min-w-[200px] items-center justify-center rounded-2xl h-14 px-8 bg-[#f48c25] text-white text-base font-bold hover:scale-105 transition-all shadow-xl shadow-[#f48c25]/30 active:scale-95">
              <span>Join the Community</span>
            </button>
            <button className="w-full sm:w-auto flex min-w-[200px] items-center justify-center rounded-2xl h-14 px-8 bg-white dark:bg-[#3d2f21] border border-[#e6e0db] dark:border-transparent text-[#181411] dark:text-white text-base font-bold hover:bg-gray-50 dark:hover:bg-[#4a3a2a] transition-all active:scale-95">
              <span>Download the App</span>
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer
        id="contact"
        className="bg-white dark:bg-[#221910] border-t border-[#e6e0db] dark:border-[#3d2f21] py-16 px-6"
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 text-[#f48c25] mb-6">
              <div className="size-8 bg-[#f48c25] rounded-lg flex items-center justify-center text-white">
                <Utensils size={18} strokeWidth={2.5} />
              </div>
              <h2 className="text-[#181411] dark:text-white text-xl font-extrabold tracking-tight">
                WOM
              </h2>
            </div>
            <p className="text-[#8a7560] dark:text-gray-400 text-sm leading-relaxed mb-6">
              The social platform built for people who live to eat. Authentic
              reviews, dish by dish.
            </p>
            <div className="flex gap-4">
              {[Globe, MessageCircle, Video].map((Icon, idx) => (
                <a
                  key={idx}
                  className="text-[#8a7560] hover:text-[#f48c25] transition-colors"
                  href="#"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#181411] dark:text-white">
              Company
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-[#8a7560] dark:text-gray-400">
              <li>
                <Link
                  className="hover:text-[#f48c25] transition-colors"
                  href="/#about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#f48c25] transition-colors"
                  href="/founders"
                >
                  Founders
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#f48c25] transition-colors"
                  href="/#testimonials"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <a
                  className="hover:text-[#f48c25] transition-colors"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#181411] dark:text-white">
              Product
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-[#8a7560] dark:text-gray-400">
              <li>
                <Link
                  className="hover:text-[#f48c25] transition-colors"
                  href="/how-it-works"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#f48c25] transition-colors"
                  href="/founders#whats-next"
                >
                  What's next
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#f48c25] transition-colors"
                  href="/get-the-app"
                >
                  Get the app
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#181411] dark:text-white">
              Legal
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-[#8a7560] dark:text-gray-400">
              <li>
                <a className="hover:text-[#f48c25] transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-[#f48c25] transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-[#e6e0db] dark:border-[#3d2f21] text-center text-sm text-[#8a7560] dark:text-gray-500">
          © 2024 WOM (Word of Mouth). All rights reserved. Made for foodies.
        </div>
      </footer>
    </>
  );
};

export default Footer;
