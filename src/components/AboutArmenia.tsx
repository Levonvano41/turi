import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Languages as Language, WineOff } from 'lucide-react';

const AboutArmenia = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/7735550/pexels-photo-7735550.jpeg" 
                alt="Armenian landscape with Mount Ararat" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-2/3 rounded-lg overflow-hidden shadow-lg hidden md:block">
              <img 
                src="https://images.pexels.com/photos/5007061/pexels-photo-5007061.jpeg" 
                alt="Armenian monastery" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="lg:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Об Армении
            </h2>
            <p className="text-gray-600 mb-6">
              Армения — это древняя страна с богатейшей историей и культурой, расположенная на перекрестке 
              Европы и Азии. Являясь первой страной, принявшей христианство в качестве государственной религии, 
              Армения гордится своими тысячелетними монастырями, храмами и крепостями.
            </p>
            <p className="text-gray-600 mb-8">
              Разнообразный ландшафт Армении включает высокие горы, глубокие каньоны, зеленые долины и 
              кристально чистые озера. Страна славится своим гостеприимством, вкусной кухней, древними 
              традициями виноделия и производства коньяка.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <MapPin size={20} className="text-amber-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Расположение</h3>
                  <p className="text-sm text-gray-600">Южный Кавказ, граничит с Грузией, Азербайджаном, Ираном и Турцией</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar size={20} className="text-amber-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">История</h3>
                  <p className="text-sm text-gray-600">Одна из древнейших цивилизаций мира с историей более 3000 лет</p>
                </div>
              </div>
              <div className="flex items-start">
                <Language size={20} className="text-amber-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Язык</h3>
                  <p className="text-sm text-gray-600">Армянский (официальный), русский широко распространен</p>
                </div>
              </div>
              <div className="flex items-start">
                <WineOff size={20} className="text-amber-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Традиции</h3>
                  <p className="text-sm text-gray-600">Богатые культурные традиции, включая музыку, танцы и ремесла</p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              Узнать больше
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArmenia;