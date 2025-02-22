import React from "react";
import pdfFile from "../assets/Pdf.pdf";

const PreviousPapers = () => {
 const studyNotes = [
   { exam: "UPSC", file: pdfFile },
   { exam: "SSC", file: pdfFile },
   { exam: "Banking", file: pdfFile },
   { exam: "JEE", file: pdfFile },
   { exam: "NEET", file: pdfFile },
   { exam: "GATE", file: pdfFile },
 ];

  
    return (
      <div className="min-h-screen bg-gray-100 pb-10 px-4 md:px-20">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-[#fd671c] text-center mb-6">Previous Papers</h1>
          <p className="text-gray-600 text-center mb-6">View or download study notes for various competitive exams.</p>
          <div className="space-y-4">
            {studyNotes.map((note, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow">
                <span className="text-lg font-semibold text-gray-700">{note.exam}</span>
                <div className="flex space-x-3">
                  {/* View Button */}
                  <a
                    href={note.file} // Correctly use imported file
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
                  >
                    View
                  </a>
                  {/* Download Button */}
                  <a
                    href={note.file} // Correctly use imported file
                    download
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  
};

export default PreviousPapers;