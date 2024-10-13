import React, { useState } from 'react';
import { toast } from 'react-toastify';

const UpdateItem = ({ items, onUpdateItem }) => {
  const [id, setId] = useState('');
  const [field, setField] = useState('quantity');
  const [newValue, setNewValue] = useState('');

  const handleUpdate = () => {
    const idNumber = parseInt(id, 10);
    const item = items.find(item => item.id === idNumber);

    if (!item) {
      toast.error('Item not found!');
      return;
    }

    if (!newValue) {
      toast.error('New value is required!');
      return;
    }

    const updatedItem = { ...item, [field]: Number(newValue) };

    onUpdateItem(updatedItem);
    toast.success(`${field === 'quantity' ? 'Quantity' : 'Price'} of Item ${item.name} updated to ${newValue}`);

    // Clear inputs
    setId('');
    setNewValue('');
  };

  const handleInputChange = (setter) => (event) => {
    const value = event.target.value;
    if (!isNaN(value) || value === '') {
      setter(value);
    }
  };

  return (
    <div>
      <h2>Update Item</h2>
      <input type="text" value={id} onChange={handleInputChange(setId)} placeholder="Enter ID" />
      <select value={field} onChange={(e) => setField(e.target.value)}>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>
      <input type="text" value={newValue} onChange={handleInputChange(setNewValue)} placeholder="Enter New Value" />
      <button onClick={handleUpdate}>Update Item</button>
    </div>
  );
};

export default UpdateItem;
