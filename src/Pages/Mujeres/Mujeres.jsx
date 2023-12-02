import React from "react";
import ItemListContainer from "../../Components/Item/ItemList";

function Mujeres({ ropa }) {
  // Filtra los elementos con la categoría "Mujer"

  return (
    <div>
      <ItemListContainer productList={ropa} />
    </div>
  );
}

export default Mujeres;
