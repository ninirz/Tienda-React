import { getFirestore, collection, getDocs } from 'firebase/firestore';

export async function getItemById(id) {
  try {
    const db = getFirestore();
    const itemCollection = collection(db,"items");
    const querySnapshot = await getDocs(itemCollection);

    // Mapear los documentos a los datos y devolver el elemento con el ID correspondiente
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data.find((item) => item.id === id);
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return null;
  }
}
