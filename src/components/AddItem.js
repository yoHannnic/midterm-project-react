import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../styles/App.css'; 

const AddItem = ({ onAddItem }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [isToastShown, setIsToastShown] = useState(false);

  const handleAdd = () => {
    if (!id || !name || !quantity || !price || !category) {
      if (!isToastShown) {
        toast.error("All fields are required!");
        setIsToastShown(true);
      }
      return;
    }

    if (isNaN(id) || isNaN(quantity) || isNaN(price)) {
      if (!isToastShown) {
        toast.error("ID, Quantity, and Price must be numbers!");
        setIsToastShown(true);
      }
      return;
    }

    const newItem = {
      id: Number(id),
      name,
      quantity: Number(quantity),
      price: Number(price),
      category,
    };

    onAddItem(newItem);

    if (!isToastShown) {
      toast.success("Item added successfully!");
      setIsToastShown(true);
    }

    setId('');
    setName('');
    setQuantity('');
    setPrice('');
    setCategory('');
    setIsToastShown(false);
  };

  const handleInputChange = (setter) => (event) => {
    const value = event.target.value;
    setter(value);
  };

  return (
    <div className="add-item-container">
      <h2 className="form-heading">Add New Item</h2>
      <div className="form-group">
        <label>ID</label>
        <input type="text" value={id} onChange={handleInputChange(setId)} placeholder="Enter ID" className="form-input" />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" className="form-input" />
      </div>
      <div className="form-group">
        <label>Quantity</label>
        <input type="text" value={quantity} onChange={handleInputChange(setQuantity)} placeholder="Enter Quantity" className="form-input" />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input type="text" value={price} onChange={handleInputChange(setPrice)} placeholder="Enter Price" className="form-input" />
      </div>
      <div className="form-group">
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-select">
          <option value="">Select Category</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <button onClick={handleAdd} className="form-button">Add Item</button>
    </div>
  );
};

export default AddItem;
