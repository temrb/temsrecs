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
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'image',
			title: 'Image',
			type: 'object',
			validation: (Rule: any) => Rule.required(),
			fields: [
				{
					name: 'url',
					title: 'Product Image',
					type: 'url',
				},
				{
					name: 'alt',
					title: 'Alt',
					type: 'string',
				},
			],
		},
		{
			name: 'url',
			title: 'Product URL',
			type: 'url',
			validation: (Rule: any) => Rule.required(),
		},
	],
};

export default blog;
