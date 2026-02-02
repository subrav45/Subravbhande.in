import React from "react";
import {
  SiGithub, SiLinkedin, SiLeetcode, SiCodeforces, SiCodechef
} from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">
          Let’s Connect
          <span className="block w-12 h-1 bg-blue-500 mx-auto mt-2" />
        </h2>

        <p className="text-gray-600 mt-4 mb-12">
          Open to internships, projects, and collaborations.
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <SiGithub className="text-2xl hover:scale-125 transition cursor-pointer" />
          <SiLinkedin className="text-2xl text-[#0A66C2] hover:scale-125 transition cursor-pointer" />
          <SiLeetcode className="text-2xl text-[#FFA116] hover:scale-125 transition cursor-pointer" />
          <SiCodeforces className="text-2xl text-[#1F8ACB] hover:scale-125 transition cursor-pointer" />
          <SiCodechef className="text-2xl text-[#5B4638] hover:scale-125 transition cursor-pointer" />
        </div>

        <form className="max-w-xl mx-auto space-y-5">
          <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 outline-none" placeholder="Your Name" />
          <input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 outline-none" placeholder="Your Email" />
          <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 outline-none" rows="4" placeholder="Your Message" />
          <button className="w-full py-3 bg-black text-white rounded-full hover:scale-105 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
