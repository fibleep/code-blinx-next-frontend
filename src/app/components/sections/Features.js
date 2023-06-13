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
						className='animate-like lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] '
						fill='gray'
					/>
				}
				description="Save the topics you're interested in, access them faster and curate your notifications."
				text='BOOKMARK'
			/>
			<FeatureCard
				image={
					<Card
					className='animate-card border-4 border-primary/20 rounded-lg bg-slate-900 lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] '
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
							className='animate-star mx-1 lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] '
							fill='gray'
						/>
						<Star
							className='animate-star mx-1 lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] '
							fill='gray'
						/>
						<Star
							className='animate-star mx-1 lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] '
							fill='gray'
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
