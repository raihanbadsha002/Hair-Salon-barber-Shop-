import React from 'react';
import PricingCard from './PricingCard';
import './Pricing.css'

const pricingData = [
   {
       title: 'Haircut',
       price: '20',
       description: 'Our stylist consults & delivers you a precision haircut.'
   },
   {
       title: 'Moustache Trim',
       price: '10',
       description: 'Select & Change your hair color for new experience.'
   },
   {
       title: 'Beard Trim',
       price: '15',
       description: 'Keep your beard clean and sharp with an awesome style.'
   },
   {
       title: 'Hair Wash',
       price: '6',
       description: 'Relax and have a hot towel for cleaning your face.'
   },
   {
       title: 'Hair Color',
       price: '22',
       description: 'Select & Change your hair color for new experience.'
   },
   {
       title: 'Face Mask',
       price: '13',
       description: 'Our stylist consults & delivers you a precision haircut.'
   },
   {
       title: 'Men’s Facial',
       price: '25',
       description: 'Relax and have a hot towel for cleaning your face.'
   },
   {
       title: 'Line Up',
       price: '17',
       description: 'Keep your beard clean and sharp with an awesome style.'
   },
]

const Pricing = () => {
    return (
        <section className="pricing__section">
        <div className="text-center py-5">
            <h1 className="text-white pt-4 text-uppercase">Our Pricing</h1>
            <p className="mb-4 text-white-50">Lorem Ipsum has been the industry a galley of type and scrambled. <br/>
             Keep your beard clean and sharp with an awesome style.</p>
        </div>
        <div className="d-flex justify-content-center">
            <div className="w-75">
              <div className="container">
                <div className="row mb-5">
                    {
                        pricingData.map(pData => <PricingCard pData={pData} key={pData.title}/>) 
                    }
                </div>
             </div>
            </div>
      </div>
    </section>
    );
};

export default Pricing;