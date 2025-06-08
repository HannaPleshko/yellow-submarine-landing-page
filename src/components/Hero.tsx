
import { Star, Users, Globe, Heart, ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const achievements = [
    { number: "150+", text: "Довольных учеников", icon: Users, color: "from-blue-400 to-blue-500" },
    { number: "5+", text: "Лет опыта", icon: Star, color: "from-yellow-400 to-yellow-500" },
    { number: "95%", text: "Успешных результатов", icon: Heart, color: "from-sky-400 to-sky-500" },
    { number: "24/7", text: "Поддержка", icon: Globe, color: "from-blue-500 to-blue-600" }
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/20 rounded-full animate-bounce delay-75"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300/20 rounded-full animate-bounce delay-150"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-sky-300/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-yellow-300/20 rounded-full animate-bounce delay-500"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-1/4 w-8 h-8 bg-yellow-400/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-6 h-6 bg-blue-400/30 rounded-full animate-pulse delay-200"></div>
        
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-full text-yellow-800 font-semibold text-sm animate-pulse shadow-lg">
                <Star className="w-4 h-4 mr-2 text-yellow-600" />
                🏆 Лучший преподаватель английского
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
                Привет! Я <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 animate-pulse">Мария</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Преподаватель английского языка в школе{' '}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">Yellow Submarine</span> 🌊
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Обучаю английскому языку детей, взрослых и детей с РАС. 
                Мой подход — сделать изучение языка увлекательным и эффективным!
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100">
                  <Users className="text-blue-500 flex-shrink-0" size={24} />
                  <span className="text-sm font-medium text-gray-700">Дети и взрослые</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-sky-100">
                  <Heart className="text-sky-500 flex-shrink-0" size={24} />
                  <span className="text-sm font-medium text-gray-700">Дети с РАС</span>
                </div>
                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-yellow-100">
                  <Globe className="text-yellow-500 flex-shrink-0" size={24} />
                  <span className="text-sm font-medium text-gray-700">Онлайн/Оффлайн</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                Узнать цены
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="group bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Видео-презентация
              </button>
            </div>
          </div>

          {/* Right Content - Maria's Photo */}
          <div className="relative animate-scale-in">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-yellow-400/20 to-blue-400/20 rounded-3xl transform rotate-3"></div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-sky-400/20 to-yellow-400/20 rounded-3xl transform -rotate-2"></div>
              
              {/* Main photo container */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                <img 
                  src="/lovable-uploads/34c291e0-7c94-46ce-a0b1-d6f7b1875f54.png" 
                  alt="Мария - преподаватель английского языка Yellow Submarine"
                  className="w-full h-[500px] object-cover object-center"
                />
                
                {/* Floating elements */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white p-3 rounded-full animate-bounce shadow-lg">
                  🌟
                </div>
                <div className="absolute bottom-6 left-6 bg-gradient-to-r from-blue-500 to-sky-500 text-white p-3 rounded-full animate-bounce delay-200 shadow-lg">
                  📚
                </div>
                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 bg-gradient-to-r from-sky-500 to-blue-500 text-white p-2 rounded-full animate-pulse shadow-lg">
                  ✨
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="absolute -bottom-12 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-100">
                  <div className="flex items-center justify-center space-x-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={18} className="text-yellow-500 fill-current animate-pulse" style={{ animationDelay: `${star * 0.1}s` }} />
                    ))}
                  </div>
                  <p className="text-gray-800 font-semibold text-sm text-center mb-2">
                    "Лучший преподаватель! Дочка с удовольствием изучает английский"
                  </p>
                  <p className="text-gray-500 text-xs text-center">— Анна, мама ученицы</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Statistics */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-center text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <item.icon className="mx-auto mb-3" size={32} />
              <div className="text-2xl lg:text-3xl font-bold mb-2">{item.number}</div>
              <div className="text-sm font-medium opacity-90">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
