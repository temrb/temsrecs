/** @format */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface Props {
	name: string;
	tags: string[];
	image: string;
	imageAlt: string;
	productLink: string;
	productPrice: number;
}

const ProductItem = (props: Props) => {
	const [blur, setBlur] = useState(false);

	return (
		<div className='group flex flex-col dark:border-bgAccentLight/20 border-bgAccentDark/20 border-4 rounded-xl'>
			<div className='relative w-full h-44'>
				<Image
					src={props?.image}
					fill
					loading='lazy'
					style={{ objectFit: 'contain' }}
					alt={props?.imageAlt}
					className={`${
						blur && 'blur-sm'
					} transition-all ease-in-out duration-200 p-2`}
					quality={10}
					sizes='(max-width: 768px) 100vw, 33vw'
				/>
				<h2
					className='absolute top-0 left-0 w-full p-2 items-start justify-start
					text-sm font-semibold ease-in-out duration-200 dark:bg-bgAccentDark bg-bgAccentLight shadow-md rounded-t-xl text-ellipsis overflow-hidden ... truncate
					dark:border-bgAccentLight/20 border-bgAccentDark/20 pt-2 border-b-4'
				>
					{props?.name}
				</h2>
				<div
					className='absolute top-0 left-0 w-full h-full flex p-2 items-center justify-center lg:opacity-0 lg:group-hover:opacity-100 transition-opacity
                        ease-in-out duration-200'
				>
					<button
						className='shop-button'
						onClick={() => {
							window.open(props?.productLink, '_blank');
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
			</div>
			<div
				className='flex w-full justify-between border-t-4 
				dark:border-bgAccentLight/20 border-bgAccentDark/20 pt-2 p-2 space-x-2'
			>
				<div className='space-x-4 overflow-x-auto flex flex-row'>
					{props?.tags?.map((tag: string) => (
						<p
							// using sanity tag as key
							key={tag}
							className='flex bg-yellow-500/60 p-1 rounded-md shadow-md
							text-xs items-center justify-center capitalize w-full'
						>
							{tag}
						</p>
					))}
				</div>
				{props?.productPrice && (
					<p className='flex text-xs p-1 rounded-md items-center'>
						${props?.productPrice}
					</p>
				)}
			</div>
		</div>
	);
};

export default ProductItem;
