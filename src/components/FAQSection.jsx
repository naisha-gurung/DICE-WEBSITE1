import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQSection = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleFAQ = (index) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };

  const faqs = [
    {
      question: "How to join DICE Core Team?",
      answer:
        "The only way to make to the core team is to crack the interview process.",
    },
    {
      question: " How to contact the core team?",
      answer: "You can email your queries to our contact page",
    },
    {
      question: " What do DICE Provides?",
      answer:
        "All the resources that can make you a better person in the terms of getting a good placement, improve your oratory skills or your lifestyle. Check our website and Social Media handles for more Details.",
    },
    {
      question: "How to join DICE?",
      answer: "You can join by taking part in Events listed on out Event page.",
    },
  ];

  return (
    <div className="h-[450px] flex flex-col items-center justify-center my-12">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
        <div key={index} className="my-2 w-[90%] sm:w-[60%] pb-2 border-b-2">
          <button
            onClick={() =>
              toggleFAQ(index)}
            className="w-full text-left px-4 py-2 font-semibold flex justify-between items-center focus:outline-none"
          >
            <span>{faq.question}</span>

            <FaChevronDown
              className={`h-6 w-6 transition-transform ${
                isOpen === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {isOpen === index && <p className="px-4 py-2">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
