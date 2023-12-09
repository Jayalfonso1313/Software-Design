import React, { useState } from 'react';

const AdminInventory = () => {
  const [inventory, setInventory] = useState([
    { id: '1', name: 'Coffee Beans', quantity: 100 },
    { id: '2', name: 'Milk', quantity: 50 },
    { id: '3', name: 'Sugar', quantity: 30 },
    // Add more items as needed
  ]);

  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const addItem = () => {
    if (newItemName && newItemQuantity) {
      const existingItemIndex = inventory.findIndex(
        (item) => item.name.toLowerCase() === newItemName.toLowerCase()
      );


      if (existingItemIndex !== -1) {
        setInventory((prevInventory) => {
          const updatedInventory = [...prevInventory];
          updatedInventory[existingItemIndex].quantity += parseInt(newItemQuantity);
          return updatedInventory;
        });
      } else {
        setInventory((prevInventory) => [
          ...prevInventory,
          {
            id: (prevInventory.length + 1).toString(),
            name: newItemName,
            quantity: parseInt(newItemQuantity),
          },
        ]);
      }


      setNewItemName('');
      setNewItemQuantity('');
    }
  };


  const deleteItem = (itemId) => {
    setInventory((prevInventory) => prevInventory.filter((item) => item.id !== itemId));
    setSelectedItem(null); // Reset selected item after deletion
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover p-4 bg-background-admininventory">
      <div className="flex flex-col items-center w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Coffee Shop Inventory</h1>

        <div className="bg-white/50 p-4 rounded-lg shadow-md mb-4">
          <input
            className="border border-gray-400 p-2 rounded mb-2 w-full"
            placeholder="Item Name"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
          <input
            className="border border-gray-400 p-2 rounded mb-2 w-full"
            type="number"
            placeholder="Quantity"
            value={newItemQuantity}
            onChange={(e) => setNewItemQuantity(e.target.value)}
          />
          <button className="bg-[#806517] text-white px-4 py-2 rounded w-full" onClick={addItem}>
            Add Item
          </button>
        </div>

        <div className="bg-white/50 p-4 rounded-lg shadow-md w-full">
          <div className="flex mb-3">
            <div className="flex-1 font-bold">Item Name</div>
            <div className="flex-1 font-bold">Quantity</div>
          </div>

          {inventory.map((item) => (
            <div
              key={item.id}
              className={`flex items-center mb-2 p-2 rounded ${selectedItem === item.id ? 'bg-gray-200' : ''}`}
              onClick={() => setSelectedItem(item.id === selectedItem ? null : item.id)}
            >
              <div className="flex-1">{item.name}</div>
              <div className="flex-1">{item.quantity}</div>
              {selectedItem === item.id && (
                <button className="bg-brown-600 text-black px-2 py-1 rounded ml-2" onClick={() => deleteItem(item.id)}>
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminInventory;
