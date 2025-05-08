import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedDestinations from '../components/FeaturedDestinations';
import PopularTours from '../components/PopularTours';
import AboutArmenia from '../components/AboutArmenia';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Откройте для себя Армению | ExploreArmenia';
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedDestinations />
      <PopularTours />
      <AboutArmenia />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;