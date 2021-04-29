import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import TestimonialCard from './TestimonialCard';


const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const url = 'https://guarded-inlet-61648.herokuapp.com/reviews'
        fetch(url)
               .then(res => res.json())
               .then(data => setReviews(data))
    }, []);

    return (
        <section className="testimonials my-5 py-5">
        <div className="container">
        <div className="text-center py-5">
            <h4 className="pt-4 text-uppercase">WE CARE ABOUT OUR CUSTOMERS</h4>
            <h1 className="mb-3 text-primary">CUSTOMER'S TESTIMONIALS.</h1>
        </div>
            <div className="card-deck row mt-4">
                 {
                    reviews.map(review => <TestimonialCard review={review} key={review._id}/>)
                 }
             </div>
        </div>
    </section>
    );
};

export default Testimonial;