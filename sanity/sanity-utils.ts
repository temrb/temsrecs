/** @format */

import { groq } from 'next-sanity';
import { client } from './lib/client';
import { Product } from '../types/Product';
import { Blog } from '../types/Blog';

//TODO
export async function getProducts(): Promise<Product[]> {
	return client.fetch(
		groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
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
