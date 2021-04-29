import React, { useEffect, useState } from 'react';
import './Services.css';
import ServicesCard from './ServicesCard';
import LoadingGif from '../../../images/loading.gif';


const Services = () => {
    const [setServices, setSetServices] = useState([])
    useEffect(() => {
        const url = 'https://guarded-inlet-61648.herokuapp.com/services'
        fetch(url)
               .then(res => res.json())
               .then(data => setSetServices(data))
    }, []);
    return (
        <section className="bg-white">
         {
            setServices.length === 0 && <div  style={{   position: "absolute", left: "50%", top: "150%", transform: "translate(-50%,-50%)"}}>
                   <img style={{width:"150px"}} src={LoadingGif} alt="LoadingGif"/>
               </div>
             }
        <div className="text-center py-5">
            <h1 className="text-primary pt-4 text-uppercase">What We Do?</h1>
            <h4 className="mb-4">CHECK OUT THE LATEST SERVICES</h4>
        </div>
        <div className="d-flex justify-content-center">
            <div className="w-75">
                <div className="row mb-5">
                    {
                     setServices.map(sData => <ServicesCard sData={sData} key={sData._id}/>) 
                    }
                </div>
            </div>
      </div>
    </section>
    );
};

export default Services;