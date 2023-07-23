/** @format */
'use client';

import React from 'react';
import { Store, BookOpen } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<header
			className='w-full border-b-2 dark:border-bgAccentLight border-bgAccentDark 
			bg-bgAccentLight dark:bg-bgAccentDark h-44 sticky top-0 z-20 flex px-6'
		>
			<div className='flex flex-col w-full h-full justify-center items-center space-y-4'>
				<h1 className='md:text-3xl text-xl font-bold'>🚀 tem&apos;s recs</h1>
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
			</div>
		</header>
	);
};

export default Header;
