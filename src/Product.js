import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({  id ,title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
      dispatch({
        type: 'ADD_TO_BASKET',
        item:{
          id,
          title,
          image,
          price,
          rating,
        },
    });
      };
  return (
    <div className="product">
                    {/* info */}
      <div className="product__info">
        <p>{title}</p>
                    {/* price */} 
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
                    {/* Rating */}
              
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

      </div>

                    {/* image */}
      <div className="image">              
       <img src={image} alt="" />
      </div>


                {/* button */}
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product;