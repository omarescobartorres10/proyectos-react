function ProductCard() {
  return (
    <div className="product-card">
      <h2 className="product-title">Producto 1</h2>
      <p className="product-description">Descripción del producto 1</p>
      <p className="product-price">Precio: $10</p>
      <button className="add-to-cart">Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;