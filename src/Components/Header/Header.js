import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {
    const user = useContext(UserContext)
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop"> Shop</a>
                <a href="/review">Oreder Review</a>
                <a href="/inventory">Mange Inventory</a>
                <span style={{color:'cyan',fontWeight:'bold'}}>{user}</span>
            </nav>

        </div>
    );
};

export default Header;