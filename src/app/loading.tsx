/** @format */
'use client';

import React from 'react';
import LoadingSpinner from '@/utils/loading-spinner.component';

const Loading = () => {
	return (
		<div className='flex justify-center items-center h-full w-full'>
			<LoadingSpinner size='h-12' />
		</div>
	);
};

export default Loading;
