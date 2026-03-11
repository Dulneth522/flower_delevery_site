import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';

const Cart = ({ addToCart }) => {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFlowers();
  }, []);

  const fetchFlowers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/flowers/all");
      setFlowers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching flowers:", error);
      setLoading(false);
    }
  };

  const handleBuyClick = (e, flower) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    addToCart(flower);
    alert(`Added ${flower.name} to your basket!`);
  };

  if (loading) return <p style={{ textAlign: 'center' }}>Loading Flowers...</p>;

  return (
    <div className="cart-wrapper">
      <h1 className="page-title">Our Flower Collection</h1>
      <div className="cart-grid">
        {flowers.length > 0 ? (
          flowers.map((flower) => (
            <div key={flower.id} className="cartstyle">
              <div className="carturl">
                <img src={flower.url} alt={flower.name} className="cartimage1" />
              </div>
              <h3 className="nameofflower">{flower.name}</h3>
              <p className="priceofcart">Rs. {flower.price} /=</p>
              <p className="description-text">{flower.description}</p>
              
              <button 
                className="buy-button" 
                onClick={(e) => handleBuyClick(e, flower)}
              >
                Buy Now
              </button>
            </div>
          ))
        ) : (
          <p>No flowers found in the database.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;