import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import ServicesListCard from './ServicesListCard';
import LoadingGif from '../../../images/loading.gif';

const ServicesList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const [bookingList, setBookingList] = useState([])
    

    useEffect(() => {
        fetch(`https://guarded-inlet-61648.herokuapp.com/servicesList/?email=${loggedInUser.email}`, {
         method: 'GET',
         headers: {
             'Content-Type': 'application/json'
             
         }
     })
     .then(res => res.json())
     .then(data => setBookingList(data))
     
 
     }, [loggedInUser.email])

    return (
        <section>
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <SideBar/>
            </div>
            <div className="py-4 col-md-10 col-sm-12 col-12 bg-light" style={{ height: "97vh" }}>
            <div className="d-flex justify-content-around align-items-center text-info p-2 bg-white text-uppercase">
               <h2 className="">Services List</h2>
               <img style={{width: "40px"}} className="rounded-circle" src={loggedInUser.image} alt=""/>
            </div>
            
               <div className="row mt-5">
               {
                bookingList.length === 0 && <div  style={{   position: "absolute", left: "50%", top: "150%", transform: "translate(-50%,-50%)"}}>
                   <img style={{width:"150px"}} src={LoadingGif} alt="LoadingGif"/>
               </div>
             }
                 {
                    bookingList.map(bList => <ServicesListCard bList={bList} key={bList._id}/>) 
                 }
               </div>
                
            </div>
        </div>
    </section>
    );
};

export default ServicesList;