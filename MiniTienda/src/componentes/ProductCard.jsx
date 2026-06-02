function ProductCard({ producto, agregarAlCarrito }) {
  return (
    <div className="product-card">
      <h2 className="product-title">{producto.nombre}</h2>
      <p className="product-description">{producto.description}</p>
      <p className="product-price">Precio: ${producto.precio}</p>
      <button className="add-to-cart" onClick={() => agregarAlCarrito(producto)}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;