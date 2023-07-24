/** @format */

import { groq } from 'next-sanity';
import { client } from './lib/client';
import { Product } from '../types/Product';
import { Blog } from '../types/Blog';

// TODO
export async function getFirstPageProducts(): Promise<Product[]> {
	return client.fetch(
		groq`*[_type == "product"] | order(_createdAt) [0...20] {
      _id,
      _createdAt,
      name,
      tags,
      imageLink,
      productLink,
    }`,
		{
			// cache for 300 seconds or 5 minutes
			next: {
				revalidate: 300,
			},
		}
	);
}

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
