import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["about", "projects", "experience", "skills", "contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="font-semibold text-lg text-gray-900">
          Subrav Bhande
        </h1>

        <ul className="hidden md:flex gap-8 text-sm text-gray-600">
          {links.map((item) => (
            <li key={item} className="relative group">
              <a href={`#${item}`} className="hover:text-black transition">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300" />
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 rounded-full
                     text-sm font-medium border border-blue-500 text-blue-500
                     hover:bg-blue-500 hover:text-white transition"
        >
          Reach Out
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl text-gray-700"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col px-6 py-4 space-y-4 text-gray-600">
            {links.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="block hover:text-black"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
