import React from "react";
import ItemListContainer from "../../Components/Item/ItemList";

function Hombres({ ropa }) {
  const productosHombre= ropa.filter((producto) => producto.categoria === "Hombres");

  return (
    <div>
      <ItemListContainer productList={productosHombre} />
    </div>
  );
}

export default Hombres;
