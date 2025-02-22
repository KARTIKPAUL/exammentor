import React from "react";

const JEEExamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex flex-col items-center p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full -top-48 -left-48 animate-pulse"></div>
      <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full -bottom-32 -right-32 animate-pulse delay-300"></div>

      <main className="w-full max-w-7xl z-10">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 animate-fade-in-down">
            Crack JEE Main & Advanced 2024
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get the best preparation resources, expert coaching, and AI-driven insights to ace your JEE exams.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30">
            Start Free Trial
          </button>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {icon: '📖', title: 'Concept Clarity', desc: 'Detailed explanations with visual aids'},
            {icon: '📝', title: '10,000+ Practice Questions', desc: 'Extensive question bank with solutions'},
            {icon: '📊', title: 'AI Performance Analytics', desc: 'Track your progress and focus on weak areas'},
            {icon: '🎥', title: 'Live Classes', desc: 'Interactive sessions with IIT alumni & experts'},
            {icon: '⏳', title: 'Mock Tests & Time Management', desc: 'Real exam-like mock tests with analytics'},
            {icon: '❓', title: 'Doubt Solving', desc: 'Instant doubt resolution via AI and expert tutors'},
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </section>

        {/* JEE Exam Syllabus */}
        <section className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-6">JEE Main & Advanced Syllabus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {["Physics", "Mathematics", "Chemistry"].map((subject, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <span className="text-gray-300">{subject}</span>
                  <span className="text-cyan-400">Detailed Modules</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-gray-800/40 p-6 rounded-xl">
                <p className="text-gray-300 mb-4">"ExamMentor helped me boost my JEE rank from 1500 to under 500!"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-100">Ankit Verma</div>
                    <div className="text-sm text-cyan-400">AIR 430, JEE Advanced 2023</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default JEEExamPage;