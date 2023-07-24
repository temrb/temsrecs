/** @format */

import { create } from 'zustand';
import { searchSlice } from './features/searchSlice';

export const useBoundStore = create(() => ({
	...searchSlice(),
}));
