import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BackgroundBlur from "../style/BackgroundBlur";
const Notifications = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	const variants = {
		hidden: { opacity: 0, scale: 0.5 },
		show: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.8,
				delay: 0.5,
				ease: [0, 0.71, 0.2, 1.01],
			},
		},
	};
	return (
		<div className='flex flex-col h-screen mt-24 w-10/12 mx-auto'>
			<motion.div
				ref={ref}
				initial='hidden'
				animate={inView ? "show" : "hidden"}
				variants={variants}
				className='flex flex-col justify-center mx-auto mt-5'>
				<div className='bg-gradient-to-r from-secondary to-accent rounded-xl p-2 text-background text-xl flex flex-row space-x-12 w-10/12 mx-auto'>
					<span className='relative flex ms-0'>
						<span className='animate-ping absolute inline-flex w-5 h-5 rounded-full bg-green-600 opacity-75'></span>
						<span className='relative inline-flex rounded-full h-5 w-5 bg-green-500'></span>
					</span>
					<div className='flex flex-col justify-between text-sm'>
						<span className='text-lg font-bold'>Object Oriented Programming - Python</span>
						<span className='text-md text-muted'>
							In Python we can create classes and objects. Classes are like a blueprint for creating
							objects...
						</span>
					</div>
				</div>
			</motion.div>
			<div className='flex flex-col justify-center mx-auto mt-5 lg:w-6/12'>
				<span className='bg-clip-text bg-gradient-to-r from-tertiary to-secondary font-bold text-transparent text-4xl lg:text-6xl mt-5'>
					Notifications
				</span>
				<span className='text-xl lg:text-2xl text-gray-400 pr-2'>
					Personalized notifications let you keep learning throughout the day and make sure that
					your mind stays sharp.
				</span>
				<BackgroundBlur className='absolute right-10' />
			</div>
		</div>
	);
};

export default Notifications;
