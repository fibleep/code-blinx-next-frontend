"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Codeblinx from "../../public/codeblinx_logo.svg";
import Iphone from "../../public/iphone.png";
import languages from "./components/const/languages";
import useTypewriter from "./components/style/useTypewriter";
import Introduction from "./components/sections/Introduction";
import Features from "./components/sections/Features";
export default function Home() {
	const [langText, langColor] = useTypewriter(languages);
	return (
		<div className='mt-48'>
			<div className='text-4xl md:text-8xl text-gray-400 font-bold text-center h-screen'>
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
					<button className='text-accent font-bold p-5 text-3xl rounded-full mt-24 mx-auto disabled border-2 border-accent'>
						Soon...
					</button>
					<span className='text-sm text-gray-600 text-center mt-5'>
						* Available this summer on IOS and Android
					</span>
				</div>
			</div>
			<div className='flex justify-center flex-col'>
			<Introduction />
			<Features />
			</div>
		</div>
	);
}
