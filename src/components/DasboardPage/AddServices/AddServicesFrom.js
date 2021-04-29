import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './AddServicesFrom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const AddServicesFrom = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = (data, e) => {
      e.target.reset();
        const servicesData = {
            stitle: data.name,
            price: data.price,
            description: data.description,
            imageURL: imageURL

        }
        const url = `https://guarded-inlet-61648.herokuapp.com/addServices`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(servicesData)
        })
        .then(res => alert("Service Add Successfully"))


    };
  
    const handelImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'bf42fd7632cf6f7f9d130dcb0f0b47cb');
        imageData.append('image', event.target.files[0]);
  
        axios.post('https://api.imgbb.com/1/upload',
          imageData)
        .then(function (response) {
            console.log(response.data.data.display_url);
          setImageURL(response.data.data.display_url);

        })
        .catch(function (error) {
          console.log(error);
        });
  
      }
    return (
        <div className="col-md-6">
        <div className="ml-4 mt-3 bg-white shadow rounded p-4">
           <form className="" onSubmit={handleSubmit(onSubmit)}>
                   <div className="form-group">
                     <label htmlFor="ServicesTitle" className="form-label">Service Title</label>
                     <input type="text"  {...register("name", { required: true })} placeholder="Enter service title"  className="form-control py-2" />
                     {errors.name && <span className="text-danger">Service Title field is required</span>}
                   </div>
                   <div className="form-group">
                     <label htmlFor="ServicesPrice" className="form-label">Service Price</label>
                     <input type="text" {...register("price", { required: true })}  className="form-control py-2" placeholder="Enter service Price"  />
                     {errors.price && <span className="text-danger">Service Price field is required</span>}     
                   </div>
                   <div className="form-group">
                      <label htmlFor="ServicesPrice" className="form-label">Description</label>
                      <textarea  type="text" {...register("description", { required: true })} placeholder="Enter description"  className="form-control py-2" rows="3"></textarea>
                      {errors.description && <span className="text-danger">Description field is required</span>} 
                   </div>
                   <div className="form-group">
                      <label htmlFor="file" className="form-label custom-file-upload"><FontAwesomeIcon icon={faUpload}/> Image Upload</label>
                      <input  type="file" id="file" {...register("image", { required: true })} onChange={handelImageUpload}/>
                      {errors.image && <span className="text-danger">This field is required</span>} 
                   </div>
                   <div className="form-group">
                       <button type="submit" className="btn btn-success px-5 py-2">Submit</button>
                   </div>
               </form>
           </div>
       </div>
    );
};

export default AddServicesFrom;