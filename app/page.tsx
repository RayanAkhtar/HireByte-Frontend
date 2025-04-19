export default function Home () {
	return (
		<div className='p-8'>
			<header className='text-center space-y-6'>
				<h1 className='text-4xl font-bold text-primary dark:text-white'>
					Welcome to Student App
				</h1>
				<p className='text-lg text-gray-600 dark:text-gray-300'>
					Create cover letters in bulk, roast your CVs, and get AI-powered interview
					assistance all in one place.
				</p>
				<div className='space-x-4'>
					<a
						href='/cover-letter'
						className='inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700'
					>
						Create Cover Letters
					</a>
					<a
						href='/cv-roasting'
						className='inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700'
					>
						Roast Your CV
					</a>
				</div>
			</header>

			<section className='mt-12 text-center'>
				<h2 className='text-2xl font-semibold text-primary dark:text-white mb-6'>
					Why Choose Us?
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					<div className='bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold'>Bulk Cover Letters</h3>
						<p>Create multiple personalized cover letters in just a few clicks.</p>
					</div>
					<div className='bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold'>CV Roasting</h3>
						<p>Get instant feedback and tips to improve your CV.</p>
					</div>
					<div className='bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md'>
						<h3 className='text-xl font-semibold'>AI Interview Assistant</h3>
						<p>Prepare for interviews with AI-generated questions and feedback.</p>
					</div>
				</div>
			</section>
		</div>
	);
}
