import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import ManageServicesData from './ManageServicesData';
import LoadingGif from '../../../images/loading.gif';

const ManageServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const [services, setServices] = useState([])

    const fetchServiceList = () => {
        if (!url) {
           return 
        } 
     }


    const url = 'https://guarded-inlet-61648.herokuapp.com/services'
    fetch(url)
           .then(res => res.json())
           .then(data => setServices(data)) 
   
   

    useEffect(() => {
        fetchServiceList()
    }, []);

    return (
        <section>
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <SideBar/>
            </div>
            <div className="py-4 col-md-10 col-sm-12 col-12 bg-light" style={{ height: "97vh" }}>
            <div className="d-flex justify-content-around align-items-center text-info p-2 bg-white text-uppercase">
               <h2 className="">Add Services</h2>
               <img style={{width: "40px"}} className="rounded-circle" src={loggedInUser.image} alt=""/>
            </div>
            <div className="row d-flex justify-content-center mt-5">
             <div className="col-md-8 bg-white shadow-lg rounded">
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Service Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {
                services.length === 0 && <div  style={{   position: "absolute", left: "50%", top: "150%", transform: "translate(-50%,-50%)"}}>
                   <img style={{width:"150px"}} src={LoadingGif} alt="LoadingGif"/>
               </div>
             }
            {
                services.map(service => <ManageServicesData
               service={service}
               key={service._id}
               fetchServiceList={fetchServiceList}    
               />)
             }
             </tbody>
            </table>
            </div>
            </div>
             
           </div>
                
            </div>

    </section>





     
    );
};

export default ManageServices;