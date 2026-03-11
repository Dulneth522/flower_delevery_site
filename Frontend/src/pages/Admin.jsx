import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 
import "./Admin.css";
import { Trash2, LogOut, Home, Info, Phone, PlusCircle, Flower2 } from 'lucide-react';

export default function Admin() {
  const [flower, setFlower] = useState({ name: "", description: "", price: "", url: "" });
  const [allFlowers, setAllFlowers] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    fetchFlowers();
  }, []);

  const fetchFlowers = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/flowers/all");
      setAllFlowers(res.data);
    } catch (err) {
      console.error("Error fetching flowers:", err);
    }
  };

  const handleChange = (e) => {
    setFlower({ ...flower, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/flowers/add", flower);
      alert("Successfully added!");
      setFlower({ name: "", description: "", price: "", url: "" });
      fetchFlowers(); 
    } catch (err) {
      alert("Error adding data.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this flower?")) {
      try {
        await axios.delete(`http://localhost:8080/api/flowers/delete/${id}`);
        alert("Flower Deleted!");
        fetchFlowers(); 
      } catch (err) {
        console.error("Error deleting:", err);
        alert("Failed to delete the flower.");
      }
    }
  };

  const handleLogout = () => {
    if (window.confirm("Do you want to logout?")) {
      navigate("/"); 
    }
  };

  return (
    <div className="admin-wrapper">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <Flower2 size={28} color="#4CAF50" />
          <h2>Admin</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="nav-item active"> Dashboard</li>
            <li><Link to="/" className="nav-link"><Home size={14}/>home</Link></li>
            <li><Link to="/about" className="nav-link"><Info size={18}/> About Us</Link></li>
            <li><Link to="/contact" className="nav-link"><Phone size={18}/> Contact Us</Link></li>
          </ul>
        </nav>
        <button onClick={handleLogout} className="logout-btn">
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="admin-main">
        <header className="admin-topbar">
          <h1>Inventory Management</h1>
          <div className="admin-badge">Admin Mode</div>
        </header>

        <section className="admin-content">
          {/* Add Form Card */}
          <div className="card form-card">
            <h3><PlusCircle size={20} color="#4CAF50"/> Add New Flower</h3>
            <form onSubmit={handleSubmit} className="admin-flower-form">
               <div className="input-group">
                 <input type="text" name="name" placeholder="Flower Name" value={flower.name} onChange={handleChange} required />
                 <input type="number" name="price" placeholder="Price ($)" value={flower.price} onChange={handleChange} required />
               </div>
               <input type="text" name="url" placeholder="Image URL" value={flower.url} onChange={handleChange} required />
               <textarea name="description" placeholder="Short Description" value={flower.description} onChange={handleChange} required />
               <button type="submit" className="save-btn">Save Product</button>
            </form>
          </div>

          {/* Table Card */}
          <div className="card inventory-card">
            <h3>Flower Inventory ({allFlowers.length})</h3>
            <div className="table-responsive">
                <table className="admin-table">
                <thead>
                    <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allFlowers.map((f) => (
                    <tr key={f.id}>
                        <td><img src={f.url} alt={f.name} className="table-img" /></td>
                        <td className="fw-bold">{f.name}</td>
                        <td className="price-text">${f.price}</td>
                        <td className="desc-text">{f.description}</td>
                        <td>
                            <button onClick={() => handleDelete(f.id)} className="delete-btn" title="Delete Flower">
                                <Trash2 size={18} />
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}