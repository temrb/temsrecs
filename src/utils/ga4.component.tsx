/** @format */
'use client';

import React, { useEffect } from 'react';
import { analytics } from '@/lib/firebaseConfig';

const Ga4 = ({ children }: { children: React.ReactNode }) => {
	useEffect(() => {
		analytics;
	}, []);

	return <>{children}</>;
};

export default Ga4;
