const LoadingPost = () => {
	return (
		<div className='bg-gradient-to-r from-secondary to-accent rounded-xl p-8 text-background text-xl w-full'>
			<div class='animate-pulse flex justify-between'>
				<div class='h-2 w-52 bg-slate-700 rounded'></div>
				<div class='h-2 w-24 bg-slate-700 rounded'></div>
			</div>
		</div>
	);
};

export default LoadingPost;
