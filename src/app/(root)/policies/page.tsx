/** @format */
'use client';

import Script from 'next/script';
import React from 'react';

const Page = () => {
	return (
		<div className=' space-y-5 p-4'>
			<h1 className='font-bold text-3xl'>Cookie Policy</h1>
			<p>
				Effective Date: 24-Jul-2023 <br />
				Last Updated: 25-Jul-2023
			</p>

			<h5 className='font-bold text-lg'>What are cookies?</h5>
			<p>
				This Cookie Policy explains what cookies are and how we use them, the
				types of cookies we use i.e, the information we collect using cookies
				and how that information is used, and how to manage the cookie settings.
			</p>
			<p>
				Cookies are small text files that are used to store small pieces of
				information. They are stored on your device when the website is loaded
				on your browser. These cookies help us make the website function
				properly, make it more secure, provide better user experience, and
				understand how the website performs and to analyze what works and where
				it needs improvement.
			</p>

			<h5 className='font-bold text-lg'>How do we use cookies?</h5>
			<p>
				As most of the online services, our website uses first-party and
				third-party cookies for several purposes. First-party cookies are mostly
				necessary for the website to function the right way, and they do not
				collect any of your personally identifiable data.
			</p>
			<p>
				The third-party cookies used on our website are mainly for understanding
				how the website performs, how you interact with our website, keeping our
				services secure, providing advertisements that are relevant to you, and
				all in all providing you with a better and improved user experience and
				help speed up your future interactions with our website.
			</p>

			<h5 className='font-bold text-lg'>Types of Cookies we use</h5>

			<div className='cky-audit-table-element'></div>

			<h5 className='font-bold text-lg'>Manage cookie preferences</h5>

			<button
				className='px-8 py-2 rounded border border-gray-300 bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none'
				id='cky-btn-revisit'
			>
				Cookie Settings
			</button>
			<p>
				You can change your cookie preferences any time by clicking the above
				button. This will let you revisit the cookie consent banner and change
				your preferences or withdraw your consent right away.{' '}
			</p>
			<p>
				In addition to this, different browsers provide different methods to
				block and delete cookies used by websites. You can change the settings
				of your browser to block/delete the cookies. Listed below are the links
				to the support documents on how to manage and delete cookies from the
				major web browsers.
			</p>
			<p>
				<a
					className='text-indigo-400 hover:underline'
					href='https://support.google.com/accounts/answer/32050'
					target='_blank'
				>
					Chrome
				</a>
			</p>
			<p>
				<a
					className='text-indigo-400 hover:underline'
					href='https://support.apple.com/en-in/guide/safari/sfri11471/mac'
					target='_blank'
				>
					Safari
				</a>
			</p>
			<p>
				<a
					className='text-indigo-400 hover:underline'
					href='https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US'
					target='_blank'
				>
					Firefox
				</a>
			</p>
			<p>
				<a
					className='text-indigo-400 hover:underline'
					href='https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc'
					target='_blank'
				>
					Internet Explorer
				</a>
			</p>
			<p>
				If you are using any other web browser, please visit your browser’s
				official support documents.
			</p>

			<p>
				Cookie Policy Generated By{' '}
				<a
					className='text-indigo-400 hover:underline'
					target='_blank'
					href='https://www.cookieyes.com/?utm_source=CP&utm_medium=footer&utm_campaign=UW'
				>
					CookieYes - Cookie Policy Generator.
				</a>
			</p>

			<h2 className='font-bold text-lg'>Affiliate Marketing Disclosure:</h2>
			<p>
				Please note that some links on this website may be affiliate links,
				which means if you click on them and make a purchase, we may receive a
				small commission at no extra cost to you. This helps support our work
				and allows us to continue to provide high-quality content. Thank you!
			</p>
		</div>
	);
};

export default Page;
