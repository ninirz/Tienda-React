import { createContext,useState} from "react";
import { useEffect } from "react";

export const CarritoContext = createContext() //Crear contexto
export const CarritoProvider = ({children}) => { //Children son todos los elementos que los pasemos en los {}
    const [cart,setCart] = useState([])

    useEffect(() => {
        console.log("Nuestro Carrito: ")
        console.log(cart)
      }, [cart])
    
      const eliminarProducto = (id) => {
        const nuevoCarrito = cart.filter((producto) =>producto.id !== id)
        setCart(nuevoCarrito)
      }
    
    return (
        <CarritoContext.Provider value={{productosCarrito: cart, agregarProducto:setCart, eliminarProducto}}> {/*Todos los que esten dentro tendran acceso a la info del carrito*/}
            {children}
        </CarritoContext.Provider>
    )
}