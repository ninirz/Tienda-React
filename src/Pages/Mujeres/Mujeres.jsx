import React from "react";
import ItemListContainer from "../../Components/Item/ItemList";

function Mujeres({ ropa }) {

  return (
    <div>
      <ItemListContainer productList={ropa} />
    </div>
  );
}

export default Mujeres;
