/** @format */

import { PortableTextBlock } from 'sanity';

export type Blog = {
	_id: string;
	_createdAt: Date;
	title: string;
	slug: string;
	content: PortableTextBlock[];
	tags: string[];
	imageLink: string;
	productLink: string;
};
