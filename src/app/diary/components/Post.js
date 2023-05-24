import "@9gustin/react-notion-render/dist/index.css";
import Link from "next/link";

const Post = async ({ post, index }) => {
	const id = post.id;
	const date = new Date(post.last_edited_time);
	const isInLast24Hours = (date) => {
		const now = new Date();
		const diff = now - date;
		return diff < 24 * 60 * 60 * 1000;
	};
	const delay = {
		animationDelay: `${index * 0.2}s`,
	};
	const test = isInLast24Hours(date);
	return (
		<Link
			href={`/diary/${id}`}
			style={delay}
			className=' animate-slide-in bg-gradient-to-r from-secondary to-accent rounded-xl p-5 text-background text-xl w-full cursor-pointer hover:scale-110 transform transition duration-500'>
			<div className='flex flex-row justify-between items-center'>
				<h1 className='text-2xl lg:text-4xl font-bold'>
					{post.properties.Name.title[0].plain_text}
				</h1>
				<div className='flex flex-row justify-between items-center space-x-5'>
					{isInLast24Hours(date) && (
						<span className='relative flex ms-0'>
							<span className='animate-ping absolute inline-flex w-5 h-5 rounded-full bg-green-600 opacity-75'></span>
							<span className='relative inline-flex rounded-full h-5 w-5 bg-green-500'></span>
						</span>
					)}
					<h1 className='text-xl lg:text-2xl text-gray-800'>{date.toLocaleDateString()}</h1>
				</div>
			</div>
			<div className='flex flex-col'></div>
		</Link>
	);
};

export default Post;
