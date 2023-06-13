import { Spotlight, SpotlightCard } from "../style/Spotlight";
const FeatureCard = ({ image, text, description }, props) => {
	return (
		<Spotlight className='max-w-sm mx-auto items-start lg:max-w-none group h-3/6 w-full'>
			<SpotlightCard>
				<div className='relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden flex flex-col justify-between'>
					<div className='h-3/6'>
						<div className='relative inline-flex justify-center items-center h-full w-full'>
							<div
								className='w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600'
								aria-hidden='true'></div>
							{image}
						</div>
					</div>
					<div className='h-1/6 flex items-center justify-center'>
						<span className='text-2xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-secondary font-bold align-text-bottom group-hover:scale-105 transition-all duration-500'>
							{text}
						</span>
					</div>
					<div className='h-2/6'>
						<span className='text-gray-400 text-left text-md w-10/12 mx-auto'>{description}</span>
					</div>
				</div>
			</SpotlightCard>
		</Spotlight>
	);
};
export default FeatureCard;
