import React, {useContext} from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { getFirestore, collection, doc,addDoc, updateDoc, writeBatch } from 'firebase/firestore'

const buttonStyle = {
    backgroundColor: "rebeccapurple",
    color: "white",
    borderRadius: "5px",
    padding: "10px",
    cursor: "pointer",
    border: "none",
    margin: "10px"
};

//Un array se debe de acceder con {array}, si no los tiene lo cuenta como objeto
const Cart = () => {

    //Desestructuramos el objeto
    const {productosCarrito, eliminarProducto} = useContext(CarritoContext)
    //productoCarrito tendra el valor del contexto de CarritoContext

    const db = getFirestore()
    const ordersCollection = collection(db,"orders")

    const crearOrden = () => {
        const orderData = {
            buyer: {
                name:"Juan",
                phone: "9511868655",
                email:"biniza@gmail.com"
            },
            items:[...productosCarrito],
            total: 2000
        }
        const orderCollection = collection (db, "orders")

        addDoc(orderCollection, orderData).then(({id}) => console.log(id))
    }

    
    return (
        <div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <h2>Cart</h2>
            </div>
            {
                productosCarrito.length > 0 ?
                productosCarrito.map((item) => {
                    return (
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <h4>{item.producto}</h4>
                            <button style={buttonStyle} onClick={() => eliminarProducto(item.id)}>
                                Eliminar del carrito
                            </button>
                        </div>
                    )
                })
                :
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    <span>Debe agregar productos al carrito</span>
                </div>
            }
            <button on onClick={crearOrden}>Comprar</button>
            <button>Actualizar Documento</button>
        </div>
    );
}


export default Cart;
