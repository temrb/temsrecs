/** @format */

import React, { useCallback } from 'react';
import ProductItem from './product-item';
import {
	getProductsByCategory,
	getFirstPageProducts,
	getProductsByName,
	getProductsByNameAndCat,
} from '../../../sanity/sanity-utils';
import useSWR from 'swr';
import LoadingSpinner from '@/utils/loading-spinner.component';
import { ArrowDownNarrowWide } from 'lucide-react';
import { searchSlice } from '@/zustand/features/searchSlice';

const Products = () => {
	const categoryType = searchSlice((state) => state.categoryType);

	const searchTerm = searchSlice((state) => state.searchTerm);

	const fetcher = (url: string) => {
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
		// If both searchTerm and categoryType are null, fetch the first page products
		else {
			return getFirstPageProducts();
		}
	};

	const {
		data: products,
		error,
		isValidating: isLoading,
	} = useSWR(
		searchTerm && categoryType
			? `name-and-category-${searchTerm}-${categoryType}`
			: categoryType
			? `category-${categoryType}`
			: searchTerm
			? `name-${searchTerm}`
			: 'first-page-products',
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

			{products && products.length > 24 && (
				<div className='flex justify-center items-center w-full py-6 bottom-0 dark:bg-bgAccentDark bg-bgAccentLight'>
					<button
						className='primary-button flex items-center space-x-2'
						onClick={() => console.log('More')}
					>
						<ArrowDownNarrowWide className='h-6 w-6' />
						<span>More</span>
					</button>
				</div>
			)}
		</div>
	);
};

export default Products;
