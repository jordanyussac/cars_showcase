"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whatsappNumbers = [
    { name: "Customer Service 1", number: "6282145541170" },
    { name: "Customer Service 2", number: "628111816086" },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="flex flex-col bg-gradient-to-r from-blue-50 to-blue-100 mt-10 border-t border-gray-200">
      <div className="flex flex-col items-center px-6 sm:px-16 py-10">
        {/* Google Maps Section */}
        <div className="w-full flex justify-center mb-8">
          <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-300 bg-white max-w-[800px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.8511676488697!2d115.3030023146323!3d-8.518456364203627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd217784213ee31%3A0x97ddde33d1b5353a!2sGudang%20mobil%2088%20rental%20new!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Content Below Map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
          {/* Column 1: Copyright Section */}
          <div className="flex flex-col justify-start items-start">
            <p className="text-lg font-bold text-black">2024, Bali88Rent</p>
            <p className="text-base text-gray-400">
              &copy; All Rights Reserved
            </p>
          </div>

          {/* Column 2: Spacer for Balance */}
          <div></div>

          {/* Column 3: Social Icons Section */}
          <div className="flex flex-col items-end gap-2">
            <p className="text-sm text-black mb-2">Connect with us:</p>
            <div className="flex gap-4">
              {/* WhatsApp Link */}
              <div
                onClick={openModal}
                className="bg-white p-2 rounded-full hover:bg-green-200 shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <FaWhatsapp size={30} color="green" />
              </div>
              {/* Email Link */}
              <Link href="mailto:info@bali88rent.com">
                <div className="bg-white p-2 rounded-full hover:bg-blue-200 shadow-md transition-transform duration-300 hover:scale-110">
                  <FaEnvelope size={30} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for WhatsApp Numbers */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-96 animate-scale-in">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Whatsapp Number
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                ✖
              </button>
            </div>

            {/* WhatsApp List */}
            <ul className="space-y-3">
              {whatsappNumbers.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`https://api.whatsapp.com/send?phone=${item.number}`}
                    target="_blank"
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-all"
                    onClick={closeModal}
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full shadow">
                      <FaWhatsapp size={18} className="text-green-600" />
                    </div>
                    <span className="text-base font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Footer Button */}
            <button
              onClick={closeModal}
              className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Additional Links Section */}
      <div className="flex justify-center items-center border-t border-gray-300 py-4">
        <Link
          href="/privacy-policy"
          className="text-sm text-gray-500 hover:text-gray-700 mx-2"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms-of-service"
          className="text-sm text-gray-500 hover:text-gray-700 mx-2"
        >
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
