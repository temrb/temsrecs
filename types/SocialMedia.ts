/** @format */

export type SocialMedia = {
	id: number;
	type:
		| 'tiktok'
		| 'facebook'
		| 'insta'
		| 'twitter'
		| 'youtube'
		| 'threads'
		| 'medium'
		| 'amazon';
	link: string;
};
