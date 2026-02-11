"use client";

import React from "react";
import { Hand, Send, Instagram, Youtube, Mail } from "lucide-react";

// --- Components ---

const HeroSection = () => {
  return (
    <section className="pt-12 pb-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f48c25]/10 text-[#f48c25] text-sm font-bold mb-6">
          <Hand className="mr-2" size={16} />
          SAY HELLO
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-stone-900 dark:text-white mb-6 leading-tight">
          We're All <span className="text-[#f48c25]">Ears</span>{" "}
          <br className="hidden md:block" /> (and Mouths)
        </h1>
        <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          Hungry for feedback or found a bug in the kitchen? Drop us a line—we'd
          love to hear from our fellow foodies!
        </p>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <div className="bg-white dark:bg-stone-900/50 p-8 md:p-10 rounded-xl shadow-xl shadow-stone-200/50 dark:shadow-none border border-stone-100 dark:border-stone-800">
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-stone-700 dark:text-stone-300 ml-1">
              Your Name
            </label>
            <input
              className="w-full px-5 py-4 rounded-lg bg-stone-50 dark:bg-stone-800 border-none focus:ring-2 focus:ring-[#f48c25]/40 dark:text-white transition-all outline-none"
              placeholder="Chef Gusteau"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-stone-700 dark:text-stone-300 ml-1">
              Email Address
            </label>
            <input
              className="w-full px-5 py-4 rounded-lg bg-stone-50 dark:bg-stone-800 border-none focus:ring-2 focus:ring-[#f48c25]/40 dark:text-white transition-all outline-none"
              placeholder="foodie@example.com"
              type="email"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-stone-700 dark:text-stone-300 ml-1">
            What's on your mind?
          </label>
          <select className="w-full px-5 py-4 rounded-lg bg-stone-50 dark:bg-stone-800 border-none focus:ring-2 focus:ring-[#f48c25]/40 dark:text-white transition-all outline-none appearance-none">
            <option value="feedback">General Feedback</option>
            <option value="bug">Report a Kitchen Bug</option>
            <option value="partnership">Partnership Inquiry</option>
            <option value="hello">Just Saying Hello</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-stone-700 dark:text-stone-300 ml-1">
            Your Message
          </label>
          <textarea
            className="w-full px-5 py-4 rounded-lg bg-stone-50 dark:bg-stone-800 border-none focus:ring-2 focus:ring-[#f48c25]/40 dark:text-white transition-all outline-none resize-none"
            placeholder="Tell us everything..."
            rows={5}
          ></textarea>
        </div>

        <button
          className="w-full py-4 bg-[#f48c25] text-white font-extrabold rounded-lg hover:bg-[#e97e18] transition-colors shadow-lg shadow-[#f48c25]/30 flex items-center justify-center gap-2 group"
          type="submit"
        >
          <span>Send Message</span>
          <Send
            className="group-hover:translate-x-1 transition-transform"
            size={18}
          />
        </button>
      </form>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-stone-900 dark:text-white">
        Find us in the Wild
      </h2>
      <p className="text-stone-600 dark:text-stone-400">
        Catch us sharing recipes and restaurant gems across our socials. We're
        most active on Instagram!
      </p>
      <div className="flex flex-wrap gap-4">
        {[
          { icon: Instagram, label: "Instagram" },
          { icon: Youtube, label: "YouTube" },
          { icon: Mail, label: "Email" },
        ].map((item, index) => (
          <a
            key={index}
            href="#"
            className="w-14 h-14 rounded-xl bg-white dark:bg-stone-800 flex items-center justify-center text-[#f48c25] shadow-sm hover:bg-[#f48c25] hover:text-white transition-all"
            aria-label={item.label}
          >
            <item.icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer, highlight }) => {
  return (
    <div
      className={`p-5 rounded-xl ${highlight ? "bg-[#f48c25]/10 border border-[#f48c25]/20" : "bg-stone-100 dark:bg-stone-800/50"}`}
    >
      <h4 className="font-bold text-stone-900 dark:text-white mb-1">
        {question}
      </h4>
      <p className="text-sm text-stone-600 dark:text-stone-400">{answer}</p>
    </div>
  );
};

const FaqSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-stone-900 dark:text-white">
        Bite-sized FAQ
      </h2>
      <div className="space-y-4">
        <FaqItem
          question="How do I earn brownie points?"
          answer="By reporting bugs! Each verified glitch you find earns you exclusive digital badges and community clout."
          highlight={true}
        />
        <FaqItem
          question="Can I suggest a restaurant?"
          answer="Absolutely! Our map is always hungry for more. Use the 'Add Place' feature in the app to contribute."
        />
        <FaqItem
          question="Response time?"
          answer="We usually reply within 24 hours—unless we're stuck in a particularly long lunch queue!"
        />
      </div>
    </div>
  );
};

// --- Main Page Component ---

export default function ContactPage() {
  return (
    <div className="font-display mt-20 bg-[#fff] dark:bg-[#181411] text-stone-800 dark:text-stone-100 min-h-screen flex flex-col justify-center">
      <main className="flex-grow w-full">
        <HeroSection />

        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ContactForm />

            <div className="space-y-12">
              <SocialLinks />
              <FaqSection />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
