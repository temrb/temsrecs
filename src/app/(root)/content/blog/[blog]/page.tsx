/** @format */

import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { getBlogPost } from '../../../../../../sanity/sanity-utils';
import ErrorDisplay from '@/components/error-display';

type Props = {
	params: {
		blog: string;
	};
};

export default async function Project({ params }: Props) {
	const project = await getBlogPost(params.blog);
	console.log('🚀 ~ file: page.tsx:16 ~ Project ~ project:', project);

	if (!project) {
		return (
			<div className='pt-6'>
				<ErrorDisplay errorText='Post not found' />
			</div>
		);
	}

	return (
		<div>
			<header className='flex items-center justify-between'>
				<h1 className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold'>
					{project?.title}
				</h1>
			</header>

			<div className='text-lg text-gray-700 mt-5'>
				<PortableText value={project?.content} />
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
