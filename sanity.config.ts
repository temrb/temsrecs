/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 *
 * @format
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import { apiVersion, dataset, projectId } from './sanity/env';

import { schema } from './sanity/schemas/project-schema';

export default defineConfig({
	basePath: '/studio',
	projectId: 'cy5l095q',
	dataset: 'production',
	apiVersion: '2023-07-23',
	title: 'temsrecs',
	// Add and edit the content schema in the './sanity/schema' folder
	schema,
	plugins: [
		deskTool(),
		// Vision is a tool that lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
		visionTool({ defaultApiVersion: '2023-07-23' }),
	],
});
