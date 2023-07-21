/** @format */

import React, { useState } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Search = () => {
	type Category = 'tech' | 'lifestyle' | 'Essentials' | 'Fashion' | 'home';

	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null
	);
	const handleCategoryClick = (category: Category) => {
		setSelectedCategory(category);
	};

	return (
		<form className='md:w-3/5 space-y-4 pt-8 w-5/6 flex flex-col items-center justify-center'>
			<div className='w-full flex items-center space-x-2'>
				<input
					className='w-full primary-input flex'
					type='text'
					placeholder='Search'
				/>
				<button
					className='bg-bgAccentDark/10 dark:bg-bgAccentLight/10 
                rounded-xl p-2'
					onClick={() => console.log('search')}
					type='submit'
				>
					<MagnifyingGlassIcon className='h-6 w-6 flex' />
				</button>
			</div>
			<div className='md:flex flex-row gap-4 items-center justify-start w-full grid grid-cols-3'>
				<button
					className={`secondary-button text-xs
						${selectedCategory === 'tech' && 'bg-bgAccentDark/10 dark:bg-bgAccentLight/10'}
					`}
					onClick={() => handleCategoryClick('tech')}
					type='button'
				>
					Tech
				</button>
				<button
					className={`secondary-button text-xs
						${
							selectedCategory === 'lifestyle' &&
							'bg-bgAccentDark/10 dark:bg-bgAccentLight/10'
						}
					`}
					onClick={() => handleCategoryClick('lifestyle')}
					type='button'
				>
					Lifestyle
				</button>
				<button
					className={`secondary-button text-xs
						${
							selectedCategory === 'Fashion' &&
							'bg-bgAccentDark/10 dark:bg-bgAccentLight/10'
						}
					`}
					onClick={() => handleCategoryClick('Fashion')}
					type='button'
				>
					Fashion
				</button>
				<button
					className={`secondary-button text-xs
						${
							selectedCategory === 'Essentials' &&
							'bg-bgAccentDark/10 dark:bg-bgAccentLight/10'
						}
					`}
					onClick={() => handleCategoryClick('Essentials')}
					type='button'
				>
					Essentials
				</button>
				{selectedCategory !== null && (
					<button
						className='primary-button text-xs justify-center flex'
						onClick={() => setSelectedCategory(null)}
						type='button'
					>
						<XMarkIcon className='h-4 w-4 flex' />
					</button>
				)}
			</div>
		</form>
	);
};

export default Search;
