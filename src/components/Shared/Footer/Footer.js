import React from 'react';
import FooterCol from './FooterCol';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';



const openingTime = [
    {name: "Fri-Sat ---> 9:00am to 5:00pm" , link: "/"},
    {name: "Sun ---> 10:00am to 5:00pm" , link: "/"},
    {name: "Mon ---> 10:00am to 5:00pm" , link: "/"},
    {name: "Tue ---> 10:00am to 5:00pm" , link: "/"},
    {name: "Wed ---> 10:00am to 5:00pm" , link: "/"},
    {name: "Thu ---> 10:00am to 5:00pm" , link: "/"}
]
const services= [
    {name: "Haircut" , link: "/"},
    {name: "Beard Trim" , link: "/"},
    {name: "Moustache Trim" , link: "/"},
    {name: "Hair Wash" , link: "/"},
    {name: "Hair Color" , link: "/"},
    {name: "Face Mask" , link: "/"}
]
const quickLink= [
    {name: "Home" , link: "/"},
    {name: "About" , link: "/"},
    {name: "Dashboard" , link: "/"},
    {name: "Contact" , link: "/"},
    {name: "Login" , link: "/login"}
]
const ourAddress = [
    {name: "1220 Petersham town, Wardll St New South Wales Australia PA 6550" , link: "//google.com/map"},
    {name: "California" , link: "//google.com/map"},
   
]

const Footer = () => {
    return (
        <footer className="footer-area clear-both">
        <div className="container pt-5">
            <div className="row py-5">
                <FooterCol key={1} menuTitle="Working Hours" menuItems={openingTime}/>
                <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                <FooterCol key={3} menuTitle="Quick Link" menuItems={quickLink}/>
                <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                        <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                        <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                    </ul>
                    <div className="mt-5">
                        <h6>Call now</h6>
                        <button className="btn btn-primary">+98982566585</button>
                    </div>
                </FooterCol>
            </div>
        </div>
        <div className="copyRight text-center bg-dark py-1 pt-3">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
        </div>
    </footer>
    );
};

export default Footer;