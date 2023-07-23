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
			validation: (Rule: any) => Rule.required(),
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

export default product;