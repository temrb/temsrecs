/** @format */

import { cache } from 'react';
import { groq } from 'next-sanity';
import { client } from './lib/client';
import { Product } from '../types/Product';
import { Blog } from '../types/Blog';

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

export const getBlogPosts = cache(async (page: number): Promise<Blog[]> => {
	const result = await client.fetch(
		groq`
      *[_type == "post"] | order(_createdAt desc) [${page * 15}...${
			(page + 1) * 15
		}] 
      {
		_id,
		_createdAt,
		title,
		slug,
		excerpt,
		coverImage,
		tags,
        // Words per minute: 180
        "estimatedReadTime": round(length(pt::text(content)) / 5 / 180),
		"excerpt": array::join(string::split((pt::text(content)), "")[0...96], "") + "...",
      }
    `,
		{
			next: {
				revalidate: 300,
			},
			cache: 'force-cache',
		}
	);

	return result;
});

export async function getBlogPost(slug: string): Promise<Blog> {
	if (!slug) {
		throw new Error('Invalid slug');
	}

	return await client.fetch(
		groq`
      *[_type == "post" && slug.current == "${slug}"][0]{
        _id,
        _createdAt,
        title,
        slug,
        content,
        coverImage,
        tags,
        // Words per minute: 180
        "estimatedReadTime": round(length(pt::text(content)) / 5 / 180),
      }
    `,
		{ slug }
	);
}
