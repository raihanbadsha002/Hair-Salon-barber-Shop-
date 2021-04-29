import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
          <Header/>
           <Services/>
           <Pricing/>
           <Testimonial/>
           <Contact/>
           <Footer/> 
        </div>
    );
};

export default Home;