/** @format */

import React from 'react';
import Search from '@/components/collection/search';
import Products from '@/components/collection/products';

const Page = () => {
	return (
		<div className='w-full justify-center flex flex-col items-center'>
			<Search />
			<Products />
		</div>
	);
};

export default Page;
