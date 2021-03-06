import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";

function Header() {
  const [{basket}] = useStateValue();

    console.log(basket); 

    return (
        <nav className="header">
        <Link to="/">   
        <img 
        className="header__logo" 
        src="https://media.discordapp.net/attachments/806846263776772100/877561754496938054/unknown.png"
        alt=""
        />
        </Link>

        <div className= "header__search">
        <input type="text" className="header__searchInput"/>
        <SearchIcon className="header__searchIcon"/>
        </div>

        <div className="header__nav">

            <Link to ="/login" className="header__link">
            <div className="header__option">
            <span className="header__optionlineOne"> Hello</span>
             <span className="header__optionlineTwo"> Sign In</span>
             </div>
            </Link>

            <Link to ="/" className="header__link">
            <div className="header__option">
             <span className="header__optionlineOne"> Returns</span>
             <span className="header__optionlineTwo"> & Orders</span>
             </div>
            </Link>

            <Link to ="/" className="header__link">
            <div className="header__option">
             <span className="header__optionlineOne">Join Now</span>
             <span className="header__optionlineTwo">Membership</span>
             </div>
            </Link>

            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionlineTwo header__basketCount">{basket?.length}</span>
                </div>

            </Link>

        </div>

        </nav>
    )
}

export default Header
