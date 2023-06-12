import Card from "../svg/Card";
import Heart from "../svg/Heart";
import Star from "../svg/Star";
import FeatureCard from "./FeatureCard";
const Features = () => {
	return (
		<>
			<div className='h-screen'/>
		<div className='flex justify-center flex-col md:flex-row mx-24 space-y-12 lg:space-y-0 lg:space-x-12 h-screen'>
			<FeatureCard
				image={
					<Heart
						className='animate-like lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] '
						fill='gray'
					/>
				}
				text='BOOKMARK'
			/>
			<FeatureCard
				image={
					<Card
					className='animate-card border-4 border-primary/20 rounded-lg bg-slate-900 lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] '
					fill='primary'
					/>
				}
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
				text='MASTER'
			/>
		</div>
				</>
	);
};

export default Features;
