import React, { useState } from 'react';
import './AddToFlowers.css';
import { PlusCircle, Trash2, Send } from 'lucide-react';

export default function AddToFlowers() {
  const [flower, setFlower] = useState({ name: '', price: '', imageUrl: '', description: '' });
  const [flowerList, setFlowerList] = useState([]);

  const handleChange = (e) => {
    setFlower({ ...flower, [e.target.name]: e.target.value });
  };

  const handleAddFlower = (e) => {
    e.preventDefault();
    if (!flower.name || !flower.price) return alert("Please enter the details ");
    
    setFlowerList([...flowerList, { ...flower, id: Date.now() }]);
    setFlower({ name: '', price: '', imageUrl: '', description: '' }); // Reset form
  };

  const deleteFlower = (id) => {
    setFlowerList(flowerList.filter(item => item.id !== id));
  };

  return (
    <div className="add-flower-container">
      <div className="header-section">
        <h1>Add New Flower Product</h1>
        <p>Add new flowers to your shop.</p>
      </div>

      {/* Form Section */}
      <div className="form-card">
        <form onSubmit={handleAddFlower}>
          <div className="input-grid">
            <input type="text" name="name" placeholder="Flower Name" value={flower.name} onChange={handleChange} />
            <input type="text" name="imageUrl" placeholder="Image URL (e.g. rose.jpg)" value={flower.imageUrl} onChange={handleChange} />
            <input type="number" name="price" placeholder="Price ($)" value={flower.price} onChange={handleChange} />
            <textarea name="description" placeholder="Short Description" value={flower.description} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn-save">
            <PlusCircle size={20} /> Save Flower
          </button>
        </form>
      </div>

      {/* Table Section */}
      <div className="table-card">
        <h3>Current Flower Inventory</h3>
        <table className="flower-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Flower Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {flowerList.length > 0 ? (
              flowerList.map((item) => (
                <tr key={item.id}>
                  <td><img src={item.imageUrl || 'https://via.placeholder.com/50'} alt="flower" className="table-img" /></td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.description}</td>
                  <td>
                    <button onClick={() => deleteFlower(item.id)} className="btn-delete">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-data">No any data , pls add the flowers.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}