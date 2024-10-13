import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SortItems = ({ items }) => {
  const [sortBy, setSortBy] = useState('quantity');
  const [order, setOrder] = useState('ascending');
  const [sortedItems, setSortedItems] = useState(items);

  const handleSort = () => {
    const sorted = [...items].sort((a, b) => {
      if (sortBy === 'quantity') {
        return order === 'ascending' ? a.quantity - b.quantity : b.quantity - a.quantity;
      } else {
        return order === 'ascending' ? a.price - b.price : b.price - a.price;
      }
    });
    setSortedItems(sorted);
    toast.success('Items sorted successfully!');
  };

  return (
    <div>
      <h2>Sort Items</h2>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <button onClick={handleSort}>Sort Items</button>
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
          {sortedItems.length > 0 ? (
            sortedItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No items found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SortItems;
