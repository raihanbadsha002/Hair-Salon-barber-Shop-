import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       <section className="contact mt-5 py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h3 className="text-primary text-uppercase">Contact</h3>
                    <h1 className="text-uppercase">Always  connect with us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control py-3 my-3" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control py-3 my-3" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control py-3 my-3" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-primary px-5 py-2"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;