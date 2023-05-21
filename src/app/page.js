"use client";
import Link from "next/link";
import languages from "./components/const/languages";
import Header from "./components/nav/Header";
import useTypewriter from "./components/style/useTypewriter";
import Image from "next/image";
import Iphone from "../../public/iphone.png";
import Codeblinx from "../../public/codeblinx_logo.svg";
export default function Home() {
	const [langText, langColor] = useTypewriter(languages);
	return (
		<div className=" space-y-48 lg:space-y-96 mt-48">
				<div className='text-4xl md:text-8xl text-gray-400 font-bold text-center'>
					<h1>
						The future,{" "}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-tertiary to-secondary animate-pulse'>
							in your hands.{" "}
						</span>
					</h1>

					<div className='text-2xl md:text-4xl text-gray-400 font-bold'>
						<h2 className='text-2xl md:text-6xl mt-5'>
							Learn{" "}
							<span
								className='blinking-cursor'
								style={{
									color: langColor,
								}}>
								{langText}
							</span>
						</h2>
					</div>
					<div className='flex flex-col'>
						<button className='bg-accent text-background font-bold p-5 text-3xl rounded-lg mt-24 shadow-lg shadow-accent mx-auto hover:scale-110 transform transition duration-500 hover:bg-secondary hover:shadow-secondary hover:text-background'>
							<a
								href='https://youtu.be/zsBIuaBO0Qo'
								target='_blank'>
								Oooh
							</a>
						</button>
						<span className='text-sm text-gray-600 text-center mt-5'>
							* Available this summer on IOS and Android
						</span>
					</div>
				</div>
				<div className='flex justify-center flex-col'>
					<div className='flex flex-col justify-center mb-52'>
						<h1 className='text-2xl md:text-4xl text-gray-400 font-bold text-center'>
							<span> In the meantime...</span>
						</h1>
						<div className='flex justify-center space-x-5'>
							<button className='bg-accent text-background font-bold p-5 text-xl rounded-lg mt-24 shadow-lg shadow-accent hover:scale-110 transform transition duration-500 hover:bg-secondary hover:shadow-secondary hover:text-background'>
								<a
									href='https://www.youtube.com/channel/UCQ1kxW0XGqVx7y9hXf5Qz3g'
									target='_blank'>
									Dev Diary
								</a>
							</button>
							<button className='bg-accent text-background font-bold p-5 text-xl rounded-lg mt-24 shadow-lg shadow-accent hover:scale-110 transform transition duration-500 hover:bg-secondary hover:shadow-secondary hover:text-background'>
								<Link href="/about">About Me</Link>
							</button>
						</div>
					</div>
					<div className='flex flex-col justify-center'>
						<h1 className='text-2xl md:text-4xl text-gray-400 font-bold text-center'>
							<span> learn // understand // create</span>
						</h1>
					</div>
					<div className='flex flex-col justify-center'>
						<Image
							src={Iphone}
							alt='Iphone'
							width={1000}
							height={1000}
							className='mx-auto'
						/>
						<Image
							src={Codeblinx}
							alt='Codeblinx'
							width={200}
							height={200}
							className='relative -top-96 mx-auto'
						/>
					</div>
				</div>
		</div>
	);
}
