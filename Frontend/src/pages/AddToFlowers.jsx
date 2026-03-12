import React, { useState } from 'react';
import axios from 'axios';
import './AddToFlowers.css';
import { PlusCircle, Trash2, Send } from 'lucide-react';
import Upperbar from '../components/Upperbar';

export default function AddToFlowers() {
  const [flower, setFlower] = useState({ name: '', price: '', url: '', description: '' });
  const [flowerList, setFlowerList] = useState([]);

  const handleChange = (e) => {
    setFlower({ ...flower, [e.target.name]: e.target.value });
  };

  const handleAddFlower = (e) => {
    e.preventDefault();
    if (!flower.name || !flower.price) return alert("Please enter the details");
    setFlowerList([...flowerList, { ...flower, id: Date.now() }]);
    setFlower({ name: '', price: '', url: '', description: '' }); 
  };

  const deleteFlower = (id) => {
    setFlowerList(flowerList.filter(item => item.id !== id));
  };

  const handleSubmitAll = async () => {
    if (flowerList.length === 0) return alert("No flowers to submit!");
    
    try {
      for (let f of flowerList) {
        const { id, ...dataToSend } = f; 
        await axios.post("http://localhost:8080/api/flowers/add", dataToSend);
      }
      
      alert("All flowers submitted successfully to the database!");
      setFlowerList([]); 
    } catch (err) {
      console.error("Error submitting data:", err);
      alert("Error submitting data. Please check the backend console.");
    }
  };

  return (
    <>
    <Upperbar/>
    <div className="add-flower-container">
      <div className="header-section">
        <h1>Add New Flower Product</h1>
        <p>Manage your flower shop inventory.</p>
      </div>

      <div className="form-card">
        <form onSubmit={handleAddFlower}>
          <div className="input-grid">
            <input type="text" name="name" placeholder="Flower Name" value={flower.name} onChange={handleChange} required />
            <input type="text" name="url" placeholder="Image URL" value={flower.url} onChange={handleChange} required />
            <input type="number" name="price" placeholder="Price ($)" value={flower.price} onChange={handleChange} required />
            <textarea name="description" placeholder="Short Description" value={flower.description} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="btn-save">
            <PlusCircle size={20} /> Add to List
          </button>
        </form>
      </div>

      <div className="table-card">
        <h3>Temp Flower List</h3>
        <table className="flower-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {flowerList.length > 0 ? (
              flowerList.map((item) => (
                <tr key={item.id}>
                  <td><img src={item.url || 'https://via.placeholder.com/50'} alt="flower" className="table-img" style={{width: '50px'}} /></td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => deleteFlower(item.id)} className="btn-delete"><Trash2 size={18} /></button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{textAlign: 'center', padding: '20px'}}>No flowers added to the list yet.</td>
              </tr>
            )}
          </tbody>
        </table>

        {flowerList.length > 0 && (
          <button onClick={handleSubmitAll} className="btn-submit-all" style={{marginTop: '20px', backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px'}}>
            <Send size={18} /> Submit All to Admin
          </button>
        )}
      </div>
    </div>
    </>
  );
}