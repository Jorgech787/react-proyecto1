import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './components/Inicio';
import Menu from './components/Menu';
import Contactos from './components/Contactos';
import Navbarprim from './layouts/Navbarprim';
import Creditos from './components/Creditos';
import Footer from './layouts/Footer';
import Socios from './components/Socios';
import Videos from './components/Videos';


function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbarprim/>}>
              <Route index element={<Home/>}/>
              <Route path='Menu' element={<Menu/>}/>
              <Route path='Videos' element={<Videos/>}/>
              <Route path='Contactos' element={<Contactos/>}/>
              <Route path='Creditos' element={<Creditos/>}/>
              <Route path='Socios' element={<Socios/>}/>

              <Route path='*' element={<Navigate replace to="/"/>}/>

            </Route>
        </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}
export default App;
