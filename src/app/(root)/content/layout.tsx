/** @format */
'use client';

import Search from '@/components/search';
import { usePathname } from 'next/navigation';

export default function ContentLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		<section className='w-full justify-center flex flex-col items-center'>
			{!pathname.startsWith('/content/blog/') &&
				!pathname.endsWith('/content') && <Search />}
			{children}
		</section>
	);
}
