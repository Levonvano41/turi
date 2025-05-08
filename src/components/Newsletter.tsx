import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here would be the actual subscription logic
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-16 bg-amber-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Получайте эксклюзивные предложения
          </h2>
          <p className="text-amber-100 mb-8">
            Подпишитесь на нашу рассылку, чтобы первыми узнавать о новых турах, 
            сезонных акциях и специальных предложениях.
          </p>
          
          {subscribed ? (
            <div className="bg-amber-800 rounded-lg p-4 mb-4 text-amber-100">
              Спасибо за подписку! Проверьте свою электронную почту для подтверждения.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Ваш email адрес"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-lg flex-grow max-w-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-amber-900 hover:bg-amber-950 rounded-lg transition-colors inline-flex items-center justify-center whitespace-nowrap"
              >
                Подписаться
                <Send size={18} className="ml-2" />
              </button>
            </form>
          )}
          
          <p className="mt-4 text-amber-200 text-sm">
            Мы не передаем ваши данные третьим лицам и не рассылаем спам.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;