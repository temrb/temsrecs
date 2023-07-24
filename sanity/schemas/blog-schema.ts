/** @format */

const blog = {
	name: 'post',
	title: 'Blog Posts',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'title', maxLength: 96 },
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				list: [
					{ title: 'Tech', value: 'tech' },
					{ title: 'Home', value: 'home' },
					{ title: 'Essentials', value: 'essentials' },
					{ title: 'Career', value: 'career' },
					{ title: 'Health', value: 'health' },
					{ title: 'Finance', value: 'finance' },
					{ title: 'Travel', value: 'travel' },
					{ title: 'Tutorials', value: 'tutorials' },
					{ title: 'Other', value: 'other' },
				],
			},
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'imageLink',
			title: 'Product Image',
			type: 'url',
			placeholder: 'https://www.example.com/image.jpg',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'productLink',
			title: 'Product URL',
			type: 'url',
			placeholder: 'https://www.amazon.com',
			validation: (Rule: any) => Rule.required(),
		},
	],
};

export default blog;
