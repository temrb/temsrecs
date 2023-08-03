/** @format */
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
	_createdAt: Date;
	title: string;
	slug: { current: string };
	excerpt: string;
	tags: string[];
	coverImage: string;
	coverImageAlt: string;
	estimatedReadTime: number;
}

const PostItem = (props: Props) => {
	console.log(
		'🚀 ~ file: post-item.tsx:21 ~ PostItem ~ props:',
		props.slug.current
	);
	const [blur, setBlur] = useState(false);

	return (
		<div className='group  flex flex-col dark:border-bgAccentLight/20 border-bgAccentDark/20 border-4 rounded-xl'>
			<div className='relative w-full h-60'>
				<Image
					src={props?.coverImage}
					fill
					loading='lazy'
					style={{
						objectFit: 'cover',
					}}
					alt={props?.coverImageAlt}
					className={`${
						blur && 'blur-sm'
					} transition-all ease-in-out duration-200 p-2`}
					quality={10}
					sizes='(max-width: 768px) 100vw, 33vw'
				/>

				<div
					className={`absolute bottom-0 space-y-2 left-0 w-full p-2 dark:bg-bgAccentDark bg-bgAccentLight
				border-t-4 border-bgAccentDark/20 rounded-b-xl shadow-md dark:border-bgAccentLight/20
				${blur && 'blur-sm'} transition-all ease-in-out duration-200`}
				>
					<span className='flex justify-between items-center space-x-2'>
						<h2 className='text-sm font-semibold  text-ellipsis overflow-hidden ... truncate'>
							{props?.title}
						</h2>
						<p className='text-sm font-extralight'>
							{new Date(props?._createdAt).toLocaleDateString('en-US', {
								month: 'short',
								day: 'numeric',
								year: 'numeric',
							})}
						</p>
					</span>
					<p className='text-xs text-bgAccentDark/50 dark:text-bgAccentLight/50'>
						{props?.excerpt}
					</p>
					<div className='flex justify-between items-center space-x-2'>
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
						<p className='flex text-xs font-light'>
							{props?.estimatedReadTime} min read
						</p>
					</div>
				</div>

				<div
					className='absolute lg:top-0 top-10 left-0 w-full h-full flex p-2 lg:items-center items-start 
					justify-center lg:opacity-0 lg:group-hover:opacity-100 transition-opacity ease-in-out duration-200'
				>
					<Link
						href={`/content/blog/${props?.slug?.current}`}
						className='shop-button'
						onMouseEnter={() => {
							setBlur(true);
						}}
						onMouseLeave={() => {
							setBlur(false);
						}}
					>
						<div className='flex items-center space-x-1'>
							<ArrowUpRight className='lg:h-6 h-5' />
							<span className='lg:text-xl text-md'>Go to post</span>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PostItem;
