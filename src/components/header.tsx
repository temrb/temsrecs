/** @format */
'use client';

import React, { useState } from 'react';
import { Store, BookOpen } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import SocialItems from './social-item';
import { SocialMedia } from '../../types/SocialMedia';

const Header = () => {
	const router = useRouter();
	const pathname = usePathname();

	const [viewSocials, setViewSocials] = useState(false);

	const socialItems: SocialMedia[] = [
		{ id: 1, type: 'tiktok', link: 'https://www.tiktok.com/@tem.career' },
		{ id: 2, type: 'tiktok', link: 'https://www.tiktok.com/@tem.tech' },
		{ id: 3, type: 'tiktok', link: 'https://www.tiktok.com/@tem.amazonfinds' },
		// { id: 3, type: 'insta', link: 'https://www.instagram.com/' },
		// { id: 4, type: 'twitter', link: 'https://twitter.com/' },
		// { id: 5, type: 'youtube', link: 'https://www.youtube.com/' },
		// { id: 6, type: 'threads', link: 'https://threads.net/' },
		// { id: 7, type: 'medium', link: 'https://medium.com/' },
		// {
		// 	id: 8,
		// 	type: 'amazon',
		// 	link: 'https://www.amazon.com/shop/influencer-4c14be7c?ref_=cm_sw_r_cp_ud_aipsfshop_aipsfinfluencer-4c14be7c_6XM77RBD8PYH8D7TFPBR',
		// },
		// { id: 9, type: 'facebook', link: 'https://facebook.com/' },
	];

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
					{socialItems.map((item) => (
						<SocialItems key={item.id} type={item.type} link={item.link} />
					))}
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
							// onClick={() => router.push('/blog')}
							onClick={() => alert('Coming soon!')}
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
