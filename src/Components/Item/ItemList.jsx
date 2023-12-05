import React, { useEffect, useState } from 'react';
import "./Item.css"
import Item from './Item';
import { getFirestore, collection, getDocs,query,where } from 'firebase/firestore'

function ItemListContainer({productList}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const myquery= query(collection(db,"items"),where("precio","<",1000))
        const itemCollection = collection(db, productList);
        const querySnapshot = await getDocs(itemCollection);

        // Mapear los documentos a los datos y actualizar el estado
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(data);

        setLoading(false); 
      } catch (error) {
        console.error("Error al obtener datos:", error);
        setLoading(false); 
      }
  };

    fetchData();
  }, []);

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
