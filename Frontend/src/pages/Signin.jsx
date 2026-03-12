import React, { useState } from "react";
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import axios from "axios";
import Upperbar from "../components/Upperbar";

export default function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [captchaDone, setCaptchaDone] = useState(false);

  const navigate = useNavigate();

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  function onCaptchaChange(value) {
    if (value) {
      setCaptchaDone(true);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (!captchaDone) {
      alert("Please complete the Captcha");
      return;
    }

    axios.post("http://localhost:8080/api/customers/login", {
      email: email,
      password: password
    })
      .then((response) => {

        alert("Login Successful!");

        localStorage.setItem("isLoggedIn", "true");

        navigate("/");

        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid Email or Password");
      });
  };

  return (
    <>
    <Upperbar/>
      <Navigation />

      <div className="mainsininpart">

        {/* Left Part */}
        <div className="connecttologinpage">
          <div className="connecttologinmain">

            <img src="/images/signin1.jpeg" alt="sign in" className="signinimage" />

            <h1>New Customers</h1>
            <br />

            <p>
              If you create an account with us, you will get additional benefits such as
              order history, bonus cash and more.
            </p>

            <button className="gotosignup">
              <Link to="/signup">Sign up</Link>
            </button>

          </div>
        </div>


        {/* Right Part */}
        <div className="signinpart">
          <div className="signinborder">

            <h2>Log In</h2>

            <form onSubmit={handleLogin}>

              <label htmlFor="email">Email</label>
              <br />

              <i className="bi bi-person"></i>

              <input
                type="email"
                className="userName"
                id="email"
                placeholder="Type Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <br />

              <label htmlFor="password">Password</label>
              <br />

              <i className="bi bi-file-lock"></i>

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter Your Password Here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="button" onClick={togglePassword}>
                {showPassword ?
                  <i className="bi bi-eye-slash"></i> :
                  <i className="bi bi-eye-fill"></i>}
              </button>

              <br />

              <p className="reset-password">
                <a href="reset-password">Forget password?</a>
              </p>

              <br />

              <ReCAPTCHA
                sitekey="6Lf_cTMsAAAAABLG1EtufRmRCUTmNFmuGMHjlIFU"
                onChange={onCaptchaChange}
              />

              <br />

              <button type="submit">Sign In</button>

            </form>

            <br />

            <p className="sigintext">OR Sign in using</p>

            <div className="signinicon">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-google"></i>
            </div>

            <p className="sigintext">OR</p>

            <Link to="/signup">Sign up</Link>

          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}