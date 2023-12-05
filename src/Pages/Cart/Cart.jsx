import React, {useContext, useState} from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { getFirestore, collection, doc,addDoc, updateDoc, writeBatch } from 'firebase/firestore'
import { Placeholder } from "react-bootstrap";

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
    const [nombre,setNombre] = useState("Biniza")
    const [email,setEmail] = useState("binizacruuiz@gmail.com")
    const [numero,setNumero] = useState(9511868655)
    const db = getFirestore()
    const ordersCollection = collection(db,"orders")

    const crearOrden = () => {
        const total = productosCarrito.reduce((acum,item) => acum + item.precio,0)
        const orderData = {
            buyer: {
                name: nombre,
                phone: numero,
                email:email
            },
            items:[...productosCarrito],
            total: total
        }
        const orderCollection = collection (db, "orders")

        addDoc(orderCollection, orderData).then(({id}) => console.log(id))
    }

    const actualizarOrdenPorLotes = () => {
        const total = productosCarrito.reduce((acum,item) => acum + item.precio,0)
        const Documento1 = doc(ordersCollection, "5fNK5bLgkPjva2g1uWNY")
        const batch = writeBatch(db)

        batch.set(Documento1, 
            {buyer: {
                name: nombre,
                numero:numero,
                email: email
            },
            items:[...productosCarrito],
            total: total
        })
        
        batch.commit()
    }

    
    return (
        <div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <h2>Cart</h2>
                <h2>
                    <input type={"text"} onChange={(e) =>setNombre(e.target.value)} placeholder='Nombre'></input>
                </h2>
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
            <button on onClick={actualizarOrdenPorLotes}>Actualizar Documento</button>
        </div>
    );
}


export default Cart;
