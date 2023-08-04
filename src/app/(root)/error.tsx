/** @format */

'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import ErrorDisplay from '@/components/error-display';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<section className='flex w-full h-full justify-center items-center'>
			<ErrorDisplay errorText='Something went wrong!' reset={reset} />
		</section>
	);
}
