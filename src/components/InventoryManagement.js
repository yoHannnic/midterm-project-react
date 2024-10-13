// src/InventoryManagement.js

import React, { useState } from 'react';

function InventoryManagement() {
  const [activeSection, setActiveSection] = useState('add'); // State to manage active section

  const handleButtonClick = (section) => {
    setActiveSection(section); // Update the active section
  };

  return (
    <div className="inventory-management">
      <h1>Inventory Management System</h1>
      <div className="button-container">
        <button onClick={() => handleButtonClick('add')}>Add Item</button>
        <button onClick={() => handleButtonClick('update')}>Update Item</button>
        <button onClick={() => handleButtonClick('remove')}>Remove Item</button>
      </div>

      {activeSection === 'add' && (
        <div className="add-item">
          <h2>Add Item</h2>
          <input type="text" placeholder="ID" />
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="Quantity" />
          <input type="number" placeholder="Price" />
          <select>
            <option>Clothing</option>
            <option>Electronics</option>
            <option>Entertainment</option>
          </select>
          <button>Add Item</button>
        </div>
      )}

      {activeSection === 'update' && (
        <div className="update-item">
          <h2>Update Item</h2>
          <input type="text" placeholder="ID" />
          <select>
            <option>Quantity</option>
            <option>Price</option>
          </select>
          <input type="text" placeholder="New Value" />
          <button>Update Item</button>
        </div>
      )}

      {activeSection === 'remove' && (
        <div className="remove-item">
          <h2>Remove Item</h2>
          <input type="text" placeholder="ID" />
          <button>Remove Item</button>
        </div>
      )}
    </div>
  );
}

export default InventoryManagement;
