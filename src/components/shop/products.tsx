/** @format */

import React from 'react';
import ProductItem from './product-item';

const Products = () => {
	return (
		<div className='pt-14 grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-4 w-full h-full'>
			<ProductItem
				image='https://placehold.co/600x400/png'
				imageAlt='placeholder'
				productLink='https://www.amazon.com/Maxwell-House-Instant-Coffee-Canister/dp/B00522VKWI?pd_rd_w=2cdkP&content-id=amzn1.sym.47078f0f-6136-43d7-a63f-08b5e29bec55&pf_rd_p=47078f0f-6136-43d7-a63f-08b5e29bec55&pf_rd_r=5HJB6BW2FX3NMST4BW1Y&pd_rd_wg=iI6Pl&pd_rd_r=fd3e2a98-b2c8-4436-b3b9-a6df0aa72462&pd_rd_i=B00522VKWI&psc=1&ref_=pd_bap_d_grid_rp_0_1_ec_i'
				socials={{
					tiktok: 'https://tiktok.com/',
					insta: 'https://www.instagram.com/',
					threads: 'https://www.threads.net/',
				}}
			/>
		</div>
	);
};

export default Products;
