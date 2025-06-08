
import { Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌊</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Yellow Submarine</h3>
                <p className="text-gray-400 text-sm">Английский с Марией</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Школа английского языка для детей, взрослых и детей с РАС. 
              Делаем изучение языка увлекательным и эффективным!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors">Главная</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">О школе</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Услуги</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-yellow-400 transition-colors">Цены</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Связаться со мной</h4>
            <div className="space-y-3">
              <a 
                href="https://instagram.com/tvoi_engtutor_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Instagram size={18} />
                <span>@tvoi_engtutor_</span>
              </a>
              <a 
                href="mailto:maria@yellowsubmarine.by"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail size={18} />
                <span>maria@yellowsubmarine.by</span>
              </a>
            </div>

            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong>Пробное занятие</strong><br />
                Запишитесь на первое занятие и убедитесь в эффективности моих методов!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Yellow Submarine. Все права защищены.
          </p>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Сделано с</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>для изучения английского</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
