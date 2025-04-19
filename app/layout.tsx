import './globals.css';
import { ReactNode } from 'react';
import Providers from './providers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout ({ children }: { children: ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body>
				<Providers>
					<div className='min-h-screen flex flex-col'>
						<Navbar />
						<main className='flex-grow'>{children}</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
