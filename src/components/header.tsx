/** @format */
'use client';

import React from 'react';
import { Store, BookOpen } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import SocialItems from './social-item';

const Header = () => {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<header
			className='w-full border-b-2 dark:border-bgAccentLight border-bgAccentDark 
			bg-bgAccentLight dark:bg-bgAccentDark h-44 sticky top-0 z-20 flex px-6
			flex-col justify-center items-center space-y-4'
		>
			{/* title */}
			<h1 className='md:text-3xl text-xl font-bold'>🚀 tem&apos;s recs</h1>

			{/* social items */}
			<div className='flex flex-row w-fit space-x-4'>
				<SocialItems type='tiktok' link='https://www.tiktok.com/@tem.tk' />
				<SocialItems type='tiktok' link='https://www.tiktok.com/@tem.toks' />
				<SocialItems type='insta' link='https://www.instagram.com/' />
				<SocialItems type='twitter' link='https://twitter.com/' />
				<SocialItems type='youtube' link='https://www.youtube.com/' />
				<SocialItems type='threads' link='https://threads.net/' />
				<SocialItems type='medium' link='https://medium.com/' />
				<SocialItems type='facebook' link='https://facebook.com/' />
			</div>

			{/* nav items */}
			<div className='space-x-4 flex'>
				<button
					className={`select-button
						${pathname === '/' && 'select-button-active'}
					`}
					onClick={() => router.push('/')}
				>
					<span className='gap-2 flex items-center md:text-xl text-sm'>
						<Store className='md:h-5 h-4 md:w-5 w-4' />
						Collection
					</span>
				</button>
				<button
					className={`select-button
						${pathname === '/blog' && 'select-button-active'}
					`}
					onClick={() => router.push('/blog')}
				>
					<span className='gap-2 flex items-center md:text-xl text-sm'>
						<BookOpen className='md:h-5 h-4 md:w-5 w-4' />
						Blog
					</span>
				</button>
			</div>
		</header>
	);
};

export default Header;
