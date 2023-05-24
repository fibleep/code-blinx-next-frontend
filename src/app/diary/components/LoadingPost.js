const LoadingPost = () => {
	return (
		<div className='bg-gradient-to-r from-secondary to-accent rounded-xl p-8 text-background text-xl w-full'>
			<div className='animate-pulse flex justify-between'>
				<div className='h-2 w-52 bg-slate-700 rounded'></div>
				<div className='h-2 w-24 bg-slate-700 rounded'></div>
			</div>
		</div>
	);
};

export default LoadingPost;
