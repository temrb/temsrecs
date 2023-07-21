/** @format */

import React, { useState, useEffect } from 'react';
import {
	MagnifyingGlassIcon,
	XMarkIcon,
	Cog6ToothIcon,
} from '@heroicons/react/24/solid';
import { useWindowSize } from 'usehooks-ts';

const Search = () => {
	type Category = 'Tech' | 'Lifestyle' | 'Essentials' | 'Fashion' | 'Home';
	const { width, height } = useWindowSize();
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null
	);
	const [menuOpen, setMenuOpen] = useState(false);
	const [hideMenu, setHideMenu] = useState(false);

	useEffect(() => {
		if (width && height) {
			if (width > 800) {
				setMenuOpen(true);
				setSelectedCategory(null);
				setHideMenu(false);
			} else {
				setMenuOpen(false);
				setHideMenu(true);
			}
		}
	}, [width, height]);

	const handleCategoryClick = (category: Category) => {
		setSelectedCategory(category);
	};

	return (
		<form className='md:w-3/5 space-y-4 pt-8 w-5/6 flex flex-col items-center justify-center'>
			<div className='w-full flex items-center space-x-2'>
				{hideMenu && (
					<button
						className='bg-bgAccentDark/10 dark:bg-bgAccentLight/10 
                rounded-xl p-2'
						onClick={() => setMenuOpen(!menuOpen)}
						type='button'
					>
						<Cog6ToothIcon className='h-6 w-6 flex' />
					</button>
				)}
				<input
					className='w-full primary-input flex'
					type='text'
					placeholder='Search'
					required
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
			{menuOpen && (
				<div className='md:flex flex-row sm:gap-4 gap-3 items-center justify-start w-full grid sm:grid-cols-3 grid-cols-2'>
					<button
						className={`secondary-button text-xs
						${selectedCategory === 'Tech' && 'bg-bgAccentDark/10 dark:bg-bgAccentLight/10'}
					`}
						onClick={() => {
							handleCategoryClick('Tech');
							if (width && width < 800) {
								menuOpen && setMenuOpen(false);
							}
						}}
						type='button'
					>
						Tech
					</button>
					<button
						className={`secondary-button text-xs
						${
							selectedCategory === 'Lifestyle' &&
							'bg-bgAccentDark/10 dark:bg-bgAccentLight/10'
						}
					`}
						onClick={() => {
							handleCategoryClick('Lifestyle');
							if (width && width < 800) {
								menuOpen && setMenuOpen(false);
							}
						}}
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
						onClick={() => {
							handleCategoryClick('Fashion');
							if (width && width < 800) {
								menuOpen && setMenuOpen(false);
							}
						}}
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
						onClick={() => {
							handleCategoryClick('Essentials');
							if (width && width < 800) {
								menuOpen && setMenuOpen(false);
							}
						}}
						type='button'
					>
						Essentials
					</button>
					<button
						className={`secondary-button text-xs
						${selectedCategory === 'Home' && 'bg-bgAccentDark/10 dark:bg-bgAccentLight/10'}
					`}
						onClick={() => {
							handleCategoryClick('Home');
							if (width && width < 800) {
								menuOpen && setMenuOpen(false);
							}
						}}
						type='button'
					>
						Home
					</button>
				</div>
			)}

			{selectedCategory !== null && (
				<div className='flex items-center justify-end w-full'>
					<button
						className='primary-button text-xs justify-end flex flex-row items-center space-x-1'
						onClick={() => {
							setSelectedCategory(null);
							if (width && width < 800) {
								menuOpen && setMenuOpen(false);
							}
						}}
						type='button'
					>
						<span className='text-sm'>{selectedCategory}</span>
						<XMarkIcon className='h-4 w-4 flex' />
					</button>
				</div>
			)}
		</form>
	);
};

export default Search;
