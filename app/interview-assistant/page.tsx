export default function InterviewAssistantPage () {
	return (
		<div className='p-8'>
			<h1 className='text-3xl font-bold text-center text-primary dark:text-white mb-8'>
				AI Interview Assistant
			</h1>
			<p className='text-center text-gray-600 dark:text-gray-300 mb-8'>
				Prepare for your next interview with AI-powered questions and feedback.
			</p>
			<textarea
				className='w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-md mb-4'
				rows={6}
				placeholder='Describe your role or interview position...'
			/>
			<button className='mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 w-full'>
				Start Interview Practice
			</button>
		</div>
	);
}
