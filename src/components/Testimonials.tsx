
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [{
    name: "Анна Петрова",
    role: "Мама ученицы (7 лет)",
    text: "Мария - потрясающий преподаватель! Дочка с удовольствием ходит на занятия. За полгода значительно улучшился словарный запас.",
    rating: 5,
    avatar: "👩‍💼"
  }, {
    name: "Игорь Сидоров",
    role: "Студент (22 года)",
    text: "Занимаюсь для работы. Мария помогла мне подготовиться к собеседованию на английском. Очень довольны результатом!",
    rating: 5,
    avatar: "👨‍🎓"
  }, {
    name: "Елена Иванова",
    role: "Мама ребенка с РАС",
    text: "Мария нашла подход к моему сыну с аутизмом. Он впервые с радостью изучает английский. Огромная благодарность!",
    rating: 5,
    avatar: "👩‍🏫"
  }, {
    name: "Дмитрий Козлов",
    role: "Бизнесмен (35 лет)",
    text: "Индивидуальные занятия помогли мне улучшить деловой английский. Мария всегда готовит интересные материалы.",
    rating: 5,
    avatar: "👨‍💼"
  }, {
    name: "Ольга Смирнова",
    role: "Мама близнецов (5 лет)",
    text: "Групповые занятия для моих близнецов - это праздник! Дети обожают Марию и с нетерпением ждут каждого урока.",
    rating: 5,
    avatar: "👩‍👧‍👦"
  }];

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50/50 via-white to-sky-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-20 h-20 bg-amber-200/20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-blue-200/20 rounded-full animate-float delay-200"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-sky-200/20 rounded-full animate-glow delay-300"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-6">
            Отзывы <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500 font-script">учеников</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Что говорят о занятиях в Yellow Submarine
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main testimonial */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden animate-fade-in border border-sky-100/50 hover:shadow-3xl transition-all duration-500">
            {/* Quote decoration */}
            <Quote className="absolute top-8 left-8 w-12 h-12 text-amber-200/50" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => 
                  <Star key={i} className="w-6 h-6 text-amber-400 fill-current mr-1 animate-glow" style={{ animationDelay: `${i * 0.1}s` }} />
                )}
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-700 text-center leading-relaxed mb-8 italic font-light font-serif">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-300 to-sky-400 rounded-full flex items-center justify-center text-2xl animate-float">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-serif font-bold text-gray-800">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600 font-light">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevSlide} 
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-sky-50 transition-all duration-300 group border border-sky-100/50 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-500 group-hover:scale-110 transition-all" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => 
                <button 
                  key={index} 
                  onClick={() => setCurrentIndex(index)} 
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-blue-400 to-sky-400 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`} 
                />
              )}
            </div>
            
            <button 
              onClick={nextSlide} 
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-sky-50 transition-all duration-300 group border border-sky-100/50 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-500 group-hover:scale-110 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
