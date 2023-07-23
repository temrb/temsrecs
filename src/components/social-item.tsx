/** @format */

import React, { ReactNode } from 'react';
import TikTokLogo from '../../public/logos/tiktok.logo';
import FacebookLogo from '../../public/logos/facebook.logo';
import InstaLogo from '../../public/logos/insta.logo';
import TwitterLogo from '../../public/logos/twitter.logo';
import YoutubeLogo from '../../public/logos/youtube.logo';
import ThreadsLogo from '../../public/logos/threads.logo';
import MediumLogo from '../../public/logos/medium.logo';
import AmazonLogo from '../../public/logos/amazon.logo';

interface Props {
	link: string;
	type:
		| 'tiktok'
		| 'facebook'
		| 'insta'
		| 'twitter'
		| 'youtube'
		| 'threads'
		| 'medium'
		| 'amazon';
}

const SocialItems = (props: Props) => {
	return (
		<button
			className='social-button'
			onClick={() => {
				window.open(props.link, '_blank');
			}}
		>
			{props.type === 'tiktok' ? (
				<TikTokLogo width={20} height={20} />
			) : props.type === 'facebook' ? (
				<FacebookLogo width={20} height={20} />
			) : props.type === 'insta' ? (
				<InstaLogo width={20} height={20} />
			) : props.type === 'twitter' ? (
				<TwitterLogo width={20} height={20} />
			) : props.type === 'youtube' ? (
				<YoutubeLogo width={20} height={20} />
			) : props.type === 'threads' ? (
				<ThreadsLogo width={20} height={20} />
			) : props.type === 'medium' ? (
				<MediumLogo width={20} height={20} />
			) : props.type === 'amazon' ? (
				<AmazonLogo width={20} height={20} />
			) : null}
		</button>
	);
};

export default SocialItems;
