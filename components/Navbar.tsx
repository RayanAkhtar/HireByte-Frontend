'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Navbar = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<nav className='flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow-md'>
			<div className='flex items-center space-x-4'>
				<Link href='/' className='text-xl font-bold'>
					Student App
				</Link>
				<Link href='/cover-letter' className='text-lg'>
					Cover Letters
				</Link>
				<Link href='/cv-roasting' className='text-lg'>
					CV Roasting
				</Link>
				<Link href='/interview-assistant' className='text-lg'>
					AI Interview Assistant
				</Link>
			</div>
			<button
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				className='p-2 rounded-full bg-gray-200 dark:bg-gray-700'
			>
				{theme === 'dark' ? '🌙' : '🌞'}
			</button>
		</nav>
	);
};

export default Navbar;
