/** @format */

import React from 'react';

interface Props {
	reset?: () => void;
	errorText: string;
}

const ErrorDisplay = (props: Props) => {
	return (
		<div className='bg-red-100 shadow-lg ring-4 ring-red-400 dark:ring-red-200 dark:bg-red-500 text-center p-4 rounded-xl space-y-4'>
			<h1 className='text-4xl font-bold'>😢😢😢</h1>
			<h2 className='text-2xl font-semibold'>{props.errorText}</h2>
			{props.reset && (
				<button
					onClick={
						// Attempt to recover by trying to re-render the segment
						() => props.reset!()
					}
					className='button'
				>
					Try again
				</button>
			)}
		</div>
	);
};

export default ErrorDisplay;
