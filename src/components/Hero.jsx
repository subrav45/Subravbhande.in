import React, { useEffect, useState } from "react";
import ParticlesBG from "./particleBG";
import profilepic from "./new profile photo jpg.jpg";

const roles = ["Web Developer", "Competitive Programmer"];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!deleting && charIndex < currentRole.length) {
      const t = setTimeout(() => {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 90);
      return () => clearTimeout(t);
    }

    if (!deleting && charIndex === currentRole.length) {
      const t = setTimeout(() => setDeleting(true), 1200);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-white text-gray-900 overflow-hidden"
    >
      <ParticlesBG />

      <div className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        <div className="text-center md:text-left">
          <p className="text-sm text-blue-600 font-medium h-6">
            {text}
            <span className="animate-pulse">|</span>
          </p>

          <h1 className="mt-3 text-4xl md:text-6xl font-bold">
            Subrav <br /> Bhande
          </h1>

          <p className="mt-6 text-gray-600 max-w-md">
            Building clean, scalable web applications and solving problems
            consistently.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={profilepic}
            alt="Profile"
            className="w-72 h-72 rounded-full object-cover border border-pink-300 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
