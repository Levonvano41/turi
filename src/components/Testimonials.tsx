import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Михаил Петров',
    country: 'Россия',
    text: 'Наше путешествие по Армении превзошло все ожидания. Невероятная природа, вкуснейшая еда и самые гостеприимные люди. Особенно впечатлил Татевский монастырь и канатная дорога.',
    rating: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
  },
  {
    id: 2,
    name: 'Анна Соколова',
    country: 'Россия',
    text: 'Гастрономический тур по Армении был просто великолепен! Дегустация вин и коньяка, мастер-классы по приготовлению национальных блюд – это был настоящий праздник для гурманов.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    id: 3,
    name: 'Александр Иванов',
    country: 'Беларусь',
    text: 'Потрясающая страна с богатейшей историей. Гид был очень знающим и увлеченным, показал нам как популярные места, так и скрытые жемчужины, о которых не пишут в путеводителях.',
    rating: 4,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Узнайте, что говорят путешественники, побывавшие в Армении с нашей компанией, 
            о своих впечатлениях и опыте.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote size={40} className="absolute top-6 right-6 text-amber-100" />
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.country}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;