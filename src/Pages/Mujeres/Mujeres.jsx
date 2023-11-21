import React from "react";
import ItemListContainer from "../../Components/Item/ItemList";

function Mujeres({ ropa }) {
  // Filtra los elementos con la categoría "Mujer"
  const productosMujer = ropa.filter((producto) => producto.categoria === "Mujeres");

  return (
    <div>
      <ItemListContainer productList={productosMujer} />
    </div>
  );
}

export default Mujeres;
