import React from 'react';
import './HeaderBanner.css';

const HeaderBanner = () => {
    return (
        <div className="banner__section d-flex justify-content-center align-items-center">
            <div className="container d-flex justify-content-center align-items-center">
              <div className="text-center text-white">
                <h1 style={{fontSize:"3.6rem"}} className="text-capitalize">We make amazing haircuts</h1>
                <p style={{fontSize:"1.2rem"}} className="mb-4">Preparing your money is a daunting challenge for today's <br/> investors and will give you a complete account of the system.</p>
                <button className="btn btn-outline-secondary px-4  text-white mr-2 rounded-pill">Read more</button>
                <button className="btn btn-outline-secondary px-4  text-white mr-2 rounded-pill">Get Started</button>
            </div>
            </div>
        </div>
    );
};

export default HeaderBanner;