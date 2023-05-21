import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className='flex flex-row justify-between items-center p-3'>
			<ul className='flex flex-row justify-between w-full text-lg space-x-5'>
				<Link href='/'>
					<li className='hover:text-accent cursor-pointer hover:scale-110 transform transition duration-500'>
						Home
					</li>
				</Link>
				<Link href='/diary'>
					<li className='hover:text-accent cursor-pointer hover:scale-110 transform transition duration-500'>
						Diary
					</li>
				</Link>
				<Link href='/about'>
					<li className='hover:text-accent cursor-pointer hover:scale-110 transform transition duration-500'>
						About Me
					</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
