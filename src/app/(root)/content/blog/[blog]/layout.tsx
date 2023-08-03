/** @format */
'use client';

export default function ContentLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className='w-full justify-center flex flex-col items-center'>
			{children}
		</section>
	);
}
