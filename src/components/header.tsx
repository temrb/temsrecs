/** @format */
'use client';

import React from 'react';
import { ShoppingBagIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<header
			className='flex flex-col w-full h-full 
		bg-bgAccentLight dark:bg-bgAccentDark z-20'
		>
			<div className='flex flex-col w-full h-full justify-center items-center space-y-4'>
				<h1 className='text-3xl font-bold'>tem&apos;s recs</h1>
				<div className='gap-4 flex'>
					<button
						className={`primary-button
						${pathname === '/' && 'bg-bgAccentDark/10 dark:bg-bgAccentLight/10'}
					`}
						onClick={() => router.push('/')}
					>
						<span className='gap-2 flex items-center'>
							<ShoppingBagIcon className='h-6 w-6' />
							Shop
						</span>
					</button>
					<button
						className={`primary-button
						${pathname === '/blog' && 'bg-bgAccentDark/10 dark:bg-bgAccentLight/10'}
					`}
						onClick={() => router.push('/blog')}
					>
						<span className='gap-2 flex items-center'>
							<BookOpenIcon className='h-6 w-6' />
							Blog
						</span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
