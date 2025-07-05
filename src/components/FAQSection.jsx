import { useState } from "react";

const FAQSection = ({ faqs }) => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden transition-all">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-600 transition-colors"
              >
                <span className="font-semibold text-blue-400">{faq.question}</span>
                <span className="text-2xl text-white">{expandedFaq === index ? "−" : "+"}</span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedFaq === index ? "max-h-[500px] pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
