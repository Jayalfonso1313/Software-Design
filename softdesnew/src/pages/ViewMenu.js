import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewMenu = ({ name }) => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const navigate = useNavigate();

  const coffeeMenu = [
    {
      id: 1,
      name: 'Long Black',
      prices: { S: 50, M: 60, L: 70 },
      sizes: ['S', 'M', 'L'],
      image: require('../assets/LongBlack.png')
    },
    {
      id: 2,
      name: 'Cafe Latte',
      prices: { S: 69, M: 79, L: 89 },
      sizes: ['S', 'M', 'L'],
      image: require('../assets/CafeLatte.jpg')
    },
    {
      id: 3,
      name: 'Cappuccino',
      prices: { S: 75, M: 85, L: 95 },
      sizes: ['S', 'M', 'L'],
      image: require('../assets/Cappuccino.jpg')
    },
    {
      id: 4,
      name: 'Spanish Latte',
      prices: { S: 79, M: 89, L: 99 },
      sizes: ['S', 'M', 'L'],
      image: require('../assets/SpanishLatte.jpg')
    },
    {
      id: 5,
      name: 'Dark Mocha',
      prices: { S: 80, M: 95, L: 110 },
      sizes: ['S', 'M', 'L'],
      image: require('../assets/DarkMocha.jpg')
    },
    {
      id: 6,
      name: 'French Vanilla',
      prices: { S: 75, M: 95, L: 120 },
      sizes: ['S', 'M', 'L'],
      image: require('../assets/FrenchVanilla.jpg')
    },
    {
      id: 7,
      name: 'Caramel Macchiato',
      prices: { S: 75, M: 95, L: 120 },
      sizes: ['S', 'M', 'L'],
      image: require('../assets/CaramelMacchiato.jpg')
    },
    {
      id: 8,
      name: 'Hazelnut Macchiato',
      prices: { S: 75, M: 95, L: 120 },
      sizes: ['S', 'M', 'L'],
      image: require('../assets/HazelnutMacchiato.jpg')
    },
  ];

  const addToCart = (item, quantity, size) => {
    const cartItemId = `${item.id}-${size}`;
    const existingItem = cart.find((cartItem) => cartItem.cartItemId === cartItemId);

    if (existingItem) {
      setCart(cart.map((cartItem) =>
        cartItem.cartItemId === cartItemId
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity, size, cartItemId }]);
    }
    setIsCartVisible(true);
  };

  const removeFromCart = (cartItemId) => {
    setCart(cart.filter((item) => item.cartItemId !== cartItemId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.prices[item.size] * item.quantity, 0).toFixed(2);
  };

  const renderOrderStatus = () => {
    navigate('/order-status', { state: { name, total: calculateTotal(), itemsOrdered: cart } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-fit-y bg-background-viewmenu">
      <div className="text-center">
        <p>Welcome Customer, {name}😊!</p>
        <p>Here are our Menu 👉☕👈, Enjoy your Coffee and Tea 😘</p>
      </div>
      <div>
        {coffeeMenu.map((item) => (
          <div key={item.id} className="my-2.5 p-12 rounded-lg bg-white/10 backdrop-blur-sm shadow-xl flex flex-col items-center">
            <img src={item.image} className="w-60 rounded-lg mb-2.5" alt={item.name} />
            <p>{item.name} - ₱{item.prices['S'].toFixed(2)}</p>
            {/* Add size and quantity selection here */}
            <button onClick={() => addToCart(item, 1, 'S')} className="bg-[#C19A6B] text-white py-1 px-3 rounded-md">Add to Cart</button>
          </div>
        ))}
      </div>
      {isCartVisible && (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <p>Your Cart:</p>
            {cart.map((item) => (
              <div key={item.cartItemId} className="flex justify-between items-center my-2.5 p-3.5 rounded-lg bg-white shadow-md">
                <p>{item.name} - ₱{item.prices[item.size].toFixed(2)} (Size: {item.size}, Qty: {item.quantity})</p>
                <button onClick={() => removeFromCart(item.cartItemId)} className="bg-[#C19A6B] text-white py-1 px-3 rounded-md">Remove</button>
              </div>
            ))}
            <div>
              <p>Total: ₱{calculateTotal()}</p>
            </div>
            <div className="flex justify-around mt-5">
              <button className="bg-[#FFE5B4] py-2 px-4 rounded-lg" onClick={() => setIsCartVisible(!isCartVisible)}>Back</button>
              <button className="bg-[#C19A6B] py-2 px-4 rounded-lg" onClick={renderOrderStatus}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewMenu;
