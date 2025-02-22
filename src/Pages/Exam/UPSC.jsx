import React from "react";

const UPSCExamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex flex-col items-center p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full -top-48 -left-48 animate-pulse"></div>
      <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full -bottom-32 -right-32 animate-pulse delay-300"></div>

      <main className="w-full max-w-7xl z-10">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 animate-fade-in-down">
            Crack UPSC Exams 2024
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive UPSC Preparation with AI-driven Study Plans, Expert Guidance, and Real-Time Performance Analytics.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30">
            Start Free Trial
          </button>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {icon: '📚', title: 'Custom Study Plans', desc: 'AI-based tailored preparation strategy'},
            {icon: '🎯', title: '20,000+ MCQs', desc: 'High-quality UPSC-specific question bank'},
            {icon: '📈', title: 'Performance Insights', desc: 'AI-driven analytics to track growth'},
            {icon: '🎥', title: 'Live Lectures', desc: 'Daily sessions by experienced UPSC mentors'},
            {icon: '⏳', title: 'Time Management', desc: 'Smart test series with efficiency analysis'},
            {icon: '📖', title: 'Comprehensive Notes', desc: 'Well-structured study material with deep insights'},
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </section>

        {/* UPSC Exam Syllabus */}
        <section className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-6">UPSC Civil Services Syllabus Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {["General Studies", "CSAT (Aptitude)", "Essay Writing", "Optional Subject"].map((subject, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <span className="text-gray-300">{subject}</span>
                  <span className="text-cyan-400">25% Weightage</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Ideal Preparation Strategy</h3>
              <div className="space-y-3">
                {["NCERT Basics", "Advanced Concepts", "Mains Answer Writing", "Mock Test Practice"].map((phase, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-300">{phase}</span>
                    <span className="text-gray-500 text-sm ml-auto">Month {i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            {number: '95%', label: 'Success Rate'},
            {number: '3M+', label: 'Practice Questions'},
            {number: '200+', label: 'Expert Mentors'},
            {number: '24/7', label: 'Support'},
          ].map((stat, i) => (
            <div key={i} className="bg-cyan-500/10 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-300 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-100 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {q: 'What is the best way to start UPSC preparation?', a: 'Begin with NCERTs, then move to advanced books & mock tests.'},
              {q: 'Can I prepare for UPSC while working?', a: 'Yes, with a disciplined schedule and smart time management.'},
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-700/50 pb-4">
                <div className="text-gray-200 font-medium mb-2">{faq.q}</div>
                <div className="text-gray-400">{faq.a}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default UPSCExamPage;