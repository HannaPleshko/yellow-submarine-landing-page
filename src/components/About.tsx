
import { Award, Clock, Users, Heart, BookOpen, Smile } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Профессиональный опыт",
      description: "Многолетний опыт преподавания английского языка различным возрастным группам"
    },
    {
      icon: Heart,
      title: "Работа с детьми с РАС",
      description: "Специализированные методики для детей с расстройствами аутистического спектра"
    },
    {
      icon: Users,
      title: "Индивидуальный подход",
      description: "Персональные программы обучения для каждого ученика"
    },
    {
      icon: BookOpen,
      title: "Современные методики",
      description: "Использование актуальных и эффективных методов преподавания"
    },
    {
      icon: Clock,
      title: "Гибкий график",
      description: "Удобное время занятий, подстраиваемся под ваш распорядок"
    },
    {
      icon: Smile,
      title: "Дружелюбная атмосфера",
      description: "Создаю комфортную и позитивную среду для изучения языка"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            О школе <span className="text-blue-600">Yellow Submarine</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Наша школа — это место, где английский язык изучается с радостью и энтузиазмом. 
            Мы создаем уникальную атмосферу, где каждый ученик чувствует себя комфортно и уверенно.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 animate-scale-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Почему именно <span className="text-yellow-600">Yellow Submarine</span>?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-700"><strong>Онлайн и оффлайн:</strong> Выбирайте удобный формат обучения</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-700"><strong>Индивидуальный подход:</strong> Каждая программа адаптирована под ученика</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-700"><strong>Специализация РАС:</strong> Опыт работы с особенными детьми</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-700"><strong>Результативность:</strong> Видимые результаты уже через месяц</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-200 via-blue-200 to-green-200 rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌊📚✨</div>
                  <p className="text-gray-700 font-semibold text-lg">Погружение в мир английского</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
