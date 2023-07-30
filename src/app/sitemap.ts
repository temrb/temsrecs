/** @format */

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://www.temsrecs.com/',
			lastModified: new Date(),
		},
		{
			url: 'https://www.temsrecs.com/policies/',
			lastModified: new Date(),
		},
	];
}
