const BackgroundBlur = () => {
	return (
		<div
			class='w-96 h-96 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 to-secondary blur'
			style={{ filter: "blur(200px)" }}></div>
	);
};

export default BackgroundBlur;
