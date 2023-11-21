import React, { useContext,useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../../Coleccion/Items";
import { CarritoContext } from "../../Context/CarritoContext";
import ItemCount from "../Item/ItemCount";

import "./ItemDetails.css"; 

const ItemDetail = () => {
  const { itemId } = useParams();
  const product = getItemById(itemId); // Busca el producto con esa Id
  const { agregarProducto } = useContext(CarritoContext);
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  return (
    <div className="item-detail-container">
      <div className="item-detail-image">
      <img src={`${process.env.PUBLIC_URL}/Img/logo.png`} alt={product.producto} className="item-image" />
      </div>
      <div className="item-detail-info">
        <h2>{product.producto}</h2>
        <p>{product.descripcion}</p>
        <p>Stock disponible: {product.stock}</p>
        <h3>Precio: {product.precio}</h3>
        <ItemCount stock={product.stock} initial={1} onAdd={setSelectedQuantity} />
        <button
          onClick={() => agregarProducto((oldData) => [...oldData, product])}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
