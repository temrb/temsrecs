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
		{
			name: 'productLink',
			title: 'Product URL',
			type: 'url',
			placeholder: 'https://www.amazon.com',
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: 'imageLink',
			title: 'Product Image',
			type: 'url',
			placeholder: 'https://www.example.com/image.jpg',
			validation: (Rule: any) => Rule.required(),
		},
	],
};

export default product;
