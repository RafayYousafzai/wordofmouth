"use client";

import { Link, Button, Input } from "@nextui-org/react";
import { Twitter, Instagram, Mail, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="WOM Logo"
                className="w-6 h-6 rounded-full"
              />
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#FFC94A] to-[#FFD700] bg-clip-text text-transparent">
                WOM
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              WOM is a social foodie platform to help you find and share the
              best local food.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-[#FFC94A]">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="#about"
                className="text-gray-400 hover:text-[#FFC94A] block text-sm"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#FFC94A] block text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#contact"
                className="text-gray-400 hover:text-[#FFC94A] block text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-[#FFC94A]">Follow Us</h4>
            <div className="flex gap-3">
              <Button
                isIconOnly
                variant="light"
                className="text-gray-400 hover:text-[#FFC94A]"
              >
                <Twitter size={20} />
              </Button>
              <Button
                isIconOnly
                variant="light"
                className="text-gray-400 hover:text-[#FFC94A]"
              >
                <Instagram size={20} />
              </Button>
              <Button
                isIconOnly
                variant="light"
                className="text-gray-400 hover:text-[#FFC94A]"
              >
                <Mail size={20} />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-[#FFC94A]">Newsletter</h4>
            <p className="text-gray-400 text-sm">
              Stay updated with the latest features
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                size="sm"
                className="flex-1"
                classNames={{
                  input: "text-white",
                  inputWrapper: "bg-gray-800 border-gray-700",
                }}
              />
              <Button
                isIconOnly
                className="bg-gradient-to-r from-[#FFC94A] to-[#FFD700] text-black"
                size="sm"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Word of Mouth Foodie. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
