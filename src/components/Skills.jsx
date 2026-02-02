import React from "react";
import {
  SiReact, SiTailwindcss, SiPython, SiCplusplus,
  SiJavascript, SiPostgresql, SiFirebase, SiSpringboot
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact />, color: "text-cyan-500" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
  { name: "Python", icon: <SiPython />, color: "text-blue-500" },
  { name: "C++", icon: <SiCplusplus />, color: "text-blue-600" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-700" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-600" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Tech Stack
          <span className="block w-12 h-1 bg-purple-500 mx-auto mt-2" />
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-xl
                         border border-gray-200 shadow-sm
                         hover:scale-105 hover:shadow-md transition"
            >
              <span className={`text-lg ${s.color}`}>{s.icon}</span>
              <span className="text-sm font-medium text-gray-800">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
