import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const FAQsPage = () => {
  // FAQs data
  const faqData = [
    {
      question: "What is Exam Mentor and how can it help me prepare for exams?",
      answer:
        "Exam Mentor is an online platform designed to help students prepare for various competitive exams through expert guidance, structured study plans, mock tests, and mentorship programs. We provide personalized support to ensure effective learning and exam success.",
    },
    {
      question: "Which competitive exams do you provide mentorship and guidance for?",
      answer:
        "We offer mentorship for a wide range of exams, including:",
    },
    {
      question: "Do you offer personalized study plans and one-on-one mentoring?",
      answer:
        "Yes! We provide customized study plans based on your strengths and weaknesses. Our expert mentors guide you through one-on-one mentoring sessions to help with doubts, time management, and exam strategies.",
    },
    {
      question: "How can I enroll in your mentorship programs?",
      answer:
        "You can enroll by visiting our website, selecting the desired mentorship program, and completing the registration process. You can also contact our support team for guidance on choosing the right program.",
    },
    {
      question: "Are the study materials and mock tests included in the mentorship program?",
      answer:
        "Yes, our mentorship programs come with comprehensive study materials, practice questions, and full-length mock tests to ensure thorough exam preparation.",
    },
    {
      question: "Do you provide live doubt-solving sessions?",
      answer:
        "Absolutely! We offer regular live doubt-solving sessions where students can ask their questions and get instant clarification from subject experts.",
    },
    {
      question: "Can I access recorded lectures if I miss a live session?",
      answer:
        "Yes, all our live sessions are recorded and available for later access so that you can study at your convenience.",
    },
    //{
    //   question: "How does RSJ ensure sustainability in its development projects?",
    //   answer:
    //     "We prioritize long-term solutions by involving the local community, using sustainable resources, and providing training for maintenance and growth.",
    // },
    // {
    //   question: "Can individuals from urban areas participate in RSJ programs?",
    //   answer:
    //     "Absolutely! We welcome individuals from all backgrounds to contribute, volunteer, or learn through our programs.",
    // },
    // {
    //   question: "How can I stay updated with RSJ's latest activities?",
    //   answer:
    //     "You can subscribe to our newsletter, follow us on social media, or visit our website regularly for updates and success stories.",
    // },
  ];

  // State to handle active dropdown
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the dropdown
  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pb-8 bg-customBlue1 min-h-screen">
     

      <div className="max-w-6xl mx-auto space-y-6 px-4 lg:px-8 bg-white py-8 rounded-xl">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300"
          >
            <div
              onClick={() => toggleDropdown(index)}
              className="cursor-pointer p-6 flex justify-between items-center group"
            >
              <h3 className="text-lg lg:text-xl font-bold text-gray-800 group-hover:text-[#E35A1E] transition duration-300">
                {faq.question}
              </h3>
              <span className="text-blue-600">
                {activeIndex === index ? (
                  <FaChevronUp className="text-lg transform group-hover:scale-125 transition duration-300" />
                ) : (
                  <FaChevronDown className="text-lg transform group-hover:scale-125 transition duration-300" />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ${
                activeIndex === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 text-gray-800 border-t border-gray-200 bg-blue-50 animate-fadeIn">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsPage;
