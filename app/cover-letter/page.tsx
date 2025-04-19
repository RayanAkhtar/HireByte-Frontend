export default function CoverLetterPage () {
	return (
		<div className='p-8'>
			<h1 className='text-3xl font-bold text-center text-primary dark:text-white mb-8'>
				Create Cover Letters
			</h1>
			<p className='text-center text-gray-600 dark:text-gray-300 mb-8'>
				Start creating personalized cover letters for your job applications.
			</p>
			<div className='max-w-3xl mx-auto'>
				<textarea
					className='w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-md'
					rows={10}
					placeholder='Start writing your cover letter...'
				/>
				<button className='mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full'>
					Generate Cover Letters
				</button>
			</div>
		</div>
	);
}
