/** @format */

import React, { useReducer } from 'react';
import ProductItem from './product-item';
import {
	getProductsByCategory,
	getProductsByName,
	getProductsByNameAndCat,
	getProducts,
} from '../../../sanity/sanity-utils';
import useSWR from 'swr';
import LoadingSpinner from '@/utils/loading-spinner.component';
import { searchSlice } from '@/zustand/features/searchSlice';

const pageReducer = (state = 0, action: any) => {
	switch (action.type) {
		case 'NEXT_PAGE':
			return state + 1;
		case 'PREV_PAGE':
			return state > 0 ? state - 1 : 0;
		default:
			throw new Error();
	}
};

const Products = () => {
	const [page, dispatch] = useReducer(pageReducer, 0);

	const categoryType = searchSlice((state) => state.categoryType);
	const searchTerm = searchSlice((state) => state.searchTerm);

	const fetcher = () => {
		// Only fetch using getProductsByNameAndCat when both searchTerm and categoryType are not null
		if (searchTerm && categoryType) {
			return getProductsByNameAndCat(searchTerm, categoryType);
		}
		// If categoryType is not null but searchTerm is null, fetch using getProductsByCategory
		else if (categoryType) {
			return getProductsByCategory(categoryType);
		}
		// If searchTerm is not null but categoryType is null, fetch using getProductsByName
		else if (searchTerm) {
			return getProductsByName(searchTerm);
		}
		// If both searchTerm and categoryType are null, fetch the next page of products
		else {
			return getProducts(page);
		}
	};

	const {
		data: products,
		error,
		isValidating: isLoading,
	} = useSWR(
		searchTerm && categoryType
			? `name-and-category-${searchTerm}-${categoryType}-page-${page}`
			: categoryType
			? `category-${categoryType}-page-${page}`
			: searchTerm
			? `name-${searchTerm}-page-${page}`
			: `page-${page}-products`,
		fetcher,
		{ revalidateOnFocus: false }
	);

	if (error) return <div className='text-red-600'>Failed to load</div>;
	if (isLoading) return <LoadingSpinner size='h-10 w-10' />;

	if (!products) return <div className='text-gray-600'>No Products</div>;

	return (
		<div className='w-full h-full'>
			{/* products */}
			<div className='grid gap-7 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4 md:p-8 pb-10'>
				{products?.map((product) => (
					<ProductItem
						key={product._id}
						image={product.imageLink}
						imageAlt={product.name + ' image alt'}
						productLink={product.productLink}
						tags={product.tags}
						name={product.name}
					/>
				))}
			</div>

			{/* pagination */}
			<div className='flex flex-col justify-center items-center space-y-3 dark:bg-bgAccentDark bg-bgAccentLight'>
				{products && products?.length >= 1 ? (
					<span className='text-sm'>
						Showing {products.length} of {products.length} results
					</span>
				) : (
					<span className='text-sm'>No results</span>
				)}
				<div className='space-x-4 flex'>
					{page > 0 && (
						<button
							className='primary-button flex items-center space-x-2'
							onClick={() => dispatch({ type: 'PREV_PAGE' })}
						>
							<span className='text-sm'>Back</span>
						</button>
					)}
					{products && products?.length >= 24 && (
						<button
							className='primary-button flex items-center space-x-2'
							onClick={() => dispatch({ type: 'NEXT_PAGE' })}
						>
							<span className='text-sm'>Next</span>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Products;
