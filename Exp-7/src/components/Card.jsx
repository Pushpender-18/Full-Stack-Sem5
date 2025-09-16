export default function Card({ product }) {
  return (
	<div className="card">
	  <h2>{product.name}</h2>
	  <p>Price: ${product.price}</p>
	  <p>Status: {product.status}</p>
	</div>
  );
}