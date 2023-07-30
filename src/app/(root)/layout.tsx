/** @format */

import React, { ReactNode } from 'react';
import '../../styles/globals.css';
import { Poppins } from 'next/font/google';

import Script from 'next/script';
import Header from '@/components/header';
import { Analytics } from '@vercel/analytics/react';

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
						<Script type='text/javascript' id='clarity'>
							{`
          (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "i2n3gilivs");
          `}
						</Script>
					</>
				)}
			</head>
			<body
				className={`${poppins.className} dark:bg-bgAccentDark bg-bgAccentLight text-bgAccentDark dark:text-bgAccentLight`}
			>
				<>
					<Header />
					<section className='h-[calc(100vh_-_11rem)] dark:bg-bgAccentDark bg-bgAccentLight'>
						{children}
					</section>
				</>
				{process.env.NODE_ENV === 'production' && <Analytics />}
			</body>
		</html>
	);
}
