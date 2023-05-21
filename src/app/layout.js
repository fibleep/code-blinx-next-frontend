import { Inter } from "next/font/google";
import Header from "./components/nav/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Codeblinx",
	description: "Codeblinx is a mobile app that teaches you how to code.",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className='bg-background h-screen text-gray-400'>
				<Header></Header>
				{children}
			</body>
		</html>
	);
}
