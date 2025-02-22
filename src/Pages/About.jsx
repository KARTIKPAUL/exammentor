import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-200 to-pink-500 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-xl"></div>
      
      <div className="w-full max-w-6xl backdrop-blur-lg rounded-2xl p-8 transition-shadow duration-300 relative z-10">
        {/* Animated Hero Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full text-white mb-4">
              <span className="mr-2">🌟</span> Trusted by 1M+ Students
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 leading-tight">
            Revolutionizing Exam Preparation <br/> with Smart Technology
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Join India's fastest-growing learning community and transform your exam preparation strategy
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { value: "98%", label: "Success Rate", color: "purple" },
              { value: "50K+", label: "Mock Tests", color: "pink" },
              { value: "10M+", label: "Questions Solved", color: "blue" }
            ].map((stat, index) => (
              <div key={index} className="stat-card group">
                <div className={`text-4xl font-bold text-${stat.color}-600 mb-2 transition-all duration-300 group-hover:text-${stat.color}-700`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Mission Section */}
        <div className="mb-16 relative">
          <div className="feature-card transform hover:rotate-1 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-50 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <span className="text-purple-500 text-6xl mr-4">🎯</span>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision for Modern Education</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed p-6">
                At ExamMentor, we're building the future of education by combining cutting-edge AI technology with 
                proven pedagogical methods. Our adaptive learning platform personalizes every aspect of your 
                preparation, from intelligent doubt solving to predictive performance analysis.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 p-3">
          {[
            { 
              icon: "🤖", 
              title: "AI-Powered Learning", 
              content: "Adaptive learning paths powered by machine learning algorithms",
              gradient: "from-purple-100 to-pink-100"
            },
            { 
              icon: "📈", 
              title: "Progress Analytics", 
              content: "Real-time performance tracking with detailed insights",
              gradient: "from-blue-100 to-purple-100"
            },
            { 
              icon: "🎮", 
              title: "Gamified Learning", 
              content: "Earn badges and compete on leaderboards",
              gradient: "from-pink-100 to-orange-100"
            },
            { 
              icon: "🧑🏫", 
              title: "Expert Mentors", 
              content: "24/7 access to top educators and industry experts",
              gradient: "from-green-100 to-blue-100"
            },
            { 
              icon: "📚", 
              title: "Smart Revision", 
              content: "AI-generated flashcards and spaced repetition system",
              gradient: "from-yellow-100 to-pink-100"
            },
            { 
              icon: "🏅", 
              title: "Career Guidance", 
              content: "Personalized roadmap for academic and career success",
              gradient: "from-purple-100 to-indigo-100"
            },
          ].map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card bg-gradient-to-br ${feature.gradient} hover:shadow-xl transition-all duration-300 group  p-3 rounded-xl`}
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.content}</p>
            </div>
          ))}
        </div>

        {/* Media Section */}
        <div className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Interactive Learning Experience</h2>
              <p className="text-gray-600 mb-6">
                Experience education like never before with our immersive learning modules featuring:
              </p>
              <ul className="space-y-3">
                {[
                  "3D concept visualizations",
                  "Interactive problem solving",
                  "Virtual lab simulations",
                  "AR-based learning modules",
                  "Real-time collaborative study"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="mr-2">✅</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-1 shadow-xl transform hover:rotate-1 transition-transform">
              <div className="bg-white rounded-lg overflow-hidden aspect-video">
                {/* Placeholder for video/image */}
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">Demo Video</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">From Our Champions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                name: "Aarav Sharma", 
                exam: "JEE Advanced", 
                quote: "The AI-powered mock tests predicted my actual rank within 5 positions!", 
                photo: "👨🎓"
              },
              { 
                name: "Priya Patel", 
                exam: "NEET", 
                quote: "Biology animated modules made complex concepts crystal clear", 
                photo: "👩⚕️"
              },
              { 
                name: "Rohan Singh", 
                exam: "UPSC", 
                quote: "Current affairs analysis saved me hundreds of research hours", 
                photo: "👨💼"
              },
              { 
                name: "Ananya Gupta", 
                exam: "CAT", 
                quote: "Quant shortcut strategies boosted my score by 40%", 
                photo: "👩💼"
              },
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">{testimonial.photo}</div>
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-purple-600 text-sm">{testimonial.exam} Topper</div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Section */}
        <div className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-75">
            {["🏛️ University Partners", "📚 Publishing Giants", "🏫 Top Institutes", "💻 Tech Leaders"].map((item, index) => (
              <div key={index} className="text-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
                <div className="text-3xl mb-2">{item.split(' ')[0]}</div>
                <div className="text-gray-600">{item.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-20"></div>
          <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Ready to Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Learning Revolution</span>?
            </h2>
            <p className="text-gray-600 mb-8 text-xl">Start your free trial today and experience the future of education</p>
            <div className="flex justify-center space-x-4">
              <button className="cta-button bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Start Free Trial →
              </button>
              <button className="cta-button bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-gray-800">
                Book Demo
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">7-day free trial • No credit card required</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;