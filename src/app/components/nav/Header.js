import React from 'react'
import Codeblinx from '/public/codeblinx_logo.svg'
import Image from 'next/image'
import Navbar from './Navbar'

const Header = () => {
    return (
		<header
			className='flex flex-col'
			style={{
				backgroundColor: "#170730",
				backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236760af' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
			}}>
			<div className='text-4xl md:text-7xl text-center text-gray-400 font-bold'>
				<div className='text-2xl md:text-4xl flex'>
					<Navbar />
				</div>
			</div>
		</header>
	);
}

export default Header