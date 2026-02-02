import React from "react";

const experiences = [
  {
    role: "Machine Learning Intern",
    org: "Elvate Labs",
    time: "Jun 2025 – Jul 2025",
    desc: "Worked on machine learning models, data preprocessing pipelines, and model evaluation using Python and Scikit-learn. Gained hands-on experience with real-world datasets.",
    highlight: true,
  },
  {
    role: "CodeChef Chapter Revenue Manager",
    org: "CodeChef WCE Chapter",
    time: "2024 – Present",
    desc: "Active competitive programmer focusing on data structures and algorithms. Contributed to chapter activities and supported competitive programming initiatives.",
    highlight: false,
  },
  {
    role: "Assistant AI Coordinator",
    org: "MLSC (Microsoft Learn Student Club)",
    time: "2025 – Present",
    desc: "Assisted in organizing AI-focused workshops and technical sessions. Guided peers in understanding machine learning fundamentals and practical applications.",
    highlight: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          Experience
          <span className="block w-12 h-1 bg-blue-500 mx-auto mt-2" />
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gray-200" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="flex gap-8">
                {/* Dot */}
                <div
                  className={`
                    w-8 h-8 rounded-full flex-shrink-0
                    ${exp.highlight
                      ? "bg-blue-500"
                      : "bg-white border border-gray-300"}
                  `}
                />

                {/* Card */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition w-full">
                  <div className="flex flex-wrap justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {exp.time}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 font-medium mb-2">
                    {exp.org}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
