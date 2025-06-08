
import { User, Users, Heart, Video, MapPin, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Индивидуальные занятия",
      description: "Персональный подход, гибкая программа, максимальное внимание",
      duration: "60 минут",
      format: "Онлайн/Оффлайн",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Групповые занятия",
      description: "Занятия в небольших группах 4-8 человек, интерактивное обучение",
      duration: "45-60 минут", 
      format: "Онлайн/Оффлайн",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Heart,
      title: "Занятия для детей с РАС",
      description: "Специализированные методики, терпение и понимание особенностей",
      duration: "По индивидуальному плану",
      format: "Предпочтительно оффлайн",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const advantages = [
    {
      icon: Video,
      title: "Онлайн обучение",
      description: "Современные технологии, удобство дома"
    },
    {
      icon: MapPin,
      title: "Оффлайн занятия",
      description: "Личный контакт, полное погружение"
    },
    {
      icon: Clock,
      title: "Гибкое расписание",
      description: "Подстраиваемся под ваш график"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Мои <span className="text-purple-600">услуги</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите формат обучения, который подходит именно вам. 
            Каждая программа разработана с учетом индивидуальных потребностей.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <service.icon size={40} className="mb-4" />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">{service.format}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 animate-scale-in">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Преимущества обучения в <span className="text-yellow-600">Yellow Submarine</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{advantage.title}</h4>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
