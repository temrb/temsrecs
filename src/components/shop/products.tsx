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
		if (url.startsWith('category-') && searchTerm) {
			const category = url.replace('category-', '');
			return getProductsByNameAndCat(searchTerm, category);
		} else if (url.startsWith('category-')) {
			const category = url.replace('category-', '');
			return getProductsByCategory(category);
		} else if (url.startsWith('name-')) {
			const name = url.replace('name-', '');
			return getProductsByName(name);
		} else {
			return getFirstPageProducts();
		}
	};

	const {
		data: products,
		error,
		isValidating: isLoading,
	} = useSWR(
		categoryType && searchTerm
			? `category-${categoryType}`
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

	// if (!products) return <div className='text-gray-600'>Failed to load</div>;

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
