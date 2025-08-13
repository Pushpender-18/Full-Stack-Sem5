const products = {"T-shirt" : "clothings", "Jeans" : "clothings", "Headphones" : "electronics", "Smartphone" : "electronics", "Novel" : "books", "Cookbook" : "books"};

function productFilter(filter) {
	const filteredProducts = Object.entries(products).filter(([name, category]) => {
		return filter === "all" || category === filter;
	});
	return filteredProducts;
}

function updateItemsValue() {
	const itemsValue = document.getElementById("items");

	itemsValue.innerHTML = "";
	let products = productFilter(document.getElementById("filter").value);
	products.forEach(([name, category]) => {
		const item = document.createElement("div");
		item.className = "item";
		item.innerHTML = `${name}`;
		itemsValue.appendChild(item);
	});
}