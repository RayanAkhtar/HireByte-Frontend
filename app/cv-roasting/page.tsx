export default function CVRoastingPage () {
	return (
		<div className='p-8'>
			<h1 className='text-3xl font-bold text-center text-primary dark:text-white mb-8'>
				CV Roasting
			</h1>
			<p className='text-center text-gray-600 dark:text-gray-300 mb-8'>
				Upload your CV for instant feedback and improvement tips.
			</p>
			<div className='max-w-3xl mx-auto'>
				<input
					type='file'
					className='block w-full p-4 border-2 border-gray-300 dark:border-gray-600 rounded-md'
				/>
				<button className='mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 w-full'>
					Roast My CV
				</button>
			</div>
		</div>
	);
}
