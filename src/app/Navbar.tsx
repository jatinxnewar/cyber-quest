import React from "react";
import Link from "next/link";
import { ShieldCheck, Zap, Users, Gamepad2 } from "lucide-react";

function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800">
      <Link className="flex items-center justify-center" href="/">
        <ShieldCheck className="h-6 w-6 text-blue-400" />
        <span className="ml-2 text-2xl font-bold text-blue-400">
          CyberQuest
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:text-blue-400 transition-colors"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:text-blue-400 transition-colors"
          href="/adventure"
        >
          Games
        </Link>
        <Link
          className="text-sm font-medium hover:text-blue-400 transition-colors"
          href="/learn"
        >
          Learn
        </Link>
        <Link
          className="text-sm font-medium hover:text-blue-400 transition-colors"
          href="/about"
        >
          About
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
