import React from "react";
import ItemListContainer from "../../Components/Item/ItemList";

function Accesorios({ ropa }) {
  const productoAccesorios= ropa.filter((producto) => producto.categoria === "Accesorios");

  return (
    <div>
      <ItemListContainer productList={productoAccesorios} />
    </div>
  );
}

export default Accesorios;
