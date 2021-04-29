import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import PaymentProcess from './PaymentProcess';

const BookingFrom = () => {
  const { id } = useParams();

const [loggedInUser, setLoggedInUser] = useContext(UserContext);
const { register, formState: { errors }, handleSubmit } = useForm();
   const [bookingData, setBookingData] = useState(null);
   const [serviceTitle, setServiceTitle] = useState([]);
   const {stitle, price, imageURL, description} = serviceTitle;


   useEffect(() => {
    fetch(`https://guarded-inlet-61648.herokuapp.com/service/${id}`)
        .then(res => res.json())
        .then(data => setServiceTitle(data))
}, [id])

   const onSubmit = data => {
    setBookingData(data);
  };
  const handelPaymentSuccess = paymentId => {
    const bookingDetails = {
       title: stitle,
       price: price,
       email: loggedInUser.email,
       image: imageURL,
       description: description,
       booking: bookingData,
       paymentId
    }
    fetch('https://guarded-inlet-61648.herokuapp.com/serviceBooked', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(bookingDetails)
        })
        .then(res => res.json())
        .then(data => {
          if(data){
            alert("Successfully Booked your Service")
          }
        })
};

    return (
        <div className="col-md-6">
         <div style={{display: bookingData ? "none" : "block"}} className="ml-5 mt-5">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <input type="text" defaultValue={loggedInUser.name} {...register("name", { required: true })}  className="form-control py-4" />
                      {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                      <input type="email" defaultValue={loggedInUser.email} {...register("email", { required: true })}  className="form-control py-4" />
                      {errors.email && <span className="text-danger">This field is required</span>}     
                    </div>
                    <div className="form-group">
                       <input type="text" defaultValue={stitle} {...register("service", { required: true })}  className="form-control py-4" />
                       {errors.service && <span className="text-danger">This field is required</span>} 
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success px-5 py-2">Submit</button>
                    </div>
                </form>
                <p>Your Service  charged will be <strong>${price}</strong></p>
            </div>
            <div className="ml-5 mt-5" style={{display: bookingData ? "block" : "none"}} >
              <PaymentProcess handelPayment={handelPaymentSuccess}/>
           </div>
        </div>
    );
};

export default BookingFrom;