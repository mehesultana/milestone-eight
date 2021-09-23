import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		console.log('product API called');
		fetch('./products.JSON')
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				console.log('products received');
			});
	}, []);

	useEffect(() => {
		console.log('local storage callled');
		if (products.length) {
			const savedCart = getStoredCart();
			// console.log(savedCart);
			const storedCart = [];
			for (const key in savedCart) {
				// console.log(key);
				const addedProduct = products.find((product) => product.key === key);
				// console.log(addedProduct);
				storedCart.push(addedProduct);
			}
			setCart(storedCart);
		}
	}, [products]);

	const handleAddToCart = (product) => {
		const newCart = [...cart, product];
		setCart(newCart);
		//save to local storage (for now)
		addToDb(product.key);
	};

	return (
		<div className="shop-container">
			<div className="product-container">
				{products.map((product) => (
					<Product key={product.key} product={product} handleAddToCart={handleAddToCart}></Product>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
