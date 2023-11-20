// ItemList.jsx
import React, { useEffect, useState } from 'react';
import Item from './Item';
import "./Item.css"

function ItemListContainer({ productList }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setItems(productList);
        setLoading(false);
      }, 3000);
    };

    fetchData();
  }, [productList]);

  return (
    <div className="card-container">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="item-list">
          {items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;
