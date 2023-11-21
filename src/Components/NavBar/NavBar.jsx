import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navBar'>
            <div>
            <h1><NavLink to={"/"}>APPAREL ARTISTRY</NavLink></h1> 
            </div>
            <div className='flex-container'>
                <div><FontAwesomeIcon icon={faSearch} /></div>
                <div>
                    <ul className='menu'>
                        <li><NavLink to={"/mujeres"}>MUJERES</NavLink></li>
                        <li><NavLink to={"/hombres"}>HOMBRES</NavLink></li>
                        <li><NavLink to={"/accesorios"}>ACCESORIOS</NavLink></li>
                    </ul>
                </div>
                <div>
            <NavLink to={"/cart"}><FontAwesomeIcon icon={faShoppingCart} /></NavLink>
            </div>
            </div>
        </nav> 
    )
}  

export default NavBar;