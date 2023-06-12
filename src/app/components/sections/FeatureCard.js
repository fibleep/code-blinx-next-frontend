import Image from "next/image";
import { Spotlight, SpotlightCard } from "../style/Spotlight";
const FeatureCard = ({ image, text }, props) => {
	return (
		<Spotlight className='max-w-sm mx-auto items-start lg:max-w-none group h-2/6 w-full'>
			<SpotlightCard>
				<div className='relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden'>
					<div
						className='absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square'
						aria-hidden='true'>
						<div className='absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]'></div>
					</div>
					<div className='flex flex-col h-full items-center text-center justify-between'>
						<div className='relative inline-flex h-6/12 mt-12'>
							<div
								className='w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600'
								aria-hidden='true'></div>
							{image}
						</div>
						<span className='text-2xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-secondary font-bold align-text-bottom group-hover:scale-105 transition-all duration-500'>
							{text}
						</span>
					</div>
				</div>
			</SpotlightCard>
		</Spotlight>
	);
};

export default FeatureCard;
