import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import './Contact.css'
import Cart from '../components/Cart'
import Upperbar from '../components/Upperbar'

export default function Contact({addToCart,cartItems,removeFromCart}) {
  return (
    <>
    <Upperbar/>
    <Navigation cartItems={cartItems} removeFromCart={removeFromCart}/>
    <div className="mainconact">
      <div className="contactpart1">
          <p>Mobile Number: 0111111111</p>
          <pre>address : 152/indurugahawatta,
            walpola,angoda.
          </pre>
          <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31689.663893032568!2d79.88506001739664!3d6.865661618860789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a7a9577b535%3A0x62e4b0a7bd678e33!2sNugegoda!5e0!3m2!1sen!2slk!4v1766592601482!5m2!1sen!2slk"
          width="450"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contactpart2">
        <table>
          <tr>
            <td>
              <div className="signup-main">
                <h3>New Customers</h3>
                <table className="signup-submain">
                  <tr>
                    <td>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="contactinputs"
                        placeholder='Name'
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="contactinputs"
                        placeholder='Subject'
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <input
                        type="email"
                        name="contactEmail"
                        id="contactEmail"
                        className="contactinputs"
                        placeholder='Email'
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <input
                        type="text"
                        name="message"
                        id="message"
                        className="message"
                        placeholder='messane'
                      />
                    </td>
                  </tr>
                </table>
                <button type="submit" className="signupbutton">
                  submit
                </button>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <Footer/>
    </>
  )
}
