import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Codeblinx from "../../../../public/codeblinx_logo.svg";
import Iphone from "../../../../public/iphone.png";

const Introduction = () => {
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
		<div className='flex justify-center flex-col md:flex-row lg:w-10/12 mx-auto h-screen'>
			<div className='flex flex-col'>
				<Image
					src={Iphone}
					alt='Iphone'
					width={1000}
					height={1000}
					className='mx-auto'
				/>
				<motion.div
					ref={ref}
					initial='hidden'
					animate={inView ? "show" : "hidden"}
					variants={variants}
					className='flex flex-col justify-center relative lg:-top-96 -top-52 mx-auto'>
					<Image
						src={Codeblinx}
						alt='Codeblinx'
						className='w-32 ml-2 lg:w-52 lg:h-42'
					/>
				</motion.div>
			</div>
			<div className='flex flex-col mx-auto mt-5 w-10/12'>
				<h1 className='text-2xl md:text-6xl text-gray-400 font-bold md:text-left'>
					<span>
						{" "}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-secondary'>
							One blink at a time.
						</span>
					</span>
				</h1>
				<span className='text-gray-400 text-left lg:text-3xl md:mt-24 md:w-6/12 mx-auto md:mx-0'>
					Latest documentation, concepts and tutorials for the most popular programming languages
					and frameworks. <strong> All in one place.</strong>
				</span>
			</div>
		</div>
	);
};

export default Introduction;
