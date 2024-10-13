import React, { useState } from 'react';
import { toast } from 'react-toastify';

const RemoveItem = ({ items, onRemoveItem }) => {
  const [id, setId] = useState('');

  const handleRemove = () => {
    const idNumber = parseInt(id, 10);
    const item = items.find(item => item.id === idNumber);

    if (item) {
      onRemoveItem(idNumber);
      toast.success(`Item ${item.name} has been removed from the inventory`);
      
      // Clear input
      setId('');
    } else {
      toast.error('Item not found!');
    }
  };

  const handleInputChange = (setter) => (event) => {
    const value = event.target.value;
    if (!isNaN(value) || value === '') {
      setter(value);
    }
  };

  return (
    <div>
      <h2>Remove Item</h2>
      <input type="text" value={id} onChange={handleInputChange(setId)} placeholder="Enter ID" />
      <button onClick={handleRemove}>Remove Item</button>
    </div>
  );
};

export default RemoveItem;
