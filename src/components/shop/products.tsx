/** @format */

import React from 'react';
import ProductItem from './product-item';
import { getFirstPageProducts } from '../../../sanity/sanity-utils';

const Products = async () => {
	const products = await getFirstPageProducts();

	return (
		<div className='w-full h-full'>
			{/* products */}
			<div className='grid gap-7 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4 md:p-8 pb-10'>
				{products.map((product) => (
					<ProductItem
						key={product._id}
						image={product.imageLink}
						imageAlt={product.name + ' image alt'}
						productLink={product.productLink}
						tags={product.tags}
					/>
				))}
			</div>

			{/* pagination */}
			<div className='flex justify-center items-center space-x-4 w-full py-6 bottom-0 dark:bg-bgAccentDark bg-bgAccentLight border-t-2 dark:border-bgAccentLight border-bgAccentDark'>
				<button className='primary-button' onClick={() => console.log('back')}>
					{'< Back'}
				</button>
				<button className='primary-button' onClick={() => console.log('next')}>
					{'Next >'}
				</button>
			</div>
		</div>
	);
};

export default Products;
