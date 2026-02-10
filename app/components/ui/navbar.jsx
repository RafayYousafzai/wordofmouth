import { Menu, Utensils } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { label: "How it works", href: "/how-it-works" },
    { label: "Features", href: "/how-it-works#features" },
    { label: "Community", href: "/founders" },
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e6e0db] dark:border-[#3d2f21] px-6 md:px-20 py-4 bg-white/80 dark:bg-[#221910]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3 text-[#f48c25]">
        <div className="size-8 bg-[#f48c25] rounded-lg flex items-center justify-center text-white shadow-sm">
          <Utensils size={20} strokeWidth={2.5} />
        </div>
        <h2 className="text-[#181411] dark:text-white text-xl font-extrabold leading-tight tracking-tight">
          WOM
        </h2>
      </div>

      <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
        <div className="flex items-center gap-9">
          {navItems.map((item) => (
            <Link
              key={item.label}
              className="text-[#181411] dark:text-gray-300 text-sm font-semibold hover:text-[#f48c25] transition-colors"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/get-the-app"
          className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-xl h-10 px-5 bg-[#f48c25] text-white text-sm font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-[#f48c25]/20 active:scale-95"
        >
          <span>Sign Up</span>
        </Link>
      </div>

      <div className="md:hidden text-[#181411] dark:text-white cursor-pointer">
        <Menu size={28} />
      </div>
    </header>
  );
}
