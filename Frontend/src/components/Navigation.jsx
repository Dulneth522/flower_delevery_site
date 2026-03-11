import React, { useState, useEffect } from 'react'
import './Navigation.css'
import { useNavigate } from 'react-router-dom';

export default function Navigation({cartItems=[], removeFromCart}) {
  const [showCart, setShowCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    if (status === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/Signin"; 
  };

   const handleCheckout = () => {
    setShowCart(false); 
    navigate('/doPayment'); 
  };
  return (
    <>
      <div className='navbar'>
        <h1 className="navheading">Flower Bouquet</h1>
        <div className="navpart">
          <nav className="navnavbar">
            <ul className="navunorder">
              <li className="navlist"><a href="/">Home</a></li>
              <li className="navlist"><a href="/about">About</a></li>
              <li className="navlist"><a href="/contact">Contact</a></li>
            </ul>
          </nav>

          {isLoggedIn ? (
            <>
            <button className="signin" onClick={handleLogout}>Logout</button>
            <button className='signin'><a href='/addTOFlowers'>Add</a></button>
            </>
          ) : (
            <>
              <button className="signin"><a href="/Signin">Sign in</a></button>
              <button className="signin"><a href="/Signup">Sign Up</a></button>
            </>
          )}

          <button className='addtocartbutton' onClick={() => setShowCart(!showCart)}>
            <i className="bi bi-cart"></i>
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </button>
        </div>
      </div>
      
      {showCart && (
        <div className="cart-rectangle">
          <div className="cart-header">
            <span>My Cart</span>
            <button onClick={() => setShowCart(false)}>✕</button>
          </div>
          {cartItems.length === 0 ? (
            <>
              <p>Your cart is empty 🛒</p>
              <button onClick={() => setShowCart(false)}><a href="#link">buy something</a></button>
            </>
          ) : (
            <div className="cart-items-container">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item-row">
                  <img src={item.img} alt={item.name} className="cart-item-img" />
                  
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">Rs. {item.price}</span>
                  </div>

                  
                  <button 
                    className="remove-item-btn" 
                    onClick={() => removeFromCart(index)}
                  >
                    ✕
                  </button>
                </div>
              ))}
              <hr />
              <div className="cart-total">
                <strong>Total: Rs. {cartItems.reduce((acc, curr) => acc + parseInt(curr.price), 0)}</strong>
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>Checkout Now</button>
            </div>
          )}
        </div>
      )}
    </>
  )
}