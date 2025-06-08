
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Индивидуальное занятие",
      subtitle: "Разовое занятие",
      price: "35",
      currency: "BYN",
      duration: "60 минут",
      features: [
        "Персональная программа",
        "Гибкое расписание", 
        "Онлайн или оффлайн",
        "Материалы включены",
        "Домашние задания"
      ],
      color: "from-blue-500 to-blue-600",
      popular: false
    },
    {
      title: "Абонемент",
      subtitle: "8 индивидуальных занятий",
      price: "260",
      originalPrice: "280",
      currency: "BYN",
      duration: "8 x 60 минут",
      features: [
        "Экономия 20 BYN",
        "Персональная программа",
        "Приоритет в расписании",
        "Онлайн или оффлайн",
        "Материалы включены",
        "Отчеты о прогрессе",
        "Гибкая заморозка"
      ],
      color: "from-yellow-500 to-yellow-600",
      popular: true,
      badge: "Акция!"
    },
    {
      title: "Групповые занятия",
      subtitle: "8 занятий в группе 4-8 человек",
      price: "105",
      currency: "BYN",
      duration: "8 x 45-60 минут",
      features: [
        "Группа 4-8 человек",
        "Интерактивное обучение",
        "Социализация",
        "Онлайн или оффлайн",
        "Материалы включены",
        "Дружественная атмосфера"
      ],
      color: "from-sky-500 to-sky-600",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 via-white to-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-blue-600">Цены</span> на обучение
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прозрачные цены без скрытых платежей. Выберите подходящий вариант обучения.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fade-in border border-sky-100 ${
                plan.popular ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star size={14} className="fill-current" />
                    <span>{plan.badge}</span>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-r ${plan.color} p-6 text-white relative`}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-white/90 mb-4">{plan.subtitle}</p>
                  <div className="flex items-center justify-center space-x-2">
                    {plan.originalPrice && (
                      <span className="text-2xl line-through text-white/70">{plan.originalPrice}</span>
                    )}
                    <span className="text-4xl lg:text-5xl font-bold">{plan.price}</span>
                    <div className="text-left">
                      <div className="text-lg">{plan.currency}</div>
                      <div className="text-sm text-white/90">{plan.duration}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-sky-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-lg font-semibold text-center block hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${
                    plan.popular ? 'animate-pulse' : ''
                  }`}
                >
                  {plan.popular ? (
                    <span className="flex items-center justify-center space-x-2">
                      <Zap size={16} />
                      <span>Выбрать со скидкой</span>
                    </span>
                  ) : (
                    'Выбрать план'
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-yellow-100 to-sky-100 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              🎁 Специальное предложение!
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              При покупке абонемента на 8 индивидуальных занятий — скидка 20 BYN!
            </p>
            <p className="text-gray-600">
              Акция действует ограниченное время. Количество мест по акционной цене ограничено.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
