import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../SideBar/SideBar';
import LoadingGif from '../../../images/loading.gif';

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderDetails, setOrderDetails] = useState([]);

    
    useEffect(() => {
        fetch(`https://guarded-inlet-61648.herokuapp.com/orderList`, {
         method: 'GET',
         headers: {
             'Content-Type': 'application/json'
             
         }
     })
     .then(res => res.json())
     .then(data => setOrderDetails(data))
     
 
     }, [])

     const handleChange = (e) => {
         console.log("Status", e.target.value)
     }

    return (
        
        <div className="row d-flex justify-content-center">
              <div className="col-md-2 col-sm-6 col-12">
                <SideBar/>
            </div>
            <div className="py-4 col-md-10 col-sm-12 col-12 bg-light" style={{ height: "97vh" }}>
            <div className="d-flex justify-content-around align-items-center text-info p-2 bg-white text-uppercase">
               <h2 className="">Order List</h2>
               <img style={{width: "40px"}} className="rounded-circle" src={loggedInUser.image} alt=""/>
            </div>
            <div className="container">
            
              <div className="row">
                  <div className="col-md-12 py-4">
                  <table className="table table-striped shadow rounded bg-white">
                
                <thead>
                    <tr>
                     <th scope="col">Name</th>
                     <th scope="col">Email</th>
                     <th scope="col">Service</th>
                     <th scope="col">Payment ID</th>
                     <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                orderDetails.length === 0 && <div  style={{   position: "absolute", left: "50%", top: "150%", transform: "translate(-50%,-50%)"}}>
                   <img style={{width:"150px"}} src={LoadingGif} alt="LoadingGif"/>
               </div>
             }

                    {
                        orderDetails.map(od => 
                       <>    
                        <tr key={od._id}>
                            <td>{od.booking.name}</td>
                            <td>{od.email}</td>
                            <td>{od.booking.service}</td>
                            <td>${od.paymentId}</td>
                            <td>
                            
                            <select onChange={handleChange}  className="btn btn-primary">
                                <option value="Pending">Pending</option>
                                <option value="Done">Done</option>
                                <option value="On going">On going</option>
                            </select>
                            </td>
                        </tr>
                    
                      </>  
                    
                        )  
                    }
                  
                    
                </tbody>
                </table>
                  </div>
              </div>
            
                </div>
                </div>
          </div>
          
    );
};

export default OrderList;