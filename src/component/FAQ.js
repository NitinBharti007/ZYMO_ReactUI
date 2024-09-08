import React from 'react';

const FAQItem = ({ question }) => (
  <div className="flex justify-between items-center bg-gradient-to-r from-purple-400 to-purple-600 text-white p-4 my-2 rounded-lg">
    <span>{question}</span>
    <i className="fas fa-plus"></i>
  </div>
);

const FAQ = () => (
  <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8 mt-10">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
      Frequently Asked Questions
    </h1>
    <div className="space-y-4">
      <FAQItem question="What is ZYMO?" />
      <FAQItem question="Why customers should choose Zymo?" />
      <FAQItem question="Is Zymo available in my city?" />
      <FAQItem question="What types of cars are available on Zymo?" />
      <FAQItem question="How much does it cost to rent cars from ZYMO?" />
      <FAQItem question="What are the advantages of renting a car from Zymo?" />
      <FAQItem question="What are the benefits of monthly rental to Zymo customers?" />
    </div>
  </div>
);

export default FAQ;
