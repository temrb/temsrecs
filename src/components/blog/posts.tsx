/** @format */
'use client';

import React from 'react';
import PostItem from './post-item';
import { getBlogPosts } from '../../../sanity/sanity-utils';
import useSWR from 'swr';
import LoadingSpinner from '@/utils/loading-spinner.component';
import { searchSlice } from '@/zustand/features/searchSlice';
import { AnimatePresence, motion } from 'framer-motion';

const Posts = () => {
	const setPage = searchSlice((state) => state.setPage);
	const page = searchSlice((state) => state.page);

	const categoryType = searchSlice((state) => state.categoryType);
	const searchTerm = searchSlice((state) => state.searchTerm);

	const fetcher = () => {
		return getBlogPosts(page);
	};

	const {
		data: posts,
		error,
		isValidating: isLoading,
	} = useSWR(
		searchTerm && categoryType
			? `blogPosts-name-and-category-${searchTerm}-${categoryType}-page-${page}`
			: categoryType
			? `blogPosts-category-${categoryType}-page-${page}`
			: searchTerm
			? `blogPosts-name-${searchTerm}-page-${page}`
			: `blogPosts-page-${page}-products`,
		fetcher,
		{ revalidateOnFocus: false }
	);

	return (
		<div className='w-full h-full'>
			{/* posts */}
			{isLoading ? (
				<div className='flex justify-center items-center w-full h-full'>
					<LoadingSpinner size='h-12' />
				</div>
			) : error ? (
				<div className='flex justify-center items-center w-full h-full'>
					<div className='text-red-600'>Failed to load</div>
				</div>
			) : posts?.length === 0 ? (
				<div className='flex justify-center items-center w-full h-full'>
					No Posts 😢
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
							{posts?.map((post) => (
								<PostItem
									key={post?._id}
									_createdAt={post?._createdAt}
									title={post?.title}
									slug={post?.slug}
									excerpt={post?.excerpt}
									tags={post?.tags}
									coverImage={post?.coverImage}
									coverImageAlt={post?.coverImage + ' image alt'}
									estimatedReadTime={post?.estimatedReadTime}
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
							{posts?.length === 15 && (
								<button
									className='primary-button'
									onClick={() => setPage(page + 1)}
								>
									<span className='text-lg'>{'Next >'}</span>
								</button>
							)}
							{posts?.length === 0 && (
								<span className='text-xs'>No Posts 😢</span>
							)}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Posts;
