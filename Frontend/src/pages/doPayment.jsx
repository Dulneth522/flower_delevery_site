import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './doPayment.css';
import Navigation from '../components/Navigation';
import Upperbar from '../components/Upperbar';

export default function DoPayment({ cartItems = [] }) {
  const navigate = useNavigate();
  const [deliveryType, setDeliveryType] = useState('');

  //calculate total price
  const totalPrice = cartItems.reduce((acc, curr) => acc + parseInt(curr.price || 0), 0);

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment Successful! Your flowers are on the way!");
    navigate('/');
  };

  return (
    <>
    <Upperbar/>
    <Navigation/>
    <div className="payment-container">
      <div className="payment-layout">
        
       {/*order summary*/}
        <div className="order-summary">
          <h3>Order Summary 🛒</h3>
          <div className="summary-items">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className="summary-item">
                  <img src={item.img} alt={item.name} className="summary-img" />
                  <div className="summary-info">
                    <span>{item.name}</span>
                    <strong>Rs. {item.price}</strong>
                  </div>
                </div>
              ))
            ) : (
              <p>No items in cart.</p>
            )}
          </div>
          <hr />
          <div className="summary-total">
            <span>Total Amount:</span>
            <span>Rs. {totalPrice}</span>
          </div>
          <button className="back-btn" onClick={() => navigate('/')}>
            ← Add More Items
          </button>
        </div>

        <div className="payment-card">
          <h2 className="payment-title">Delivery & Payment</h2>

          <div className="delivery-section">
            <p className="section-label">Who is this for?</p>
            <div className="delivery-buttons">
              <button 
                className={`option-btn ${deliveryType === 'me' ? 'active' : ''}`}
                onClick={() => setDeliveryType('me')}
              >
                🙋‍♂️ For Me
              </button>
              <button 
                className={`option-btn ${deliveryType === 'friend' ? 'active' : ''}`}
                onClick={() => setDeliveryType('friend')}
              >
                🎁 For a Friend
              </button>
            </div>
          </div>

          {deliveryType && (
            <form onSubmit={handlePayment} className="payment-form">
              <h3>Card Details 💳</h3>
              <div className="input-group">
                <label>Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="input-group">
                <label>Card Number</label>
                <input type="text" placeholder="xxxx xxxx xxxx xxxx" maxLength="16" required />
              </div>
              <div className="row">
                <div className="input-group">
                  <label>given date</label>
                  <input type="text" placeholder="MM/YY" required />
                </div>
                <div className="input-group">
                <label>Adress</label>
                <input type="text" placeholder="123/A gangodawila, nugegoda" required />
              </div>
              </div>
              <button type="submit" className="pay-btn">
                Pay Rs. {totalPrice}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
    </>
  );
}