const productsFromServer = [
	{
		title: "Organic Whole Grain Oats",
		price: 8.99,
		unit: "1kg Pack",
		discount: 15,
		img: "images/products/1.jpg",
		category: "Healthy Foods",
	},
	{
		title: "Fresh Farm Eggs",
		price: 4.49,
		unit: "12 pcs",
		discount: 0,
		img: "images/products/2.jpg",
		category: "Healthy Foods",
	},
	{
		title: "Extra Virgin Olive Oil",
		price: 12.99,
		unit: "500ml Bottle",
		discount: 20,
		img: "images/products/3.jpg",
		category: "Healthy Foods",
	},
	{
		title: "Organic Honey",
		price: 9.99,
		unit: "350g Jar",
		discount: 5,
		img: "images/products/4.jpg",
		category: "Healthy Foods",
	},
	{
		title: "Almond Butter",
		price: 11.49,
		unit: "250g Jar",
		discount: 10,
		img: "images/products/5.jpg",
		category: "Diet Foods",
	},
	{
		title: "Greek Yogurt",
		price: 3.99,
		unit: "500g Pack",
		discount: 0,
		img: "images/products/6.jpg",
		category: "Frozen Foods",
	},
	{
		title: "Quinoa Seeds",
		price: 7.99,
		unit: "400g Pack",
		discount: 25,
		img: "images/products/7.jpg",
		category: "Diet Foods",
	},
	{
		title: "Dark Chocolate Bar",
		price: 5.49,
		unit: "100g Bar",
		discount: 0,
		img: "images/products/8.jpg",
		category: "Frozen Foods",
	},
	{
		title: "Green Tea Collection",
		price: 6.99,
		unit: "20 Tea Bags",
		discount: 15,
		img: "images/products/9.jpg",
		category: "Vitamin Items",
	},
	{
		title: "Coconut Milk",
		price: 2.99,
		unit: "400ml Can",
		discount: 10,
		img: "images/products/10.jpg",
		category: "Diet Foods",
	},
	{
		title: "Organic Pasta",
		price: 4.29,
		unit: "500g Pack",
		discount: 5,
		img: "images/products/11.jpg",
		category: "Frozen Foods",
	},
	{
		title: "Mixed Nuts & Dried Fruits",
		price: 14.99,
		unit: "300g Pack",
		discount: 20,
		img: "images/products/12.jpg",
		category: "Vitamin Items",
	},
];

function createProductHtml(product) {
	return `<div class="product-card">
						<div class="image-container">
							<img
								class="product-image"
								src="${product.img}"
							/>
							<div class="menu-bar">
								<div class="icon-spot"><i class="fa-regular fa-heart"></i></div>
								<div class="icon-spot"><i class="fa-solid fa-rotate"></i></div>
								<div class="icon-spot"><i class="fa-regular fa-eye"></i></div>
							</div>
						</div>
						<h4>${product.title}</h4>
						<span class="pack-volume">${product.unit}</span>
						<div class="price">
							<span class="discounted-price">$${product.price}</span>
							<s class="old-price">$${product.price}</s>
						</div>
						<div class="card-bottom">
							<input
								type="number"
								value="1"
							/>
							<button class="add-to-cart">
								Add <i class="fa-solid fa-cart-arrow-down"></i>
							</button>
						</div>
					</div>`;
}
const allProductsContainer = document.querySelector(
	"#section-5 > .container > .items-grid",
);
function renderAllProducts(products) {
	const eachProductHtml = products.map((product) => createProductHtml(product));
	const fullHtml = eachProductHtml.join("");
	allProductsContainer.innerHTML = fullHtml;
}

renderAllProducts(productsFromServer);
