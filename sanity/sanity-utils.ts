/** @format */

import { cache } from 'react';
import { groq } from 'next-sanity';
import { client } from './lib/client';
import { Product } from '../types/Product';
import { Blog } from '../types/Blog';

export const getProductsByCategory = cache(
	async (category: string, page: number): Promise<Product[]> => {
		return await client.fetch(
			groq`*[_type == "product" && $keyword in tags] | order(_createdAt desc) [${
				page * 15
			}...${(page + 1) * 15}] {
			_id,
			_createdAt,
			name,
			tags,
			imageLink,
			productLink,
			productPrice,
    }`,
			{
				keyword: category,
				next: {
					revalidate: 300,
				},
				cache: 'force-cache',
			}
		);
	}
);

export const getProducts = cache(async (page: number): Promise<Product[]> => {
	return await client.fetch(
		groq`*[_type == "product"] | order(_createdAt desc) [${page * 15}...${
			(page + 1) * 15
		}] {
					_id,
					_createdAt,
					name,
					tags,
					imageLink,
					productLink,
					productPrice,
				}`,
		{
			next: {
				revalidate: 300,
			},
			cache: 'force-cache',
		}
	);
});

export const getProductsByName = cache(
	async (name: string, page: number): Promise<Product[]> => {
		return await client.fetch(
			groq`*[_type == "product" && (name match ($keyword + "*") || tags[] match ($keyword + "*"))] | order(_createdAt desc) [${
				page * 15
			}...${(page + 1) * 15}] {
			_id,
			_createdAt,
			name,
			tags,
			imageLink,
			productLink,
			productPrice,
		}`,
			{
				keyword: name,
				next: {
					revalidate: 300,
				},
				cache: 'force-cache',
			}
		);
	}
);

export const getProductsByNameAndCat = cache(
	async (name: string, category: string, page: number): Promise<Product[]> => {
		return await client.fetch(
			groq`*[_type == "product" && (name match ($keyword + "*") || tags[] match ($keyword + "*")) && $category in tags] | order(_createdAt desc) [${
				page * 15
			}...${(page + 1) * 15}] {
			_id,
			_createdAt,
			name,
			tags,
			imageLink,
			productLink,
			productPrice,
		}`,
			{
				keyword: name,
				category: category,
				next: {
					revalidate: 300,
				},
				cache: 'force-cache',
			}
		);
	}
);

// export async function getPage(): Promise<Blog[]> {
// 	return client.fetch(
// 		groq`*[_type == "page"]{
//       _id,
//       _createdAt,
//       title,
//       "slug": slug.current
//     }`
// 	);
// }
//
// export async function getPost(slug: string): Promise<Blog> {
// 	return client.fetch(
// 		groq`*[_type == "page" && slug.current == $slug][0]{
//       _id,
//       _createdAt,
//       title,
//       "slug": slug.current,
//       content
//     }`,
// 		{ slug }
// 	);
// }
