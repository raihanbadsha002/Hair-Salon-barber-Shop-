import React from 'react';
import { useHistory } from 'react-router-dom';
import './Services.css';

const ServicesCard = ({sData}) => {
  const history = useHistory();
    return (
        <div onClick={() => history.push(`/dashboard/${sData._id}`)} className="col-md-4 text-center service__hover text-decoration-none">
          <div className="shadow p-3 mb-5 bg-light rounded">
            <img src={sData.imageURL} alt="" className="img-fluid mb-2" style={{width: '500px', height:"300px", objectFit:"contain"}}/>
                <h4 className="my-3 text-primary">{sData.stitle}</h4>
                <h6 className="text-success">Price: ${sData.price}</h6>
                <p className="text-info">{sData.description}</p>
          </div>
            
        </div>
    );
};

export default ServicesCard;