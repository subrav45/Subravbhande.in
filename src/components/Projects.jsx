import React from "react";
import { FaGlobe, FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiSpringboot,
  SiPython,
  SiStreamlit,
  SiScikitlearn,
} from "react-icons/si";

import kolgiri from "../assest/image.png";
import resumeApp from "./image.png";

const projects = [
  {
    title: "Gram Panchayat Kolgiri Portal",
    subtitle: "Full-Stack Government Web Application",
    image: kolgiri,
    description:
      "A real-world digital portal built for Gram Panchayat services. The application focuses on usability, accessibility, and clean UI to help citizens access government services online efficiently.",
    techIcons: [
      { icon: <SiReact />, name: "React", color: "text-sky-500" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-500" },
      { icon: <SiSpringboot />, name: "Spring Boot", color: "text-green-600" },
      { icon: <SiFirebase />, name: "Firebase", color: "text-yellow-500" },
      { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-blue-600" },
    ],
    live: "https://grampanchayat-kolgiri.vercel.app/",
    github: "https://github.com/subravbhande",
    big: false,
  },
  {
    title: "ATS-Based Resume Review & Category Prediction",
    subtitle: "Machine Learning + Streamlit Application",
    image: resumeApp,
    description:
      "An ATS-based resume analysis application that classifies resumes into job categories and validates resume structure. Built to simulate how automated hiring systems screen resumes.",
    techIcons: [
      { icon: <SiPython />, name: "Python", color: "text-blue-500" },
      { icon: <SiScikitlearn />, name: "Scikit-learn", color: "text-orange-500" },
      { icon: <SiStreamlit />, name: "Streamlit", color: "text-red-500" },
    ],
    live: "https://resumeaireview.streamlit.app/",
    github: "https://github.com/subravbhande",
    big: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
          Projects
          <span className="block w-12 h-1 bg-blue-500 mx-auto mt-2" />
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <div
              key={i}
              className="
                group bg-white rounded-2xl overflow-hidden
                border border-gray-200
                shadow-sm hover:shadow-xl
                transform hover:-translate-y-2
                transition-all duration-300
              "
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="
                    w-full h-56 object-cover
                    transform group-hover:scale-105
                    transition duration-500
                  "
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
              </div>

              <div className="p-7">
                <h3 className="text-xl font-semibold text-gray-900">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {p.subtitle}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {p.techIcons.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <span className={`text-xl ${t.color}`}>{t.icon}</span>
                      {t.name}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className={`
                      flex items-center gap-2
                      ${p.big ? "px-6 py-3" : "px-4 py-2"}
                      bg-black text-white rounded-lg
                      hover:bg-gray-800 transition
                    `}
                  >
                    <FaGlobe /> Live Demo
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`
                      flex items-center gap-2
                      ${p.big ? "px-6 py-3" : "px-4 py-2"}
                      border border-gray-300 rounded-lg
                      hover:bg-gray-100 transition
                    `}
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
