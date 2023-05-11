import React, { useState, useEffect } from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';


export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");
  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);
  return (
    <div>
        <hr />
        <div className="row">
           
      <div className="column">
       <div className="container">
        <p> <img className='footer_logo' src="https://apnidukaan.com/media/apnidukaan-header/Apni-logo-white.png" alt=""  /></p>
        <p>Apnidukaan means a store where customers can feel like it is their own. This feeling can only 
            be brought in their hearts & minds by selling quality products at reasonable prices, giving
             proper information about products, and by giving genuine service.</p>
             
        <p> <AddIcCallIcon  fontSize='small'/> +91 9876543210</p>
        <p>  contact@apnidukaan.com</p>
       </div>
        </div>
      <div className="column">
        <h4>ACCOUNT & ORDERS</h4>
        <div className="container">
        <ul  className='footertab'>
<li><a href="/">My Account</a></li>
<li><a href="/">My Orders</a></li>
<li><a href="/">My Wish List</a></li>
<li><a href="/">Compare</a></li>
<li><a href="/">My Product Reviews</a></li>
<li><a href="/">Account Information</a></li>
<li><a href="/">Track order</a></li>
</ul>
       </div>

      </div>
      <div className="column"><h4>ACCOUNT & ORDERS</h4>
        <div className="container">
        <ul  className='footertab'>
<li><a href="/">About us</a></li>
<li>Privacy Policy</li>
<li><a href="/">Return & Replacement</a></li>
<li><a href="/">Partner with us</a></li>
<li><a href="/">Contact us</a></li>
<li><a href="/">Blog</a></li>

</ul>
       </div></div>
    </div>
       <p className='copyright_txt'>@{currentYear} copyright design and developed by Vivek Kumar</p>
    </div>
)
}
