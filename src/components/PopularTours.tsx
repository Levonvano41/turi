import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Star, ArrowRight } from 'lucide-react';

const tours = [
  {
    id: 1,
    title: 'Классическая Армения',
    description: 'Идеальный тур для первого знакомства с основными достопримечательностями Армении',
    image: 'https://images.pexels.com/photos/5007066/pexels-photo-5007066.jpeg',
    duration: '7 дней',
    groupSize: '2-12 человек',
    startDate: 'Еженедельно',
    rating: 4.9,
    price: 850,
  },
  {
    id: 2,
    title: 'Гастрономический тур',
    description: 'Погрузитесь в кулинарные традиции Армении, дегустация вин и коньяка',
    image: 'https://images.pexels.com/photos/14583295/pexels-photo-14583295.jpeg',
    duration: '5 дней',
    groupSize: '4-10 человек',
    startDate: 'По запросу',
    rating: 4.8,
    price: 700,
  },
  {
    id: 3,
    title: 'Треккинг в горах',
    description: 'Активный тур по горным маршрутам с посещением отдаленных монастырей',
    image: 'https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg',
    duration: '8 дней',
    groupSize: '4-8 человек',
    startDate: 'Май - Октябрь',
    rating: 4.7,
    price: 920,
  }
];

const PopularTours = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Популярные туры
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Выберите один из наших тщательно спланированных туров, чтобы получить незабываемые впечатления 
              и открыть для себя все грани Армении.
            </p>
          </div>
          <Link 
            to="/tours" 
            className="inline-flex items-center mt-4 md:mt-0 text-amber-600 hover:text-amber-800 transition-colors"
          >
            Все туры
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div 
              key={tour.id}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full py-1 px-3 flex items-center">
                  <Star size={16} className="text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{tour.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tour.title}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock size={16} className="text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{tour.startDate}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-gray-900">${tour.price}</span>
                    <span className="text-gray-500 text-sm"> / на человека</span>
                  </div>
                  <Link
                    to={`/tours/${tour.id}`}
                    className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTours;