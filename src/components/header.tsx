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
						h-44 sticky top-0'
		>
			<div className='flex bg-bgAccentLight dark:bg-bgAccentDark z-20 flex-col w-full h-full justify-center items-center space-y-4'>
				<h1 className='text-3xl font-bold'>tem&apos;s recs</h1>
				<div className='gap-4 flex'>
					<button
						className={`select-button
						${pathname === '/' && 'select-button-active'}
					`}
						onClick={() => router.push('/')}
					>
						<span className='gap-2 flex items-center'>
							<Store className='h-6 w-6' />
							Store
						</span>
					</button>
					<button
						className={`select-button
						${pathname === '/blog' && 'select-button-active'}
					`}
						onClick={() => router.push('/blog')}
					>
						<span className='gap-2 flex items-center'>
							<BookOpen className='h-6 w-6' />
							Blog
						</span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
