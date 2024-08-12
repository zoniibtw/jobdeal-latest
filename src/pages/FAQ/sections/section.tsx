import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Section: React.FC = () => {
  const { t } = useTranslation(['faq']);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: t('question.q1.q'),
      answer: t('question.q1.a'),
    },
    {
      question: t('question.q2.q'),
      answer: t('question.q2.a'),
    },
    {
      question: t('question.q3.q'),
      answer: t('question.q3.a'),
    },
    {
      question: t('question.q4.q'),
      answer: t('question.q4.a'),    },
    {
      question: t('question.q5.q'),
      answer: t('question.q5.a'),
    },
    {
      question: t('question.q6.q'),
      answer: t('question.q6.a'),    
    },
    {
      question: t('question.q7.q'),
      answer: t('question.q7.a'),
    },
    {
      question: t('question.q10.q'),
      answer: t('question.q10.a'),
    },
    {
      question: t('question.q11.q'),
      answer: t('question.q11.a'),    },
    {
      question: t('question.q12.q'),
      answer: t('question.q12.a'),
    },
    {
      question: t('question.q13.q'),
      answer: t('question.q13.a'),    
    },
    {
      question: t('question.q14.q'),
      answer: t('question.q14.a'),
    },
    {
      question: t('question.q15.q'),
      answer: t('question.q15.a'),
    },
    {
      question: t('question.q16.q'),
      answer: t('question.q16.a'),    },
    {
      question: t('question.q17.q'),
      answer: t('question.q17.a'),
    },
    {
      question: t('question.q18.q'),
      answer: t('question.q18.a'),    
    },
    {
      question: t('question.q19.q'),
      answer: t('question.q19.a'),
    },
    {
      question: t('question.q20.q'),
      answer: t('question.q20.a'),
    },
    {
      question: t('question.q21.q'),
      answer: t('question.q21.a'),    },
    {
      question: t('question.q22.q'),
      answer: t('question.q22.a'),
    },
    {
      question: t('question.q23.q'),
      answer: t('question.q23.a'),    
    },
    {
      question: t('question.q24.q'),
      answer: t('question.q24.a'),    
    },
    {
      question: t('question.q25.q'),
      answer: t('question.q25.a'),    
    },
    {
      question: t('question.q26.q'),
      answer: t('question.q26.a'),    
    },
    {
      question: t('question.q27.q'),
      answer: t('question.q27.a'),    
    },
    {
      question: t('question.q28.q'),
      answer: t('question.q28.a'),    
    },
  ];

  return (
    <section className="text-white pt-20 pb-40">
      <div className="container max-md:px-5 mx-auto">
        <div className="flex flex-wrap -mx-3.5">
          {faqs.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 px-3.5 mb-3.5">
              <div className="border border-white/25 bg-white/5 rounded-md">
                <button
                  className="w-full text-left p-4 font-medium text-lg focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.question}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[1000px] p-4' : 'max-h-0 p-0'}`}
                >
                  <div className="text-white/75 whitespace-pre-line">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
