/** @format */

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Share2, ClipboardCheck } from 'lucide-react';
import TikTokLogo from '../../../public/logos/tiktok.logo';
import InstaLogo from '../../../public/logos/insta.logo';
import ThreadsLogo from '../../../public/logos/threads.logo';
import TwitterLogo from '../../../public/logos/twitter.logo';
import YoutubeLogo from '../../../public/logos/youtube.logo';
import FacebookLogo from '../../../public/logos/facebook.logo';

interface Props {
	image: string;
	imageAlt: string;
	productLink: string;
}

const ProductItem = (props: Props) => {
	const [copied, setCopied] = useState(false);
	const [blur, setBlur] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(props.productLink);
		setCopied(true);
	};

	return (
		<div className='group flex flex-col'>
			{/* image */}
			<div
				className='relative w-full h-44 dark:border-bgAccentLight/20 border-bgAccentDark/20 border-4 rounded-xl'
				onMouseLeave={() => {
					setCopied(false);
				}}
			>
				<Image
					src={props.image}
					fill
					loading='lazy'
					placeholder='blur'
					blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhQJ/6tZ9OQAAAABJRU5ErkJggg=='
					style={{ objectFit: 'contain' }}
					alt={props.imageAlt}
					className={`${
						blur && 'blur-sm'
					} transition-all ease-in-out duration-200 p-2`}
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
				<div
					className='absolute top-0 left-0 w-full h-full flex items-end p-2 lg:items-center justify-center lg:opacity-0 lg:group-hover:opacity-100 transition-opacity
                        ease-in-out duration-200'
				>
					<button
						className='shop-button'
						onClick={() => {
							window.open(props.productLink, '_blank');
						}}
						onMouseEnter={() => {
							setBlur(true);
						}}
						onMouseLeave={() => {
							setBlur(false);
						}}
					>
						<div className='flex items-center space-x-1'>
							<ArrowUpRight className='lg:h-6 h-5' />
							<span className='lg:text-xl text-md'>Go to item</span>
						</div>
					</button>
				</div>
				<div className='absolute bottom-0 right-0 m-2'>
					<div className='flex items-center space-x-2'>
						<button
							className={`share-button ${
								copied && 'bg-green-600 hover:bg-green-700'
							}`}
							onClick={handleCopy}
						>
							{copied ? (
								<div className='flex space-x-1 items-center'>
									<span className='text-xs font-semibold rounded-md'>
										Copied!
									</span>
									<ClipboardCheck className='h-4' />
								</div>
							) : (
								<Share2 className='h-4' />
							)}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
