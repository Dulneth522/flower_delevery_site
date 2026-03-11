import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import './About.css'
import Cart from '../components/Cart';

export default function About({ cartItems = [], removeFromCart, addToCart }) {

  const features = [
    { id: 1, title: "Fresh Blooms", desc: "Hand-picked daily from local farms." },
    { id: 2, title: "Fast Delivery", desc: "Same-day delivery within the city." },
    { id: 3, title: "Custom Decor", desc: "Tailored arrangements for your events." }
  ];


  return (
    <>
    <Navigation cartItems={cartItems} removeFromCart={removeFromCart}/>
      <section className="about-section">
      <div className="about-container">
        
        <div className="about-image">
          <img src="public\images\folwernotbac1.jpeg" alt="Our Florist Shop" />
        </div>

      
        <div className="about-content">
          <h4 className="subtitle">OUR STORY</h4>
          <h2 className="main-title">Bringing Nature’s Beauty to Your Doorstep</h2>
          <p className="about-text">
            Founded in 2024, our flower boutique started with a simple mission: 
            to spread joy through the language of flowers. We believe every petal 
            tells a story, whether it's a celebration, a gift, or a "just because" moment.
          </p>

          <div className="features-grid">
            {features.map(f => (
              <div key={f.id} className="feature-item">
                <span className="feature-icon">✔</span>
                <div>
                  <h5 className="feature-title">{f.title}</h5>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="contact-btn">Learn More</button>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}
