import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('RU');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-selector')) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleLanguageDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const languages = [
    { code: 'RU', name: 'Русский' },
    { code: 'EN', name: 'English' },
    { code: 'AM', name: 'Հայերեն' }
  ];

  const changeLanguage = (code: string) => {
    setCurrentLanguage(code);
    setIsLanguageDropdownOpen(false);
    // Here you would typically handle language change logic
    document.documentElement.lang = code.toLowerCase();
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-amber-800">
            ExploreArmenia
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Главная
            </Link>
            <Link to="/destinations" className="nav-link">
              Направления
            </Link>
            <Link to="/tours" className="nav-link">
              Туры
            </Link>
            <Link to="/about" className="nav-link">
              О стране
            </Link>
            <Link to="/contact" className="nav-link">
              Контакты
            </Link>

            {/* Language Selector */}
            <div className="relative language-selector">
              <button 
                onClick={toggleLanguageDropdown}
                className="flex items-center space-x-1 text-gray-700 hover:text-amber-700 transition-colors"
                aria-expanded={isLanguageDropdownOpen}
                aria-haspopup="true"
              >
                <Globe size={18} />
                <span className="mx-1">{currentLanguage}</span>
                <ChevronDown 
                  size={14} 
                  className={`transform transition-transform duration-200 ${
                    isLanguageDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isLanguageDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50"
                  role="menu"
                  aria-orientation="vertical"
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        currentLanguage === language.code 
                          ? 'bg-amber-50 text-amber-700' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      role="menuitem"
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-4 p-4 rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="nav-link-mobile" onClick={toggleMenu}>
                Главная
              </Link>
              <Link to="/destinations" className="nav-link-mobile" onClick={toggleMenu}>
                Направления
              </Link>
              <Link to="/tours" className="nav-link-mobile" onClick={toggleMenu}>
                Туры
              </Link>
              <Link to="/about" className="nav-link-mobile" onClick={toggleMenu}>
                О стране
              </Link>
              <Link to="/contact" className="nav-link-mobile" onClick={toggleMenu}>
                Контакты
              </Link>

              {/* Language Selector Mobile */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-500 mb-2">Язык</p>
                <div className="flex flex-col space-y-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={`text-left px-2 py-1 rounded-md ${
                        currentLanguage === language.code 
                          ? 'bg-amber-50 text-amber-700' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;