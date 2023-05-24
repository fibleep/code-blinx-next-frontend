import { fetchPageBlocks } from "@/app/lib/notion";
import { Render } from "@9gustin/react-notion-render";
import "@9gustin/react-notion-render/dist/index.css";
const Page = async ({ params }) => {
	const blocks = await fetchPageBlocks(params.id);
	return (
		<>
			<div className='flex flex-col items-center justify-center w-10/12 lg:w-6/12 mx-auto h-auto my-24 bg-gray-800 text-white p-5 rounded-lg'>
				<div className='flex flex-row justify-content-center p-5 rounded-lg'>
					<a
						href='/diary'
						className='text-2xl font-bold hover:text-accent cursor-pointer hover:scale-110 transform transition duration-500'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
							/>
						</svg>
					</a>
				</div>
				<Render
					blocks={blocks}
					mapImageUrl={(url) =>
						`https://www.notion.so/image/${encodeURIComponent(url)}?table=block&id=${
							params.id
						}&cache=v2`
					}
					emptyBlocks
					useStyles
				/>
			</div>
		</>
	);
};

export default Page;
