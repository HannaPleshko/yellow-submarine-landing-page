
import { Award, Heart, Users, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background with image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(30,58,138,0.7), rgba(30,64,175,0.7)), url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      ></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-sky-900/70 to-blue-800/80"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 bg-sky-400/20 rounded-full animate-pulse delay-150"></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse delay-300"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            О школе <span className="text-yellow-400">Yellow Submarine</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Добро пожаловать в мир увлекательного изучения английского языка! 
            Наша школа — это место, где каждый ученик находит свой уникальный путь к успеху.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-sky-300/20">
              <h3 className="text-3xl font-bold text-white mb-6">Кто я такая?</h3>
              <div className="space-y-4 text-blue-100">
                <p className="leading-relaxed">
                  Меня зовут Мария, и я — основатель школы английского языка "Yellow Submarine". 
                  Уже более 5 лет я помогаю людям открывать для себя мир английского языка.
                </p>
                <p className="leading-relaxed">
                  Моя специализация — работа с детьми, взрослыми и особенными детьми с РАС. 
                  Я верю, что каждый человек способен освоить язык, нужен лишь правильный подход!
                </p>
                <p className="leading-relaxed">
                  Мой метод основан на создании дружелюбной атмосферы, где ошибки — это часть обучения, 
                  а успехи празднуются вместе.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <Users className="mx-auto mb-4 text-white" size={40} />
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-white font-medium">Довольных учеников</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <Award className="mx-auto mb-4 text-white" size={40} />
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-white font-medium">Лет опыта</div>
            </div>
            
            <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <Heart className="mx-auto mb-4 text-white" size={40} />
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-white font-medium">Успешных результатов</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-400 to-sky-500 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <Sparkles className="mx-auto mb-4 text-white" size={40} />
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white font-medium">Поддержка учеников</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto border border-yellow-300/20">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Моя миссия</h3>
            <p className="text-lg text-blue-100 leading-relaxed">
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
