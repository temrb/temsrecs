/** @format */

import Products from '@/components/products';
import Search from '@/components/search';

export default function Page() {
	return (
		<section className='w-full justify-center flex flex-col items-center'>
			<Search />
			<Products />
		</section>
	);
}
