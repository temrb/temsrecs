/** @format */

import { PortableTextBlock } from 'sanity';

export type Blog = {
	_id: string;
	_createdAt: Date;
	title: string;
	slug: { current: string };
	content: PortableTextBlock[];
	excerpt: string;
	tags: string[];
	coverImage: string;
	estimatedReadTime: number;
};
