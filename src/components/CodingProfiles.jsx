import React from "react";
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
} from "react-icons/si";
import { FaLink } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-white text-black py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-3">
          Let&apos;s Connect
          <span className="block w-12 h-1 bg-purple-500 mx-auto mt-2" />
        </h2>

        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Open to internships, projects, collaborations, or just a friendly
          conversation.
        </p>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-10 place-items-center">
          {/* GitHub */}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-black transition"
          >
            <SiGithub size={24} className="text-[#181717]" />
            <span className="text-sm font-medium">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-black transition"
          >
            <SiLinkedin size={24} className="text-[#0A66C2]" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/your-username"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-black transition"
          >
            <SiX size={24} className="text-[#000000]" />
            <span className="text-sm font-medium">X</span>
          </a>

          {/* Resume */}
          {/* <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-black transition"
          >
            <FaLink size={22} className="text-gray-700" />
            <span className="text-sm font-medium">Resume</span>
          </a> */}

          {/* LeetCode */}
          <a
            href="https://leetcode.com/your-username"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-black transition"
          >
            <SiLeetcode size={24} className="text-[#FFA116]" />
            <span className="text-sm font-medium">LeetCode</span>
          </a>

          {/* Codeforces */}
          <a
            href="https://codeforces.com/profile/your-username"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-black transition"
          >
            <SiCodeforces size={24} className="text-[#1F8ACB]" />
            <span className="text-sm font-medium">Codeforces</span>
          </a>

          {/* CodeChef */}
          <a
            href="https://www.codechef.com/users/your-username"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-black transition"
          >
            <SiCodechef size={24} className="text-[#5B4638]" />
            <span className="text-sm font-medium">CodeChef</span>
          </a>
        </div>
      </div>
    </section>
  );
}
