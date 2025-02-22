const Testimonials = () => {
  return (
    <>
      <section
        id="testimonials"
        className="relative pb-24 pt-5 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 px-15"
      >
        {/* Decorative elements */}

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
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-blue-100 text-6xl z-0">
                  "
                </div>

                {/* User info */}
                <div className="flex items-center mb-6 relative z-10">
                  <img
                    src={`https://randomuser.me/api/portraits/${
                      item % 2 === 0 ? "women" : "men"
                    }/${item}.jpg`}
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-blue-200"
                  />
                  <div className="ml-4 text-left">
                    <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">
                      Computer Science Student
                    </p>
                    <div className="flex mt-1 text-yellow-400">★★★★★</div>
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="relative z-10 text-gray-700 leading-relaxed italic">
                  "ExamMentor completely transformed my study routine. The
                  AI-powered practice tests helped me identify weak areas I
                  didn't even know I had!"
                </p>

                {/* Hover effect layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>

          {/* Stats banner */}
          {/* <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white shadow-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold">4.9/5</div>
                <div className="mt-2 opacity-90">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold">98%</div>
                <div className="mt-2 opacity-90">Pass Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold">24h</div>
                <div className="mt-2 opacity-90">Support Response</div>
              </div>
            </div>
          </div> */}

          {/* Floating animation */}
          <div className="absolute bottom-20 left-1/2 w-24 h-24 bg-blue-200 rounded-full opacity-10 animate-float"></div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
