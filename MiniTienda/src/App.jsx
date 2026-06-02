import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import { useState, useEffect } from 'react';
import ProductList from "./componentes/ProductList";


const productos = [
  {
    id: 1,
    nombre: "Microsoft Surface Laptop 5",
    precio: 1200,
    description: "Procesador Intel Core i7, 16 GB de RAM, 512 GB de SSD",
    
  },
  {
    id: 2,
    nombre: "HP OMEN 16",
    precio: 1500,
    description: "Procesador Intel Core i7, 16 GB de RAM, 512 GB de SSD",
    
  },
  {
    id: 3,
    nombre: "Acer Nitro 5",
    precio: 1200,
    description: "Procesador Intel Core i7, 16 GB de RAM, 512 GB de SSD",
    
  }, 
  {
    id: 4,
    nombre: "Dell XPS 15",
    precio: 1800,
    description: "Procesador Intel Core i7, 16 GB de RAM, 512 GB de SSD",
    
  },
  {
    id: 5,
    nombre: "Lenovo ThinkPad X1 Carbon",
    precio: 1600,
    description: "Procesador Intel Core i7, 16 GB de RAM, 512 GB de SSD",
    
  },
  {
    id: 6,
    nombre: "Apple MacBook Pro",
    precio: 1900,
    description: "Procesador Intel Core i7, 16 GB de RAM, 512 GB de SSD",
  }
];


function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };


  return (
    <div className="app">
      <Header />
      <p className="carrito">Carrito: {carrito.map(item => item.nombre + ", " )}</p>
      <p className="total">Total: {carrito.reduce((total, item) => total + item.precio, 0)}</p>
      <main className="main">
        <ProductList productos={productos} agregarAlCarrito={agregarAlCarrito}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;