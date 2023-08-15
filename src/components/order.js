import React, { useState } from 'react';

const Order = () => {
  const [foods, setFoods] = useState([
    { id: 1, name: 'Burger', description: 'Delicious burger', price: 8 },
    { id: 2, name: 'Pizza', description: 'Tasty pizza', price: 12 },
    { id: 3, name: 'Salad', description: 'Healthy salad', price: 6 },
    // ... add more food items
  ]);

  const [selectedFood, setSelectedFood] = useState(null);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [comments, setComments] = useState('');
  const [basket, setBasket] = useState([]);

  const openPopup = (food) => {
    setSelectedFood(food);
    setOrderQuantity(1);
    setComments('');
  };
  const closePopup = () => {
    setSelectedFood(null);
  };

  const addToBasket = () => {
    const newOrder = {
      food: selectedFood,
      quantity: orderQuantity,
      comments: comments,
    };
    setBasket([...basket, newOrder]);
    setSelectedFood(null);
  };

  return (
    <div className="order-online">
      <h1 className='page-title'>Order Online</h1>
      <div className="food-list">
        {foods.map((food) => (
          <div key={food.id} className="food-box" onClick={() => openPopup(food)}>
            <h3>{food.name}</h3>
            <p>{food.description}</p>
            <p>${food.price}</p>
          </div>
        ))}
      </div>
      {selectedFood && (
        <div className="popup">
          <div className="popup-content">
            <div className="close-button">
              <button onClick={closePopup}>
                X
              </button>
            </div>
            <h3>{selectedFood.name}</h3>
            <p>{selectedFood.description}</p>
            <p>Price: ${selectedFood.price}</p>
            <label>Quantity:</label>
            <input
              type="number"
              value={orderQuantity}
              onChange={(e) => setOrderQuantity(parseInt(e.target.value))}
              min="1"
            />
            <label>Comments:</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows="3"
            ></textarea>
            <button className="checkout-button" onClick={addToBasket}>Add to Basket</button>
          </div>
        </div>
      )}
      <div className="basket">
        <h3>Your Basket</h3>
        <ul>
          {basket.map((order, index) => (
            <li key={index}>
              {order.food.name} - {order.quantity}x
            </li>
          ))}
        </ul>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Order;