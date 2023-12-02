import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//Pages
import Home from './Pages/Home/Home';
import Mujeres from './Pages/Mujeres/Mujeres';
import Hombres from './Pages/Hombres/Hombres';
import Cart from './Pages/Cart/Cart';

//Componentes
import NavBar from './Components/NavBar/NavBar';
import Item from './Components/Item/Item';
import ItemDetail from './Components/ItemsDetails/ItemDetails';
import { CarritoContext } from './Context/CarritoContext';
import { CarritoProvider } from './Context/CarritoContext';
import Accesorios from './Pages/Accesorios/Accesorios';

function App() {
  return (
    <div className="App">

      <BrowserRouter className="App">
        <NavBar/> 
        <CarritoProvider>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/mujeres' element={<Mujeres/>}/>
            <Route path='/hombres' element={<Hombres/>}/>
            <Route path='/accesorios' element={<Accesorios/>}/>
              <Route 
                path='/mujeres/:itemId' 
                element={<ItemDetail/>}/>
              <Route
                path='/cart'
                element={
                  <Cart/>
                }
              />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
