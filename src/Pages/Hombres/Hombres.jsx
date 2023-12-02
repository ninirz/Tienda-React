import React from "react";
import ItemListContainer from "../../Components/Item/ItemList";

function Hombres({ ropa }) {

  return (
    <div>
      <ItemListContainer productList={ropa} />
    </div>
  );
}

export default Hombres;
