import React from 'react';

const PricingCard = ({pData}) => {
    return (
            <div className="col-md-6">
            <div className="shadow p-3 mb-4 bg-light rounded">
               <div className="d-flex justify-content-between align-items-center">
                  <h4 className="my-3">{pData.title}</h4>
                  <h3 className="text-info">${pData.price}</h3>
               </div> 
                <p className="text-info">{pData.description}</p>
          </div>
            </div>
    );
};

export default PricingCard;