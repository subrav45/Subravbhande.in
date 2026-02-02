import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            About Me
            <span className="block w-12 h-1 bg-blue-500 mt-2" />
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            I am a second-year Computer Science and Engineering student at
            Walchand College of Engineering, Sangli. I enjoy building full stack
            applications, competitive programming, and exploring machine
            learning.
            <br /><br />
            I believe strong fundamentals, consistency, and ownership matter
            more than chasing trends.
          </p>
        </div>

        <img
          src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
          alt="About"
          className="w-80 h-80 rounded-2xl object-cover shadow-lg hover:scale-105 transition"
        />
      </div>
    </section>
  );
}
