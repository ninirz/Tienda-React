import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { productos } from './Coleccion/Items';

//Pages
import Home from './Pages/Home/Home';
import Mujeres from './Pages/Mujeres/Mujeres';
import Hombres from './Pages/Hombres/Hombres';

//Componentes
import NavBar from './Components/NavBar/NavBar';
import Item from './Components/Item/Item';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mujeres' element={<Mujeres ropa={productos}/>}/>
          <Route path='/mujeres/:itemId' element={<Item/>}/>
          <Route path='/hombres' element={<Mujeres ropa={productos}/>}/>
          <Route path='/hombres/:itemId' element={<Item/>}/>
          {/* <Route path='/cart' element={<Mujeres />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
