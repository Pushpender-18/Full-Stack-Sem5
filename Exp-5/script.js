const products = [];

function addProduct() {
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('category').value;
    const quantity = document.getElementById('quantity').value;

    if (id && name && price && category) {
        const product = {id, name, price, category, quantity: quantity};
        products.push(product);
        displayProducts();
        document.getElementById('id').value = '';
        document.getElementById('name').value = '';
        document.getElementById('price').value = '';
        document.getElementById('category').value = ''; 
        document.getElementById('quantity').value = '';
        alert('Product added successfully');
    } else {
        alert('Please fill in all fields');
    }
}

function displayProducts() {
    const productList = document.getElementById('productTable');
    productList.innerHTML = '';

    const headerRow = document.createElement('thead');
    headerRow.innerHTML = `
        <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
            <th>Product Category</th>
        </tr>`;
    productList.appendChild(headerRow);

    products.forEach((product) => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${product.id}</td> 
            <td>${product.name}</td>
            <td>${product.price}</td>  
            <td>${product.quantity}</td>  
            <td>${product.category}</td>  
            `; 

        productList.appendChild(tr);
    });

	getCategoryDropdown();
}

function filterByCategory() {
	const category = document.getElementById('categoryDropdown').value;
	const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);

	const productList = document.getElementById('productTable');
	productList.innerHTML = '';

	const headerRow = document.createElement('thead');
	headerRow.innerHTML = `
		<tr>
			<th>Product ID</th>
			<th>Product Name</th>
			<th>Product Price</th>
			<th>Product Quantity</th>
			<th>Product Category</th>
		</tr>`;
	productList.appendChild(headerRow);

	filteredProducts.forEach((product) => {
		const tr = document.createElement('tr');
		
		tr.innerHTML = `
			<td>${product.id}</td> 
			<td>${product.name}</td>
			<td>${product.price}</td>  
			<td>${product.quantity}</td>  
			<td>${product.category}</td>  
			`; 

		productList.appendChild(tr);
	});
}

function getCategoryDropdown() {
	const uniqueCategories = [...new Set(products.map(product => product.category))];

	const categoryDropdown = document.getElementById('categoryDropdown');
	categoryDropdown.innerHTML = '<option value="all">All</option>';
	uniqueCategories.forEach(category => {
		const option = document.createElement('option');
		option.value = category;
		option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
		categoryDropdown.appendChild(option);
	});
}

getCategoryDropdown();
displayProducts();


