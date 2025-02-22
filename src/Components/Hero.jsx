const Hero = () => {
    return (
      <header className="relative bg-black pt-5 text-white min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute w-24 h-24 bg-white rounded-full -top-12 -left-12 animate-pulse"></div>
          <div className="absolute w-32 h-32 bg-yellow-400 rounded-full -bottom-16 -right-16 animate-ping"></div>
        </div> */}
  
        <div className="relative z-10 text-center px-4 max-w-6xl">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-up">
            Ace Your Exams with &nbsp; 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fd671c] to-[#269ee4]">
              ExamMentor
            </span>
          </h1>
  
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-light animate-fade-in-up delay-100">
            Master your subjects with AI-powered study tools, interactive quizzes,<br className="hidden md:block" /> 
            and expert-curated resources for all academic levels.
          </p>
  
          {/* CTA Button with animation */}
          <button className="bg-[#fd671c] hover:bg-orange-600 px-8 py-4 rounded-xl text-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up delay-200">
            Start Learning Free Today →
          </button>
  
          {/* Features grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fade-in-up delay-300">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Notes</h3>
              <p className="opacity-80">1000+ subjects covered with detailed explanations</p>
            </div>
            
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2">Smart Quizzes</h3>
              <p className="opacity-80">Adaptive tests that learn your weak areas</p>
            </div>
            
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
              <p className="opacity-80">Proven strategies from top educators</p>
            </div>
          </div>
  
          {/* Stats */}
          <div className="mt-12 flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold">500K+</div>
              <div className="opacity-80">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">95%</div>
              <div className="opacity-80">Exam Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="opacity-80">Study Support</div>
            </div>
          </div>
  
          {/* Floating scroll indicator */}
          <div className="mt-20 animate-bounce">
            <span className="block mb-2">Explore More</span>
            <div className="w-6 h-10 border-2 border-white rounded-full mx-auto">
              <div className="w-1 h-2 bg-white mt-2 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
  
        {/* Gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-purple-600/30 pointer-events-none"></div> */}
      </header>
    );
  };
  
  export default Hero;