import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Ереван',
    description: 'Современная столица с древней историей и вибрирующей культурной сценой',
    image: 'https://images.pexels.com/photos/7736145/pexels-photo-7736145.jpeg',
    featured: true,
  },
  {
    id: 2,
    name: 'Татев',
    description: 'Средневековый монастырь на краю глубокого ущелья с самой длинной канатной дорогой',
    image: 'https://images.pexels.com/photos/5007069/pexels-photo-5007069.jpeg',
    featured: true,
  },
  {
    id: 3,
    name: 'Озеро Севан',
    description: 'Одно из крупнейших высокогорных озер в мире с потрясающими пейзажами',
    image: 'https://images.pexels.com/photos/5007226/pexels-photo-5007226.jpeg',
    featured: true,
  },
  {
    id: 4,
    name: 'Гарни',
    description: 'Эллинистический храм и потрясающие базальтовые "Симфонические скалы"',
    image: 'https://images.pexels.com/photos/5217960/pexels-photo-5217960.jpeg',
    featured: true,
  }
];

const FeaturedDestinations = () => {
  return (
    <section className="py-16 bg-gray-50" id="explore">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Популярные направления
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Откройте для себя самые захватывающие места Армении, от древних монастырей до 
              живописных природных ландшафтов и колоритных городов.
            </p>
          </div>
          <Link 
            to="/destinations" 
            className="inline-flex items-center mt-4 md:mt-0 text-amber-600 hover:text-amber-800 transition-colors"
          >
            Все направления
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <Link
                  to={`/destinations/${destination.id}`}
                  className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-800 transition-colors"
                >
                  Подробнее
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;