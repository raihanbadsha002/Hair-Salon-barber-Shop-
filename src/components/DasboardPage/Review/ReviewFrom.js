import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const ReviewFrom = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        e.target.reset();
      
        const ReviewData = {
            name: data.name,
            designation: data.designation,
            description: data.description,
            image: loggedInUser.image

        }
        const url = `https://guarded-inlet-61648.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(ReviewData)
        })
        .then(res => alert("Thanks For Your Review"))


    };
    return (
        <div className="col-md-6">
        <div className="ml-4 mt-3 bg-white shadow rounded p-4">
           <form className="" onSubmit={handleSubmit(onSubmit)}>
                   <div className="form-group">
                     <input type="text"  {...register("name", { required: true })} placeholder="Your Name"  className="form-control py-2" />
                     {errors.name && <span className="text-danger">Your Name is required</span>}
                   </div>
                   <div className="form-group">
                     <input type="text" {...register("designation", { required: true })}  className="form-control py-2" placeholder="Company’s name, Designation"  />
                     {errors.designation && <span className="text-danger">Designation Price field is required</span>}     
                   </div>
                   <div className="form-group">
                      <textarea  type="text" {...register("description", { required: true })} placeholder="Description"  className="form-control py-2" rows="3"></textarea>
                      {errors.description && <span className="text-danger">Description field is required</span>} 
                   </div>
                   <div className="form-group">
                       <button type="submit" className="btn btn-primary px-5 py-2">Submit</button>
                   </div>
               </form>
           </div>
       </div>
    );
};

export default ReviewFrom;