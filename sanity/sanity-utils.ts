/** @format */

import { groq } from 'next-sanity';
import { client } from './lib/client';
import { Product } from '../types/Product';
import { Blog } from '../types/Blog';

export const getFirstPageProducts = async (): Promise<Product[]> => {
	return await client.fetch(
		groq`*[_type == "product"] | order(_createdAt) [0...25] {
      _id,
      _createdAt,
      name,
      tags,
      imageLink,
      productLink,
    }`,
		{
			// revalidate every 300 seconds or 5 minutes
			next: {
				revalidate: 300,
			},
			cache: 'force-cache',
		}
	);
};

export const getProductsByCategory = async (
	category: string
): Promise<Product[]> => {
	return await client.fetch(
		groq`*[_type == "product" && $keyword in tags] | order(_createdAt) [0...25] {
      _id,
      _createdAt,
      name,
      tags,
      imageLink,
      productLink,
    }`,
		{
			keyword: category,
		}
	);
};

export const getProductsByName = async (name: string): Promise<Product[]> => {
	return await client.fetch(
		groq`*[_type == "product" && (name match ($keyword + "*") || tags[] match ($keyword + "*"))] | order(_createdAt) [0...25] {
			_id,
			_createdAt,
			name,
			tags,
			imageLink,
			productLink,
		}`,
		{
			keyword: name,
		}
	);
};

export const getProductsByNameAndCat = async (
	name: string,
	category: string
): Promise<Product[]> => {
	return await client.fetch(
		groq`*[_type == "product" && (name match ($keyword + "*") || tags[] match ($keyword + "*")) && $category in tags] | order(_createdAt) [0...25] {
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
		}
	);
};

export async function getPage(): Promise<Blog[]> {
	return client.fetch(
		groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
	);
}

export async function getPost(slug: string): Promise<Blog> {
	return client.fetch(
		groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
		{ slug }
	);
}
