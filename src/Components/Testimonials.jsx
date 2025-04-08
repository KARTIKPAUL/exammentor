const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      exam: "UPSC Aspirant",
      image: "women/1",
      feedback:
        "ExamMentor's structured approach made my UPSC preparation so much easier. The mock tests and AI-driven analysis were a game-changer!",
    },
    {
      name: "Amit Sharma",
      exam: "SSC Candidate",
      image: "men/2",
      feedback:
        "The SSC-specific practice sets helped me boost my accuracy and time management. Highly recommended!",
    },
    {
      name: "Priya Verma",
      exam: "Banking Exam Aspirant",
      image: "women/3",
      feedback:
        "I loved the Banking section's daily quizzes and performance tracking. Cleared my IBPS PO with confidence!",
    },
    {
      name: "Raj Mehta",
      exam: "IIT-JEE Student",
      image: "men/4",
      feedback:
        "The IIT-JEE question bank and detailed solutions helped me strengthen my weak areas. A must-have for serious aspirants!",
    },
    {
      name: "Ananya Singh",
      exam: "NEET Aspirant",
      image: "women/5",
      feedback:
        "ExamMentor's NEET modules covered all the important topics. The AI-powered analytics kept me on track!",
    },
    {
      name: "Vikram Patel",
      exam: "GATE Candidate",
      image: "men/6",
      feedback:
        "The GATE practice sets and topic-wise tests helped me improve my problem-solving speed significantly!",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative pb-24 pt-5 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 px-15"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full">
            Success Stories
          </span>
          <h3 className="text-4xl font-bold text-[#fd671c] mb-4">
            Transforming Exam Preparation
          </h3>
          <p className="text-lg text-[#269ee4] max-w-2xl mx-auto">
            Join thousands of students who've already supercharged their
            learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-blue-100 text-6xl z-0">
                "
              </div>

              {/* User info */}
              <div className="flex items-center mb-6 relative z-10">
                <img
                  src={`https://randomuser.me/api/portraits/${item.image}.jpg`}
                  alt="User"
                  className="w-12 h-12 rounded-full border-2 border-blue-200"
                />
                <div className="ml-4 text-left">
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.exam}</p>
                  <div className="flex mt-1 text-yellow-400">★★★★★</div>
                </div>
              </div>

              {/* Testimonial text */}
              <p className="relative z-10 text-gray-700 leading-relaxed italic">
                "{item.feedback}"
              </p>

              {/* Hover effect layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-20 left-1/2 w-24 h-24 bg-blue-200 rounded-full opacity-10 animate-float"></div>
      </div>
    </section>
  );
};

export default Testimonials;
