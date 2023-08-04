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
			name: 'coverImage',
			title: 'Cover Image',
			type: 'url',
			placeholder: 'https://www.example.com/image.jpg',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [
				{ type: 'block' },
				{
					name: 'BodyImage',
					title: 'Body Image',
					type: 'object',
					fields: [
						{
							name: 'url',
							type: 'url',
							title: 'Image URL',
							validation: (Rule: any) =>
								Rule.required().uri({ scheme: ['https'] }),
						},
						{
							name: 'alt',
							type: 'string',
							title: 'Alternative text',
						},
					],
				},
				{
					name: 'BodyVideo',
					title: 'Body Video',
					type: 'object',
					fields: [
						{
							name: 'url',
							title: 'Video URL',
							type: 'url',
							validation: (Rule: any) =>
								Rule.required().uri({ scheme: ['https'] }),
						},
						{
							name: 'caption',
							title: 'Caption',
							type: 'string',
						},
					],
				},
				{
					name: 'productLinkObject',
					title: 'Product Link',
					type: 'object',
					fields: [
						{
							name: 'productLink',
							title: 'Product URL',
							type: 'url',
							placeholder: 'https://www.amazon.com',
							validation: (Rule: any) =>
								Rule.required().uri({ scheme: ['https'] }),
						},
					],
				},
			],
		},
		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				list: [
					{ title: 'Tech', value: 'Tech' },
					{ title: 'Software', value: 'Software' },
					{ title: 'Home', value: 'Home' },
					{ title: 'Essentials', value: 'Essentials' },
					{ title: 'Lifestyle', value: 'Lifestyle' },
					{ title: 'Health', value: 'Health' },
					{ title: 'Career', value: 'Career' },
					{ title: 'Tutorials', value: 'Tutorials' },
					{ title: 'Other', value: 'Other' },
				],
			},
			validation: (Rule: any) => Rule.required(),
		},
	],
};

export default blog;
