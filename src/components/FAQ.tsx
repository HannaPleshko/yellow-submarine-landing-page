
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Какая методика преподавания используется?",
      answer: "Я использую коммуникативную методику с элементами игрового обучения. Для детей с РАС применяю специальные адаптированные методы, учитывающие особенности восприятия."
    },
    {
      question: "Сколько длится одно занятие?",
      answer: "Индивидуальные занятия длятся 60 минут, групповые занятия — 45-60 минут. Для детей младшего возраста возможны занятия по 30-45 минут."
    },
    {
      question: "Можно ли заниматься онлайн?",
      answer: "Да, конечно! Провожу как очные, так и онлайн занятия через Zoom или Skype. Онлайн формат особенно удобен для взрослых и подростков."
    },
    {
      question: "Есть ли пробное занятие?",
      answer: "Да, первое занятие можно провести бесплатно! Это поможет познакомиться, определить уровень и подобрать подходящую программу обучения."
    },
    {
      question: "Как проходят занятия с детьми с РАС?",
      answer: "Занятия адаптированы под особенности каждого ребенка. Использую визуальные опоры, структурированные задания и методы прикладного анализа поведения (ABA)."
    },
    {
      question: "Какие материалы используются на занятиях?",
      answer: "Современные учебники Cambridge, Oxford, интерактивные игры, мультимедийные материалы, а также авторские разработки для детей с особенностями развития."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-200/20 rounded-full animate-pulse delay-150"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Часто задаваемые <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">вопросы</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о занятиях в Yellow Submarine
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-yellow-500 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6">
                    <div className="h-px bg-gradient-to-r from-yellow-200 to-blue-200 mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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

export default FAQ;
