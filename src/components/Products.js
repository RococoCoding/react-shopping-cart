import React from 'react';

import { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext';

// Components
import Product from './Product';

const Products = () => {
	const {products} = useContext(ProductContext);
	if (!products) {
		return (<div>loading...<Product /></div>)
	}
	return (
		<div className="products-container">
			
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default Products;
