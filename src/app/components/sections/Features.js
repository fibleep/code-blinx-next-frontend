import Card from "../svg/Card";
import Heart from "../svg/Heart";
import Star from "../svg/Star";
import FeatureCard from "./FeatureCard";
const Features = () => {
	return (
		<div className='flex justify-center flex-col lg:flex-row mx-24 space-y-12 lg:space-y-0 lg:space-x-12 h-screen mt-24'>
			<FeatureCard
				image={
					<Heart
						className='lg:w-[100px] lg:h-[100px] w-[80px] h-[80px]'
					/>
				}
				description="Save the topics you're interested in, access them faster and curate your notifications."
				text='BOOKMARK'
			/>
			<FeatureCard
				image={
					<Card
					className='animate-card border-4 border-primary/20 rounded-lg bg-slate-900 lg:w-[100px] lg:h-[100px] w-[80px] h-[80px] '
					fill='primary'
					/>
				}
				description='Digestible content, easy to read and understand with a satisfying UI.'
				text='SWIPE'
				/>
			<FeatureCard
				image={
					<>
						<Star
							className='animate-star mx-1 lg:w-[50px] lg:h-[50px] w-[50px] h-[50px]'
						/>
						<Star
							className='animate-star mx-1 lg:w-[50px] lg:h-[50px] w-[50px] h-[50px] '
						/>
						<Star
							className='animate-star mx-1 lg:w-[50px] lg:h-[50px] w-[50px] h-[50px] '
							/>
					</>
				}
				description='Progress through the levels and become a master of your craft.'
				text='MASTER'
			/>
		</div>
	);
};

export default Features;
