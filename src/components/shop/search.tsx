/** @format */

import React, { useState, useEffect } from 'react';
import {
	Cog,
	Search as SearchIcon,
	X,
	GraduationCap,
	Rocket,
	Lamp,
	Headphones,
} from 'lucide-react';

import { useWindowSize } from 'usehooks-ts';

const Search = () => {
	type Category = 'Tech' | 'Essentials' | 'Home' | 'Career';
	const { width } = useWindowSize();
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null
	);
	const [menuOpen, setMenuOpen] = useState(false);
	const [hideMenu, setHideMenu] = useState(false);

	useEffect(() => {
		if (width) {
			if (width > 800) {
				setMenuOpen(true);
				setSelectedCategory(null);
				setHideMenu(false);
			} else {
				setMenuOpen(false);
				setHideMenu(true);
			}
		}
	}, [width]);

	const handleCategoryClick = (category: Category) => {
		setSelectedCategory(category);
	};

	return (
		<form className='md:w-3/5 space-y-4 p-4 pt-8 sm:w-5/6 w-full flex flex-col items-center justify-center'>
			<div className='w-full flex items-center space-x-2'>
				{hideMenu && (
					<button
						className='primary-button'
						onClick={() => setMenuOpen(!menuOpen)}
						type='button'
					>
						<Cog className='h-6 w-6' />
					</button>
				)}
				<input
					className='w-full primary-input flex'
					type='text'
					placeholder='Search'
					required
				/>
				<button
					className='primary-button'
					onClick={() => console.log('search')}
					type='submit'
				>
					<SearchIcon className='h-6 w-6' />
				</button>
			</div>
			{menuOpen && (
				<div className='md:flex flex-row sm:gap-4 gap-3 items-center justify-start w-fit grid grid-cols-3'>
					<button
						className={`select-button text-xs items-center flex space-x-2
						${selectedCategory === 'Tech' && 'select-button-active'}
					`}
						onClick={() => {
							handleCategoryClick('Tech');
							if (width && width < 800) {
								menuOpen && setMenuOpen(false);
							}
						}}
						type='button'
					>
						<Headphones className='h-4' />
						Tech
					</button>
					<button
						className={`select-button text-xs items-center flex space-x-2
						${selectedCategory === 'Home' && 'select-button-active'}
					`}
						onClick={() => {
							handleCategoryClick('Home');
							if (width && width < 800) {
								menuOpen && setMenuOpen(false);
							}
						}}
						type='button'
					>
						<Lamp className='h-4' />
						Home
					</button>
					<button
						className={`select-button text-xs items-center flex space-x-2
						${selectedCategory === 'Essentials' && 'select-button-active'}
					`}
						onClick={() => {
							handleCategoryClick('Essentials');
							if (width && width < 800) {
								menuOpen && setMenuOpen(false);
							}
						}}
						type='button'
					>
						<Rocket className='h-4' />
						Essentials
					</button>
					<button
						className={`select-button text-xs items-center flex space-x-2
						${selectedCategory === 'Career' && 'select-button-active'}
					`}
						onClick={() => {
							handleCategoryClick('Career');
							if (width && width < 800) {
								menuOpen && setMenuOpen(false);
							}
						}}
						type='button'
					>
						<GraduationCap className='h-4' />
						Career
					</button>
				</div>
			)}

			{selectedCategory !== null && (
				<div className='flex items-center justify-center w-full'>
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
						<X className='h-5 w-5 text-red-500' />
						<span className='text-sm'>{selectedCategory}</span>
					</button>
				</div>
			)}
		</form>
	);
};

export default Search;
