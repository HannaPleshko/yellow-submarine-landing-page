
import { Award, Heart, Users, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background with image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(30,58,138,0.5), rgba(30,64,175,0.5)), url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      ></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800/70 via-sky-800/60 to-blue-700/70"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-amber-300/20 rounded-full animate-float"></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 bg-sky-300/20 rounded-full animate-float delay-150"></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-blue-300/20 rounded-full animate-glow delay-300"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            О школе <span className="text-amber-300 font-script">Yellow Submarine</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            Добро пожаловать в мир увлекательного изучения английского языка! 
            Наша школа — это место, где каждый ученик находит свой уникальный путь к успеху.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-sky-300/20 hover:bg-white/15 transition-all duration-300 group">
              <h3 className="text-3xl font-serif font-bold text-white mb-6 group-hover:text-amber-200 transition-colors">Кто я такая?</h3>
              <div className="space-y-4 text-blue-100">
                <p className="leading-relaxed font-light">
                  Меня зовут Мария, и я — основатель школы английского языка "Yellow Submarine". 
                  Уже более 5 лет я помогаю людям открывать для себя мир английского языка.
                </p>
                <p className="leading-relaxed font-light">
                  Моя специализация — работа с детьми, взрослыми и особенными детьми с РАС. 
                  Я верю, что каждый человек способен освоить язык, нужен лишь правильный подход!
                </p>
                <p className="leading-relaxed font-light">
                  Мой метод основан на создании дружелюбной атмосферы, где ошибки — это часть обучения, 
                  а успехи празднуются вместе.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            <div className="bg-gradient-to-br from-amber-300 to-amber-400 rounded-3xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group cursor-pointer">
              <Users className="mx-auto mb-4 text-white group-hover:scale-110 transition-transform" size={40} />
              <div className="text-3xl font-serif font-bold text-white mb-2">150+</div>
              <div className="text-white font-medium">Довольных учеников</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group cursor-pointer">
              <Award className="mx-auto mb-4 text-white group-hover:scale-110 transition-transform" size={40} />
              <div className="text-3xl font-serif font-bold text-white mb-2">5+</div>
              <div className="text-white font-medium">Лет опыта</div>
            </div>
            
            <div className="bg-gradient-to-br from-sky-400 to-sky-500 rounded-3xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group cursor-pointer">
              <Heart className="mx-auto mb-4 text-white group-hover:scale-110 transition-transform" size={40} />
              <div className="text-3xl font-serif font-bold text-white mb-2">95%</div>
              <div className="text-white font-medium">Успешных результатов</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-300 to-sky-400 rounded-3xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group cursor-pointer">
              <Sparkles className="mx-auto mb-4 text-white group-hover:scale-110 transition-transform" size={40} />
              <div className="text-3xl font-serif font-bold text-white mb-2">24/7</div>
              <div className="text-white font-medium">Поддержка учеников</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-4xl mx-auto border border-amber-300/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-2xl font-serif font-bold text-amber-300 mb-4">Моя миссия</h3>
            <p className="text-lg text-blue-100 leading-relaxed font-light">
              Сделать изучение английского языка доступным, интересным и эффективным для каждого. 
              Помочь людям преодолеть языковые барьеры и открыть новые возможности в жизни и карьере.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
