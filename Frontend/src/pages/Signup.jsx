import React, { useState } from "react";
import "./Signup.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
const [FirstName , setFirstName] = useState("");
const [LastName , setLastName] = useState("");
const [Email , setEmail] = useState("");
const [Password , setPassword] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/api/customers/signup", {
      fname: FirstName,
      lname: LastName,
      email: Email,
      password: Password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      alert("User Registered Successfully");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    })
    .catch((error) => {
      console.log(error);
      alert("Error");
    });
  };

  return (
    <>
      <Navigation />
      <div className="headingsignup">
        <h4>Your Shopping Account</h4>
        <hr />
      </div>
      <form onSubmit={handleSubmit}>
  <div className="signupbody">

        <table>
           <tbody>
          <tr>
            <td>
              <div className="signup-main">
                <h3>New Customers</h3>
                {/* <div className="signupbuttondev">
  <button  className="user">User</button>
  <button className="companies">Companies</button>
  <button className="delevery">Delivery</button>
</div> */}
                <table className="signup-submain">
                  <tr>
                    <td>
                      <h4>First Name </h4>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="fname"
                        id="fname"
                        className="signupinputs"
                        value={FirstName}
                        onChange={(e) =>setFirstName(e.target.value)}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <h4>Last Name </h4>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="lname"
                        id="lname"
                        className="signupinputs"
                        value={LastName}
                        onChange={(e) =>setLastName(e.target.value)}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <h4>Email </h4>
                    </td>
                    <td>
                      <input
                        type="email"
                        name="signupEmail"
                        id="signupEmail"
                        className="signupinputs"
                        value={Email}
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <h4>Password </h4>
                    </td>
                    <td>
                      <input
                        type="password"
                        name="Suppassword"
                        id="Suppassword"
                        className="signupinputs"
                         value={Password}
          onChange={(e) => setPassword(e.target.value)}
                      />
                    </td>
                  </tr>

                  {/* <tr>
                    <td>
                      <h4>Confirm Password </h4>
                    </td>
                    <td>
                      <input
                        type="password"
                        name="Supcpassword"
                        id="Supcpassword"
                        className="signupinputs"
                      />
                    </td>
                  </tr> */}
                </table>
                <button type="submit" className="signupbutton">
                  Sign up
                </button>
                <p className="signuppara">
                  Do you Have an account yet?{" "}
                  <Link to={"/signin"}>Sign in</Link>
                </p>
              </div>
            </td>

            <td>
              <img src="/images/signup.jpeg" alt="sign up page image" className="signupimage" />
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      </form>

      <Footer />
    </>
  );
}
