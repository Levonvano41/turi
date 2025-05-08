import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Контакты | ExploreArmenia';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would go the actual submission logic
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Reset submission state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="bg-amber-700 py-20 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            У вас есть вопросы о турах или вам нужна дополнительная информация? 
            Мы всегда рады помочь!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
              <MapPin size={32} className="text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Наш адрес</h3>
            <p className="text-gray-700">
              ул. Амиряна 4/6, <br />
              Ереван, Армения
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
              <Phone size={32} className="text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Телефон</h3>
            <p className="text-gray-700">
              +374 10 123456 <br />
              +374 55 987654
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
              <Mail size={32} className="text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-700">
              info@explorearmenia.am <br />
              support@explorearmenia.am
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Contact form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Отправить сообщение
            </h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg mb-6">
                Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email адрес *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Тема
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Выберите тему</option>
                  <option value="general">Общая информация</option>
                  <option value="tour">Вопрос о туре</option>
                  <option value="booking">Бронирование</option>
                  <option value="partnership">Деловое сотрудничество</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors inline-flex items-center"
              >
                Отправить сообщение
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
          
          {/* Office hours and map */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Часы работы
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="flex items-start mb-4">
                <Clock size={24} className="text-amber-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Режим работы офиса</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Понедельник - Пятница:</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Суббота:</span>
                      <span className="font-medium">10:00 - 16:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Воскресенье:</span>
                      <span className="font-medium">Закрыто</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <hr className="my-4" />
              
              <div className="flex items-start">
                <Phone size={24} className="text-amber-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Телефонная поддержка</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Понедельник - Пятница:</span>
                      <span className="font-medium">8:00 - 20:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Суббота - Воскресенье:</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-80 bg-gray-200">
              {/* This would be replaced with an actual map */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-600">Здесь была бы карта с расположением офиса</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Часто задаваемые вопросы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Какие документы нужны для поездки в Армению?
              </h3>
              <p className="text-gray-700">
                Для граждан России, Беларуси, Казахстана и многих других стран СНГ въезд в Армению осуществляется по внутреннему паспорту. Для граждан большинства других стран требуется действующий загранпаспорт.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Нужна ли виза для посещения Армении?
              </h3>
              <p className="text-gray-700">
                Граждане России, стран СНГ и многих других государств могут находиться в Армении без визы до 180 дней. Для граждан ЕС, США и многих других стран действует безвизовый режим до 180 дней.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Какая валюта используется в Армении?
              </h3>
              <p className="text-gray-700">
                Национальная валюта Армении — армянский драм (AMD). Обмен валюты можно осуществить в банках, обменных пунктах и некоторых отелях. Кредитные карты принимаются в большинстве отелей, ресторанов и магазинов в городах.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Когда лучше всего посещать Армению?
              </h3>
              <p className="text-gray-700">
                Армения прекрасна в любое время года, но наиболее комфортный период для посещения — с мая по октябрь. Весной и осенью погода мягкая, летом может быть жарко, особенно в Ереване, а зимой в горных районах выпадает снег.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Как добраться до Армении?
              </h3>
              <p className="text-gray-700">
                Прямые авиарейсы в Ереван осуществляются из многих городов мира. Международный аэропорт "Звартноц" находится в 12 км от центра Еревана. Также возможен въезд наземным транспортом через Грузию и Иран.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Нужна ли медицинская страховка?
              </h3>
              <p className="text-gray-700">
                Медицинская страховка не является обязательной для въезда в Армению, но мы настоятельно рекомендуем приобрести страховой полис для покрытия возможных медицинских расходов во время поездки.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;