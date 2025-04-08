import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <>
      <div className="flex flex-col items-center px-4 bg-black py-20">
        
        {/* Contact Details */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center w-full gap-8 px-4 lg:px-6">
          {/* Contact Information */}

          <div className="w-full lg:w-1/3 flex flex-col lg:items-start my-5">
            <h2 className="text-[#E35A1E] text-2xl lg:text-3xl font-bold">
              Get in Touch With Us
            </h2>
            <h3 className="text-lg lg:text-xl font-semibold mt-2 text-gray-100">
              Contact Us For Any Questions ! 
            </h3>
            <div className="mt-4 text-gray-100 space-y-4">
              {/* Phone */}
              <div className="flex items-start">
                <FaPhoneAlt className="text-[#E35A1E] text-2xl w-8" />
                <div>
                  <p className="text-[#E35A1E] font-bold text-lg">
                    <a href="tel:+918380804409">+91 7363928225</a>
                  </p>
                  <p className="text-gray-400">
                    Call us: Mon - Sun 9:00 - 19:00
                  </p>
                  </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#E35A1E] text-2xl w-8" />
                <div>
                  <p className="text-lg font-bold">
                    <a href=""></a>
                    Exam Mentor | Preparation
                  </p>
                  <p className="text-gray-400">
                    Rangamati,Ramthenga,Coochbehar <br />
                    West Bengal - 735211
                  </p>
                  </div>
                
              </div>

              {/* Email */}
              <div className="flex items-start">
                <FaEnvelope className="text-[#E35A1E] text-2xl w-8" />
                <div>
                  <p className="text-lg font-bold">
                    <a href="mailto:support@exammentor.com" className="">
                      support@exammentor.com
                    </a>
                  </p>
                  <p className="text-gray-400">Drop us a line anytime!</p>
                  </div>
              </div>

              <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                <a href="#" className="text-gray-100 text-2xl">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-100 text-2xl">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-gray-100 text-2xl">
                  <FaWhatsapp />
                </a>
                <a href="#" className="text-gray-100 text-2xl">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <form className="bg-white shadow-lg p-6 rounded-lg space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 text-gray-800"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 text-gray-800"
                required
              />
              <input
                type="text"
                placeholder="Contact"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 text-gray-800"
                required
              />
              <textarea
                placeholder="Message"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 text-gray-800"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#E35A1E] text-white rounded-lg py-3 hover:bg-[#0084C2] transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="bg-black flex flex-col items-center justify-center px-4 py-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.746442358667!2d89.21123307520813!3d26.463900976917582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3a7acaee07a9d%3A0x85caa94c36cbd4cd!2zUmFtdGhhbmdhIEhpZ2ggU2Nob29sIOCmsOCmvuCmruCmoOCnh-CmmeCnjeCml-CmviDgpongpprgp43gppog4Kas4Ka_4Kam4KeN4Kav4Ka-4Kay4Kef!5e0!3m2!1sen!2sin!4v1740049767519!5m2!1sen!2sin"
          className="w-full h-[40vh] lg:h-[60vh] rounded-xl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="none"
        ></iframe>
      </div>
    </>
  );
};

export default ContactForm;