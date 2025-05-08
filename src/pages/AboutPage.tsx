import React, { useEffect } from 'react';
import { MapPin, Calendar, Wine, Building, Globe, Star } from 'lucide-react';
import Newsletter from '../components/Newsletter';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'О стране | ExploreArmenia';
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="bg-amber-700 py-20 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            О стране
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Узнайте больше об Армении, стране с богатым историческим наследием, 
            потрясающими пейзажами и гостеприимными людьми.
          </p>
        </div>
      </div>

      {/* First section - Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Добро пожаловать в Армению
              </h2>
              <p className="text-gray-700 mb-4">
                Армения – удивительная страна, расположенная в самом сердце Южного Кавказа. Это одна из древнейших цивилизаций в мире с богатой историей, насчитывающей более 3000 лет. Армения была первой страной, принявшей христианство в качестве государственной религии в 301 году.
              </p>
              <p className="text-gray-700 mb-4">
                Географически Армения представляет собой горную страну, окруженную впечатляющими пейзажами – от горных вершин и глубоких каньонов до кристально чистых озер и цветущих долин. Символом Армении является библейская гора Арарат, которая хотя и находится на территории современной Турции, но прекрасно видна из многих уголков Армении.
              </p>
              <p className="text-gray-700">
                Армяне известны своим гостеприимством, богатыми культурными традициями и вкусной кухней. Туристы могут исследовать многочисленные древние монастыри, храмы и крепости, наслаждаться природными красотами и погружаться в местную культуру.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5007066/pexels-photo-5007066.jpeg" 
                alt="Armenian landscape" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 md:w-64 md:h-64 bg-amber-100 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Ключевые факты об Армении
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <MapPin size={40} className="text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">География</h3>
              <p className="text-gray-700">
                Армения — горная страна, не имеющая выхода к морю, с площадью 29,743 км². Самая высокая точка — гора Арагац (4,090 м). Около 90% территории находится на высоте более 1000 м над уровнем моря.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Calendar size={40} className="text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">История</h3>
              <p className="text-gray-700">
                Одна из древнейших стран мира с историей более 3000 лет. Была частью различных империй, включая Персидскую, Византийскую, Османскую. С 1991 года — независимая республика после распада СССР.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Wine size={40} className="text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Культура</h3>
              <p className="text-gray-700">
                Богатое культурное наследие, включающее уникальную архитектуру, музыку, танцы и искусство. Армянский коньяк и вино известны во всем мире. В стране около 4000 исторических памятников.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Building size={40} className="text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Столица</h3>
              <p className="text-gray-700">
                Ереван — один из древнейших постоянно населенных городов мира, основан в 782 году до н.э. Современный город сочетает древнюю историю с современной архитектурой и является культурным центром страны.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Globe size={40} className="text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Язык</h3>
              <p className="text-gray-700">
                Официальный язык — армянский, с уникальным алфавитом, созданным в 405 году н.э. Многие армяне также свободно владеют русским языком. В туристических центрах распространен английский.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Star size={40} className="text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Религия</h3>
              <p className="text-gray-700">
                Первая страна, принявшая христианство в качестве государственной религии в 301 году. Большинство населения принадлежит к Армянской Апостольской Церкви, которая имеет особый статус национальной церкви.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            История Армении
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Древняя Армения</h3>
                  <p className="text-gray-700">
                    Начиная с 6-го века до н.э., Армения была частью различных империй, включая Персидскую и Македонскую. К 190 г. до н.э. образовалось Великое Армянское царство.
                  </p>
                </div>
                <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full bg-amber-600 border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <p className="text-amber-600 font-semibold">6 век до н.э. - 1 век до н.э.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:order-1">
                  <p className="text-amber-600 font-semibold">301 год н.э.</p>
                </div>
                <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full bg-amber-600 border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12 md:text-left md:order-3">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Принятие христианства</h3>
                  <p className="text-gray-700">
                    В 301 году н.э. Армения стала первой страной в мире, принявшей христианство в качестве государственной религии, что определило дальнейшее культурное развитие страны.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Средневековая Армения</h3>
                  <p className="text-gray-700">
                    После периода византийского и арабского владычества, Армения вступила в эпоху Багратидов - период расцвета культуры, искусства и архитектуры.
                  </p>
                </div>
                <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full bg-amber-600 border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <p className="text-amber-600 font-semibold">9-11 века</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:order-1">
                  <p className="text-amber-600 font-semibold">1915-1923 годы</p>
                </div>
                <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full bg-amber-600 border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12 md:text-left md:order-3">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Трагические события</h3>
                  <p className="text-gray-700">
                    Период геноцида армян в Османской империи, в результате которого погибло около 1,5 миллиона армян. Эти события глубоко повлияли на национальное самосознание.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Советский период</h3>
                  <p className="text-gray-700">
                    Армения вошла в состав СССР как одна из союзных республик. Этот период характеризовался индустриализацией, развитием науки и образования.
                  </p>
                </div>
                <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full bg-amber-600 border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <p className="text-amber-600 font-semibold">1920-1991 годы</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 md:order-1">
                  <p className="text-amber-600 font-semibold">1991 год - настоящее время</p>
                </div>
                <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full bg-amber-600 border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12 md:text-left md:order-3">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Независимая Армения</h3>
                  <p className="text-gray-700">
                    После распада СССР Армения стала независимой республикой. Несмотря на экономические и политические трудности, страна продолжает развиваться и укреплять свои позиции в мире.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural heritage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Культурное наследие
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <img 
                src="https://images.pexels.com/photos/5007061/pexels-photo-5007061.jpeg" 
                alt="Armenian monastery" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Архитектура</h3>
              <p className="text-gray-700 mb-4">
                Армянская архитектура имеет тысячелетнюю историю и известна своими уникальными церквями и монастырями. Многие из них объявлены объектами Всемирного наследия ЮНЕСКО. Особенностью армянской архитектуры является использование туфа - вулканического камня различных оттенков, от розового до черного.
              </p>
              <p className="text-gray-700">
                Наиболее известные памятники включают монастыри Гегард, Татев, храм Гарни и многие другие. Каждый из них представляет собой не просто религиозное сооружение, но и произведение искусства, демонстрирующее высокое мастерство древних армянских архитекторов.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Музыка и танцы</h3>
              <p className="text-gray-700 mb-4">
                Армянская музыка имеет древние корни и отличается богатством мелодий и ритмов. Национальные инструменты, такие как дудук, зурна и дхол, создают неповторимое звучание. Дудук, сделанный из абрикосового дерева, считается душой армянской музыки и внесен в список нематериального культурного наследия ЮНЕСКО.
              </p>
              <p className="text-gray-700">
                Традиционные армянские танцы, такие как Кочари, Берд и Шалахо, отражают дух народа, его историю и образ жизни. Они исполняются как сольно, так и в группах, и характеризуются энергичными движениями, выражающими радость, силу и единство.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.pexels.com/photos/3465059/pexels-photo-3465059.jpeg" 
                alt="Traditional musicians" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://images.pexels.com/photos/14583295/pexels-photo-14583295.jpeg" 
                alt="Armenian cuisine" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Кухня</h3>
              <p className="text-gray-700 mb-4">
                Армянская кухня — одна из древнейших в мире и отражает историю и географию страны. Она характеризуется использованием свежих ингредиентов, ароматных специй и трав. Мясные блюда, свежие овощи, лаваш (традиционный тонкий хлеб) составляют основу армянской кухни.
              </p>
              <p className="text-gray-700">
                Известные блюда включают долму (фаршированные овощи), хоровац (армянский шашлык), хаш (суп из говяжьих ножек) и многие другие. Армения также славится своими сырами, вином и коньяком, производство которого имеет многовековые традиции.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <Newsletter />
    </div>
  );
};

export default AboutPage;