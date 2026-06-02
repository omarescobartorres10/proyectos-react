import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import ProductCard from "./componentes/ProductCard";
import ProductList from "./componentes/ProductList";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default App;