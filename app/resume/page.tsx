import React from "react";
import SectionHeader from "@/components/SectionHeader";

const ResumePage = () => {
  return (
    <div className="md:mx-48 md:mr-64 p-6">
      <SectionHeader title="Resume / CV" />

      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mt-6">
        {/* Header Section */}
        <div className="border-b-2 border-blue-600 pb-6 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            NIYITANGA HONORE
          </h1>
          <div className="text-gray-600 dark:text-gray-300 space-y-1">
            <p>Rwanda-Kigali, ST 12345</p>
            <p>0793274392</p>
            <p className="text-blue-600 dark:text-blue-400">niyitanganihonor@gmail.com</p>
          </div>
        </div>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-blue-600 pl-3">
            EDUCATION
          </h2>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                GSOB, Huye — O&apos;level
              </h3>
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                TUESDAY 2020 - SEPTEMBER 2023
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Focused on foundational academic subjects, including mathematics, sciences, and humanities,
              while developing critical thinking and problem-solving skills. Participated in extracurricular
              activities to enhance personal and social development.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Rwanda Coding Academy, Nyabihu
              </h3>
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                JANUARY 2022 - 2025
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Studying software development with a focus on programming, system design, and application
              development. Gaining practical skills in coding, debugging, and creating software solutions
              for real-world problems.
            </p>
          </div>
        </section>

        {/* Languages Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-blue-600 pl-3">
            LANGUAGES
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg font-medium">
              English - Fluent
            </span>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-blue-600 pl-3">
            SKILLS
          </h2>
          <div className="space-y-3">
            <div>
              <span className="font-semibold text-gray-800 dark:text-gray-200">Programming Languages:</span>
              <span className="text-gray-700 dark:text-gray-300 ml-2">PHP, JavaScript, Java, C, Python</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800 dark:text-gray-200">Web Technologies:</span>
              <span className="text-gray-700 dark:text-gray-300 ml-2">
                HTML5, CSS3, React, Node.js, REST APIs, Next.js, React Native, WordPress
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-800 dark:text-gray-200">Version Control:</span>
              <span className="text-gray-700 dark:text-gray-300 ml-2">Git, GitHub</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800 dark:text-gray-200">Database Management:</span>
              <span className="text-gray-700 dark:text-gray-300 ml-2">MySQL, MongoDB, PostgreSQL, Supabase</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800 dark:text-gray-200">Frameworks:</span>
              <span className="text-gray-700 dark:text-gray-300 ml-2">Express.js, Django</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800 dark:text-gray-200">Cybersecurity:</span>
              <span className="text-gray-700 dark:text-gray-300 ml-2">
                Cryptography, Forensics, CTF Challenges
              </span>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-l-4 border-blue-600 pl-3">
            AWARDS
          </h2>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 p-4 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                🥉 3rd position in RCA 2025 Hackathon
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 p-4 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                🏆 Sixth position in African Forum For Cyber Security CTF challenges
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 p-4 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                📜 Certificate of participation - Project based hackathon
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumePage;
