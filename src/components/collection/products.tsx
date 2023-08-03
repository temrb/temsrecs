/** @format */
'use client';

import React from 'react';
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
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from '../navigation';

const Products = () => {
	const setPage = searchSlice((state) => state.setPage);
	const page = searchSlice((state) => state.page);

	const categoryType = searchSlice((state) => state.categoryType);
	const searchTerm = searchSlice((state) => state.searchTerm);

	const fetcher = () => {
		// Only fetch using getProductsByNameAndCat when both searchTerm and categoryType are not null
		if (searchTerm && categoryType) {
			return getProductsByNameAndCat(searchTerm, categoryType, page);
		}
		// If categoryType is not null but searchTerm is null, fetch using getProductsByCategory
		else if (categoryType) {
			return getProductsByCategory(categoryType, page);
		}
		// If searchTerm is not null but categoryType is null, fetch using getProductsByName
		else if (searchTerm) {
			return getProductsByName(searchTerm, page);
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
			? `collectionItems-name-and-category-${searchTerm}-${categoryType}-page-${page}`
			: categoryType
			? `collectionItems-category-${categoryType}-page-${page}`
			: searchTerm
			? `collectionItems-name-${searchTerm}-page-${page}`
			: `collectionItems-page-${page}-products`,
		fetcher,
		{ revalidateOnFocus: false }
	);

	return (
		<div className='w-full h-full'>
			{/* products */}
			{isLoading ? (
				<div className='flex justify-center items-center w-full h-full'>
					<LoadingSpinner size='h-12' />
				</div>
			) : error ? (
				<div className='flex justify-center items-center w-full h-full'>
					<div className='text-red-600'>Failed to load</div>
				</div>
			) : products?.length === 0 ? (
				<div className='flex justify-center items-center w-full h-full'>
					No Products 😢
				</div>
			) : (
				<>
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -30 }}
							transition={{
								duration: 0.6,
								ease: [0.165, 0.84, 0.44, 1],
							}}
							className='grid gap-7 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4 md:p-8'
						>
							{products?.map((product) => (
								<ProductItem
									key={product?._id}
									image={product?.imageLink}
									imageAlt={product?.name + ' image alt'}
									productLink={product?.productLink}
									tags={product?.tags}
									name={product?.name}
									productPrice={product?.productPrice}
								/>
							))}
						</motion.div>
					</AnimatePresence>
					{isLoading ? (
						<div className='flex'>
							<LoadingSpinner size='h-12' />
						</div>
					) : (
						<div className=' flex gap-4 items-center justify-end w-full p-6'>
							{page > 0 && (
								<button
									className='primary-button'
									onClick={() => setPage(page - 1)}
								>
									<span className='text-lg'>{'< Back'}</span>
								</button>
							)}
							{products?.length === 15 && (
								<button
									className='primary-button'
									onClick={() => setPage(page + 1)}
								>
									<span className='text-lg'>{'Next >'}</span>
								</button>
							)}
							{products?.length === 0 && (
								<span className='text-xs'>No Products 😢</span>
							)}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Products;
