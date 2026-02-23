const products = [
	{
		id: 1,
		name: "Ūkinis muilas",
		price: 4.99,
		discount: 10, // should be between 0 and 99%
	},
	{
		id: 2,
		name: "Skalbimo milteliai",
		price: 8.49,
	},
	{
		id: 3,
		name: "Indų ploviklis",
		price: 3.29,
		discount: 0,
	},
	{
		id: 4,
		name: "Grindų valiklis",
		price: 6.99,
		discount: 15,
	},
	{
		id: 5,
		name: "Tualetinis popierius",
		price: 5.49,
		discount: 20,
	},
	{
		id: 6,
		name: "Šampūnas",
		price: 7.99,
		discount: 0,
	},
	{
		id: 7,
		name: "Dantų pasta",
		price: 2.99,
		discount: 10,
	},
	{
		id: 8,
		name: "Vonios kambario valiklis",
		price: 4.59,
		discount: 25,
	},
	{
		id: 9,
		name: "Stiklo valiklis",
		price: 3.79,
		discount: 0,
	},
	{
		id: 10,
		name: "Skalbinių minkštiklis",
		price: 9.99,
		discount: 30,
	},
	{
		id: 11,
		name: "Virtuvės popieriniai rankšluosčiai",
		price: 4.19,
		discount: 5,
	},
];

export function ProductsList() {
	return (
		<div>
			{/* <ul>
				{products.map((product) => (
					<li>{product.name}</li>
				))}
			</ul> */}

			{products.map((product) => (
				<LiProduct
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
}

function LiProduct({ product }) {
	const discount = product.discount || 0; // 0-100;
	const discountedPrice = (product.price * (100 - discount)) / 100; //Kaina su nuolaida
	const hasDiscount = discount !== 0; //true/false

	return (
		<div className="product">
			<p>
				<b>Produktas</b> {product.name}
			</p>
			<p>
				<b>Kaina</b>{" "}
				<span className={discount ? "old-price" : ""}>
					{product.price.toFixed(2)}€
				</span>{" "}
				{/* Jei hasDiscount = true, tada atvaizduojamas toliau pateikiamas turinys */}
				{hasDiscount && (
					<span className="discounted-price">
						{discountedPrice.toFixed(2)}€
					</span>
				)}
			</p>
			{hasDiscount && (
				<p>
					<b>Nuolaida</b> <span>{`${discount}%`}</span>
				</p>
			)}
		</div>
	);
}
