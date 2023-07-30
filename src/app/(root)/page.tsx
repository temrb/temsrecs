/** @format */

import React from 'react';
import Search from '@/components/shop/search';
import Products from '@/components/shop/products';

const Page = () => {
	return (
		<div className='flex flex-col w-full h-full'>
			<div className='w-full justify-center flex flex-col items-center'>
				<Search />
				<Products />
			</div>
		</div>
	);
};

export default Page;
