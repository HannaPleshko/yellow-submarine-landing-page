
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Мама ученицы (7 лет)",
      text: "Мария - потрясающий преподаватель! Дочка с удовольствием ходит на занятия. За полгода значительно улучшился словарный запас.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Игорь Сидоров",
      role: "Студент (22 года)",
      text: "Занимаюсь для работы. Мария помогла мне подготовиться к собеседованию на английском. Очень довольны результатом!",
      rating: 5,
      avatar: "👨‍🎓"
    },
    {
      name: "Елена Иванова",
      role: "Мама ребенка с РАС",
      text: "Мария нашла подход к моему сыну с аутизмом. Он впервые с радостью изучает английский. Огромная благодарность!",
      rating: 5,
      avatar: "👩‍🏫"
    },
    {
      name: "Дмитрий Козлов",
      role: "Бизнесмен (35 лет)",
      text: "Индивидуальные занятия помогли мне улучшить деловой английский. Мария всегда готовит интересные материалы.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Ольга Смирнова",
      role: "Мама близнецов (5 лет)",
      text: "Групповые занятия для моих близнецов - это праздник! Дети обожают Марию и с нетерпением ждут каждого урока.",
      rating: 5,
      avatar: "👩‍👧‍👦"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-20 h-20 bg-yellow-300/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-blue-300/20 rounded-full animate-bounce delay-200"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-green-300/20 rounded-full animate-bounce delay-300"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Отзывы <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">учеников</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Что говорят о занятиях в Yellow Submarine
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main testimonial */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden animate-fade-in">
            {/* Quote decoration */}
            <Quote className="absolute top-8 left-8 w-12 h-12 text-yellow-300/50" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current mr-1" />
                ))}
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-700 text-center leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-800">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-50 transition-colors group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-yellow-600" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-yellow-50 transition-colors group"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-yellow-600" />
            </button>
          </div>

          {/* Thumbnail previews */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-5 gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`p-4 rounded-2xl text-center transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-br from-yellow-100 to-orange-100 shadow-lg scale-105' 
                    : 'bg-white shadow-md hover:shadow-lg hover:scale-105'
                }`}
              >
                <div className="text-2xl mb-2">{testimonial.avatar}</div>
                <div className="text-sm font-semibold text-gray-800 truncate">{testimonial.name}</div>
                <div className="text-xs text-gray-600 truncate">{testimonial.role}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
