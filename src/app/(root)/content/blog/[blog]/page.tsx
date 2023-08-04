/** @format */

import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { getBlogPost } from '../../../../../../sanity/sanity-utils';
import ErrorDisplay from '@/components/error-display';
import { Timer, Calendar } from 'lucide-react';

type Props = {
	params: {
		blog: string;
	};
};

export default async function Project({ params }: Props) {
	const post = await getBlogPost(params.blog);
	console.log('🚀 ~ file: page.tsx:16 ~ Project ~ project:', post);

	if (!post) {
		return (
			<div className='pt-6'>
				<ErrorDisplay errorText='Post not found' />
			</div>
		);
	}

	return (
		<div className='p-6 w-full h-full space-y-10'>
			<section className='flex flex-col space-y-4'>
				{/* cover image */}
				<div className='relative w-full h-56'>
					<Image
						src={post?.coverImage}
						fill
						loading='lazy'
						style={{ objectFit: 'cover' }}
						alt={post?.title + ' cover image'}
						className='p-2 rounded-xl'
						quality={50}
						sizes='(max-width: 768px) 100vw, 33vw'
					/>
				</div>

				{/* title content */}
				<div className='items-center flex lg:flex-row flex-col lg:justify-between justify-center lg:space-y-0 space-y-6'>
					<div className='flex flex-col justify-center lg:items-start items-center space-y-1'>
						<h1 className='text-5xl drop-shadow font-extrabold'>
							{post?.title}
						</h1>
						<div className='flex flex-row space-x-2'>
							{post?.tags?.map((tag: string) => (
								<p
									// using sanity tag as key
									key={tag}
									className='flex bg-yellow-500/60 p-1 rounded-md shadow-md
								text-xs items-center justify-center capitalize '
								>
									{tag}
								</p>
							))}
						</div>
					</div>
					<div className='flex flex-col justify-center space-y-1 lg:items-end items-center'>
						<span className='flex text-sm items-center font-light justify-center'>
							<Calendar className='h-4 w-4 mr-1' />
							<p>
								{new Date(post?._createdAt).toLocaleDateString('en-US', {
									month: 'short',
									day: 'numeric',
									year: 'numeric',
								})}
							</p>
						</span>
						<span className='flex text-xs font-light items-center justify-center'>
							<Timer className='h-4 w-4 mr-1' />
							<p>{post?.estimatedReadTime} min read</p>
						</span>
					</div>
				</div>
			</section>

			<div className='text-base'>
				<PortableText
					value={post?.content}
					// components={{
					// 	types: {
					// 		BodyImage: (props: any) => (
					// 			<div className='relative w-full h-96'>
					// 				<Image
					// 					src={props?.url}
					// 					alt={props?.alt}
					// 					layout='fill'
					// 					objectFit='cover'
					// 					className='rounded-xl'
					// 				/>
					// 			</div>
					// 		),
					// 	},
					// }}
				/>
			</div>

			{/* <Image
				src={project.image}
				alt={project.name}
				width={1920}
				height={1080}
				className='mt-10 border-2 border-gray-700 object-cover rounded-xl'
			/> */}
		</div>
	);
}
