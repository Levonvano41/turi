import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">ExploreArmenia</h3>
            <p className="text-gray-400 mb-6">
              Откройте для себя красоту и богатую историю Армении с лучшими туристическими услугами и незабываемыми впечатлениями.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white transition-colors">
                  Направления
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-400 hover:text-white transition-colors">
                  Туры
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  О стране
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Tours Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Виды туров</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Культурные туры
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Гастрономические туры
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Приключенческие туры
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Винные туры
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Сезонные фестивали
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  ул. Амиряна 4/6, Ереван, Армения
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-amber-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+374 10 123456</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-amber-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@explorearmenia.am</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ExploreArmenia. Все права защищены.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;