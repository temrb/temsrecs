/** @format */
'use client';

import React, { useState, useEffect, ReactNode } from 'react';
import {
	Cog,
	X,
	GraduationCap,
	SprayCan,
	Lamp,
	Headphones,
	CircleEllipsis,
	Brain,
	Cpu,
	Shirt,
	HeartPulse,
} from 'lucide-react';

import { useWindowSize } from 'usehooks-ts';
type Category =
	| 'Tech'
	| 'Software'
	| 'Essentials'
	| 'Lifestyle'
	| 'Health'
	| 'Home'
	| 'Career'
	| 'Tutorials'
	| 'Other';

import { searchSlice } from '@/zustand/features/searchSlice';
import { debounce } from 'lodash';

const Search = () => {
	const debouncedSetSearchTerm = debounce((value) => setSearchTerm(value), 500);
	const resetPage = searchSlice((state) => state.resetPage);

	const categories: { id: number; name: Category; icon: ReactNode }[] = [
		{ id: 1, name: 'Software', icon: <Cpu className='h-4' /> },
		{ id: 2, name: 'Career', icon: <GraduationCap className='h-4' /> },
		{ id: 3, name: 'Tutorials', icon: <Brain className='h-4' /> },
		{ id: 4, name: 'Tech', icon: <Headphones className='h-4' /> },
		{ id: 5, name: 'Essentials', icon: <SprayCan className='h-4' /> },
		{ id: 6, name: 'Lifestyle', icon: <Shirt className='h-4' /> },
		{ id: 7, name: 'Health', icon: <HeartPulse className='h-4' /> },
		{ id: 8, name: 'Home', icon: <Lamp className='h-4' /> },
		{ id: 9, name: 'Other', icon: <CircleEllipsis className='h-4' /> },
	];
	const { width } = useWindowSize();
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null
	);
	const [menuOpen, setMenuOpen] = useState(false);
	const [hideMenu, setHideMenu] = useState(false);
	const setCategoryType = searchSlice((state) => state.setCategoryType);
	const setSearchTerm = searchSlice((state) => state.setSearchTerm);

	useEffect(() => {
		if (width) {
			if (width >= 1024) {
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
		setCategoryType(category);
		resetPage();
	};

	const CategoryButton = ({
		category,
		icon,
	}: {
		category: Category;
		icon: ReactNode;
	}) => (
		<button
			className={`select-button text-xs items-center flex space-x-2 ${
				selectedCategory === category && 'select-button-active'
			}`}
			onClick={() => handleCategoryClick(category)}
			type='button'
		>
			{icon}
			{category}
		</button>
	);

	return (
		<div className='lg:w-3/5 md:w-5/6 space-y-4 p-4 pt-8 w-full flex flex-col items-center justify-center'>
			<div className='w-full flex items-center space-x-2'>
				<input
					className='w-full primary-input flex'
					type='text'
					placeholder='🔍 Search'
					onChange={(event) => {
						debouncedSetSearchTerm(event.target.value);
						resetPage();
					}}
					required
				/>
				{hideMenu && (
					<button
						className='primary-button'
						onClick={() => setMenuOpen(!menuOpen)}
						type='button'
					>
						<Cog className='h-6 w-6' />
					</button>
				)}
			</div>
			{menuOpen && (
				<div className='lg:flex flex-row sm:gap-4 gap-3 items-center justify-start w-fit grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3'>
					{categories?.map((category) => (
						<CategoryButton
							key={category.id}
							category={category.name}
							icon={category.icon}
						/>
					))}
				</div>
			)}

			{selectedCategory !== null && (
				<div className='flex items-center justify-center w-full'>
					<button
						className='primary-button text-xs justify-end flex flex-row items-center space-x-1'
						onClick={() => {
							setSelectedCategory(null);
							if (!menuOpen) {
								setMenuOpen(false);
							}
							setCategoryType(null);
							resetPage();
						}}
						type='button'
					>
						<X className='h-5 w-5 text-red-500' />
						<span className='text-sm'>{selectedCategory}</span>
					</button>
				</div>
			)}
		</div>
	);
};

export default Search;
