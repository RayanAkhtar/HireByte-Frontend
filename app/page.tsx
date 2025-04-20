export default function Home () {
	return (
		<div className='p-8 bg-[var(--background)] text-[var(--foreground)] font-sans'>
			{/* Hero Section with Login/Sign Up Prominent */}
			<section className='relative py-32 bg-[var(--background-primary)] text-center rounded-lg shadow-lg'>
				<h1 className='text-6xl font-extrabold text-primary dark:text-primary mb-6'>
					Welcome to HireByte
				</h1>
				<p className='text-xl text-secondary dark:text-gray-300 mb-12'>
					The all-in-one platform for job seekers: bulk cover letters, CV roasting,
					and AI interview assistance.
				</p>

				<div className='space-x-6 mb-12'>
					<a
						href='/cover-letter'
						className='inline-block px-8 py-4 bg-[var(--primary)] text-white rounded-full hover:bg-[var(--secondary)] transition duration-300 transform hover:scale-105'
					>
						Create Cover Letters
					</a>
					<a
						href='/cv-roasting'
						className='inline-block px-8 py-4 bg-[var(--primary)] text-white rounded-full hover:bg-[var(--secondary)] transition duration-300 transform hover:scale-105'
					>
						Roast Your CV
					</a>
				</div>

				{/* Floating Login/Signup Section */}
				<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 space-x-4'>
					<a
						href='/login'
						className='inline-block px-6 py-3 bg-[var(--primary)] text-white rounded-full shadow-xl hover:bg-[var(--secondary)] transition'
					>
						Login
					</a>
					<a
						href='/signup'
						className='inline-block px-6 py-3 bg-[var(--secondary)] text-white rounded-full shadow-xl hover:bg-[var(--primary)] transition'
					>
						Sign Up
					</a>
				</div>
			</section>

			{/* Stats Section with Larger Cards and Realistic Numbers */}
			<section className='mt-24 text-center'>
				<h2 className='text-3xl font-semibold text-primary dark:text-primary mb-12'>
					Join Over 20,000 Job Seekers Already Using HireByte
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12'>
					<div className='bg-[var(--background-secondary)] dark:bg-[var(--background-secondary)] p-12 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[var(--border)]'>
						<h3 className='text-3xl font-semibold text-primary dark:text-primary mb-4'>
							25,000+ Cover Letters Created
						</h3>
						<p>
							Our users have created over 25,000 personalized cover letters to apply
							for jobs.
						</p>
					</div>
					<div className='bg-[var(--background-secondary)] dark:bg-[var(--background-secondary)] p-12 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[var(--border)]'>
						<h3 className='text-3xl font-semibold text-primary dark:text-primary mb-4'>
							15,000+ CVs Roasted
						</h3>
						<p>
							Over 15,000 CVs roasted with feedback that helped users land more
							interviews.
						</p>
					</div>
					<div className='bg-[var(--background-secondary)] dark:bg-[var(--background-secondary)] p-12 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[var(--border)]'>
						<h3 className='text-3xl font-semibold text-primary dark:text-primary mb-4'>
							8,500+ AI Interviews Simulated
						</h3>
						<p>
							Over 8,500 simulated interviews conducted to prepare users for real-life
							interviews.
						</p>
					</div>
					<div className='bg-[var(--background-secondary)] dark:bg-[var(--background-secondary)] p-12 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[var(--border)]'>
						<h3 className='text-3xl font-semibold text-primary dark:text-primary mb-4'>
							What Our Users Are Saying
						</h3>
						<p className='italic'>
							"HireByte made my job application process so much easier. I got my dream
							job thanks to the cover letters and CV feedback!"
						</p>
						<p className='mt-4 text-right text-[var(--foreground-secondary)]'>
							- Jane D., Software Engineer
						</p>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className='mt-32 text-center'>
				<h2 className='text-3xl font-semibold text-primary dark:text-primary mb-12'>
					Why Choose Us?
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12'>
					{/* Card 1 */}
					<div className='bg-[var(--background-secondary)] dark:bg-[var(--background-secondary)] p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[var(--border)]'>
						<h3 className='text-2xl font-semibold text-primary dark:text-primary mb-4'>
							All-in-One Job Application Tool
						</h3>
						<p>
							Save time and effort with a platform that helps you create cover letters,
							improve your CV, and prepare for interviews in one place.
						</p>
					</div>

					{/* Card 2 */}
					<div className='bg-[var(--background-secondary)] dark:bg-[var(--background-secondary)] p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[var(--border)]'>
						<h3 className='text-2xl font-semibold text-primary dark:text-primary mb-4'>
							Data-Driven CV Feedback
						</h3>
						<p>
							Receive personalized, data-backed feedback to make your CV stand out from
							the crowd and land more interviews.
						</p>
					</div>

					{/* Card 3 */}
					<div className='bg-[var(--background-secondary)] dark:bg-[var(--background-secondary)] p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[var(--border)]'>
						<h3 className='text-2xl font-semibold text-primary dark:text-primary mb-4'>
							AI-Powered Interview Prep
						</h3>
						<p>
							Practice for interviews with AI-powered simulated questions that help you
							improve your responses and get real-time feedback.
						</p>
					</div>

					{/* Card 4 */}
					<div className='bg-[var(--background-secondary)] dark:bg-[var(--background-secondary)] p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[var(--border)]'>
						<h3 className='text-2xl font-semibold text-primary dark:text-primary mb-4'>
							Instant and Easy Setup
						</h3>
						<p>
							Get started quickly with no complicated processes. Everything is designed
							to be user-friendly, so you can focus on landing your dream job.
						</p>
					</div>
				</div>
			</section>

			{/* Call-to-Action Section (Newsletter) */}
			<section className='mt-24 bg-[var(--background-primary)] text-center py-16 rounded-xl shadow-xl'>
				<h2 className='text-3xl font-semibold text-primary dark:text-primary mb-6'>
					Stay Updated!
				</h2>
				<p className='text-lg text-secondary dark:text-gray-300 mb-8'>
					Subscribe to our newsletter and be the first to know about new features,
					tips, and career advice.
				</p>
				<div className='flex justify-center space-x-4'>
					<input
						type='email'
						placeholder='Enter your email'
						className='px-6 py-3 rounded-full border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]'
					/>
					<button className='px-8 py-3 bg-[var(--primary)] text-white rounded-full hover:bg-[var(--secondary)] transition duration-300 transform hover:scale-105'>
						Subscribe
					</button>
				</div>
			</section>
		</div>
	);
}
