import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDatabaseCart} from '../../utilities/databaseManager';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

      const addHandleProduct =(product)=>{
         
        const newCart = [...cart,product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key)
        addToDatabaseCart(product.key, 1);
      }
    return (
        <div className="twin-container">
          <div className="product-container">
              { products.map(pd => <Product
              key = {pd.key}
              showAddToCart={true}
              addHandleProduct ={addHandleProduct}
              product={pd}>    
              </Product>) }
          </div>

          <div>
              
              
              <Cart cart={cart}> </Cart>
          </div>
        </div>
    );
};

export default Shop;