import { useState, useEffect } from "react";
import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import CountProducts from './components/CountProducts';
import CountCategories from './components/CountCategories';
import CountUsers from './components/CountUsers';
import LastData from './components/LastData';
import Categories from './components/Categories';
import ListProducts from './components/ListProducts';
import Footer from './components/Footer';

function App() {

  const [ultimoUsuario, setUltimoUsuario] = useState([]);
  const [ultimoProducto, setUltimoProducto] = useState([]);

  useEffect(() => {
		fetch("http://localhost:3001/countUsers")
		.then(response => response.json())
		.then(data => {
			setUltimoUsuario(data.users[data.users.length - 1])
		})
    fetch("http://localhost:3001/countProducts")
		.then(response => response.json())
		.then(data => {
			setUltimoProducto(data.products[data.products.length - 1])
			console.log(data.products[data.products.length - 1]);
		})
	}, [])

  return (
    <div className="App">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
						    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
              </div>
              <div className="row">
                <CountProducts />
                <CountCategories />
                <CountUsers />
              </div>
              <div className="row">
                <LastData nombre = "producto" ultimoNombre = {ultimoProducto.nombre} descripcion = {ultimoProducto.descripcion} precio = {ultimoProducto.precio} imagen = {ultimoProducto.imagen} carpeta = "products" noMostrar/>
                <LastData nombre = "usuario" ultimoNombre = {ultimoUsuario.nombre} apellido = {ultimoUsuario.apellido} fecha = {ultimoUsuario.fecha_nacimiento} imagen = {ultimoUsuario.avatar} carpeta = "avatars" noMostrarProducto/>
                <Categories />
                <ListProducts />
              </div>
					  </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
