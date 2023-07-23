/** @format */

import React from 'react';
import ProductItem from './product-item';

const Products = () => {
	return (
		<div className='w-full h-full'>
			{/* products */}
			<div className='grid gap-7 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4 md:p-8 pb-10'>
				<ProductItem
					image='https://m.media-amazon.com/images/I/411NxOSWI5L._AC_SL1000_.jpg'
					imageAlt='placeholder'
					productLink='https://www.amazon.com/dp/B09JVG3TWX/ref=ods_gw_GW_US_EN_AUCC_AD_July2023-US-AlexaMWAC_H1_Y/?_encoding=UTF8&pd_rd_w=hT1Bv&content-id=amzn1.sym.6280d925-cf3f-45d7-a432-2356d2a057d2&pf_rd_p=6280d925-cf3f-45d7-a432-2356d2a057d2&pf_rd_r=NJZ0VGTCDY8TJPP1WH4A&pd_rd_wg=xAYIh&pd_rd_r=fa86facb-d542-4629-9f93-f15712b918e2'
				/>
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
