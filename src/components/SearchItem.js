import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SearchItem = ({ items }) => {
  const [id, setId] = useState('');
  const [itemFound, setItemFound] = useState(null);

  const handleSearch = () => {
    const idNumber = parseInt(id, 10);
    const item = items.find(item => item.id === idNumber);

    if (item) {
      setItemFound(item);
      toast.success('Item found!');
    } else {
      setItemFound(null);
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
      <h2>Search Item</h2>
      <input type="text" value={id} onChange={handleInputChange(setId)} placeholder="Enter ID" />
      <button onClick={handleSearch}>Search</button>
      {itemFound && (
        <div>
          <p>ID: {itemFound.id}</p>
          <p>Name: {itemFound.name}</p>
          <p>Quantity: {itemFound.quantity}</p>
          <p>Price: ${itemFound.price}</p>
          <p>Category: {itemFound.category}</p>
        </div>
      )}
    </div>
  );
};

export default SearchItem;
