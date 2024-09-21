import React from 'react';

const Menu = () => {
  const items = [
    { name: 'Pasta', description: 'Italian pasta', price: '$12' },
    { name: 'Pizza', description: 'Wood-fired pizza', price: '$15' },
  ];

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>{item.description} - {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
