import { User, Users, Heart, Video, MapPin, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Индивидуальные занятия",
      description: "Персональный подход, гибкая программа, максимальное внимание",
      duration: "60 минут",
      format: "Онлайн/Оффлайн",
      color: "from-blue-500 to-blue-600",
      bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Users,
      title: "Групповые занятия",
      description: "Занятия в небольших группах 4-8 человек, интерактивное обучение",
      duration: "45-60 минут", 
      format: "Онлайн/Оффлайн",
      color: "from-sky-500 to-sky-600",
      bgImage: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Heart,
      title: "Занятия для детей с РАС",
      description: "Специализированные методики, терпение и понимание особенностей",
      duration: "По индивидуальному плану",
      format: "Предпочтительно оффлайн",
      color: "from-yellow-500 to-yellow-600",
      bgImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background with colorful gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-50 to-yellow-50"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2393C5FD' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Floating animated elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300/30 rounded-full animate-bounce delay-75"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-300/30 rounded-full animate-bounce delay-150"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-sky-300/30 rounded-full animate-bounce delay-300"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Мои <span className="text-blue-600">услуги</span>
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
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background image header */}
              <div 
                className="h-32 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-85`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon size={40} className="text-white drop-shadow-lg" />
                </div>
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <span className="text-white text-xs font-semibold">NEW</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
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

        {/* Advantages with background */}
        <div 
          className="relative rounded-2xl shadow-xl p-8 lg:p-12 animate-scale-in overflow-hidden bg-white"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Преимущества обучения в <span className="text-yellow-600 font-script text-[40px]">Yellow Submarine</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
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
