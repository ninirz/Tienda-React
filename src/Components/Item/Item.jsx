// Item.jsx
import React from 'react';
import './Item.css';

function Item({ item }) {
  return (
    <div className="item-card">
      <img src={`./Img/logo.png`} alt={item.producto} className="item-image" />
      <div className="item-details">
        <h3>{item.producto}</h3>
        <p>{item.descripcion}</p>
        <p>Stock disponible: {item.stock}</p>
        <button className="details-button" onClick={() => console.log(`Ver detalles de ${item.producto}`)}>
          Ver detalles del producto
        </button>
      </div>
    </div>
  );
}

export default Item;
