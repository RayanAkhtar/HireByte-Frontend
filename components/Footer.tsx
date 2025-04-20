const Footer = () => {
	return (
		<footer className='px-6 py-4 bg-[var(--background)] text-[var(--foreground)] dark:text-[var(--foreground)] shadow-md border-t-[0.5px] border-zinc-200 dark:border-zinc-700 rounded-t-xl transition'>
			<div className='max-w-7xl mx-auto text-center'>
				<p className='text-sm text-[var(--primary)]'>
					&copy; 2025 HireByte. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
