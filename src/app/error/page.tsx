import Link from "next/link";

const ErrorPage = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen bg-gray-900 text-white'>
			<h1 className='text-4xl font-bold mb-4'>
				Oops! Something Went Wrong
			</h1>
			<p className='text-sm mb-8'>
				We&apos;re sorry, but it seems like there was an issue with your
				credentials. Incorrect Email or Password
			</p>
			<Link
				href='/'
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
				Go Back
			</Link>
		</div>
	);
};

export default ErrorPage;
