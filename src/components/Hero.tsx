
import { Star, Users, Globe, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-yellow-100 via-blue-50 to-green-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/30 rounded-full animate-bounce delay-75"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300/30 rounded-full animate-bounce delay-150"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-300/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-purple-300/30 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-yellow-200 rounded-full text-yellow-800 font-semibold text-sm animate-pulse">
                🏆 Лучший преподаватель английского
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Привет! Я <span className="text-yellow-600">Мария</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600">
                Преподаватель английского языка в школе{' '}
                <span className="font-bold text-blue-600">Yellow Submarine</span> 🌊
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Обучаю английскому языку детей, взрослых и детей с РАС. 
                Мой подход — сделать изучение языка увлекательным и эффективным!
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 bg-white/80 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Users className="text-blue-500" size={20} />
                  <span className="text-sm font-medium">Дети и взрослые</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Heart className="text-red-500" size={20} />
                  <span className="text-sm font-medium">Дети с РАС</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Globe className="text-green-500" size={20} />
                  <span className="text-sm font-medium">Онлайн/Оффлайн</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              >
                Узнать цены
              </a>
              <a
                href="#contact"
                className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-200 hover:border-yellow-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              >
                Связаться со мной
              </a>
            </div>
          </div>

          {/* Right Content - Image/Visual */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-yellow-400 via-blue-400 to-green-400 rounded-3xl shadow-2xl relative overflow-hidden">
                {/* Submarine illustration using CSS */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl animate-bounce">🟡</div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={20} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-800 font-semibold">
                      "Лучший преподаватель! Дочка с удовольствием изучает английский"
                    </p>
                    <p className="text-gray-600 text-sm mt-1">— Анна, мама ученицы</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
