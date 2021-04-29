import React from 'react';

const ServicesListCard = ({bList}) => {
    return (
        <div className="col-sm-4">
            <div className="card shadow-lg rounded">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <img style={{width:"50px"}} className="rounded-circle" src={bList.image} alt=""/>
                     <button className="btn btn-secondary">Pending</button>
                </div>
                <h5 className="card-title">{bList.title}</h5>
                <p className="card-text">{bList.description}</p>
            </div>
        </div>
  </div>
    );
};

export default ServicesListCard;