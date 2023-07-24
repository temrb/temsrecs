/** @format */
'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Search from '@/components/shop/search';
import Products from '@/components/shop/products';

const Page = () => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -40 }}
				transition={{
					duration: 0.95,
					ease: [0.165, 0.84, 0.44, 1],
				}}
				className='flex flex-col w-full h-full'
			>
				<div className='w-full justify-center flex flex-col items-center'>
					<Search />
					<Products />
				</div>
			</motion.div>
		</AnimatePresence>
	);
};

export default Page;
