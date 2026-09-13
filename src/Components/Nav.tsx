import React from "react";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-[88px] max-w-[90%] items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-bold text-white">
            DS
          </div>

          <h1 className="text-[24px] font-bold text-slate-800">
            Dev<span className="text-pink-500">Stack</span>
          </h1>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          <a
            href="#home"
            className="text-[16px] font-medium text-pink-500 transition"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-[16px] font-medium text-slate-600 transition hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-[16px] font-medium text-slate-600 transition hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-[16px] font-medium text-slate-600 transition hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-[16px] font-medium text-slate-600 transition hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-6 md:flex">
          <button className="text-[16px] font-medium text-slate-700 transition hover:text-pink-500">
            Sign In
          </button>

          <button className="rounded-full bg-pink-500 px-6 py-3 text-[16px] font-semibold text-white transition hover:bg-pink-600">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu */}
        <button className="text-2xl text-slate-700 md:hidden">☰</button>
      </div>
    </nav>
  );
};

export default Nav;
