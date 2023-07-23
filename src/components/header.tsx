/** @format */
'use client';

import React, { useState } from 'react';
import { Store, BookOpen } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import SocialItems from './social-item';

const Header = () => {
	const router = useRouter();
	const pathname = usePathname();

	const [viewSocials, setViewSocials] = useState(false);

	return (
		<header
			className='w-full border-b-2 dark:border-bgAccentLight border-bgAccentDark 
			bg-bgAccentLight dark:bg-bgAccentDark h-40 sticky top-0 z-20 items-center flex flex-col space-y-4'
		>
			<div className='w-full justify-center items-center flex pt-2'>
				<button
					className='primary-button md:text-md text-sm'
					onClick={() => setViewSocials(!viewSocials)}
				>
					{viewSocials ? '❌ Close' : '🔗 Socials'}
				</button>
			</div>

			{viewSocials ? (
				<div className='flex pt-4 flex-wrap flex-row w-full gap-5 justify-center items-center'>
					<SocialItems type='tiktok' link='https://www.tiktok.com/@tem.tk' />
					<SocialItems type='tiktok' link='https://www.tiktok.com/@tem.toks' />
					<SocialItems type='insta' link='https://www.instagram.com/' />
					<SocialItems type='twitter' link='https://twitter.com/' />
					<SocialItems type='youtube' link='https://www.youtube.com/' />
					<SocialItems type='threads' link='https://threads.net/' />
					<SocialItems type='medium' link='https://medium.com/' />
					<SocialItems
						type='amazon'
						link='https://www.amazon.com/shop/influencer-4c14be7c?ref_=cm_sw_r_cp_ud_aipsfshop_aipsfinfluencer-4c14be7c_6XM77RBD8PYH8D7TFPBR'
					/>
					<SocialItems type='facebook' link='https://facebook.com/' />
				</div>
			) : (
				<div
					className='w-full justify-center items-center flex px-6
			flex-col space-y-4'
				>
					{/* title */}
					<h1 className='md:text-xl text-lg font-bold'>tem&apos;s recs</h1>
					{/* nav items */}
					<div className='space-x-4 flex'>
						<button
							className={`select-button
						${pathname === '/' && 'select-button-active'}
					`}
							onClick={() => router.push('/')}
						>
							<span className='gap-2 flex items-center md:text-md text-sm'>
								<Store className='h-4 w-4' />
								Collection
							</span>
						</button>
						<button
							className={`select-button
						${pathname === '/blog' && 'select-button-active'}
					`}
							onClick={() => router.push('/blog')}
						>
							<span className='gap-2 flex items-center md:text-md text-sm'>
								<BookOpen className='h-4 w-4' />
								Blog
							</span>
						</button>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
