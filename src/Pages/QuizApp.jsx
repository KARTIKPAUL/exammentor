import React, { useState } from "react";

const quizCategories = {
  UPSC: [
    {
      question: "Who is known as the Father of the Indian Constitution?",
      options: ["Mahatma Gandhi", "B. R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
      answer: "B. R. Ambedkar",
    },
    {
      question: "Which is the longest river in India?",
      options: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
      answer: "Ganga",
    },
  ],
  SSC: [
    {
      question: "Who wrote 'Discovery of India'?",
      options: ["Subhash Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Rabindranath Tagore"],
      answer: "Jawaharlal Nehru",
    },
    {
      question: "What is the capital of Jharkhand?",
      options: ["Ranchi", "Patna", "Raipur", "Bhopal"],
      answer: "Ranchi",
    },
  ],
  Banking: [
    {
      question: "What does 'CRR' stand for in banking?",
      options: ["Cash Reserve Ratio", "Credit Reserve Ratio", "Currency Rate Regulation", "Current Ratio Reserve"],
      answer: "Cash Reserve Ratio",
    },
    {
      question: "Which bank is known as the 'Bankers' Bank' in India?",
      options: ["SBI", "RBI", "PNB", "ICICI"],
      answer: "RBI",
    },
  ],
  JEE: [
    {
      question: "What is the chemical formula of Benzene?",
      options: ["C6H6", "C5H10", "C2H6", "CH4"],
      answer: "C6H6",
    },
    {
      question: "What is Newton's Second Law of Motion?",
      options: ["F = ma", "E = mc^2", "V = IR", "PV = nRT"],
      answer: "F = ma",
    },
  ],
  NEET: [
    {
      question: "Which organ in the human body produces insulin?",
      options: ["Liver", "Pancreas", "Kidney", "Heart"],
      answer: "Pancreas",
    },
    {
      question: "What is the functional unit of the kidney?",
      options: ["Nephron", "Neuron", "Alveoli", "Villi"],
      answer: "Nephron",
    },
  ],
  GATE: [
    {
      question: "What is the Laplace Transform of 1?",
      options: ["1/s", "s", "s^2", "1/s^2"],
      answer: "1/s",
    },
    {
      question: "What is the unit of electrical resistance?",
      options: ["Ohm", "Farad", "Henry", "Tesla"],
      answer: "Ohm",
    },
  ],
};

const QuizApp = () => {
  const [category, setCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === quizCategories[category][currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizCategories[category].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
        {!category ? (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Select Quiz Category</h1>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(quizCategories).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className="p-4 bg-white border-2 border-gray-200 rounded-xl text-lg font-medium text-gray-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transform hover:scale-105 transition-all duration-200 cursor-pointer shadow-md"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        ) : showScore ? (
          <div className="text-center">
            <div className="animate-bounce mb-8">
              <span className="text-9xl">🎉</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your Score: <span className="text-blue-600">{score}/{quizCategories[category].length}</span>
            </h2>
            <button
              onClick={() => {
                setCategory(null);
                setCurrentQuestion(0);
                setScore(0);
                setShowScore(false);
              }}
              className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              {quizCategories[category][currentQuestion].question}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quizCategories[category][currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option)}
                  className="p-4 bg-white border-2 border-gray-200 rounded-xl text-lg font-medium text-gray-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transform hover:scale-105 transition-all duration-200 cursor-pointer shadow-md"
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="text-center text-gray-500">
              Question {currentQuestion + 1} of {quizCategories[category].length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;