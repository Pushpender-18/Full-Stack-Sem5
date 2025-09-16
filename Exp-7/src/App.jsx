import Card from "./components/Card";

function App() {
  const products = [
    { name: "Wireless Mouse", price: 25.99, status: "In Stock" },
    { name: "Keyboard", price: 45.5, status: "Out of Stock" },
    { name: "Monitor", price: 199.99, status: "In Stock" }
  ];

  return (
    <>
    <h1>Product List</h1>
    <div className="cards">
      {products.map((product, index) => (
        <Card product={product} />
      ))}
    </div>
    </>
  )
}

export default App
