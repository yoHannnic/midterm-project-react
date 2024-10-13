import React, { useState } from 'react';
import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';
import RemoveItem from './components/RemoveItem';
import DisplayByCategory from './components/DisplayByCategory';
import DisplayAllItems from './components/DisplayAllItems';
import SearchItem from './components/SearchItem';
import SortItems from './components/SortItems';
import DisplayLowStock from './components/DisplayLowStock';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';

function App() {
  const [items, setItems] = useState([]);
  const [activeSection, setActiveSection] = useState('add');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
    toast.success("Item added successfully!");
  };

  const handleUpdateItem = (updatedItem) => {
    const updatedItems = items.map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
    toast.info("Item updated successfully!");
  };

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    if (updatedItems.length < items.length) {
      setItems(updatedItems);
      toast.error("Item successfully deleted!");
    } else {
      toast.error("Item not found!");
    }
  };

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <h1>Inventory Management System</h1>
      <div className="button-container">
        <button onClick={() => handleButtonClick('add')}>Add Item</button>
        <button onClick={() => handleButtonClick('update')}>Update Item</button>
        <button onClick={() => handleButtonClick('remove')}>Remove Item</button>
        <button onClick={() => handleButtonClick('displayByCategory')}>Display By Category</button>
        <button onClick={() => handleButtonClick('displayAll')}>Display All Items</button>
        <button onClick={() => handleButtonClick('search')}>Search Item</button>
        <button onClick={() => handleButtonClick('sort')}>Sort Items</button>
        <button onClick={() => handleButtonClick('displayLowStock')}>Display Low Stock</button>
      </div>

      {/* Conditionally render the component based on the active section */}
      {activeSection === 'add' && <AddItem onAddItem={handleAddItem} />}
      {activeSection === 'update' && <UpdateItem items={items} onUpdateItem={handleUpdateItem} />}
      {activeSection === 'remove' && <RemoveItem items={items} onRemoveItem={handleRemoveItem} />}
      {activeSection === 'displayByCategory' && <DisplayByCategory items={items} />}
      {activeSection === 'displayAll' && <DisplayAllItems items={items} />}
      {activeSection === 'search' && <SearchItem items={items} />}
      {activeSection === 'sort' && <SortItems items={items} />}
      {activeSection === 'displayLowStock' && <DisplayLowStock items={items} />}

      <ToastContainer />
    </div>
  );
}

export default App;
