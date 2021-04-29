import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/hairstyle.png';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://guarded-inlet-61648.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        }) 
        .then(res => res.json())
        .then(data => setIsAdmin(data));
    }, [])
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-primary fixed-top">
                <div className="container-fluid">
                 <Link className="navbar-brand" to="/"><img style={{width: "40px"}} src={logo} alt=""/><span style={{fontStyle: "italic"}}>Stylish Hair</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link mr-4 my-2 active text-uppercase" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link mr-4 my-2 text-uppercase" to="/">About</Link>
                        </li>
                        <li className="nav-item">
                        {
                          isAdmin ? <Link className="nav-link mr-4 my-2 text-uppercase" to="/orderList">Admin</Link> : <Link className="nav-link mr-4 my-2 text-uppercase" to="/dashboard/:id">Dashboard</Link>
                        }
                          
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link mr-4 my-2 text-uppercase" to="/">Blogs</Link>
                        </li>      
                        <li className="nav-item">
                          <Link className="btn btn-dark mr-4 my-2 px-4 text-uppercase" to="/login">Login</Link>
                        </li> 
                        <li className="nav-item">
                          <img style={{width: "40px", height: "40px"}} className="rounded-circle mr-4 my-2" src={loggedInUser.image} alt=""/>
                        </li> 
                             
                    </ul> 
                </div>
            </div>
        </nav>
      </div>
    );
};

export default Navbar;