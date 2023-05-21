"use client";
import { AiFillGithub } from "react-icons/ai";
import { GiPlasticDuck } from "react-icons/gi";
import { TfiLinkedin } from "react-icons/tfi";
const Index = () => {
	return (
		<div className='flex flex-col w-8/12 lg:w-5/12 mx-auto my-52 min-h-screen py-2 text-gray-400'>
			<h1 className='text-6xl font-bold'>Hello! I'm Filip</h1>
			<p className='mt-3 text-2xl'>
				I'm an Applied Computer Science student building things for fun.
			</p>
			<div className='flex flex-col'>
				<span className='mt-5 text-gray-400'>Check out my socials!</span>
				<div className='flex space-x-4'>
					<a
						href='https://github.com/fibleep'
						target='_blank'>
						<button className='bg-gray-400 text-background font-bold p-2 text-3xl rounded-lg hover:scale-110 transform transition duration-500 hover:shadow-md hover:shadow-gray-400 hover:text-background'>
							<AiFillGithub />
						</button>
					</a>
					<a
						href='https://www.linkedin.com/in/fifin/'
						target='_blank'>
						<button className='bg-blue-600 text-background font-bold p-2 text-3xl rounded-lg hover:scale-110 transform transition duration-500 hover:shadow-md hover:shadow-blue-600 hover:text-background'>
							<TfiLinkedin />
						</button>
					</a>
					<a
						href='https://www.fifinest.com/'
						target='_blank'>
						<button className='bg-red-400 text-background font-bold p-2 text-3xl rounded-lg hover:scale-110 transform transition duration-500 hover:shadow-md hover:shadow-red-400 hover:text-background'>
							<GiPlasticDuck />
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Index;
