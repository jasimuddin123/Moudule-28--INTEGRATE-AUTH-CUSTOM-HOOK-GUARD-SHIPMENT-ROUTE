import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const { name, price, img, stock, seller, key } = props.product;

    //  console.log(props);
    return (
        <div className="product">
            <div >
                <img src={img} alt=""/>
            </div>
            <div>
                <h3><Link to={"/product/" +key}>{name}</Link></h3>
                <br/>
                <p>By:{seller}</p>
                <br/>
                <p>Price: ${price}</p>
                <h3>Only {stock} Order Soon -Now</h3>

                {props.showAddToCart === true && <button className="main-button"
                 onClick={()=>props.addHandleProduct(props.product)}>
                     Buy Now</button>}
            </div>
        </div>
    );
};

export default Product;