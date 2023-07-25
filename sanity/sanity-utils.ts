/** @format */

import { groq } from 'next-sanity';
import { client } from './lib/client';
import { Product } from '../types/Product';
import { Blog } from '../types/Blog';

export const getProductsByCategory = async (
	category: string
): Promise<Product[]> => {
	return await client.fetch(
		groq`*[_type == "product" && $keyword in tags] | order(_createdAt desc) [0...25] {
      _id,
      _createdAt,
      name,
      tags,
      imageLink,
      productLink,
    }`,
		{
			keyword: category,
			next: {
				revalidate: 300,
			},
			cache: 'force-cache',
		}
	);
};

export const getProducts = async (page: number): Promise<Product[]> => {
	return await client.fetch(
		groq`*[_type == "product"] | order(_createdAt desc) [${page * 25}...${
			(page + 1) * 25
		}] {
					_id,
					_createdAt,
					name,
					tags,
					imageLink,
					productLink,
				}`,
		{
			next: {
				revalidate: 300,
			},
			cache: 'force-cache',
		}
	);
};

export const getProductsByName = async (name: string): Promise<Product[]> => {
	return await client.fetch(
		groq`*[_type == "product" && (name match ($keyword + "*") || tags[] match ($keyword + "*"))] | order(_createdAt desc) [0...25] {
			_id,
			_createdAt,
			name,
			tags,
			imageLink,
			productLink,
		}`,
		{
			keyword: name,
			next: {
				revalidate: 300,
			},
			cache: 'force-cache',
		}
	);
};

export const getProductsByNameAndCat = async (
	name: string,
	category: string
): Promise<Product[]> => {
	return await client.fetch(
		groq`*[_type == "product" && (name match ($keyword + "*") || tags[] match ($keyword + "*")) && $category in tags] | order(_createdAt desc) [0...25] {
			_id,
			_createdAt,
			name,
			tags,
			imageLink,
			productLink,
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
};

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
