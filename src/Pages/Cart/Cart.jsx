import React, {useContext} from "react";
import { CarritoContext } from "../../Context/CarritoContext";

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
        </div>
    );
}


export default Cart;
