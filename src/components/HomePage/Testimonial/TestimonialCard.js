import React from 'react';

const TestimonialCard = ({review}) => {
    return (
        <div className="col-md-6">
        <div className="shadow p-3 mb-4 bg-light rounded">
           <div className="d-flex justify-content-between align-items-center">
             <div className="mr-4">
                 <img className="rounded-circle" src={review.image} alt="" style={{width: '80px', height:"80px", objectFit:"contain"}}/>
             </div>
             <div className="">
              <blockquote className="my-2" style={{fontStyle:"italic"}}>{review.description}</blockquote>
              <h5 className="text-primary">{review.name}</h5>
              <h6 className="text-info">{review.designation}</h6>
           </div> 
           </div> 
      </div>
        </div>
    );
};

export default TestimonialCard;