import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 
import "./Admin.css";

export default function Admin() {

  const [flower, setFlower] = useState({
    name: "",
    description: "",
    price: "",
    url: ""
  });

  
  const handleChange = (e) => {
    setFlower({ ...flower, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/flowers/add", flower);
      console.log("Success:", response.data);
      alert("sucessfully added the flower details!");
      
      // Form එක reset කිරීම
      setFlower({ name: "", description: "", price: "", url: "" });
    } catch (err) {
      console.error("Error:", err);
      alert("Error , data not send to the database successfully.!");
    }
  };

  return (
    <div className="admin-container">
      {/* Sidebar Section */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button className="logout-btn">Log out</button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        <header className="admin-topbar">
          <h1>Dashboard Overview</h1>
          <div className="user-profile">Admin User</div>
        </header>

        <section className="admin-content">
          <div className="add-flower-section">
            <h3>Add New Flower Product</h3>
            <form onSubmit={handleSubmit} className="admin-flower-form">
              <div className="form-group">
                <input type="text" name="name" placeholder="Flower Name" value={flower.name} onChange={handleChange} required />
                <input type="text" name="url" placeholder="Image URL (e.g. rose.jpg)" value={flower.url} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="number" name="price" placeholder="Price" value={flower.price} onChange={handleChange} required />
                <textarea name="description" placeholder="Short Description" value={flower.description} onChange={handleChange} required />
              </div>
              <button type="submit" className="save-btn">Save Flower</button>
            </form>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Users</h3>
              <p className="stat-number">1,250</p>
            </div>
            <div className="stat-card">
              <h3>Revenue</h3>
              <p className="stat-number">$12,400</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}