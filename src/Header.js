import React from 'react';
import './Header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";



function Header() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='header'> 
    
    <div className="header__logo">
    <StorefrontIcon className='header__logoImage'  />
    
    <a href="/"><img className='footer_logo' src="https://apnidukaan.com/media/apnidukaan-header/Apni-logo-white.png" alt=""  /></a>
     
</div>

<div className='header__search'>
<input type="text" className='header__searchInput'/>
<SearchIcon className='header__searchIcon'/>
</div>

<div className='header__nav'>

<div className='nav__item'>
<span className='nav__itemLineOne'>HelloGuest</span>

<a href="/Login"><span className='nav__itemLineTwo'>SignIn</span></a>
</div>

<div className='nav__item'>
<span className='nav__itemLineOne'>Your</span>
<span className='nav__itemLineTwo'>Shop</span>
</div>

<Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon/>
            <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
          </div>
        </Link>


</div>
</div>
  )
}

export default Header