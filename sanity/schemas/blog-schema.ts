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
					{ title: 'Tech', value: 'Tech' },
					{ title: 'Software', value: 'Software' },
					{ title: 'Home', value: 'Home' },
					{ title: 'Essentials', value: 'Essentials' },
					{ title: 'Career', value: 'Career' },
					{ title: 'Health', value: 'Health' },
					{ title: 'Finance', value: 'Finance' },
					{ title: 'Travel', value: 'Travel' },
					{ title: 'Tutorials', value: 'Tutorials' },
					{ title: 'Other', value: 'Other' },
				],
			},
			validation: (Rule: any) => Rule.required(),
		},
		// use s3 for custom image upload
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
