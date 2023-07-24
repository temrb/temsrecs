/** @format */

const product = {
	name: 'product',
	title: 'Products',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			placeholder: 'Product Name',
			validation: (Rule: any) => Rule.required(),
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
			validation: (Rule: any) => Rule.required(),
		},
	],
};

export default product;
