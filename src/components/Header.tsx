
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Главная', href: '#home' },
    { name: 'О школе', href: '#about' },
    { name: 'Услуги', href: '#services' },
    { name: 'Цены', href: '#pricing' },
    { name: 'Контакты', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-50 transition-all duration-300 border-b border-sky-100/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg animate-float">🌊</span>
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Yellow Submarine</h1>
              <p className="text-sm text-blue-500 font-script">Английский с Марией</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-500 transition-colors duration-300 font-medium relative group py-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-serif">{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-sky-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-500 delay-100 rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-sky-100/50 transition-colors group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X size={24} className="text-blue-500 group-hover:rotate-90 transition-transform" /> : 
              <Menu size={24} className="text-blue-500 group-hover:scale-110 transition-transform" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg mb-4 border border-sky-100/50">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-500 hover:bg-sky-50/50 rounded-xl transition-all duration-300 font-serif group"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
