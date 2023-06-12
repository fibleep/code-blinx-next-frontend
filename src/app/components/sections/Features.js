const Features = () => {
	return (
		<div className='flex justify-center flex-col md:flex-row mx-auto h-screen lg:space-x-24'>
			<div class='bg-gradient-to-b from-primary to-secondary backdrop-filter backdrop-blur-lg w-96 h-96 rounded-2xl shadow-inner mx-auto border-2 border-white/50'>
                HEART
            </div>
			<div class='bg-white/50 backdrop-filter backdrop-blur-lg w-96 h-96 rounded-2xl shadow-inner mx-auto border-2 border-white/50'>
                SWIPE
            </div>
			<div class='bg-white/50 backdrop-filter backdrop-blur-lg w-96 h-96 rounded-2xl shadow-inner mx-auto border-2 border-white/50'>
                MASTER
            </div>
		</div>
	);
};

export default Features;
