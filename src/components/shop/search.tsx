/** @format */

import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const Search = () => {
	return (
		<form className='w-full flex pt-8 items-center justify-center'>
			<div className='md:w-3/5 w-3/4 flex items-center space-x-2'>
				<input
					className='w-full primary-input flex'
					type='text'
					placeholder='Search'
				/>
				<button
					className='bg-bgAccentDark/10 dark:bg-bgAccentLight/10 
                rounded-xl p-2'
					onClick={() => console.log('search')}
				>
					<MagnifyingGlassIcon className='h-6 w-6 flex' />
				</button>
			</div>
		</form>
	);
};

export default Search;
