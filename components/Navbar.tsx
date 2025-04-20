'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { LogIn, UserPlus, Moon, Sun, Palette } from 'lucide-react';

const Navbar = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [colorPalette, setColorPalette] = useState('default'); // State for current color palette
	const [isPaletteOpen, setIsPaletteOpen] = useState(false); // State for dropdown visibility

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleThemeChange = (newTheme: string) => {
		setTheme(newTheme);
	};

	// Function to change color palette based on selection
	const handleColorPaletteChange = (palette: string) => {
		setColorPalette(palette);
		document.documentElement.setAttribute('data-color-palette', palette);
		setIsPaletteOpen(false); // Close the palette after selecting
	};

	// Toggle palette dropdown visibility
	const togglePaletteMenu = () => {
		setIsPaletteOpen(!isPaletteOpen);
	};

	if (!mounted) return null;

	return (
		<nav className='px-6 py-4 bg-beige-50 dark:bg-zinc-900 shadow-md rounded-b-3xl border-b border-beige-200 dark:border-zinc-700'>
			<div className='max-w-7xl mx-auto flex justify-between items-center'>
				{/* Left - Logo & Nav */}
				<div className='flex items-center gap-10'>
					<Link
						href='/'
						className='text-3xl font-bold text-teal-600 dark:text-teal-300 tracking-tight'
					>
						StudentApp
					</Link>
					<div className='hidden md:flex gap-6 text-[15px] font-medium text-zinc-700 dark:text-zinc-300'>
						<Link
							href='/cover-letter'
							className='hover:text-teal-500 dark:hover:text-teal-400 transition'
						>
							Cover Letters
						</Link>
						<Link
							href='/cv-roasting'
							className='hover:text-teal-500 dark:hover:text-teal-400 transition'
						>
							CV Roasting
						</Link>
						<Link
							href='/interview-assistant'
							className='hover:text-teal-500 dark:hover:text-teal-400 transition'
						>
							AI Assistant
						</Link>
					</div>
				</div>

				{/* Right - Theme & Auth */}
				<div className='flex items-center gap-4'>
					{/* Theme toggle */}
					<button
						onClick={() => handleThemeChange(theme === 'dark' ? 'light' : 'dark')}
						className='p-2 rounded-xl bg-white dark:bg-zinc-800 text-teal-600 dark:text-teal-300 shadow-sm hover:scale-105 transition'
					>
						{theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
					</button>

					{/* Color Palette Picker */}
					<div className='relative'>
						<button
							onClick={togglePaletteMenu}
							className='p-2 rounded-xl bg-white dark:bg-zinc-800 text-teal-600 dark:text-teal-300 shadow-sm hover:scale-105 transition'
						>
							<Palette size={18} />
						</button>
						{/* Color Palette Dropdown */}
						{isPaletteOpen && (
							<div className='absolute right-0 bg-white dark:bg-zinc-800 p-2 rounded-md shadow-md mt-2 w-40'>
								<ul className='space-y-2'>
									{/* Default Theme Preview */}
									<li>
										<button
											className='flex items-center gap-2 text-teal-600 dark:text-teal-300'
											onClick={() => handleColorPaletteChange('default')}
										>
											<div className='w-4 h-4 rounded-full bg-teal-600'></div>
											Default
										</button>
									</li>
									{/* Pastel Theme Preview */}
									<li>
										<button
											className='flex items-center gap-2 text-teal-600 dark:text-teal-300'
											onClick={() => handleColorPaletteChange('pastel')}
										>
											<div className='w-4 h-4 rounded-full bg-pink-300'></div>
											Pastel
										</button>
									</li>
									{/* Vibrant Theme Preview */}
									<li>
										<button
											className='flex items-center gap-2 text-teal-600 dark:text-teal-300'
											onClick={() => handleColorPaletteChange('vibrant')}
										>
											<div className='w-4 h-4 rounded-full bg-orange-600'></div>
											Vibrant
										</button>
									</li>
									{/* Crimson Theme Preview */}
									<li>
										<button
											className='flex items-center gap-2 text-teal-600 dark:text-teal-300'
											onClick={() => handleColorPaletteChange('crimson')}
										>
											<div className='w-4 h-4 rounded-full bg-red-600'></div>
											Crimson
										</button>
									</li>
									{/* Cyberpunk Theme Preview */}
									<li>
										<button
											className='flex items-center gap-2 text-teal-600 dark:text-teal-300'
											onClick={() => handleColorPaletteChange('cyberpunk')}
										>
											<div className='w-4 h-4 rounded-full bg-pink-600'></div>
											Cyberpunk
										</button>
									</li>
									{/* Muted Earth Theme Preview */}
									<li>
										<button
											className='flex items-center gap-2 text-teal-600 dark:text-teal-300'
											onClick={() => handleColorPaletteChange('earth')}
										>
											<div className='w-4 h-4 rounded-full bg-green-500'></div>
											Earth
										</button>
									</li>
								</ul>
							</div>
						)}
					</div>

					{/* Auth */}
					<Link
						href='/login'
						className='flex items-center gap-1 text-sm px-4 py-2 rounded-xl bg-white border border-beige-200 text-teal-600 dark:bg-zinc-800 dark:border-zinc-600 dark:text-teal-300 hover:bg-beige-100 dark:hover:bg-zinc-700 transition'
					>
						<LogIn size={16} />
						Login
					</Link>
					<Link
						href='/signup'
						className='flex items-center gap-1 text-sm px-4 py-2 rounded-xl bg-teal-600 text-white hover:bg-teal-700 transition shadow'
					>
						<UserPlus size={16} />
						Sign Up
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
