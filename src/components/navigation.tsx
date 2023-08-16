/** @format */

import { BadgeInfo } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navigation = () => {
	return (
		<footer
			className='flex fixed bottom-0 w-full h-20 items-center
				bg-bgAccentLight/90 dark:bg-bgAccentDark/90 backdrop-filter backdrop-blur-md 
				justify-end px-4 border-t-2 border-bgAccentDark dark:border-bgAccentLight space-x-6'
		>
			<Link
				className=' justify-start items-center flex text-xs primary-button'
				href='/policies'
			>
				<BadgeInfo size={20} />
			</Link>
		</footer>
	);
};

export default Navigation;
