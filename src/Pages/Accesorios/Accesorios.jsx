import React from "react";
import ItemListContainer from "../../Components/Item/ItemList";

function Accesorios({ ropa }) {

  return (
    <div>
      <ItemListContainer productList={ropa} />
    </div>
  );
}

export default Accesorios;
