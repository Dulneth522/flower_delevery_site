import React from "react";
import Navigation from "../components/Navigation";
import Verticalnav from "../components/Verticalnav";
import './Home.css';
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Upperbar from "../components/Upperbar";
export default function Home({cartItems, addToCart,removeFromCart}) {
  return (
    <><Upperbar/>
      <div className="desktopnavpart">
        <Navigation cartItems={cartItems} removeFromCart={removeFromCart} />
        <img
           src="/images/Purple Floral Sale Flower Shop Banner.png"
          alt="Flower bokey"
          className="mainimage1"
        />
      </div>
            <div className="mobilenavpart">
        <Verticalnav cartItems={cartItems}/>
        <img
          src="/images/Purple Floral Sale Flower Shop Banner.png"
            alt="Flower bokey"
            className="mainimage2"
        />
      </div>
      <Cart addToCart={addToCart}/>
      <Footer/>
 </>
  );
}
