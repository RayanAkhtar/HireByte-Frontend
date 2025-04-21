'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { LogIn, UserPlus, Moon, Sun, Palette } from 'lucide-react';

const Navbar = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [isPaletteOpen, setIsPaletteOpen] = useState(false);

	useEffect(() => {
		setMounted(true);

		const savedPalette = localStorage.getItem('color-palette');
		if (savedPalette) {
			document.documentElement.setAttribute('data-color-palette', savedPalette);
		}
	}, []);

	const handleThemeChange = (newTheme: string) => {
		setTheme(newTheme);
	};

	const handleColorPaletteChange = (palette: string) => {
		document.documentElement.setAttribute('data-color-palette', palette);
		localStorage.setItem('color-palette', palette);
		setIsPaletteOpen(false);
	};

	const togglePaletteMenu = () => {
		setIsPaletteOpen(!isPaletteOpen);
	};

	if (!mounted) {
		return (
			<nav
				className={`px-6 py-4 bg-[var(--background)] shadow-md rounded-b-3xl border-b border-zinc-200 dark:border-zinc-700
	transition-opacity duration-500 ease-in-out ${
		mounted ? 'opacity-100 delay-150' : 'opacity-0 pointer-events-none'
	}`}
			>
				<div className='max-w-7xl mx-auto flex justify-between items-center'>
					{!mounted ? (
						// Skeleton shimmer while mounting
						<>
							<div className='animate-pulse w-1/3 h-6 bg-zinc-200 dark:bg-zinc-700 rounded'></div>
							<div className='flex gap-2'>
								<div className='w-8 h-8 rounded-xl bg-zinc-200 dark:bg-zinc-700 animate-pulse'></div>
								<div className='w-8 h-8 rounded-xl bg-zinc-200 dark:bg-zinc-700 animate-pulse'></div>
								<div className='w-20 h-8 rounded-xl bg-zinc-200 dark:bg-zinc-700 animate-pulse'></div>
							</div>
						</>
					) : (
						// Your full navbar JSX here
						<>
							{/* Left - Logo & Nav */}
							<div className='flex items-center gap-10'>
								<Link
									href='/'
									className='text-3xl font-bold tracking-tight'
									style={{ color: 'var(--primary)' }}
								>
									HireByte
								</Link>
								<div className='hidden md:flex gap-6 text-[15px] font-medium text-[var(--foreground)]'>
									<Link
										href='/cover-letter'
										className='hover:text-[var(--secondary)] transition'
									>
										Cover Letters
									</Link>
									<Link
										href='/cv-roasting'
										className='hover:text-[var(--secondary)] transition'
									>
										CV Roasting
									</Link>
									<Link
										href='/interview-assistant'
										className='hover:text-[var(--secondary)] transition'
									>
										AI Assistant
									</Link>
								</div>
							</div>
						</>
					)}
				</div>
			</nav>
		);
	}

	return (
		<nav className='px-6 py-4 bg-[var(--background)] shadow-md rounded-b-3xl border-b border-zinc-200 dark:border-zinc-700 transition'>
			<div className='max-w-7xl mx-auto flex justify-between items-center'>
				{/* Left - Logo & Nav */}
				<div className='flex items-center gap-10'>
					<Link
						href='/'
						className='text-3xl font-bold tracking-tight'
						style={{ color: 'var(--primary)' }}
					>
						HireByte
					</Link>
					<div className='hidden md:flex gap-6 text-[15px] font-medium text-[var(--foreground)]'>
						<Link
							href='/cover-letter'
							className='hover:text-[var(--secondary)] transition'
						>
							Cover Letters
						</Link>
						<Link
							href='/cv-roasting'
							className='hover:text-[var(--secondary)] transition'
						>
							CV Roasting
						</Link>
						<Link
							href='/interview-assistant'
							className='hover:text-[var(--secondary)] transition'
						>
							AI Assistant
						</Link>
					</div>
				</div>

				{/* Right - Theme & Auth */}
				<div className='flex items-center gap-4'>
					<button
						onClick={() => handleThemeChange(theme === 'dark' ? 'light' : 'dark')}
						className='p-2 rounded-xl bg-[var(--background-secondary)] text-[var(--primary)] shadow-sm hover:scale-105 transition'
					>
						{theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
					</button>

					{/* Palette Picker */}
					<div className='relative'>
						<button
							onClick={togglePaletteMenu}
							className='p-2 rounded-xl bg-[var(--background-secondary)] text-[var(--primary)] shadow-sm hover:scale-105 transition'
						>
							<Palette size={18} />
						</button>
						{isPaletteOpen && (
							<div className='absolute right-0 bg-[var(--background-secondary)] p-2 rounded-md shadow-md mt-2 w-40 z-10'>
								<ul className='space-y-2'>
									{[
										{ name: 'Default', value: 'default', color: 'bg-teal-400' },
										{ name: 'Pastel', value: 'pastel', color: 'bg-pink-300' },
										{ name: 'Vibrant', value: 'vibrant', color: 'bg-orange-600' },
										{ name: 'Crimson', value: 'crimson', color: 'bg-red-600' },
										{ name: 'Cyberpunk', value: 'cyberpunk', color: 'bg-pink-600' },
										{ name: 'Earth', value: 'earth', color: 'bg-green-500' },
									].map(palette => (
										<li key={palette.value}>
											<button
												onClick={() => handleColorPaletteChange(palette.value)}
												className='flex items-center gap-2 text-[var(--primary)]'
											>
												<div className={`w-4 h-4 rounded-full ${palette.color}`}></div>
												{palette.name}
											</button>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>

					{/* Auth Buttons */}
					<Link
						href='/login'
						className='flex items-center gap-1 text-sm px-4 py-2 rounded-xl bg-[var(--background)] border border-[var(--primary)] text-[var(--primary)] hover:text-[var(--background)] hover:bg-[var(--primary)] transition'
					>
						<LogIn size={16} />
						Login
					</Link>

					<Link
						href='/signup'
						className='flex items-center gap-1 text-sm px-4 py-2 rounded-xl bg-[var(--primary)] text-zinc-100 hover:bg-[var(--secondary)] transition shadow'
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
