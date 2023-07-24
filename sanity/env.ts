/** @format */

export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-07-23';

export const dataset = assertValue(
	// process.env.NEXT_PUBLIC_SANITY_DATASET,
	'production',
	'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
	// process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	'cy5l095q',
	'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

export const useCdn = true;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
	if (v === undefined) {
		throw new Error(errorMessage);
	}

	return v;
}
