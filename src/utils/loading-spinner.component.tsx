/** @format */

import React from 'react';
import { Loader } from 'lucide-react';

interface Props {
	size: string;
}

const LoadingSpinner = ({ size }: Props) => {
	return (
		<div className='flex justify-center items-center w-full h-full'>
			<Loader className={size} />
		</div>
	);
};

export default LoadingSpinner;
