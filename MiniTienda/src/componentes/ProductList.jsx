import ProductCard from "./ProductCard";

function ProductList({productos, agregarAlCarrito}) {
  return (
    <div className="product-list-container">
      {productos.map((producto) => (
        <ProductCard 
          key={producto.id} 
          producto={producto} 
          agregarAlCarrito={agregarAlCarrito} 
        />
      ))}
    </div>
  );
}

export default ProductList;