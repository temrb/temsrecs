/** @format */

import React, { ReactNode } from 'react';
import '../../styles/globals.css';
import { Poppins } from 'next/font/google';

import Script from 'next/script';
import Header from '@/components/header';
import { Analytics } from '@vercel/analytics/react';
import Navigation from '@/components/navigation';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
	title: "🚀 tem's recs | A curated list of the best products for your needs",
	description: 'Best products from sites like Amazon, Product Hunt, and more!',
	meta: {
		viewport: 'width=device-width, initial-scale=1',
		charset: 'utf-8',
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<head>
				{process.env.NODE_ENV === 'production' && (
					<>
						<Script
							id='cookieyes'
							type='text/javascript'
							src='https://cdn-cookieyes.com/client_data/5c0d8cc2f5425587bddfde99/script.js'
						/>
					</>
				)}
			</head>
			<body
				className={`${poppins.className} dark:bg-bgAccentDark bg-bgAccentLight text-bgAccentDark dark:text-bgAccentLight`}
			>
				<>
					<Header />
					<section className='h-[calc(100vh_-_11rem)] dark:bg-bgAccentDark bg-bgAccentLight'>
						<div className='md:pb-20 pb-24'>{children}</div>
					</section>
					<Navigation />
				</>
				{process.env.NODE_ENV === 'production' && <Analytics />}
			</body>
		</html>
	);
}
