// Item.jsx
import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <div className="item-card">
      <img src={`./Img/logo.png`} alt={item.producto} className="item-image" />
      <div className="item-details">
        <h3>{item.producto}</h3>
        <p>{item.descripcion}</p>
        <p>Stock disponible: {item.stock}</p>
        <Link to={`/mujeres/${item.id}`}>
          <button className="details-button">Ver más detalles</button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
