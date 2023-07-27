/** @format */

import { create } from 'zustand';

interface SearchSlice {
	categoryType: string | null;
	setCategoryType: (categoryType: string | null) => void;
	searchTerm: string | null;
	setSearchTerm: (searchTerm: string) => void;
	page: number;
	setPage: (page: number) => void;
	resetPage: () => void;
}

export const searchSlice = create<SearchSlice>((set) => ({
	categoryType: null,
	setCategoryType: (categoryType) => set({ categoryType }),
	searchTerm: null,
	setSearchTerm: (searchTerm) => set({ searchTerm }),
	page: 0,
	setPage: (page) => set({ page }),
	resetPage: () => set({ page: 0 }),
}));
