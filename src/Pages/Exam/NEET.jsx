import React from "react";

const NEETExamPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex flex-col items-center p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute w-96 h-96 bg-emerald-500/10 rounded-full -top-48 -left-48 animate-pulse"></div>
      <div className="absolute w-64 h-64 bg-green-500/10 rounded-full -bottom-32 -right-32 animate-pulse delay-300"></div>

      <main className="w-full max-w-7xl z-10">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-6 animate-fade-in-down">
            Master NEET 2024
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive Medical Entrance Preparation with AI-Driven Study Plans, 3D Anatomy Models, and Expert Mentorship
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/30">
            Start Free Trial
          </button>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {icon: '🧬', title: '3D Anatomy Atlas', desc: 'Interactive 3D models for better visualization'},
            {icon: '📖', title: 'NCERT Focus', desc: 'Chapter-wise coverage with highlighted important concepts'},
            {icon: '💉', title: 'Medical Concepts', desc: 'Video lectures by top medical professionals'},
            {icon: '📊', title: 'Performance Analysis', desc: 'All India rank predictor & detailed analytics'},
            {icon: '⏳', title: 'Timed Tests', desc: 'Full-length mock tests with NEET pattern'},
            {icon: '🎓', title: 'Mentorship', desc: 'Personalized guidance from MBBS toppers'},
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </section>

        {/* Syllabus Section */}
        <section className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-6">NEET Syllabus Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {['Physics', 'Chemistry', 'Botany', 'Zoology'].map((subject, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                  <span className="text-gray-300">{subject}</span>
                  <span className="text-emerald-400">{subject === 'Physics' ? '25%' : subject === 'Chemistry' ? '25%' : '25% Each'}</span>
                </div>
              ))}
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Preparation Phases</h3>
              <div className="space-y-3">
                {['NCERT Foundation', 'Concept Strengthening', 'Problem Solving', 'Full-Length Mocks'].map((phase, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
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
            {number: '100k+', label: 'Doubts Solved'},
            {number: '500+', label: 'Hours Video'},
            {number: '10k+', label: 'MCQs Bank'},
          ].map((stat, i) => (
            <div key={i} className="bg-emerald-500/10 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-300 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-100 mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-gray-800/40 p-6 rounded-xl">
                <p className="text-gray-300 mb-4">"The 3D models and detailed solutions helped me secure 680/720 in NEET!"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                  <div>
                    <div className="font-semibold text-gray-100">Priya Singh</div>
                    <div className="text-sm text-emerald-400">AIR 45, NEET 2023</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-100 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {q: 'How are the mock tests structured?', a: 'Exact NEET pattern with previous year question analysis'},
              {q: 'Do you provide NCERT solutions?', a: 'Detailed NCERT solutions with highlighted diagrams'},
              {q: 'Is there doubt support?', a: '24/7 doubt solving with medical experts'}
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-700/50 pb-4">
                <div className="text-gray-200 font-medium mb-2">{faq.q}</div>
                <div className="text-gray-400">{faq.a}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-white/10 rounded-full" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite`
            }}></div>
        ))}
      </div>
    </div>
  );
};

export default NEETExamPage;