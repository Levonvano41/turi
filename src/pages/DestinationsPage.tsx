import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';

// Mock destinations data
const allDestinations = [
  {
    id: 1,
    name: 'Ереван',
    description: 'Современная столица с древней историей и вибрирующей культурной сценой',
    image: 'https://images.pexels.com/photos/7736145/pexels-photo-7736145.jpeg',
    category: 'Города',
    region: 'Центральная Армения',
  },
  {
    id: 2,
    name: 'Татев',
    description: 'Средневековый монастырь на краю глубокого ущелья с самой длинной канатной дорогой',
    image: 'https://images.pexels.com/photos/5007069/pexels-photo-5007069.jpeg',
    category: 'Монастыри',
    region: 'Южная Армения',
  },
  {
    id: 3,
    name: 'Озеро Севан',
    description: 'Одно из крупнейших высокогорных озер в мире с потрясающими пейзажами',
    image: 'https://images.pexels.com/photos/5007226/pexels-photo-5007226.jpeg',
    category: 'Природа',
    region: 'Восточная Армения',
  },
  {
    id: 4,
    name: 'Гарни',
    description: 'Эллинистический храм и потрясающие базальтовые "Симфонические скалы"',
    image: 'https://images.pexels.com/photos/5217960/pexels-photo-5217960.jpeg',
    category: 'Исторические места',
    region: 'Центральная Армения',
  },
  {
    id: 5,
    name: 'Хор Вирап',
    description: 'Монастырь с потрясающим видом на гору Арарат, место заточения Григория Просветителя',
    image: 'https://images.pexels.com/photos/7106466/pexels-photo-7106466.jpeg',
    category: 'Монастыри',
    region: 'Южная Армения',
  },
  {
    id: 6,
    name: 'Дилижан',
    description: 'Живописный курортный город, окруженный лесами, известный как "Армянская Швейцария"',
    image: 'https://images.pexels.com/photos/15286/pexels-photo.jpg',
    category: 'Города',
    region: 'Северная Армения',
  },
  {
    id: 7,
    name: 'Каньон Нораванк',
    description: 'Впечатляющий каньон с красными скалами и средневековым монастырем',
    image: 'https://images.pexels.com/photos/13640605/pexels-photo-13640605.jpeg',
    category: 'Природа',
    region: 'Южная Армения',
  },
  {
    id: 8,
    name: 'Гегард',
    description: 'Уникальный пещерный монастырь, частично высеченный в скале, объект Всемирного наследия ЮНЕСКО',
    image: 'https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg',
    category: 'Монастыри',
    region: 'Центральная Армения',
  }
];

const categories = ['Все', 'Города', 'Монастыри', 'Природа', 'Исторические места'];
const regions = ['Все регионы', 'Центральная Армения', 'Северная Армения', 'Южная Армения', 'Восточная Армения'];

const DestinationsPage = () => {
  const [destinations, setDestinations] = useState(allDestinations);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedRegion, setSelectedRegion] = useState('Все регионы');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    document.title = 'Направления | ExploreArmenia';
  }, []);

  useEffect(() => {
    let filtered = allDestinations;
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        dest => dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                dest.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'Все') {
      filtered = filtered.filter(dest => dest.category === selectedCategory);
    }
    
    // Apply region filter
    if (selectedRegion !== 'Все регионы') {
      filtered = filtered.filter(dest => dest.region === selectedRegion);
    }
    
    setDestinations(filtered);
  }, [searchQuery, selectedCategory, selectedRegion]);

  return (
    <div className="pt-24 pb-16">
      <div className="bg-amber-700 py-20 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Направления
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Исследуйте самые красивые и интересные места Армении – от древних монастырей 
            до захватывающих природных достопримечательностей.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Search and filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
            {/* Search */}
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Поиск направлений..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            {/* Filter toggle for mobile */}
            <button 
              className="md:hidden px-4 py-3 border border-gray-300 rounded-lg flex items-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={20} className="mr-2" />
              Фильтры
            </button>
            
            {/* Desktop filters */}
            <div className="hidden md:flex gap-4">
              {/* Category filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              
              {/* Region filter */}
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Mobile filters */}
          {showFilters && (
            <div className="md:hidden flex flex-col gap-4 p-4 bg-gray-50 rounded-lg mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Категория</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Регион</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
          
          <div className="text-sm text-gray-500">
            Найдено {destinations.length} мест
          </div>
        </div>

        {/* Destinations grid */}
        {destinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                      {destination.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{destination.region}</span>
                    <a
                      href={`#${destination.id}`}
                      className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-800 transition-colors"
                    >
                      Подробнее
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">Направления не найдены</p>
            <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationsPage;