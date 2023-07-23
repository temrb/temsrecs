/** @format */

import { groq } from 'next-sanity';
import { client } from './lib/client';
import { Product } from '../types/Product';
import { Blog } from '../types/Blog';

//TODO
export async function getProjects(): Promise<Product[]> {
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

export async function getProject(slug: string): Promise<Product> {
	return client.fetch(
		groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
		{ slug }
	);
}

export async function getPages(): Promise<Blog[]> {
	return client.fetch(
		groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
	);
}

export async function getPage(slug: string): Promise<Blog> {
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
