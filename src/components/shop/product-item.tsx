/** @format */

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingBasket, Share2, ClipboardCheck } from 'lucide-react';
import TikTokLogo from '../../../public/logos/tiktok.logo';
import InstaLogo from '../../../public/logos/insta.logo';
import ThreadsLogo from '../../../public/logos/threads.logo';

interface Props {
	image: string;
	imageAlt: string;
	productLink: string;
	socials: {
		tiktok: string;
		insta: string;
		threads: string;
	};
}

const ProductItem = (props: Props) => {
	const [copied, setCopied] = useState(false);
	const [showText, setShowText] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(props.productLink);
		setCopied(true);
		setShowText(true);
		setTimeout(() => {
			setShowText(false);
		}, 2000); // hide the text after 2 seconds
	};

	return (
		<div className='group flex flex-col'>
			{/* image */}
			<div
				className='relative w-full h-44 dark:border-bgAccentLight/20 border-bgAccentDark/20 border-4 rounded-t-xl'
				onMouseLeave={() => {
					setCopied(false);
				}}
			>
				<Image
					src={props.image}
					layout='fill'
					style={{ objectFit: 'contain' }}
					alt={props.imageAlt}
				/>
				<div
					className='absolute top-0 left-0 w-full h-full flex items-center justify-center lg:opacity-0 lg:group-hover:opacity-100 transition-opacity
                        ease-in-out duration-300'
				>
					<button
						className='shop-button'
						onClick={() => {
							window.open(props.productLink, '_blank');
						}}
					>
						<div className='flex items-center space-x-2'>
							<ShoppingBasket className='h-7' />
							<span className='text-2xl'>Buy This</span>
						</div>
					</button>
				</div>
				<div className='absolute bottom-0 right-0 m-2'>
					<div className='flex items-center space-x-2'>
						{showText && <span className='text-xs font-semibold'>Copied!</span>}
						<button
							className={`share-button ${
								copied && 'bg-green-600 hover:bg-green-700'
							}`}
							onClick={handleCopy}
						>
							{copied ? (
								<ClipboardCheck className='h-4' />
							) : (
								<Share2 className='h-4' />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* socials */}
			<div className='flex justify-evenly dark:bg-bgAccentLight/20 bg-bgAccentDark/20 py-3 rounded-b-xl'>
				<button
					className='social-button'
					onClick={() => {
						window.open(props.socials.tiktok, '_blank');
					}}
				>
					<TikTokLogo width={30} height={30} />
				</button>
				<button
					className='social-button'
					onClick={() => {
						window.open(props.socials.insta, '_blank');
					}}
				>
					<InstaLogo width={30} height={30} />
				</button>
				<button
					className='social-button'
					onClick={() => {
						window.open(props.socials.threads, '_blank');
					}}
				>
					<ThreadsLogo width={30} height={30} />
				</button>
			</div>
		</div>
	);
};

export default ProductItem;
