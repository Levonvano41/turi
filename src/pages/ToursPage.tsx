import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users, Star, Filter } from 'lucide-react';

// Mock tours data
const allTours = [
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
    category: 'Культурный',
    difficulty: 'Легкая',
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
    category: 'Гастрономический',
    difficulty: 'Легкая',
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
    category: 'Приключенческий',
    difficulty: 'Средняя',
  },
  {
    id: 4,
    title: 'Винный тур по Армении',
    description: 'Путешествие по винодельням Армении с дегустацией и мастер-классами',
    image: 'https://images.pexels.com/photos/5987169/pexels-photo-5987169.jpeg',
    duration: '6 дней',
    groupSize: '2-8 человек',
    startDate: 'Март - Ноябрь',
    rating: 4.9,
    price: 790,
    category: 'Гастрономический',
    difficulty: 'Легкая',
  },
  {
    id: 5,
    title: 'Фотографический тур',
    description: 'Специализированный тур для фотографов по самым живописным местам страны',
    image: 'https://images.pexels.com/photos/3497065/pexels-photo-3497065.jpeg',
    duration: '9 дней',
    groupSize: '3-6 человек',
    startDate: 'Апрель - Октябрь',
    rating: 4.8,
    price: 1100,
    category: 'Специализированный',
    difficulty: 'Средняя',
  },
  {
    id: 6,
    title: 'Велотур по Армении',
    description: 'Активное путешествие на велосипедах по живописным дорогам и горным тропам',
    image: 'https://images.pexels.com/photos/5273594/pexels-photo-5273594.jpeg',
    duration: '10 дней',
    groupSize: '4-10 человек',
    startDate: 'Май - Сентябрь',
    rating: 4.7,
    price: 1200,
    category: 'Приключенческий',
    difficulty: 'Высокая',
  }
];

const categories = ['Все', 'Культурный', 'Гастрономический', 'Приключенческий', 'Специализированный'];
const difficulties = ['Все', 'Легкая', 'Средняя', 'Высокая'];
const durations = ['Все', '1-3 дня', '4-7 дней', '8+ дней'];

const ToursPage = () => {
  const [tours, setTours] = useState(allTours);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Все');
  const [selectedDuration, setSelectedDuration] = useState('Все');
  const [priceRange, setPriceRange] = useState(1500);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    document.title = 'Туры | ExploreArmenia';
  }, []);

  useEffect(() => {
    let filtered = allTours;
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        tour => tour.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
               tour.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory !== 'Все') {
      filtered = filtered.filter(tour => tour.category === selectedCategory);
    }
    
    // Apply difficulty filter
    if (selectedDifficulty !== 'Все') {
      filtered = filtered.filter(tour => tour.difficulty === selectedDifficulty);
    }
    
    // Apply duration filter
    if (selectedDuration !== 'Все') {
      const daysMatch = selectedDuration.match(/(\d+)-(\d+)|(\d+)\+/);
      if (daysMatch) {
        if (daysMatch[3]) { // 8+ format
          const minDays = parseInt(daysMatch[3]);
          filtered = filtered.filter(tour => parseInt(tour.duration) >= minDays);
        } else { // 1-3 format
          const minDays = parseInt(daysMatch[1]);
          const maxDays = parseInt(daysMatch[2]);
          filtered = filtered.filter(
            tour => {
              const tourDays = parseInt(tour.duration);
              return tourDays >= minDays && tourDays <= maxDays;
            }
          );
        }
      }
    }
    
    // Apply price filter
    filtered = filtered.filter(tour => tour.price <= priceRange);
    
    setTours(filtered);
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedDuration, priceRange]);

  return (
    <div className="pt-24 pb-16">
      <div className="bg-amber-700 py-20 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Туры по Армении
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Выберите идеальный тур, чтобы открыть для себя все грани Армении, от культурных 
            памятников до захватывающих горных приключений.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar for desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="font-semibold text-lg mb-4">Фильтры</h3>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-2">Категория</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="mr-2 text-amber-600 focus:ring-amber-500"
                      />
                      {category}
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-2">Сложность</h4>
                <div className="space-y-2">
                  {difficulties.map((difficulty) => (
                    <label key={difficulty} className="flex items-center">
                      <input
                        type="radio"
                        name="difficulty"
                        checked={selectedDifficulty === difficulty}
                        onChange={() => setSelectedDifficulty(difficulty)}
                        className="mr-2 text-amber-600 focus:ring-amber-500"
                      />
                      {difficulty}
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-2">Длительность</h4>
                <div className="space-y-2">
                  {durations.map((duration) => (
                    <label key={duration} className="flex items-center">
                      <input
                        type="radio"
                        name="duration"
                        checked={selectedDuration === duration}
                        onChange={() => setSelectedDuration(duration)}
                        className="mr-2 text-amber-600 focus:ring-amber-500"
                      />
                      {duration}
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-2">Цена (до ${priceRange})</h4>
                <input
                  type="range"
                  min="500"
                  max="1500"
                  step="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>$500</span>
                  <span>$1500</span>
                </div>
              </div>
              
              <button
                onClick={() => {
                  setSelectedCategory('Все');
                  setSelectedDifficulty('Все');
                  setSelectedDuration('Все');
                  setPriceRange(1500);
                  setSearchQuery('');
                }}
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Сбросить фильтры
              </button>
            </div>
          </div>
          
          {/* Mobile filters toggle */}
          <div className="lg:hidden mb-4">
            <button 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg flex justify-center items-center"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={20} className="mr-2" />
              {showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
            </button>
            
            {showFilters && (
              <div className="mt-4 bg-white rounded-xl shadow-sm p-6">
                {/* Mobile filters content - same as desktop but in accordion style */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-2">Категория</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="mr-2 text-amber-600 focus:ring-amber-500"
                        />
                        {category}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-2">Сложность</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {difficulties.map((difficulty) => (
                      <label key={difficulty} className="flex items-center">
                        <input
                          type="radio"
                          name="difficulty"
                          checked={selectedDifficulty === difficulty}
                          onChange={() => setSelectedDifficulty(difficulty)}
                          className="mr-2 text-amber-600 focus:ring-amber-500"
                        />
                        {difficulty}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-2">Длительность</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {durations.map((duration) => (
                      <label key={duration} className="flex items-center">
                        <input
                          type="radio"
                          name="duration"
                          checked={selectedDuration === duration}
                          onChange={() => setSelectedDuration(duration)}
                          className="mr-2 text-amber-600 focus:ring-amber-500"
                        />
                        {duration}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-2">Цена (до ${priceRange})</h4>
                  <input
                    type="range"
                    min="500"
                    max="1500"
                    step="50"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>$500</span>
                    <span>$1500</span>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    setSelectedCategory('Все');
                    setSelectedDifficulty('Все');
                    setSelectedDuration('Все');
                    setPriceRange(1500);
                    setSearchQuery('');
                  }}
                  className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Сбросить фильтры
                </button>
              </div>
            )}
          </div>
          
          {/* Main content */}
          <div className="flex-grow">
            {/* Search */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Поиск туров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            
            {/* Results count */}
            <div className="text-sm text-gray-500 mb-6">
              Найдено {tours.length} туров
            </div>
            
            {/* Tours list */}
            {tours.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                      <div className="absolute top-4 left-4">
                        <span className="bg-amber-600 text-white text-xs font-medium px-2.5 py-1 rounded">
                          {tour.category}
                        </span>
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
                        <div className="flex items-center">
                          <span className="text-sm text-gray-600">{tour.difficulty} сложность</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xl font-bold text-gray-900">${tour.price}</span>
                          <span className="text-gray-500 text-sm"> / на человека</span>
                        </div>
                        <a
                          href={`#${tour.id}`}
                          className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                        >
                          Подробнее
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <p className="text-xl text-gray-600 mb-4">Туры не найдены</p>
                <p className="text-gray-500 mb-6">Попробуйте изменить параметры поиска</p>
                <button
                  onClick={() => {
                    setSelectedCategory('Все');
                    setSelectedDifficulty('Все');
                    setSelectedDuration('Все');
                    setPriceRange(1500);
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Сбросить фильтры
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursPage;