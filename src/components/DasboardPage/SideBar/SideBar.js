import React, { useContext, useEffect, useState} from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartPlus, faCommentDots, faGripHorizontal, faHome, faPlus, faShoppingBag, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';
import logo from '../../../images/hairstyle.png';

const SideBar = () => {
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
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
        <Link className="navbar-brand" to="/"><img style={{width: "40px"}} src={logo} alt=""/><span className="text-white" style={{fontStyle: "italic"}}>Stylish Hair</span></Link>
        <ul className="list-unstyled">
        {isAdmin ? 
              <div>
                <li>
                    <Link to="/orderList" className="text-white">
                        <FontAwesomeIcon icon={faShoppingBag} /> <span>Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addServices" className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Services</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addAdmin" className="text-white" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageServices" className="text-white" >
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Manage Services</span>
                    </Link>
                </li>
            </div>
            :
            <div>
                <li>
                    <Link to="/dashboard/:id" className="text-white">
                        <FontAwesomeIcon icon={faCartPlus} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/servicesList" className="text-white">
                        <FontAwesomeIcon icon={faShoppingBag} /> <span>Services List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
            </div>
            }
        </ul>
        <div>
            <Link to="/" className="text-white"><FontAwesomeIcon icon={faHome} /> <span>Home</span></Link>
        </div>
    </div>
    );
};

export default SideBar;