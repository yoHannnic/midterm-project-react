import React, { useState } from 'react';

const DisplayByCategory = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState('Clothing');
  const categories = ['Clothing', 'Electronics', 'Entertainment'];

  const filteredItems = items.filter(item => item.category === selectedCategory);

  return (
    <div className="form-container">
      <h2>Display Items by Category</h2>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No items found in this category.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayByCategory;
