
import { useState } from 'react';
import { Mail, Instagram, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Сообщение отправлено!",
        description: "Я свяжусь с вами в ближайшее время.",
      });
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          serviceType: ''
        });
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Instagram,
      title: "Instagram",
      value: "@tvoi_engtutor_",
      link: "https://instagram.com/tvoi_engtutor_",
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "maria@yellowsubmarine.by",
      link: "mailto:maria@yellowsubmarine.by",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Телефон",
      value: "+375 (XX) XXX-XX-XX",
      link: "tel:+375xxxxxxxxx",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Локация",
      value: "Минск, Беларусь",
      link: "#",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Свяжитесь <span className="text-blue-600">со мной</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Есть вопросы о обучении? Хотите записаться на пробное занятие? 
            Напишите мне, и я отвечу в течение 24 часов!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Быстрая связь</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Спасибо!</h4>
                <p className="text-gray-600">Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Как вас зовут?"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="+375 (XX) XXX-XX-XX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Интересующая услуга
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="individual">Индивидуальные занятия</option>
                    <option value="group">Групповые занятия</option>
                    <option value="autism">Занятия для детей с РАС</option>
                    <option value="package">Абонемент со скидкой</option>
                    <option value="consultation">Консультация</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Расскажите о ваших целях изучения английского, возрасте ученика, предпочтениях по формату занятий..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Отправляется...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Отправить сообщение</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Контактная информация</h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target={contact.title === 'Instagram' ? '_blank' : '_self'}
                    rel={contact.title === 'Instagram' ? 'noopener noreferrer' : ''}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center`}>
                      <contact.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{contact.title}</h4>
                      <p className="text-gray-600">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Quick Answers */}
            <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">💡 Часто задаваемые вопросы</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-gray-800">Есть ли пробное занятие?</strong>
                  <p className="text-gray-700">Да! Первое занятие можно провести в ознакомительном формате.</p>
                </div>
                <div>
                  <strong className="text-gray-800">Как проходят онлайн-занятия?</strong>
                  <p className="text-gray-700">Через Zoom/Skype с интерактивными материалами и играми.</p>
                </div>
                <div>
                  <strong className="text-gray-800">Возможна ли рассрочка?</strong>
                  <p className="text-gray-700">Да, обсуждается индивидуально для абонементов.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
