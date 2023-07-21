/** @format */
import React from 'react';
import '../styles/globals.css';
import { Poppins } from 'next/font/google';
import Ga4 from '@/utils/ga4.component';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
	title: 'easyease',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<Ga4>
					<div className='h-screen dark:bg-bgAccentDark bg-bgAccentLight'>
						{children}
					</div>
				</Ga4>
			</body>
		</html>
	);
}
