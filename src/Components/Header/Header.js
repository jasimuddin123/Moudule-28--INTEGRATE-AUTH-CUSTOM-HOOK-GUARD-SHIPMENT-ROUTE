import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const usePrevious = value =>{
    const prev = useRef();
    useEffect(()=>{
        console.log(value);
        prev.current = value;
    },[value])
    
    return prev.current;
}

const Header = () => {
    const user = useContext(UserContext)
    const [count, setCount] = useState(0);
    const previous = usePrevious(count);
    return (
        <div className="header">
            {/* <img src={logo} alt=""/> */}
            <h1>Count:{count} Previous:{previous}</h1>
          <button onClick={()=>setCount(count+1)}>+</button>
          <button onClick={()=>setCount(count-1)}>-</button>
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